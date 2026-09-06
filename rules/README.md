# /rules — CLL decision-support tool, source layer

**Phase 0 (sourcing) output. Phase 1 (rule authoring) has not started and is
gated on owner confirmation of the source register.**

## Read in this order

| File | What it is |
|---|---|
| `GAPS.md` | Step 0.1. Pre-search self-audit of every clinical input the tool needs, written **before** any searching, classifying each as held / needs-verification / not-held. |
| `sources.yaml` | Step 0.4. The source register. Every rule must reference a source id from here. |
| `ACCESS-REQUESTS.md` | Step 0.3. What could not be reached, exactly what is needed from each document, and the consolidated batch of other requests. |
| `CONFLICTS.md` | Step 0.5. Candidate conflicts between sources, and areas expected to be uncovered by any guideline. |
| `CHANGELOG.md` | Change history for the register and rules. |
| `scripts/list-sources.py` | Maintenance report: every source with its access date, plus the oldest source year for UI display. |

## The rule that governs everything here

A rule may not exist without a source id, and a source id is not usable until
the document behind it has been **read** — not merely identified.

In the register this is the difference between:

```yaml
access_method: not_obtained     # identified only — UNUSABLE
verified: bibliographic_only
```

and:

```yaml
access_method: user_supplied    # or web_fetch
verified: content_read          # USABLE
```

Right now **every one of the 23 sources is in the first state**, because
network egress in the build environment permits GitHub and nothing else. No
document was retrieved. See `ACCESS-REQUESTS.md`.

## Checking state

```bash
python3 rules/scripts/list-sources.py            # report
python3 rules/scripts/list-sources.py --json     # for the UI
python3 rules/scripts/list-sources.py --stale 3  # CI: fail if oldest source > 3 years
```

The report ends with `usable for rules: N of M`. While N is 0, no rules file
may be created.

The script currently exits 1 on three real defects — the zanubrutinib,
ibrutinib and obinutuzumab US label revisions are unknown. Leave it red until
they are established.

## For the UI

`--json` emits `summary.oldest_source_year`, `summary.oldest_source_ids` and
`summary.oldest_source_age_years`. Surface the oldest source year in the
interface, per the maintenance requirement. As of this writing that is **2018**
(`iwcll-2018`), which is eight years old and is the tool's presumptive
authority for treatment-initiation criteria — whether the 2026 EHA guideline
changes that is conflict C-06 and is unresolved.

## Copyright posture

Thresholds, criteria and numeric values are to be stated as facts in concise
original wording, each with a citation. Guideline prose, tables and algorithm
diagrams are not to be reproduced in rules files or in the UI. The tool cites
and points.
