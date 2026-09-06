# Step 0.1 — Declared Knowledge Gaps (written BEFORE any searching)

Date written: 2026-09-06
Author: Claude (assistant), model knowledge cutoff May 2026
Status: pre-search self-audit. Nothing here is a source. Nothing here may be
copied into a rules file. Every line below must be replaced by a
`sources.yaml`-referenced fact or explicitly marked unhandled.

## Confidence key

| Code | Meaning |
|------|---------|
| `C`  | **Held with confidence.** Stable, long-established, unlikely to have moved. Still gets a citation, but I do not expect the search to change it. |
| `V`  | **Held, needs verification.** I have a specific value in mind but it is exactly the kind of thing that drifts between guideline versions, or I am not certain I have the current version. Treat my recalled value as a *search hint only*, never as the rule. |
| `X`  | **Not held.** I do not have this, or what I have is too vague//too likely stale to state. Must come entirely from a source. |

A `V` is not a soft `C`. If the search cannot confirm a `V`, it becomes an `X`
and the rule does not get written.

## Standing caveats that apply to this entire document

1. **Version drift is the main risk.** My cutoff is May 2026; today is
   September 2026. Any guideline with an annual or continuous release cadence
   (NCCN especially, which ships several versions a year) may have moved since
   my cutoff, and I will not know it has.
2. **Approval status is jurisdictional.** Anything I recall about "approved"
   is almost certainly FDA/EMA-shaped. SFDA, UAE MOH, Qatar, Oman and Kuwait
   status and formulary/reimbursement position is a near-total blind spot —
   see section P, which is `X` almost end to end.
3. **The fast-moving frontier.** Covalent-BTKi/BCL2 doublets, non-covalent
   BTKi, BTK degraders, bispecifics and CAR-T in CLL were all actively
   changing at my cutoff. Anything in sections F/G marked `V` should be
   treated as more likely stale than the rest of the document.
4. **Numbers I "remember" are the most dangerous content in this file.** Where
   I give a recalled figure below it is written in italics and parenthesised
   to make it visually obvious it is a hypothesis, not an input.

---

## A. Disease definition and diagnosis

| # | Clinical input the tool needs | Conf | Note on what I do / don't hold |
|---|---|---|---|
| A1 | Absolute B-lymphocyte count threshold defining CLL | `V` | *(≥5 × 10⁹/L clonal B cells in peripheral blood, sustained)* — need the exact wording on duration and on whether the threshold is B-cells or total lymphocytes. |
| A2 | Definition of SLL vs CLL (nodal disease, marrow involvement) | `V` | *(SLL = nodal/splenic disease with <5 × 10⁹/L clonal B cells and cytopenia absent)* — need current phrasing and whether biopsy is mandated. |
| A3 | Definition of monoclonal B-cell lymphocytosis (MBL), and low- vs high-count MBL cutoff | `V` | *(<5 × 10⁹/L without other features; low-count MBL cutoff around 0.5 × 10⁹/L)* — cutoff and follow-up cadence both need verification. |
| A4 | Required immunophenotype panel for diagnosis | `V` | CD5/CD19/CD20/CD23/kappa-lambda and the role of the scoring systems — need the current mandatory vs optional split. |
| A5 | When bone marrow biopsy is required vs optional | `V` | Believe it is not required for diagnosis but is used for unexplained cytopenias. Need current statement. |
| A6 | When lymph node biopsy is required (Richter suspicion) | `X` | Do not hold a rule-grade trigger list. |
| A7 | Role of PET-CT (Richter suspicion only vs routine) and SUV threshold | `X` | I recall a commonly cited SUV cutoff exists but will not state a number. |
| A8 | Baseline imaging expectations outside trials (CT vs clinical exam) | `V` | Believe routine CT is not required outside trials. Needs confirmation. |

## B. Staging

| # | Clinical input | Conf | Note |
|---|---|---|---|
| B1 | Rai stages 0–IV: exact definitions | `V` | *(0 lymphocytosis only; I nodes; II spleen and/or liver; III anaemia; IV thrombocytopenia)* — I need the exact haemoglobin and platelet cut-points and confirmation that anaemia/thrombocytopenia must be disease-related rather than autoimmune. |
| B2 | Rai haemoglobin cut-point for stage III | `V` | *(<11 g/dL)* — verify, including units used regionally (g/dL vs g/L). |
| B3 | Rai platelet cut-point for stage IV | `V` | *(<100 × 10⁹/L)* — verify. |
| B4 | Rai risk grouping (low / intermediate / high) mapping to stages | `V` | *(0 = low; I–II = intermediate; III–IV = high)* — verify this modified grouping is still the one in use. |
| B5 | Binet A/B/C: definitions and the "lymphoid area" count | `V` | *(A <3 areas; B ≥3 areas; C anaemia and/or thrombocytopenia)* — need the exact list of the five areas and whether bilateral counts as one. |
| B6 | Binet haemoglobin and platelet cut-points | `V` | *(Hb <10 g/dL, platelets <100 × 10⁹/L)* — note these differ from Rai; verify both, as mixing them is a realistic tool bug. |
| B7 | Whether staging drives treatment independently of the iwCLL active-disease criteria | `V` | Believe stage alone does not mandate treatment in early disease. Needs an explicit sourced statement — this is a core tool behaviour. |
| B8 | Whether early-treatment-of-high-risk-asymptomatic is now recommended | `X` | I am aware trials addressed this and I do not confidently hold the current recommendation. Must be sourced. |

## C. Prognostic and predictive markers

| # | Clinical input | Conf | Note |
|---|---|---|---|
| C1 | Which markers must be tested *before every line* of therapy | `V` | Believe TP53 aberration testing is required before each treatment line. Need exact current wording. |
| C2 | del(17p) FISH: cut-off percentage of nuclei to call positive | `X` | I do not hold a rule-grade threshold and I am aware laboratories differ. |
| C3 | *TP53* mutation VAF threshold to call clinically significant | `X` | Aware the field moved on low-VAF variants; will not state a number. |
| C4 | IGHV mutated vs unmutated cut-off | `V` | *(≥2% deviation from germline = mutated)* — verify, plus how borderline/subset 2 cases are handled. |
| C5 | Whether IGHV status still changes first-line choice in the targeted-agent era | `V` | Believe its role has narrowed but is not zero (esp. FCR historical, and fixed-duration selection). Needs a current sourced position — likely a **conflict candidate** between guidelines. |
| C6 | CLL-IPI: variables, points, risk bands, and whether it is still endorsed | `V` | *(TP53, IGHV, β2-microglobulin, stage, age)* — need exact point weights and band boundaries, and a current statement on validity under targeted therapy. |
| C7 | β2-microglobulin threshold used in CLL-IPI | `V` | *(>3.5 mg/L)* — verify units and value. |
| C8 | Complex karyotype definition and its threshold | `V` | *(≥3 abnormalities; ≥5 for "high complexity")* — verify both, and whether CpG-stimulated karyotyping is required. |
| C9 | del(11q), trisomy 12, del(13q) prognostic weighting in current practice | `V` | Held qualitatively, not rule-grade. |
| C10 | Whether *BTK*/*PLCG2* resistance mutation testing is recommended at progression | `X` | Not held at rule grade. |

## D. Treatment initiation (iwCLL active disease)

This is the single highest-stakes section in the tool. Every item is at best `V`.

| # | Clinical input | Conf | Note |
|---|---|---|---|
| D1 | The authoritative current iwCLL document and its version | `V` | *(Hallek et al., iwCLL 2018 guidelines, Blood)* — **I do not know whether a newer iwCLL update exists as of Sept 2026.** Must establish this first; everything in D depends on it. |
| D2 | Progressive marrow failure criterion (Hb and platelet thresholds) | `V` | *(Hb <10 g/dL, platelets <100 × 10⁹/L)* — verify, and verify whether "development or worsening" is required rather than a static value. |
| D3 | Massive/symptomatic splenomegaly criterion | `V` | *(≥6 cm below costal margin, or progressive/symptomatic)* — verify the number and whether imaging-based size is accepted. |
| D4 | Massive/symptomatic lymphadenopathy criterion | `V` | *(≥10 cm longest diameter, or progressive/symptomatic)* — verify. |
| D5 | Progressive lymphocytosis criterion: percentage increase and time window | `V` | *(>50% increase over 2 months, or lymphocyte doubling time <6 months)* — verify both, and verify the floor below which LDT should not be applied *(I recall a floor around 30 × 10⁹/L)*. |
| D6 | Explicit instruction that lymphocyte count alone does not justify treatment, and any absolute count above which it is considered | `V` | I believe such a statement exists and that leukostasis is rare in CLL. Need exact wording — the tool must not tell a user to treat on WBC alone. |
| D7 | Autoimmune cytopenia criterion (steroid-refractory) | `V` | Believe AIHA/ITP poorly responsive to standard therapy counts. Need current wording of "standard therapy". |
| D8 | Constitutional symptoms: the exact list and its thresholds | `V` | *(weight loss ≥10% in 6 months; significant fatigue / ECOG ≥2; fevers ≥38 °C for ≥2 weeks without infection; night sweats ≥1 month without infection)* — every one of these four numbers needs verification; they are exactly the kind of detail that gets mis-remembered. |
| D9 | Symptomatic extranodal involvement as a criterion | `V` | Held qualitatively. |
| D10 | Whether "watch and wait" remains standard for asymptomatic early-stage disease including high-risk genetics | `V` | Believe yes. Needs an explicit current source; see B8. |
| D11 | Monitoring cadence for watch-and-wait patients | `X` | I do not hold a sourced interval. Guidelines may deliberately not specify. |
| D12 | Whether clinical-trial-eligible asymptomatic patients should be referred | `V` | Qualitative only. |

## E. Response assessment and MRD

| # | Clinical input | Conf | Note |
|---|---|---|---|
| E1 | iwCLL response categories and their exact criteria (CR, CRi, PR, PR-L, SD, PD) | `V` | Hold the shape, not the numbers. Need the exact percentage reductions and the blood-count thresholds. |
| E2 | The PR-L (partial response with lymphocytosis) concept for BTKi | `V` | Believe this exists specifically to handle BTKi redistribution lymphocytosis. Needs sourcing. |
| E3 | Timing of response assessment after fixed-duration therapy | `X` | Not held at rule grade. |
| E4 | uMRD threshold and the assay/compartment it is defined in | `V` | *(<10⁻⁴, i.e. <1 CLL cell per 10 000 leukocytes; blood vs marrow matters)* — verify the threshold, the compartment, and whether 10⁻⁵/10⁻⁶ thresholds are now referenced. |
| E5 | Whether MRD may guide treatment duration/stopping outside a trial | `X` | I believe this was still contested at my cutoff. **Strong conflict candidate** — must record both positions rather than pick one. |
| E6 | Criteria for progression requiring next-line therapy vs asymptomatic biochemical progression | `V` | Believe re-treatment follows the same active-disease criteria as D. Verify. |

## F. First-line treatment options

| # | Clinical input | Conf | Note |
|---|---|---|---|
| F1 | The complete current first-line option set, and how it is stratified (by TP53 status, by fitness, by age, by comorbidity) | `V` | I hold a shape — TP53-aberrant vs not; targeted agents preferred over chemoimmunotherapy — but **I do not trust my recall of the current complete list or its ordering**, and this differs between NCCN/ESMO/BSH. Must be built entirely from current sources. |
| F2 | Acalabrutinib ± obinutuzumab: place in 1L, dose, schedule | `V` | *(100 mg BD continuous)* — verify dose and the obinutuzumab addition criteria. |
| F3 | Zanubrutinib: place in 1L, dose, schedule | `V` | *(160 mg BD or 320 mg OD)* — verify. |
| F4 | Ibrutinib: current place in 1L given tolerability data, dose | `V` | *(420 mg OD)* — I believe it has been displaced to a later-preference position in at least some guidelines. Verify; **conflict candidate**. |
| F5 | Venetoclax + obinutuzumab fixed duration: total duration and structure | `V` | *(12 cycles venetoclax; obinutuzumab for 6 cycles)* — verify both numbers and the cycle length. |
| F6 | Ibrutinib + venetoclax fixed duration: duration, and its approval/recommendation status | `V` | Aware of the regimen; **not confident on current status or duration**. |
| F7 | Acalabrutinib + venetoclax (± obinutuzumab) fixed duration: status, duration | `V` | Aware this read out and I believe it gained approval around early 2025; **duration, ± obinutuzumab question and current guideline position all need sourcing**. |
| F8 | Chemoimmunotherapy (FCR, BR, chlorambucil-obinutuzumab): any remaining role, and in whom | `V` | Believe the role is now very narrow or nil in most guidelines but is not identically zero everywhere, and may still matter regionally on cost grounds. **Conflict candidate and regionally important.** |
| F9 | Whether any first-line regimen is contraindicated/avoided in TP53-aberrant disease | `V` | Believe chemoimmunotherapy is to be avoided. Verify wording. |
| F10 | Fixed-duration vs continuous designation for every listed regimen | `V` | I can classify the regimens I know; I cannot guarantee the list is complete. This is a required tool output field, so completeness matters. |
| F11 | Selection logic between a fixed-duration and a continuous option for the same patient | `X` | I do not hold a sourced algorithm; guidelines may deliberately leave this to discussion. Likely to be left explicitly unhandled. |

## G. Relapsed / refractory treatment

| # | Clinical input | Conf | Note |
|---|---|---|---|
| G1 | The complete current R/R option set and its stratification by prior class exposure | `V` | Hold the shape (BTKi-exposed vs BCL2-exposed vs double-exposed); do not trust the completeness or ordering. |
| G2 | Venetoclax + rituximab in R/R: duration | `V` | *(24 months venetoclax)* — verify. |
| G3 | Pirtobrutinib (non-covalent BTKi): status, line, dose | `V` | Believe approved for R/R after a covalent BTKi; **line placement and dose need sourcing**. |
| G4 | CAR-T (lisocabtagene maraleucel) in CLL: eligibility, line, prior-therapy requirements | `V` | Believe approved for R/R CLL after BTKi and BCL2 inhibitor; **exact eligibility wording needs sourcing**. |
| G5 | Allogeneic transplant: any remaining role and in whom | `X` | Not held at rule grade in the current era. |
| G6 | BTK degraders / bispecifics: trial-only vs approved as of Sept 2026 | `X` | **Explicitly not held.** This is precisely where my cutoff is likely to be wrong. Must be established from current sources, and if trial-only, the tool must say so. |
| G7 | Re-treatment with the same fixed-duration regimen after long remission: is it endorsed, and after what interval | `V` | Aware this is discussed; **do not hold a sourced interval**. |
| G8 | Handling of BTKi intolerance (as distinct from progression) — switch within class? | `V` | Believe switching to a second covalent BTKi is acceptable for intolerance but not for progression. Verify — this is an important and easily-confused rule. |
| G9 | Richter transformation: recognition and management pathway | `X` | Out of scope for a first build, but the tool must at least flag suspicion. Trigger list not held (see A6). |

## H. Fixed-duration vs continuous — as a tool concept

| # | Clinical input | Conf | Note |
|---|---|---|---|
| H1 | Authoritative per-regimen duration in months/cycles, for display | `V` | Depends entirely on F/G being sourced. |
| H2 | Cycle length assumed by each regimen (28-day vs other) | `V` | Believe 28 days for the venetoclax-based regimens. Verify per regimen. |
| H3 | What "continuous" means operationally (until progression or unacceptable toxicity) | `C` | Standard phrasing; still needs a citation. |
| H4 | Whether treatment breaks/holidays are endorsed for continuous agents | `X` | Not held. |

## I. Tumour lysis syndrome

| # | Clinical input | Conf | Note |
|---|---|---|---|
| I1 | TLS risk categories for venetoclax and their exact defining criteria | `V` | *(low / medium / high, defined by largest node diameter and ALC, with renal function modifying)* — I believe the node cut-points are around <5 cm, 5–<10 cm, ≥10 cm and the ALC cut-point is 25 × 10⁹/L, **but I am not confident in how the two axes combine**, and getting the combination wrong is a patient-safety-relevant error. Must come from the label. |
| I2 | Venetoclax 5-week ramp-up doses | `V` | *(20 → 50 → 100 → 200 → 400 mg, weekly)* — verify against the label, including whether CLL ramp differs from other indications. |
| I3 | Hydration requirements per risk tier (oral volume, IV) | `X` | Do not hold rule-grade volumes. |
| I4 | Anti-hyperuricaemic prophylaxis per tier (allopurinol vs rasburicase, timing) | `V` | Held qualitatively; timing/lead-in not held. |
| I5 | Laboratory monitoring schedule per tier (which labs, at what hours post-dose) | `X` | **Not held.** The 6–8h/24h structure I vaguely recall must not be written from memory. |
| I6 | Inpatient vs outpatient setting rules per tier | `V` | Believe high risk and reduced renal function push toward inpatient first doses. Verify against label. |
| I7 | Renal function threshold that escalates TLS risk | `V` | *(CrCl <80 mL/min)* — verify; this is a specific number the tool will act on. |
| I8 | Dose-modification rules if ramp-up is interrupted | `X` | Not held. |
| I9 | Whether debulking before venetoclax is recommended and how | `V` | Aware of the concept (e.g. obinutuzumab lead-in reducing burden). Needs sourcing. |
| I10 | TLS risk for non-venetoclax regimens (obinutuzumab first infusion) | `V` | Believe obinutuzumab carries its own first-dose TLS/IRR risk with its own splitting schedule *(100 mg day 1 / 900 mg day 2)* — verify. |

## J. Cardiac considerations

| # | Clinical input | Conf | Note |
|---|---|---|---|
| J1 | Baseline cardiac assessment before a BTKi (ECG? echo? BP?) | `X` | Do not hold a sourced baseline work-up list. |
| J2 | Atrial fibrillation risk by agent (ibrutinib vs acalabrutinib vs zanubrutinib) | `V` | Hold the direction (second-generation lower than ibrutinib); **do not hold citable rates** and will not state numbers from memory. |
| J3 | Whether existing AF is a contraindication or a preference-modifier, and for which agents | `V` | Believe it is a strong preference-modifier, not an absolute contraindication. Needs sourcing — a core tool rule. |
| J4 | Hypertension incidence/management on BTKi | `V` | Qualitative only. |
| J5 | Ventricular arrhythmia / sudden death signal on ibrutinib | `V` | Aware of the label signal; **do not hold the current label wording**. |
| J6 | Anticoagulation with a BTKi: what is permitted, what is avoided, peri-procedural hold durations | `X` | **Not held at rule grade.** Believe vitamin K antagonists are avoided and there are hold periods around surgery, but I will not state durations. |
| J7 | Antiplatelet co-administration guidance | `X` | Not held. |
| J8 | Cardiac considerations for non-BTKi agents in the list | `X` | Not held. |
| J9 | Whether a cardio-oncology referral threshold is defined anywhere | `X` | Not held. |

## K. Renal, hepatic and other organ dosing

| # | Clinical input | Conf | Note |
|---|---|---|---|
| K1 | Renal dose adjustments for each agent, with CrCl bands | `X` | **Not held.** Must come from labels, per agent. |
| K2 | Dialysis patients: any data/label statement per agent | `X` | Not held. |
| K3 | Hepatic impairment adjustments per agent (Child-Pugh bands) | `X` | Not held. I recall venetoclax has a severe-impairment reduction; will not state the fraction. |
| K4 | Which creatinine-clearance equation the tool should use (Cockcroft-Gault vs eGFR) | `V` | Believe labels are written in Cockcroft-Gault CrCl; this matters because the tool will compute it. Verify per label. |
| K5 | CYP3A4 inhibitor/inducer interaction rules and the venetoclax dose reductions they force | `V` | Aware strong and moderate inhibitors force specific reductions during ramp and steady state; **do not hold the fractions**. Safety-relevant — label only. |
| K6 | P-gp / narrow-therapeutic-index co-medication rules | `X` | Not held. |
| K7 | Gastric acid-reducing agent interaction (relevant to at least one BTKi) | `V` | Believe acalabrutinib tablets removed the PPI restriction that applied to capsules. **Verify — this is a formulation-specific trap.** |
| K8 | Pregnancy/lactation/fertility statements per agent | `X` | Not held. |
| K9 | Elderly/frailty dose considerations, and which fitness instrument is expected (CIRS? ECOG? CGA?) | `V` | Believe CIRS and creatinine clearance defined "fit" in the trial era; whether guidelines still stratify by fitness in the targeted era needs sourcing. |

## L. Infection prophylaxis, vaccination, supportive care

| # | Clinical input | Conf | Note |
|---|---|---|---|
| L1 | HBV/HCV/HIV screening requirements before anti-CD20 therapy, and HBV reactivation prophylaxis rules | `V` | Believe screening is mandatory and HBcAb-positive patients need prophylaxis/monitoring. Needs exact sourced rule. |
| L2 | PJP prophylaxis: which regimens trigger it | `X` | Not held at rule grade for the current regimen set. |
| L3 | Antiviral (HSV/VZV) prophylaxis triggers | `X` | Not held at rule grade. |
| L4 | Vaccination schedule and live-vaccine prohibition | `V` | Believe live vaccines are contraindicated; the rest of the schedule is not held. |
| L5 | Immunoglobulin replacement: IgG threshold and infection-frequency trigger | `V` | *(IgG <4 g/L plus recurrent infections)* — verify; regionally relevant because IVIG is a cost/access issue. |
| L6 | G-CSF use with the relevant regimens | `X` | Not held. |
| L7 | Autoimmune cytopenia management pathway | `X` | Not held at rule grade. |
| L8 | Secondary malignancy surveillance (skin especially) | `V` | Qualitative only. |

## M. Pivotal trial for each regimen

The tool must name a pivotal trial per regimen. I hold trial *names* with
moderate confidence and trial *numbers* with low confidence. **No efficacy
figure will be written from memory.**

| # | Regimen | Trial I believe is pivotal | Conf | Note |
|---|---|---|---|---|
| M1 | Venetoclax-obinutuzumab 1L | *CLL14* | `V` | Need the current long-term publication, not just the primary readout. |
| M2 | Acalabrutinib ± obinutuzumab 1L | *ELEVATE-TN* | `V` | Verify. |
| M3 | Acalabrutinib vs ibrutinib R/R | *ELEVATE-RR* | `V` | Verify; this is the head-to-head cardiac-safety citation. |
| M4 | Zanubrutinib 1L | *SEQUOIA* | `V` | Verify, incl. the del(17p) arm. |
| M5 | Zanubrutinib vs ibrutinib R/R | *ALPINE* | `V` | Verify. |
| M6 | Ibrutinib-venetoclax 1L | *GLOW* and/or *CAPTIVATE* | `V` | Verify which is the registrational one for which population. |
| M7 | Acalabrutinib-venetoclax ± obinutuzumab 1L | *AMPLIFY* | `V` | Verify — including whether my recollection of a 2025 approval is real. |
| M8 | Venetoclax-rituximab R/R | *MURANO* | `V` | Verify. |
| M9 | Pirtobrutinib R/R | *BRUIN* | `V` | Verify phase and the registrational cohort. |
| M10 | Liso-cel in CLL | *TRANSCEND CLL 004* | `V` | Verify. |
| M11 | Multi-arm 1L comparison incl. chemoimmunotherapy | *CLL13 / GAIA* | `V` | Verify. |
| M12 | Ibrutinib 1L (historical) | *RESONATE-2* | `V` | Verify. |
| M13 | Early treatment of high-risk asymptomatic disease | *CLL12* and/or *EVOLVE* | `V` | Needed for D10/B8. Verify what has read out. |
| M14 | FCR long-term / IGHV-mutated plateau | `X` | Aware of long-term FCR follow-up publications; do not hold a specific citable one. |
| M15 | Any 2025–2026 readout that changes the above | `X` | **Explicitly not held.** Between my cutoff and today there may be practice-changing readouts I cannot know about. |

## N. Regional, regulatory and formulary (UAE, Qatar, Oman, Kuwait)

| # | Clinical input | Conf | Note |
|---|---|---|---|
| N1 | Whether a Gulf/GCC-specific CLL guideline exists at all | `X` | **Do not know.** Will search; may not exist. |
| N2 | SFDA approval status per agent | `X` | Not held. |
| N3 | UAE MOH / DoH Abu Dhabi / DHA formulary status per agent | `X` | Not held. |
| N4 | Qatar (HMC/MoPH) formulary status | `X` | Not held. |
| N5 | Oman (MoH) formulary status | `X` | Not held. |
| N6 | Kuwait (MoH) formulary status | `X` | Not held. |
| N7 | Insurance/reimbursement pathways and prior-authorisation criteria per country | `X` | Not held. |
| N8 | Local availability of FISH/TP53 sequencing/MRD assays | `X` | Not held — this materially affects whether a TP53-branch rule is actionable locally. |
| N9 | Local practice patterns (e.g. residual chemoimmunotherapy use on cost grounds) | `X` | Not held. |
| N10 | Whether any local guidance conflicts with ESMO/NCCN | `X` | Not held. |

## O. Tool-behaviour questions that are clinical, not technical

| # | Question | Conf | Note |
|---|---|---|---|
| O1 | Should the tool ever output a single recommended regimen, or always a source-cited option set? | `X` | A design decision with clinical-safety consequences — needs the user's decision, not a guideline. |
| O2 | Is the intended user a haematologist, a general physician, or a commercial/medical-affairs audience? | `X` | Changes what may safely be omitted. Needs the user's answer. |
| O3 | Should the tool refuse to output anything where guidelines conflict, or show both? | `V` | The brief already answers this: show both. Recorded here for completeness. |
| O4 | Is this tool intended to inform patient care, or is it a medical-affairs/education asset? | `X` | Determines the disclaimer and possibly regulatory posture. Needs the user's answer. |

---

## Summary of the audit

- Items held **with confidence** (`C`): 1
- Items held but **needing verification** (`V`): 52
- Items **not held** (`X`): 40

The one `C` is a definition, not a number. **There is not a single numeric
threshold in this tool that I am willing to write from memory.** That is the
honest position and it is why Phase 0 exists.
