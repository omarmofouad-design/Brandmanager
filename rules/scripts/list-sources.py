#!/usr/bin/env python3
"""
list-sources.py — maintenance report over /rules/sources.yaml

Purpose (per the project's MAINTENANCE requirement): list every source with its
access date so the register can be re-verified against newer guideline
versions, and surface the oldest source date for display in the tool's UI.

Usage:
    python3 rules/scripts/list-sources.py                 # human-readable report
    python3 rules/scripts/list-sources.py --json          # machine-readable, for the UI
    python3 rules/scripts/list-sources.py --stale 2       # exit 1 if any source is >2 years old
    python3 rules/scripts/list-sources.py --file PATH     # non-default register location

Two different "oldest" dates are reported, and they mean different things:

  oldest_source_year   The publication year of the oldest document the tool
                       relies on. This is the staleness signal — it answers
                       "how old is the oldest thing we are standing on?" This
                       is the one to surface in the UI.

  oldest_access_date   The least recently checked entry. This answers "when
                       did we last confirm any of this?" — a re-verification
                       signal, not a staleness signal.

Exit codes:
    0  report produced, nothing over the staleness threshold
    1  --stale threshold exceeded (or a register problem was found)
    2  register missing or unparseable
"""

from __future__ import annotations

import argparse
import datetime as _dt
import json
import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:  # pragma: no cover
    sys.stderr.write(
        "error: PyYAML is required.\n"
        "       pip install pyyaml\n"
    )
    raise SystemExit(2)


DEFAULT_REGISTER = Path(__file__).resolve().parent.parent / "sources.yaml"

REQUIRED_FIELDS = (
    "id",
    "title",
    "publisher",
    "version_or_year",
    "url_or_doi",
    "access_date",
    "access_method",
    "reliability",
)

VALID_ACCESS_METHODS = {"web_fetch", "user_supplied", "not_obtained"}
VALID_RELIABILITY = {
    "primary_guideline",
    "primary_literature",
    "regulatory_label",
    "secondary_unverified",
}

YEAR_RE = re.compile(r"\b(19|20)\d{2}\b")


def extract_year(version_or_year: str) -> int | None:
    """Pull a publication year out of the free-text version_or_year field.

    The field is deliberately free text (NCCN versions, label revisions and
    journal citations do not share a format), so this is best-effort. An entry
    with no recoverable year is reported as unknown rather than guessed at.
    """
    if not isinstance(version_or_year, str):
        return None
    match = YEAR_RE.search(version_or_year)
    return int(match.group(0)) if match else None


def parse_date(value) -> _dt.date | None:
    if isinstance(value, _dt.date):
        return value
    if isinstance(value, str):
        try:
            return _dt.date.fromisoformat(value.strip())
        except ValueError:
            return None
    return None


def load_register(path: Path) -> dict:
    if not path.exists():
        sys.stderr.write(f"error: register not found: {path}\n")
        raise SystemExit(2)
    try:
        data = yaml.safe_load(path.read_text(encoding="utf-8"))
    except yaml.YAMLError as exc:
        sys.stderr.write(f"error: could not parse {path}: {exc}\n")
        raise SystemExit(2)
    if not isinstance(data, dict) or "sources" not in data:
        sys.stderr.write(f"error: {path} has no top-level 'sources' key\n")
        raise SystemExit(2)
    return data


def audit(data: dict) -> tuple[list[dict], list[str]]:
    """Return (rows, problems). Problems are register-integrity issues."""
    rows: list[dict] = []
    problems: list[str] = []
    seen_ids: set[str] = set()

    for index, entry in enumerate(data.get("sources") or []):
        if not isinstance(entry, dict):
            problems.append(f"sources[{index}] is not a mapping")
            continue

        sid = entry.get("id", f"<no id at index {index}>")

        for field in REQUIRED_FIELDS:
            if not entry.get(field):
                problems.append(f"{sid}: missing required field '{field}'")

        if sid in seen_ids:
            problems.append(f"{sid}: duplicate source id")
        seen_ids.add(sid)

        method = entry.get("access_method")
        if method and method not in VALID_ACCESS_METHODS:
            problems.append(f"{sid}: invalid access_method '{method}'")

        reliability = entry.get("reliability")
        if reliability and reliability not in VALID_RELIABILITY:
            problems.append(f"{sid}: invalid reliability '{reliability}'")

        access_date = parse_date(entry.get("access_date"))
        if entry.get("access_date") and access_date is None:
            problems.append(f"{sid}: access_date is not an ISO date")

        year = extract_year(entry.get("version_or_year", ""))
        if year is None:
            problems.append(f"{sid}: no publication year recoverable from version_or_year")

        rows.append(
            {
                "id": sid,
                "title": " ".join(str(entry.get("title", "")).split()),
                "publisher": " ".join(str(entry.get("publisher", "")).split()),
                "version_or_year": " ".join(str(entry.get("version_or_year", "")).split()),
                "year": year,
                "url_or_doi": entry.get("url_or_doi", ""),
                "access_date": access_date.isoformat() if access_date else None,
                "access_method": method,
                "reliability": reliability,
                "verified": entry.get("verified"),
                "usable_for_rules": (
                    method in {"web_fetch", "user_supplied"}
                    and entry.get("verified") == "content_read"
                ),
            }
        )

    return rows, problems


def summarise(data: dict, rows: list[dict], problems: list[str]) -> dict:
    years = [r["year"] for r in rows if r["year"] is not None]
    access_dates = [r["access_date"] for r in rows if r["access_date"]]
    today = _dt.date.today()

    oldest_year = min(years) if years else None
    oldest_entries = [r["id"] for r in rows if r["year"] == oldest_year] if years else []

    return {
        "register_version": data.get("register_version"),
        "compiled_on": data.get("compiled_on"),
        "confirmed_by_owner": bool(data.get("confirmed_by_owner")),
        "generated_on": today.isoformat(),
        "source_count": len(rows),
        # The UI staleness signal.
        "oldest_source_year": oldest_year,
        "oldest_source_ids": oldest_entries,
        "oldest_source_age_years": (today.year - oldest_year) if oldest_year else None,
        # The re-verification signal.
        "oldest_access_date": min(access_dates) if access_dates else None,
        "newest_access_date": max(access_dates) if access_dates else None,
        "counts_by_access_method": _tally(rows, "access_method"),
        "counts_by_reliability": _tally(rows, "reliability"),
        "usable_for_rules": sum(1 for r in rows if r["usable_for_rules"]),
        "not_obtained": sum(1 for r in rows if r["access_method"] == "not_obtained"),
        "problems": problems,
    }


def _tally(rows: list[dict], key: str) -> dict:
    out: dict[str, int] = {}
    for row in rows:
        out[str(row.get(key))] = out.get(str(row.get(key)), 0) + 1
    return dict(sorted(out.items()))


def print_report(summary: dict, rows: list[dict]) -> None:
    line = "-" * 78
    print(line)
    print("CLL rules — source register report")
    print(line)
    print(f"register version : {summary['register_version']}")
    print(f"compiled on      : {summary['compiled_on']}")
    print(f"generated on     : {summary['generated_on']}")
    print(f"owner confirmed  : {'yes' if summary['confirmed_by_owner'] else 'NO — Phase 1 is gated'}")
    print(f"sources          : {summary['source_count']}")
    print()

    for row in sorted(rows, key=lambda r: (r["year"] or 0)):
        flag = "OK " if row["usable_for_rules"] else "!! "
        year = row["year"] if row["year"] is not None else "????"
        print(f"{flag}{row['id']}")
        print(f"     year {year}   accessed {row['access_date'] or 'n/a'}   "
              f"{row['access_method']}   {row['reliability']}"
              + (f"   verified={row['verified']}" if row.get("verified") else ""))
        title = row["title"]
        print(f"     {title[:70] + '...' if len(title) > 70 else title}")
        print(f"     {row['url_or_doi']}")
        print()

    print(line)
    print("SUMMARY")
    print(line)
    print(f"oldest source year   : {summary['oldest_source_year']} "
          f"({summary['oldest_source_age_years']} years old) "
          f"— {', '.join(summary['oldest_source_ids'])}")
    print(f"oldest access date   : {summary['oldest_access_date']}")
    print(f"newest access date   : {summary['newest_access_date']}")
    print(f"by access method     : {summary['counts_by_access_method']}")
    print(f"by reliability       : {summary['counts_by_reliability']}")
    print()
    print(f"usable for rules     : {summary['usable_for_rules']} of {summary['source_count']}")
    print(f"not obtained         : {summary['not_obtained']}")

    if summary["usable_for_rules"] == 0:
        print()
        print("*** NO SOURCE IN THIS REGISTER IS YET USABLE FOR RULE AUTHORING. ***")
        print("*** A source becomes usable only when it has been supplied or")
        print("*** fetched AND read (access_method != not_obtained AND")
        print("*** verified == content_read). See ACCESS-REQUESTS.md.")

    if summary["problems"]:
        print()
        print(f"register problems ({len(summary['problems'])}):")
        for problem in summary["problems"]:
            print(f"  - {problem}")


def main() -> int:
    parser = argparse.ArgumentParser(
        description="List every source in the CLL rules register with its access date, "
                    "and report the oldest source date for UI display."
    )
    parser.add_argument("--file", type=Path, default=DEFAULT_REGISTER,
                        help="path to sources.yaml (default: rules/sources.yaml)")
    parser.add_argument("--json", action="store_true",
                        help="emit JSON (summary + rows) for the UI instead of a report")
    parser.add_argument("--stale", type=int, metavar="YEARS", default=None,
                        help="exit non-zero if the oldest source is older than YEARS")
    args = parser.parse_args()

    data = load_register(args.file)
    rows, problems = audit(data)
    summary = summarise(data, rows, problems)

    if args.json:
        json.dump({"summary": summary, "sources": rows}, sys.stdout, indent=2)
        sys.stdout.write("\n")
    else:
        print_report(summary, rows)

    if problems:
        return 1
    if args.stale is not None and summary["oldest_source_age_years"] is not None:
        if summary["oldest_source_age_years"] > args.stale:
            sys.stderr.write(
                f"\nstale: oldest source is {summary['oldest_source_age_years']} years old "
                f"(threshold {args.stale})\n"
            )
            return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
