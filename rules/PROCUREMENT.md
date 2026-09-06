# Complete procurement list — every source I need you to get

Compiled 2026-09-06. Supersedes the request section of `ACCESS-REQUESTS.md`,
which was written before the citations below had been pinned down.

**37 documents**, plus 5 categories of regional data only you can supply,
plus 4 decisions only you can make.

## How to read this

Each entry gives the **exact citation**, the **identifier**, **what I need
from it** (not just "the paper"), and its **access route**. The access route
matters because it tells you how much work each one is:

| Route | Meaning | Who does the work |
|---|---|---|
| 🟢 **OPEN** | Free full text exists at the identifier given. Blocked from this session only by the network policy, not by a paywall. | **Nobody — if you open egress for those five hosts, I fetch these myself.** |
| 🟡 **SUBSCRIPTION** | Behind a journal paywall. You or your medical information team likely have access. | You |
| 🔵 **REGISTRATION** | Free but login-gated (NCCN). | You |
| 🔴 **YOU ONLY** | Does not exist publicly. Internal, regional or a decision. | You |

**The single highest-value thing you can do** is open outbound HTTPS to five
hosts: `pmc.ncbi.nlm.nih.gov`, `accessdata.fda.gov`, `ema.europa.eu`,
`frontiersin.org`, `ashpublications.org`. That alone clears **16 of the 37**
without you touching a file — including the entire venetoclax TLS section,
which is the most safety-critical logic in the tool.

---

# TIER A — Blocking. No rule of any kind can be written without these.

### A1. EHA 2026 guideline 🟡 SUBSCRIPTION
> Eichhorst B, Ghia P, Bosch F, Clifford R, Gregor M, Guieze R, Kater AP,
> Niemann CU, Pospisilova S, Robak T, Schuh A, Stamatopoulos K, Tadmor T,
> York N. **EHA Guidelines on management of chronic lymphocytic leukemia and
> Richter transformation.** *HemaSphere.* 2026;10(6):e70403.

`DOI 10.1002/hem3.70403` · PMID 42293463 · register id `eha-2026`

**I need the complete document.** This is the current European source of
record — it replaced ESMO, it postdates my training cutoff entirely, and I
cannot safely tell you which parts matter because I have never seen it.

If you can only send parts, in this order: indications for treatment →
first-line algorithm incl. TP53 branch → relapsed/refractory algorithm →
diagnosis and staging → response assessment and MRD → Richter.

*Unblocks:* nodes 1, 4, 5, 6, 8, 9, 14, 15 · resolves conflict C-06

---

### A2. iwCLL 2018 guidelines 🟡 SUBSCRIPTION *(Blood, may now be free — see note)*
> Hallek M, Cheson BD, Catovsky D, Caligaris-Cappio F, Dighiero G, Döhner H,
> Hillmen P, Keating M, Montserrat E, Chiorazzi N, Stilgenbauer S, Rai KR,
> Byrd JC, Eichhorst B, O'Brien S, Robak T, Seymour JF, Kipps TJ.
> **iwCLL guidelines for diagnosis, indications for treatment, response
> assessment, and supportive management of CLL.** *Blood.*
> 2018;131(25):2745–2760.

`DOI 10.1182/blood-2017-09-806398` · PMID 29540348 · register id `iwcll-2018`

*Note: Blood releases content free after 12 months, so this is very likely
reachable at `ashpublications.org` — one of the five hosts above.*

**Specifically:**
- **"Indications for treatment"** section in full, with every number: the
  haemoglobin and platelet thresholds for progressive marrow failure; the
  spleen size below costal margin; the lymph node longest diameter; the
  lymphocyte percentage increase and its time window; the lymphocyte doubling
  time and any absolute-count floor below which it must not be applied; and
  all four constitutional-symptom definitions (weight loss %, fever
  temperature and duration, night sweats duration, fatigue/ECOG).
- The **full response criteria table** — CR, CRi, PR, PR-L, SD, PD.
- The **MRD** definition: threshold, and whether it is defined in blood or
  marrow.
- **Diagnostic criteria**: the clonal B-lymphocyte threshold and the
  CLL / SLL / MBL boundaries.
- The **Rai and Binet** definitions as the paper states them.

*Unblocks:* nodes 1, 2, 3, 6 — i.e. the tool's entire entry path

---

### A3. NCCN CLL/SLL, current version 🔵 REGISTRATION
> National Comprehensive Cancer Network. **NCCN Clinical Practice Guidelines
> in Oncology: Chronic Lymphocytic Leukemia / Small Lymphocytic Lymphoma.**

Latest version I could confirm: **v2.2026**, released 2025-12-22.
Register id `nccn-cll-current`

**First, tell me the current version number and date** — NCCN ships several a
year and I cannot check. Then, from that version:

1. First-line algorithm pages — **both** the *without del(17p)/TP53* branch
   and the *del(17p)/TP53* branch.
2. Relapsed/refractory algorithm pages — same two branches.
3. The page classifying regimens **time-limited vs continuous** and
   **fixed-duration vs MRD-guided**.
4. **Confirm a deletion.** Are the *"Venetoclax: Recommended TLS Prophylaxis
   and Monitoring Based on Tumor Burden"* table and the *"Response Definitions
   After Treatment"* table still present? Reporting says they were removed at
   v2.2026. If gone, say what replaced them. **This determines whether the
   whole TLS section is single-sourced** (conflict C-03).
5. Workup / diagnostic evaluation page.
6. Supportive care page.

*Unblocks:* nodes 8, 9, 14, 15 · resolves C-03, informs C-04

---

### A4. VENCLEXTA (venetoclax) US Prescribing Information 🟢 OPEN
> AbbVie / Genentech. NDA 208573. Most recent revision seen: `208573s032`.

`https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/208573s032lbl.pdf`
Register id `fda-venetoclax-uspi` · **confirm this is still the current revision**

**The single most safety-critical document in the project.** I need the
complete label, and within it:

- **Section 2 entire**: the CLL/SLL 5-week ramp-up with all doses; the **TLS
  risk-assessment table** showing how absolute lymphocyte count, largest node
  diameter and renal function combine into risk tiers — **I need the table's
  own structure, not a prose summary**, because I do not confidently hold how
  those axes combine and inventing it would be a patient-safety error;
  prophylaxis, hydration and anti-hyperuricaemic requirements per tier; the
  **laboratory monitoring schedule** per tier with post-dose timepoints;
  inpatient vs outpatient rules; and dose modification for an interrupted
  ramp-up.
- **Section 7 entire**: CYP3A inhibitor/inducer interactions with the
  **specific dose reductions** at ramp-up and steady state; P-gp content.
- **Section 8**: renal impairment, hepatic impairment with Child-Pugh bands,
  pregnancy, lactation.
- Whichever section names the **creatinine clearance equation** the thresholds
  assume.

*Unblocks:* node 10 (entirely), node 12 (partly)

---

# TIER B — Needed to complete specific branches

### B1. BSH 2025 treatment guideline 🟡 SUBSCRIPTION
> **2025 British Society for Haematology Guideline for the treatment of
> chronic lymphocytic leukaemia.** *Br J Haematol.* 2025;207(6):2296–2313.

`DOI 10.1111/bjh.70100` · register id `bsh-2025`

Need: first-line and relapse recommendation tables; the **fixed-duration vs
continuous** selection section; the **exact carve-out wording** on
chemoimmunotherapy's remaining role (drives C-05); the MRD section (C-04).

### B2. BSH diagnosis/investigation guideline — **existence to confirm** 🟡
B1 is treatment-only by its own title. The older BSH CLL treatment guideline
is *Br J Haematol.* 2018;182(3):344–359 (Schuh et al.), and there is a 2012
BSH document *"Guidelines on the diagnosis, investigation and management of
chronic lymphocytic leukaemia"* (`DOI 10.1111/bjh.12067`).

**Question for you:** does BSH have a *current* diagnosis/investigation
guideline, or is 2012 still the standing one? If 2012, it is older than iwCLL
2018 and would become the oldest source in the register.

### B3–B7. The other five drug labels 🟢 OPEN
All at `accessdata.fda.gov`. Complete current PI for each, **with the revision
date confirmed** — a label read at the wrong revision is worse than no label.

| | Drug | Brand | What matters most |
|---|---|---|---|
| B3 | Acalabrutinib | CALQUENCE | Indications incl. the 2026-02-19 venetoclax combination and **whether it carries a del(17p)/TP53 restriction**; the fixed-duration schedule; **the acid-reducing-agent interaction for BOTH tablet and capsule** — these differ and must not be merged |
| B4 | Zanubrutinib | BRUKINSA | Dose options and schedule; organ-impairment adjustment; cardiac warnings *(NDA 213217 — application number unverified)* |
| B5 | Ibrutinib | IMBRUVICA | Current wording on **atrial and ventricular** arrhythmia; anticoagulation and antiplatelet guidance; peri-procedural hold periods |
| B6 | Obinutuzumab | GAZYVA | First-infusion dose-splitting; IRR and TLS management; hepatitis B screening and reactivation content |
| B7 | Pirtobrutinib | JAYPIRCA | **The indication section verbatim.** The required prior therapy appears to have broadened at the 2025-12-03 traditional approval, from "≥2 prior lines incl. BTKi and BCL2i" to "after a covalent BTKi". My R/R branch is wrong if I assume the old wording |

### B8. BREYANZI (lisocabtagene maraleucel) PI 🟢 OPEN
`https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/breyanzi`
CLL/SLL indication and required prior therapy; confirm whether the March 2024
accelerated approval has since been converted or amended.

### B9–B10. EU Summaries of Product Characteristics 🟢 OPEN
`ema.europa.eu` — **section 4.1 (indications)** for **VENCLYXTO** and
**CALQUENCE**, current revision.

Needed to characterise **conflict C-02**: the EU appears to permit
acalabrutinib-venetoclax **± obinutuzumab** (EC authorisation 2025-06-06,
further venetoclax label expansion 2026-05-29) where the US approval summary
does not mention the obinutuzumab arm. If Gulf regulators track EMA, the EU
wording is the locally relevant one.

### B11. ERIC TP53 recommendations, 2024 update 🟢 OPEN
> **ERIC recommendations for TP53 mutation analysis in chronic lymphocytic
> leukemia — 2024 update.** *Leukemia.* 2024.

`DOI 10.1038/s41375-024-02267-x` · PMID 38755420 · free at **PMC11217004**

Need: the **TP53 variant classification algorithm** and the **reporting/VAF**
section. Reporting indicates the fixed VAF cut-off was withdrawn in favour of
laboratory method validation — I must confirm that before deciding the tool
must *not* hard-code a VAF threshold.

### B12. ERIC IGHV recommendations, 2022 update 🟢 OPEN
> Agathangelidis A, Chatzidimitriou A, Chatzikonstantinou T, Tresoldi C,
> Davis Z, Giudicelli V, Kossida S, Belessi C, Rosenquist R, Ghia P,
> Langerak AW, Davi F, Stamatopoulos K; ERIC. **Immunoglobulin gene sequence
> analysis in chronic lymphocytic leukemia: the 2022 update of the
> recommendations by ERIC.** *Leukemia.* 2022;36(8):1961–1968.

`DOI 10.1038/s41375-022-01604-2` · PMID 35614318 · free at **PMC9343247**

Need: the mutated/unmutated cut-off definition and borderline-case handling.
**Also: has this been updated since 2022?**

---

# TIER C — Regional guidance

### C1. Royal Hospital Oman CLL protocol ✅ **ALREADY OBTAINED**
Found in your Drive, written and approved February 2026 (Dr Muna Al Tarshi,
approved Dr Mahdiya Al Bulushi), MoH Oman document control
`MoH/DGQAC/P&P/002`. **Read in full.** Register id `oman-royal-hospital-2026`.

Three caveats you should know, because they limit how far I can lean on it:
1. It is **draft-quality** — the effective and review dates are still
   "Month/Year" placeholders, version 01 has no date, and an unfinished
   editing note survives in the text ("First-Line Treatment Selection: add the
   NCCCN").
2. Its content and its own reference list **disagree**. The comparison table
   is headed "NCCN 2026 / ESMO 2024", but reference 11 cites **NCCN v4.2024**
   and reference 14 cites the **2021** ESMO/EHA guideline. So its guideline
   columns cannot be trusted as a faithful rendering of NCCN 2026.
3. It cites ESMO 2021 — superseded twice since, by the 2024 ESMO interim
   update and now by EHA 2026 (A1).

What it *does* give me, and nothing else in the register does: Oman-specific
operational reality. **TP53 mutation testing is sent abroad** when not
available in-house; MRD testing is "if available"; medications are "subject to
availability in Royal Hospital pharmacy"; and follow-up runs 3-monthly in year
one, then 6–12-monthly.

**Question for you:** is there a **finalised** version with the dates filled
in? I should build against that, not the draft.

### C2. Saudi CLL clinical practice guidelines 🟢 OPEN
> Alotaibi et al. **Clinical practice guidelines for the diagnosis and
> management of chronic lymphocytic leukemia in Saudi Arabia: consensus
> statement by an expert panel.** *Front Med.* 2026;12. Published 2026-01-14.

`DOI 10.3389/fmed.2025.1719364` · free at **PMC12847048** · id `saudi-cll-2026`

### C3. Gulf position statement on upfront fixed duration 🟢 OPEN
> Yassin MA, Al Farsi K, Hamad A, Ghasoub R, Alhuraiji A, Mheidly K,
> Aal Yaseen H, Osman H, Trepel M. **Upfront fixed-duration treatment
> strategies for chronic lymphocytic leukemia in Arab populations: a position
> statement from the Gulf region.** *Front Med.* 2025. Published 2025-02-26.

`DOI 10.3389/fmed.2025.1509074` · PMID 40078401 · free at **PMC11897515**
Source of **conflict C-01**.

*Worth noting: two of these authors appear in your own meeting attendee lists
— Mohamed Yassin (Hamad Medical Corporation, Qatar) and Ahmad Alhuraiji
(Kuwait MoH). They are the most direct route to the Qatar and Kuwait practice
data in Tier D.*

### C4. Gulf consensus statements 🟡 SUBSCRIPTION
> Alshemmari SH, Siddiqui MA, Pandita R, Osman HY, Cherif H, O'Brien S,
> Marashi M, Al Farsi K. **Evidence-Based Management of Chronic Lymphocytic
> Leukemia: Consensus Statements from the Gulf Region.** *Acta Haematol.*
> 2024;147(3):260–279.

Karger · id `gulf-consensus-2024` · **I need the full list of 50 consensus
statements with their agreement levels** — the abstract is useless; the
statements are the content.

---

# TIER D — Pivotal trials

All now identified. Needed so every regimen the tool lists can name its
pivotal evidence. **If your medical information team holds a reference
library, sending me that list is far more efficient than chasing 13 PDFs.**

| # | Trial | Citation | Access |
|---|---|---|---|
| D1 | **AMPLIFY** — acala+ven ± obi, 1L | Brown JR et al. Fixed-Duration Acalabrutinib Combinations in Untreated CLL. *N Engl J Med.* 2025. `10.1056/NEJMoa2409804` | 🟡 |
| D2 | **CLL17** — fixed vs continuous, 1L | Fixed-Duration versus Continuous Treatment for CLL. *N Engl J Med.* 2025. PMID 41358601 | 🟡 |
| D3 | **CLL14** primary | Fischer K, Al-Sawaf O, Bahlo J, et al. Venetoclax and Obinutuzumab in Patients with CLL and Coexisting Conditions. *N Engl J Med.* 2019;380:2225–2236. `10.1056/NEJMoa1815281` | 🟡 |
| D4 | **CLL14** 6-year | Al-Sawaf O, Robrecht S, Zhang C, et al. *Blood.* 2024;144(18):1924–1935 | 🟢 likely |
| D5 | **ELEVATE-TN** primary | Sharman JP et al. *Lancet.* 2020;395:1278–1291. PMID 32305093 | 🟡 |
| D6 | **ELEVATE-TN** 6-year | Acalabrutinib-obinutuzumab improves survival vs chemoimmunotherapy… *Blood.* 2025;146(11):1276 | 🟢 likely |
| D7 | **SEQUOIA** primary | Tam CS et al. *Lancet Oncol.* 2022;23(8):1031–1043 | 🟡 |
| D8 | **SEQUOIA** 5-year + arm D | *J Clin Oncol.* `10.1200/JCO-24-02265`; arm D (zanu+ven) `10.1200/JCO-25-00758` | 🟡 |
| D9 | **ALPINE** | Brown JR et al. Zanubrutinib or Ibrutinib in Relapsed or Refractory CLL. *N Engl J Med.* 2023. `10.1056/NEJMoa2211582` | 🟡 |
| D10 | **ELEVATE-RR** | Byrd JC et al. Acalabrutinib vs ibrutinib, previously treated high-risk CLL. *J Clin Oncol.* 2021 | 🟡 |
| D11 | **MURANO** | Seymour JF et al. Venetoclax–Rituximab in Relapsed or Refractory CLL. *N Engl J Med.* 2018. `10.1056/NEJMoa1713976` | 🟡 |
| D12 | **GLOW** | Fixed-Duration Ibrutinib-Venetoclax in CLL and Comorbidities. *NEJM Evidence.* 2022. `10.1056/EVIDoa2200006` | 🟡 |
| D13 | **CAPTIVATE** MRD cohort | Wierda WG et al. *J Clin Oncol.* 2021. PMID 34618601 | 🟡 |
| D14 | **CLL13/GAIA** | First-Line Venetoclax Combinations in CLL. *N Engl J Med.* 2023. `10.1056/NEJMoa2213093` | 🟡 |
| D15 | **BRUIN** | Mato AR, Woyach JA, Brown JR, et al. Pirtobrutinib after a covalent BTK inhibitor in CLL. *N Engl J Med.* 2023;389:33–44. `10.1056/NEJMoa2300696` | 🟡 |
| D16 | **BRUIN CLL-321** | Phase III pirtobrutinib vs idelalisib/R or BR. *J Clin Oncol.* `10.1200/JCO-25-00166` | 🟡 |
| D17 | **TRANSCEND CLL 004** | Siddiqi T, Maloney DG, Kenderian SS, et al. *Lancet.* 2023;402(10402):641–654 | 🟡 |
| D18 | **RESONATE-2** | Burger JA et al. Ibrutinib as Initial Therapy for Patients with CLL. *N Engl J Med.* 2015. PMID 26639149 | 🟡 |
| D19 | **CLL12** ⭐ | Langerbeins P et al. *Blood.* 2022;139(2):177; final results *J Clin Oncol.* 2024 `10.1200/JCO.24.00975` | 🟢/🟡 |

⭐ **D19 matters more than its position suggests.** CLL12 randomised
asymptomatic early-stage patients *at high risk of progression* to ibrutinib
or placebo. Reporting indicates event-free survival improved but **overall
survival did not**, and that watch-and-wait therefore remains standard
regardless of genetic risk. That was gap B8/D10 — I had no reliable position
on it. If confirmed on reading, node 6 keeps watch-and-wait as the default for
asymptomatic disease even with adverse genetics, which is a load-bearing
behaviour of the whole tool.

---

# TIER E — Regional data 🔴 YOU ONLY

Nothing in any register or literature search covers these. Section N of
`GAPS.md` is "not held" end to end, and no national guideline or formulary was
located for **any** of the four markets.

**E1. Approval status per agent per market.** UAE (MOH, plus DoH Abu Dhabi and
DHA if they differ), Qatar (MoPH), Oman (MoH), Kuwait (MoH); SFDA too if you
use it as a regional reference. Agents: venetoclax, acalabrutinib,
zanubrutinib, ibrutinib, obinutuzumab, rituximab, pirtobrutinib, liso-cel.

**E2. Formulary and reimbursement status** for each of the above in each
market, **including prior-authorisation criteria** — those criteria usually
encode a de facto treatment algorithm, which is directly usable as a rule
source.

**E3. Institutional protocols.** You already had one (Oman). Others worth
asking for: Hamad Medical Corporation Qatar, Kuwait Cancer Control Center,
SQUH Oman, Tawam, SKMC, Cleveland Clinic Abu Dhabi, Burjeel. Your own attendee
lists name clinicians at HMC, Kuwait MoH and CCAD — that is the fastest route.

**E4. Assay availability — this decides whether rules are actionable.**
- Is FISH for del(17p) routinely available in each market?
- Is TP53 sequencing local or send-out? *(Oman: send-out, per C1.)*
- Is MRD testing available at all, and at what sensitivity?

A TP53 branch is worthless where the assay cannot be run, and an MRD-guided
duration option is worse than worthless.

**E5. CAR-T access.** Available in-country, or overseas referral only? If
referral-only, the R/R branch must say so rather than list liso-cel flatly.

---

# TIER F — Decisions only you can make 🔴

**F1. Who is the user?** Treating haematologist, general physician, or a
medical-affairs/commercial audience? Changes what may safely be omitted.

**F2. Care-informing, or education/medical-affairs asset?** Determines the
disclaimer and possibly whether this falls under medical-device software rules
in any of the four markets. Better decided now than after it is built.

**F3. Single recommendation, or cited option set?** Your brief points hard at
an option set. Conflict C-01 is the case that tests it — the Gulf position
statement names one regimen for all fit patients; the international guidelines
almost certainly do not.

**F4. One tool with a country selector, or four?**

---

# The independence problem — please read this one

Your Drive is BeOne Medicines material, and zanubrutinib is BeOne's product.
Searching it for CLL sources returned, alongside the Oman protocol, a set of
items that **cannot** feed a treatment-selection tool:

- `GCC BRUKINSA CLL Objection Handler_V5.0` — a promotional objection handler
- `BRUKINSA CLL segmented messaging playbook GCC version` — messaging strategy
- `Zanubrutinib Indirect Treatment Comparisons`, `GCC MAIC and Meta-analysis
  trainings` — manufacturer-sponsored indirect comparisons
- Several decks marked *"Confidential. For training purposes ONLY. Not
  approved for use with external audiences"*
- `blood-9609-main.pdf` — an **ASH 2024 conference abstract** (Tang et al.,
  *Blood* 2024;144:6783–6784, `10.1182/blood-2024-211603`), a retrospective
  propensity-matched TriNetX analysis reporting lower cardiovascular events on
  zanubrutinib than acalabrutinib

That last one is the instructive case. It bears directly on **node 11**
(cardiac suitability), which is otherwise thinly sourced — so it is tempting.
But it is a conference abstract, retrospective and observational, and it
favours the product of the company that holds the file. Meanwhile
head-to-head **randomised** evidence exists for exactly this question
(ELEVATE-RR, ALPINE — D9 and D10). A tool that cited the abstract over the
RCTs would be indefensible, and obviously so to any haematologist who read it.

So: none of the above enters `sources.yaml`. They are recorded in
`excluded_materials` with the reason, and the exclusion is visible in the
prototype rather than silent — logged as **conflict C-07**. The company
materials remain useful to *me* as a reference map: they cite the primary
literature accurately, and that is how several Tier D citations were confirmed.

If this tool is ever intended to reach external audiences, this is worth
settling early with your compliance and medical governance people, not late.

---

## Summary of what I'm asking for

| Tier | Items | If you open egress for 5 hosts |
|---|---|---|
| A — blocking | 4 | 1 clears (venetoclax label), possibly 2 (iwCLL via Blood) |
| B — branch completion | 12 | 9 clear |
| C — regional | 4 (1 already obtained) | 2 clear |
| D — pivotal trials | 19 | ~3 clear |
| E — regional data | 5 categories | none — you only |
| F — decisions | 4 | none — you only |

**Fastest path to a working tool:** open the five hosts, send me A1 (EHA 2026)
and A3 (NCCN), answer F1–F4, and start the E-tier requests moving through your
regional colleagues. That gets nodes 1–12 sourced and leaves only the regional
layer outstanding.
