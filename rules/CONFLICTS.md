# Step 0.5 — Conflicts and Gaps Register

Status: **provisional.** Every conflict below is a *candidate*, identified
from source metadata only. None can be adjudicated until the documents are
read, and adjudication is not the goal anyway — per the brief, disagreements
get recorded and surfaced in the tool, not silently resolved.

Conflict IDs are stable. Rules that touch a conflicted area must reference the
conflict ID as well as their source IDs, so the UI can surface the
disagreement at the point of use.

---

## C-01 — Is fixed-duration ibrutinib-venetoclax the first-line default in the Gulf?

| Position | Source | What it appears to say |
|---|---|---|
| Directive regional preference | `gulf-fixed-duration-2025` | Ibrutinib-venetoclax should be the first choice in first line for **all fit patients in the region, regardless of age** |
| Option set, not a ranking | `eha-2026`, `nccn-cll-current`, `bsh-2025` | Expected to present several first-line options with selection driven by patient factors, not a single regional default — **unverified, documents unread** |

**Why it matters.** This is the difference between a tool that outputs one
recommended regimen and a tool that outputs a cited option set. It is also the
conflict most likely to be *right* on regional grounds — the position statement
argues from a younger Arab patient demographic and from
convenience/cost/logistics, which are legitimate local factors that
international guidelines do not weigh.

**Complication.** `gulf-fixed-duration-2025` (Feb 2025) predates both the
CLL17 readout (`cll17-nejm-2025`) and the 2026 acalabrutinib-venetoclax
approvals. Its recommendation may be directionally reinforced by CLL17 (which
reportedly supports fixed duration) while its *specific* choice of
ibrutinib-venetoclax may have been overtaken by newer fixed-duration options.
Do not treat "fixed duration is favoured" and "ibrutinib-venetoclax
specifically" as the same claim.

**Handling.** Surface both. Do not let the regional position statement
override an international guideline on a clinical threshold; do let it stand
as a documented regional preference on regimen *selection*, clearly labelled
as a position statement with its date.

**Blocked on.** Reading `gulf-fixed-duration-2025`, `eha-2026`,
`nccn-cll-current`, `bsh-2025`.

---

## C-02 — US and EU approvals of acalabrutinib-venetoclax appear to differ

| Jurisdiction | Source | Reported position |
|---|---|---|
| EU | `ema-calquence-smpc`, `ema-venclyxto-smpc` | EC authorisation 2025-06-06 for fixed-duration acalabrutinib + venetoclax **with or without obinutuzumab**, previously untreated CLL. Further EC label expansion 2026-05-29. |
| US | `fda-approval-acala-ven-2026`, `fda-acalabrutinib-uspi` | FDA approval 2026-02-19 for acalabrutinib + venetoclax, previously untreated CLL/SLL. The obinutuzumab-containing arm is **not mentioned** in the approval summary surfaced. |

**Why it matters.** If the EU permits a triplet that the US does not, the tool
cannot present "acalabrutinib-venetoclax ± obinutuzumab" as one undifferentiated
option. Gulf regulators commonly align with EMA, so the EU position may be the
more locally relevant one — but that is an assumption, not a finding, until
regional approval status is supplied.

**Also unresolved.** The AMPLIFY population reportedly **excluded**
del(17p)/TP53-mutated disease. If the approved indication carries that
restriction, the tool's TP53 branch must exclude this regimen. If the
indication is broader than the trial population, that itself is worth
surfacing. Unverified either way.

**Handling.** Model approval status per jurisdiction as a first-class field,
not a footnote. Do not merge US and EU indications into one string.

**Blocked on.** Both SmPCs, the US PI, and the FDA approval notice.

---

## C-03 — Where does authority for TLS prophylaxis now sit?

Search metadata reports that NCCN v2.2026 **removed** the "Venetoclax:
Recommended TLS Prophylaxis and Monitoring Based on Tumor Burden" table and
the "Response Definitions After Treatment" table.

**If confirmed**, then:
- TLS risk stratification, hydration, anti-hyperuricaemic prophylaxis and the
  laboratory monitoring schedule have a **single** source of record — the
  venetoclax label (`fda-venetoclax-uspi`) — with no independent guideline
  cross-check.
- Response assessment falls back to `iwcll-2018`, an eight-year-old document,
  unless `eha-2026` restates it.

This is not a disagreement between sources so much as a **loss of
redundancy**, and it is arguably more dangerous than a disagreement: a
single-sourced safety rule has nothing to catch a transcription error. The
tool should say plainly, at the point of use, that its TLS content is
label-derived and single-sourced.

**Blocked on.** `nccn-cll-current` (to confirm the removal), and
`fda-venetoclax-uspi` (which becomes load-bearing if it is confirmed).

---

## C-04 — MRD-guided treatment duration: endorsed, or trial-only?

| Signal | Source | Reported position |
|---|---|---|
| NCCN now classifies regimens as fixed-duration **vs MRD-guided** | `nccn-cll-current` | Implies MRD-guided duration is a recognised category |
| ESMO 2024 interim update covered "new data on MRD-driven treatment" | `esmo-2024-interim` (superseded) | Implies it was under active consideration |
| Position of `eha-2026` and `bsh-2025` | unread | Unknown |

Pre-search, this was flagged as gap E5 — whether MRD may guide stopping
outside a trial was contested at my cutoff. The signals above suggest the
position has moved, but in which direction and how far is unestablished.

**Handling.** If guidelines diverge, the tool must not offer MRD-guided
stopping as though it were settled. Record both positions.

**Blocked on.** `eha-2026`, `nccn-cll-current`, `bsh-2025`.

---

## C-05 — Does chemoimmunotherapy retain a role, and does the answer change regionally?

Search metadata attributed to `bsh-2025` a position that targeted agents have
superseded chemoimmunotherapy, which is **no longer recommended except where
targeted agents are unavailable or contraindicated**.

That carve-out is precisely the situation that may obtain in parts of the
region on access or cost grounds. So the clinically correct answer and the
locally actionable answer may differ — which is a conflict the tool must
surface rather than resolve, and it cannot even be characterised until the
formulary and access information requested in `ACCESS-REQUESTS.md` arrives.

**Blocked on.** `bsh-2025`, `eha-2026`, `nccn-cll-current`, plus regional
formulary/access data (none of which exists in the register yet).

---

## C-06 — Which document governs the decision to *start* treatment?

`iwcll-2018` is the classical authority for active-disease criteria. It is now
eight years old. `eha-2026` is described as covering management "from the
initial diagnosis (including active surveillance) to treatment need".

Either EHA 2026 defers to the iwCLL criteria, restates them unchanged,
restates them with amendments, or replaces them. **All four are possible and
the difference is material** — the initiation criteria are the tool's entry
point, and if EHA has amended a threshold, building against iwCLL 2018 would
propagate a stale number through every downstream branch.

Recorded as a conflict rather than a gap because two candidate authorities now
exist for the same decision.

**Blocked on.** `eha-2026` and `iwcll-2018`, read side by side.

---

## Gaps where no guideline may cover the situation

Per the brief, these are to be left **unhandled** rather than filled by
inference. Carried forward from `GAPS.md`:

| Gap | Area | Why it may be genuinely uncovered |
|---|---|---|
| F11 | Choosing between a fixed-duration and a continuous option for the same eligible patient | Guidelines may deliberately leave this to shared decision-making. If so, the tool presents both with their trade-offs and makes no recommendation. |
| D11 | Monitoring cadence during watch-and-wait | May be deliberately unspecified. |
| H4 | Treatment breaks/holidays on continuous agents | Likely no guideline position. |
| G7 | Re-treatment interval after a fixed-duration regimen | Discussed in the literature; may lack a guideline threshold. |
| J9 | Cardio-oncology referral threshold | May not be defined anywhere. |
| N8 | Local availability of FISH / TP53 sequencing / MRD assays | Not a guideline question at all — an operational one. A TP53 branch is unactionable where the assay is unavailable, and only the project owner can answer this. |

Each of these must render in the tool as an explicit "not covered by the
sources in this register" state. An empty answer with a stated reason is a
correct output. A plausible-sounding inferred answer is not.
