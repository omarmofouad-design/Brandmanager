# Step 0.3 — What I could not reach, and exactly what I need

Date: 2026-09-06

## The blunt version

**I retrieved zero source documents.** Not "some were paywalled" — zero.

This session's network egress policy permits outbound HTTPS to GitHub and
nothing else. Every document-retrieval attempt was refused at the proxy with
HTTP 403 on CONNECT, before any paywall or login was ever reached. Keyword web
search still works and returns result metadata, which is how the register was
built.

So the failure mode is uniform and it is not about paywalls: **I can tell you
which document is current. I cannot tell you what it says.** Under this
project's own sourcing rules, search-result metadata is a secondary channel
and cannot be a source of record. That is why `sources.yaml` carries
`access_method: not_obtained` on every entry and why no rule file exists.

Hosts confirmed blocked (non-exhaustive, all tested this session):

```
annalsofoncology.org      esmo.org              ashpublications.org
pmc.ncbi.nlm.nih.gov      pubmed.ncbi.nlm.nih.gov   onlinelibrary.wiley.com
accessdata.fda.gov        ema.europa.eu         nccn.org
jnccn.org                 nejm.org              clinicaltrials.gov
b-s-h.org.uk              europepmc.org         doi.org
karger.com                nature.com            frontiersin.org
```

Some of these would additionally be paywalled or login-gated even with open
egress — NCCN (free registration), NEJM, Wiley, Karger, Nature. Others are
open access and would have been readable but for the egress policy: the
Frontiers papers, the PMC copies, the FDA labels, the EMA SmPCs.

### There are two ways out, and you should pick one

1. **Send me the documents** (upload, or paste into the repo). Precise list
   below. This works today.
2. **Open egress for a small allowlist** — `accessdata.fda.gov`,
   `ema.europa.eu`, `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`,
   `onlinelibrary.wiley.com`. That would let me fetch the open-access and
   regulatory material myself, leaving only NCCN and the subscription journals
   for you to supply. Cheaper for you, if it is within your control.

Whichever you choose, tell me which — it changes how much of the list below
you need to action.

---

## Priority 1 — blocking. No rule can be written without these.

### 1.1 EHA 2026 guideline — the whole document

**`eha-2026`** · Eichhorst et al., *EHA Guidelines on management of chronic
lymphocytic leukemia and Richter transformation*, HemaSphere 10(6):e70403,
published 2026-06-10, DOI 10.1002/hem3.70403.

I need the **complete text**, not sections — this is a document I did not know
existed and I cannot safely tell you which parts I need. It postdates my
training cutoff and, per its own framing, moves the European guideline from
ESMO to EHA. It is now the presumptive European source of record.

If you can only send parts, in this order: (a) indications for treatment /
treatment need; (b) the first-line algorithm including the TP53 branch;
(c) the relapsed/refractory algorithm; (d) diagnosis and staging;
(e) response assessment and MRD; (f) Richter transformation.

### 1.2 iwCLL 2018 — treatment indications and response criteria

**`iwcll-2018`** · Hallek et al., *Blood* 131(25):2745-2760, 2018,
DOI 10.1182/blood-2017-09-806398.

Specifically:
- The **"Indications for treatment"** section in full, including the numbered
  active-disease criteria list and every numeric threshold in it — the
  haemoglobin and platelet cut-points, the spleen and node size cut-points,
  the lymphocyte-increase percentage and time window, the lymphocyte doubling
  time and any count floor below which it should not be applied, and all four
  constitutional-symptom definitions with their numbers.
- The **response criteria table** (CR / CRi / PR / PR-L / SD / PD) in full.
- The **MRD** definition, including the threshold and the compartment
  (blood vs marrow) it is defined in.
- The **diagnostic criteria** section: the B-lymphocyte count threshold, and
  the CLL / SLL / MBL boundaries.
- The **Rai and Binet staging** definitions if the paper restates them.

### 1.3 NCCN CLL/SLL — current version

**`nccn-cll-current`** · Login-gated at nccn.org *and* egress-blocked.

- **First**: tell me the current version number and its release date. My
  register records v2.2026 (2025-12-22) as the latest confirmed, but NCCN
  ships several versions a year and I cannot check whether v3 or v4.2026 now
  exists.
- Then, from that version, these specific pages:
  - The **first-line therapy algorithm** pages, both the CLL/SLL **without**
    del(17p)/TP53 mutation branch and the **del(17p)/TP53 mutation** branch.
  - The **relapsed/refractory therapy algorithm** pages, same two branches.
  - The page(s) where regimens are classified **time-limited vs continuous**
    and **fixed-duration vs MRD-guided** (reported as new in v2.2026).
  - **Confirmation of a deletion**: whether the *"Venetoclax: Recommended TLS
    Prophylaxis and Monitoring Based on Tumor Burden"* table and the
    *"Response Definitions After Treatment for CLL/SLL"* table are still
    present. If they are gone, tell me what if anything replaced them and
    where the guideline now points. This determines whether conflict C-03 is
    real.
  - The **workup / diagnostic evaluation** page.
  - The **supportive care** page (infection prophylaxis, vaccination,
    hepatitis B screening).

### 1.4 Venetoclax US label — the TLS content, complete

**`fda-venetoclax-uspi`** · VENCLEXTA, NDA 208573. Latest revision surfaced
was document `208573s032lbl.pdf` (2026); confirm the current one.

This is the highest-stakes single document in the project. I need the
**complete label**, and within it specifically:

- **Section 2** in full: the CLL/SLL 5-week ramp-up schedule with all doses;
  the **TLS risk-assessment table** showing how tumour burden (absolute
  lymphocyte count and largest lymph node diameter) and renal function combine
  into risk tiers — **I need the table's own structure, not a summary of it**,
  because I do not confidently hold how the two axes combine and getting that
  wrong is a patient-safety error; the prophylaxis, hydration and
  anti-hyperuricaemic requirements per tier; the **laboratory monitoring
  schedule** per tier including the post-dose timepoints and the
  inpatient/outpatient setting rules; and the dose-modification rules for an
  interrupted ramp-up.
- **Section 7** in full: CYP3A inhibitor and inducer interactions with the
  **specific dose reductions** required during ramp-up and at steady state,
  and the P-gp content.
- **Section 8**: renal impairment, hepatic impairment (with the Child-Pugh
  bands), pregnancy and lactation.
- Whichever section states which **creatinine clearance equation** the renal
  thresholds are written in.

---

## Priority 2 — needed before first-line and relapsed rules are complete

### 2.1 BSH 2025 treatment guideline

**`bsh-2025`** · Br J Haematol 207(6):2296-2313, 2025, DOI 10.1111/bjh.70100.

Needed: the **treatment recommendation tables/algorithms** for first line and
for relapse; the section on **choosing between fixed-duration and continuous**
therapy; the stated position on **chemoimmunotherapy's remaining role** and
its exact carve-out wording (this drives conflict C-05); and the **MRD**
section if present (conflict C-04).

Also: **does BSH have a separate current CLL diagnosis/investigation
guideline?** This one is treatment-only by its title. If a companion document
exists, I need its identity.

### 2.2 The other five drug labels

For each, the **complete current US PI** — and please confirm the revision
date, because a label read at the wrong revision is worse than no label:

| Agent | Brand | What I specifically need beyond the whole label |
|---|---|---|
| Acalabrutinib | CALQUENCE | Indications (incl. the 2026-02-19 venetoclax combination and whether it carries a TP53/del(17p) restriction); the fixed-duration schedule; **the acid-reducing-agent interaction for BOTH the tablet and the capsule** — I must not treat the two formulations as one drug |
| Zanubrutinib | BRUKINSA | Dose options and schedule; organ-impairment adjustment; cardiac warnings |
| Ibrutinib | IMBRUVICA | Cardiac warnings in current wording (atrial **and** ventricular arrhythmia); anticoagulation and antiplatelet guidance; any peri-procedural hold periods |
| Obinutuzumab | GAZYVA | First-infusion dose-splitting schedule; IRR and TLS management; the hepatitis B screening and reactivation content |
| Pirtobrutinib | JAYPIRCA | **The indication section verbatim** — the required prior therapy appears to have broadened at the 2025-12-03 traditional approval, and my R/R branch depends on the exact wording |
| Liso-cel | BREYANZI | The CLL/SLL indication and required prior therapy; confirm whether the accelerated approval has been converted or amended |

### 2.3 EU SmPCs for the divergence

**`ema-calquence-smpc`** and **`ema-venclyxto-smpc`** — the **indication
sections (SmPC section 4.1)** for both, current revision. I need these to
characterise conflict C-02: the EU appears to permit acalabrutinib-venetoclax
**± obinutuzumab** where the US approval reportedly does not mention the
obinutuzumab arm. If Gulf regulators track EMA, the EU wording may be the more
locally relevant one.

### 2.4 The regional documents

All three are open access and would be readable but for the egress block:

- **`saudi-cll-2026`** · Alotaibi et al., *Frontiers in Medicine* vol. 12,
  DOI 10.3389/fmed.2025.1719364, published 2026-01-14. Full text.
- **`gulf-fixed-duration-2025`** · Yassin et al., *Frontiers in Medicine*,
  DOI 10.3389/fmed.2025.1509074, published 2025-02-26, PMID 40078401. Full
  text — this is the source of conflict C-01.
- **`gulf-consensus-2024`** · Alshemmari et al., *Acta Haematologica*
  147(3):260-279, 2024. The **full list of 50 consensus statements with their
  agreement levels** — the abstract is useless to me; the statements are the
  content.

### 2.5 ERIC laboratory recommendations

- **`eric-tp53-2024`** · *Leukemia*, 2024, DOI 10.1038/s41375-024-02267-x,
  PMID 38755420. Needed: the **TP53 variant classification algorithm** and the
  section on **reporting and VAF** — search metadata indicates the fixed VAF
  cut-off recommendation was withdrawn in favour of laboratory method
  validation, and I need to confirm that before deciding the tool must *not*
  hard-code a VAF threshold.
- **`eric-ighv-2022`** · ERIC IGHV recommendations, 2022 update. Needed: the
  **mutated/unmutated cut-off definition** and the handling of borderline
  cases. Also: **has this been updated since 2022?**

---

## Priority 3 — needed to cite a pivotal trial per regimen

I could not establish a verified citation for most pivotal trials — see
`pending_identification.pivotal_trials` in `sources.yaml`. Rather than have you
chase twelve papers, the efficient path is probably: **give me your existing
reference list** if medical affairs holds one, and I will reconcile it against
the register.

If you would rather I work from primary papers, the ones I most need, in
order:

1. **AMPLIFY** — acalabrutinib + venetoclax ± obinutuzumab, first line. This
   underpins a 2026 approval and I have no peer-reviewed citation for it.
2. **CLL17** — *Fixed-Duration versus Continuous Treatment for Chronic
   Lymphocytic Leukemia*, NEJM 2025, PMID 41358601. Identified but unread, and
   potentially the most consequential readout for first-line logic.
3. **CLL12 and/or EVOLVE** — early treatment of high-risk asymptomatic
   disease. I need to know **what has actually read out**, because this
   determines whether watch-and-wait survives for high-risk genetics (gaps
   B8/D10). I hold no reliable position here.
4. **MURANO** — venetoclax + rituximab duration in relapse.
5. **CLL14**, **ELEVATE-TN**, **SEQUOIA**, **ALPINE**, **ELEVATE-RR**,
   **CAPTIVATE**, **BRUIN**, **TRANSCEND CLL 004**.

---

## Everything else I'm asking for — one batch

Grouped so you can forward whole sections to whoever owns them.

### A. Scope and intent — four questions only you can answer

These change what the tool is, so they gate design rather than sourcing:

1. **Who is the user?** A treating haematologist, a general physician, or a
   medical-affairs/commercial audience? This changes what may safely be
   omitted and how much explanation each output needs.
2. **Is this intended to inform patient care, or is it an education /
   medical-affairs asset?** This determines the disclaimer, and possibly
   whether it falls under medical-device software rules in any of the four
   markets. Worth a decision now rather than after it is built.
3. **Single recommendation or cited option set?** Your brief points strongly
   at an option set with citations, and conflict C-01 is exactly the case that
   tests it. Confirm.
4. **Four markets, one tool or four?** UAE, Qatar, Oman and Kuwait may differ
   on availability and reimbursement. Do you want one tool with a country
   selector, or country-neutral clinical content with access noted separately?

### B. Regional regulatory and formulary — my biggest blind spot

Section N of `GAPS.md` is `X` end to end, and search located **no** national
CLL guideline or formulary for any of the four markets. What I need:

1. **Approval status per agent per market** — UAE (MOH, and DoH Abu Dhabi /
   DHA if they differ), Qatar (MoPH), Oman (MoH), Kuwait (MoH). SFDA too if
   you use it as a regional reference. Agents: venetoclax, acalabrutinib,
   zanubrutinib, ibrutinib, obinutuzumab, rituximab, pirtobrutinib, liso-cel.
2. **Formulary / reimbursement status** for each of the above in each market,
   including any prior-authorisation criteria — those criteria often encode a
   *de facto* treatment algorithm, which is directly usable.
3. **Any national or institutional CLL protocol** you hold — HMC, SQUH, Kuwait
   Cancer Control Center, Tawam, SKMC, Burjeel, Cleveland Clinic Abu Dhabi,
   or others.
4. **Is CAR-T available in-country, or referral-only?** If liso-cel means an
   overseas referral, the R/R branch should say so rather than list it flatly.
5. **Assay availability** (this is gap N8, and it decides whether a rule is
   actionable): is FISH for del(17p) routinely available in each market? Is
   TP53 sequencing available locally or send-out? Is MRD testing available at
   all, and at what sensitivity? A TP53 branch is worthless where the test
   cannot be run, and an MRD-guided option is worse than worthless.

### C. Practice patterns

6. Is **chemoimmunotherapy** still used in any of the four markets, and if so
   where and why — cost, access, or clinical preference? This decides how
   conflict C-05 is presented.
7. Any local view on the **ibrutinib-venetoclax-first** position of
   `gulf-fixed-duration-2025` — is that what people actually do?
8. Typical **patient demographics** you see. The Gulf position statement
   argues from a younger population with comorbidities such as diabetes and
   obesity; if your own data supports or contradicts that, it matters.

### D. Your own materials

9. **Medical affairs materials** — reference lists, slide decks, approved
   scientific-response documents. Two caveats: anything company-produced is
   `secondary_unverified` in the register and cannot be a source of record for
   a threshold; and a reference list is far more useful to me than a deck,
   because I can reconcile it.
10. Any **existing internal tool, algorithm or protocol** this is meant to
    replace or complement.
11. Your **house position on copyright** for guideline content. My default is
    the brief's: state thresholds as facts in my own wording with a citation,
    reproduce no prose, tables or algorithm diagrams. Confirm that is what you
    want, particularly for NCCN, which is licensed content.

### E. Practical

12. **Which route** — will you supply documents, or open the egress allowlist?
13. **Update cadence.** EHA has said it will publish annually; NCCN ships
    several versions a year. `scripts/list-sources.py` reports the oldest
    source in the register so the staleness is visible, but someone has to act
    on it. Who, and how often?

---

## What the search changed versus what I believed going in

Worth recording, because it is the argument for having done Phase 0 at all.
Four things I would have got wrong writing from memory:

1. **The European guideline moved from ESMO to EHA.** I would have built
   against ESMO. The current European source of record is a June 2026 EHA
   document I had no knowledge of, and ESMO is described as no longer owning
   subsequent editions.
2. **Acalabrutinib + venetoclax was approved by FDA on 2026-02-19, not in
   early 2025** as I had guessed in gap F7 — and the EU had approved it, with
   a possibly broader combination, eight months earlier. I had the direction
   right and the dates, sequence and scope wrong.
3. **Pirtobrutinib's indication appears to have broadened** at a 2025-12-03
   traditional approval, from "≥2 prior lines including BTKi and BCL2i" to
   "after a covalent BTK inhibitor". My R/R branch would have been wrong on
   prior-therapy requirements.
4. **ERIC withdrew the VAF cut-off for TP53 reporting** in its 2024 update. I
   had declared this not-held (gap C3) and refused to state a number, which
   was the right call — but a less careful build would have hard-coded a
   threshold that the current recommendation no longer endorses.

And one that reinforces the rule about not writing from memory even when
confident: **NCCN appears to have deleted its venetoclax TLS table**. If I had
built TLS logic against "NCCN has a TLS table", I would have cited a table
that no longer exists.
