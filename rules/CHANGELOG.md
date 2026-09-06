# Changelog — CLL rules and source register

Every change to `sources.yaml` or to any rules file is recorded here. Entries
are newest first. A change that alters a clinical threshold must name the
source id, the document version it came from, and what the previous value was.

Format: `[YYYY-MM-DD] TYPE — summary`, where TYPE is one of
`REGISTER` (source register), `RULES` (rule content), `TOOLING`, `DOCS`.

---

## [2026-09-06] Phase 0 — Drive sweep, trial identification, prototype 1

### REGISTER — `sources.yaml` at `0.2.0-provisional`

**38 sources (was 23). One is now readable (was zero).**

- **`oman-royal-hospital-2026` — first document actually read.** CLL protocols,
  Royal Hospital, Ministry of Health Oman, doc control `MoH/DGQAC/P&P/002`,
  approved 2026-02-11. Found in the project owner's Google Drive.
  `access_method: user_supplied`, `verified: content_read`.
  Recorded with explicit `usable_for` / `not_usable_for` lists: it is an
  institutional protocol that restates NCCN/ESMO, is draft-quality (unfilled
  effective dates, an unfinished editing note in the body), and its content
  and reference list disagree on guideline versions. Usable for Oman-specific
  operational facts; not usable for any clinical threshold.
- **14 pivotal trials promoted** from `pending_identification` into `sources`
  with full citations — AMPLIFY, CLL14 (primary + 6-year), ELEVATE-TN, SEQUOIA,
  ALPINE, ELEVATE-RR, MURANO, CAPTIVATE, BRUIN, BRUIN CLL-321, TRANSCEND
  CLL 004, RESONATE-2, CLL12. All unread. `pending_identification.pivotal_trials`
  is now RESOLVED; two items stay open (ELEVATE-RR DOI, EVOLVE readout status).
- **New `excluded_materials` block.** 7 manufacturer-produced items found in
  the Drive, recorded with reasons rather than dropped silently.

### RULES — still none

`list-sources.py` reports **1 of 38 usable**. One readable source, and it is
explicitly not usable for thresholds, so no rule may yet be written.

### DOCS

- **`PROCUREMENT.md`** — new, and now the primary request document. 37
  documents with exact citations and per-section requirements, 5 categories of
  regional data, 4 decisions. Each entry tagged by access route; notes that
  opening egress to five hosts would clear 16 without owner effort.
- `CONFLICTS.md` gains **C-07** (independence: the sources nearest to hand are
  the ones that cannot be used).

### TOOLING — staleness metric corrected

Adding trial literature exposed a flaw: "oldest source" jumped to 2015
(RESONATE-2), which is not staleness — a landmark trial is history and is
never reissued, whereas a 2015 *guideline* would be a live problem. The script
now reports `oldest_guidance_year` (primary_guideline + regulatory_label only)
as the UI signal, keeping `oldest_source_year` as context. Guidance floor is
back to **2018 · `iwcll-2018`**.

### PROTOTYPE — first build

`prototype/index.html`, published as an Artifact. A working shell: real
inputs, real decision spine (15 nodes), real citation paths, and every
clinical threshold visibly absent with the exact document and section named in
its place. Nodes 7 and 13 move to a new `partial` state — the Oman protocol
answers the surveillance cadence and the Oman assay/drug availability
questions, and nothing else does.

### Findings

- **CLL12** (`cll12-blood-2022`) randomised asymptomatic early-stage patients
  *at high risk of progression* to ibrutinib or placebo. Reporting indicates
  EFS improved but **OS did not**, and that watch-and-wait remains standard
  regardless of genetic risk. Gap B8/D10 was a declared blank; it is now a
  named, unread, high-priority paper that determines a load-bearing tool
  behaviour.
- The Oman protocol supplies the first regional operational facts in the
  project: TP53 sequencing is **sent abroad**, MRD is "if available", drugs
  are subject to hospital pharmacy availability. This makes node 4 conditional
  and may make node 9's MRD-guided option unreachable in Oman.

---

## [2026-09-06] Phase 0 — initial sourcing pass

### REGISTER — `sources.yaml` created at `0.1.0-provisional`

23 sources identified. **All 23 carry `access_method: not_obtained` and
`verified: bibliographic_only`.** No document was retrieved: this session's
egress policy blocks outbound HTTPS to every external host except GitHub, and
every fetch was refused at the proxy (HTTP 403 on CONNECT) before reaching any
paywall. Bibliographic identity was established from keyword-search metadata,
which is adequate to identify a document and not adequate to state its
contents.

Breakdown: 10 primary guidelines, 10 regulatory labels, 3 primary literature.

### RULES — none

No rules file exists and none may be written. Under the project's sourcing
rules a rule requires a source id, and a source id is only usable once the
document behind it has been read. `list-sources.py` currently reports
**0 of 23 sources usable for rule authoring**.

### DOCS

- `GAPS.md` — pre-search self-audit, written before any searching. 93 clinical
  inputs classified: 1 held with confidence, 52 held but needing verification,
  40 not held. No numeric threshold was claimed from memory.
- `ACCESS-REQUESTS.md` — the blocked-source report and the consolidated
  request batch (documents, regional formulary and access data, scope
  decisions).
- `CONFLICTS.md` — six candidate conflicts (C-01 … C-06) and six areas
  provisionally expected to be uncovered by any guideline.

### TOOLING

- `scripts/list-sources.py` — lists every source with its access date, reports
  the oldest source year for UI display, validates the register schema, and
  counts how many sources are actually usable for rule authoring.
  `--json` for the UI, `--stale N` for CI.
  Currently exits 1 on three genuine register defects: the zanubrutinib,
  ibrutinib and obinutuzumab label revisions are unknown. That exit code is
  correct and should stay red until those revisions are established.

### Findings that changed the plan

Recorded because each is a case where building from memory would have produced
a wrong rule:

1. **The European guideline moved from ESMO to EHA.** `eha-2026` (HemaSphere
   10(6):e70403, 2026-06-10) is described as the first EHA-authored edition,
   with EHA solely responsible for subsequent annual editions. The ESMO CLL
   line is treated as superseded in the register. This document postdates the
   assistant's training cutoff.
2. **Acalabrutinib + venetoclax** was approved by FDA on 2026-02-19 and by the
   EC on 2025-06-06, the EU authorisation apparently including an
   obinutuzumab-containing variant that the US approval summary does not
   mention. Logged as conflict C-02.
3. **Pirtobrutinib's indication appears to have broadened** at a traditional
   approval reported as 2025-12-03. Prior-therapy requirements in the R/R
   branch must be read from the label, not assumed.
4. **ERIC withdrew the VAF cut-off** for TP53 mutation reporting in its 2024
   update. The tool must not hard-code a VAF threshold.
5. **NCCN v2.2026 reportedly removed** its venetoclax TLS prophylaxis table
   and its response-definitions table. If confirmed, TLS logic becomes
   single-sourced against the venetoclax label. Logged as conflict C-03.
6. **CLL17** (NEJM 2025, PMID 41358601) reads out on fixed-duration versus
   continuous first-line therapy and may be the most consequential input to
   the first-line logic. Identified, unread.

### Gate

Phase 1 is blocked. It stays blocked until the project owner confirms this
register and the Priority 1 documents in `ACCESS-REQUESTS.md` are supplied or
egress is opened for them.
