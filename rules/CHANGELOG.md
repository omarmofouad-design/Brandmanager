# Changelog — CLL rules and source register

Every change to `sources.yaml` or to any rules file is recorded here. Entries
are newest first. A change that alters a clinical threshold must name the
source id, the document version it came from, and what the previous value was.

Format: `[YYYY-MM-DD] TYPE — summary`, where TYPE is one of
`REGISTER` (source register), `RULES` (rule content), `TOOLING`, `DOCS`.

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
