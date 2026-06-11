---
name: jurnal-koreksi
description: Use this skill whenever the user asks for a thorough academic review of a research document — thesis, final assignment, tugas akhir, skripsi, tesis, disertasi, research report, journal or conference paper, research proposal, or any document that combines research writing with code or computational methods. Trigger on phrases like "review my thesis / paper / final assignment", "check my skripsi / tesis", "feedback on my research", "examine my proposal", "thorough / comprehensive / page-by-page review", "act as penguji / pembimbing / peer reviewer", or when a user uploads a substantial research document (typically 20+ pages) and asks for evaluation, critique, or examiner-style feedback. Use even on short papers when the user asks for an "academic", "rigorous", or "examiner-quality" review. The skill produces a bilingual Indonesian + English review tied to specific pages and sections, covering the document cover-to-cover with consistent rigor.
---

# Research Review

A skill for conducting thorough, consistent, page-by-page academic reviews of research documents — including those with code, data analysis, or computational methods.

The goal: review like a careful human academic reviewer who reads from cover to cover, applies one consistent rubric throughout, ties every finding to a specific page or section, and produces an actionable bilingual review (Indonesian + English) the author can act on.

## What this skill covers

- Indonesian academic structure: Tugas Akhir, Skripsi (S1), Tesis (S2), Disertasi (S3)
- International formats: journal articles, conference papers, IMRaD-style research reports
- Research proposals and progress reports
- Documents with embedded code, code appendices, or supplementary code files
- Reviews from three angles: penguji (strict examiner), pembimbing (constructive supervisor), peer reviewer (journal standards)

## Anti-patterns this skill prevents

AI reviewers commonly fail in three ways. This skill defends against each:

1. **Shallowness.** Generic comments like "improve the methodology" or "literature review needs more sources" are useless. The protocol requires every finding to cite a specific page or section heading and to quote or closely paraphrase the problematic text. Findings without a location are not findings.

2. **Inconsistency in depth.** Reviewer attention typically degrades after Chapter 2. The protocol requires a section coverage log filled in as you read; the final report cannot be composed until every inventoried section has at least one logged entry (a "no major issues" entry is fine, but it must be a deliberate decision, not an oversight).

3. **Drift in standards.** Applying tougher standards to early sections than late ones, or tougher standards to writing than to code. The rubric is fixed at the start of Step 1 and reused unchanged on every section and on the code.

## Workflow

Follow these steps in order. Do not skip ahead. Do not write the final report until Step 6.

### Step 0 — Setup conversation

Before reading the document, confirm with the user in one short message (combine all questions):

1. **Reviewer role** — which lens to apply:
   - *Penguji* (strict examiner) — flag every issue, be direct, end with a revision recommendation
   - *Pembimbing* (constructive supervisor) — flag the same issues but with constructive framing, end with a prioritized to-do list for the student
   - *Peer reviewer jurnal* — apply journal standards (significance, novelty, soundness, presentation), end with Accept / Minor Revision / Major Revision / Reject
2. **Document level** — undergraduate (S1 / Tugas Akhir / Skripsi), graduate (S2 Tesis / S3 Disertasi), or journal/conference paper. Affects expected depth and rigor.
3. **Scope** — full cover-to-cover review, or focused (specific chapters, methods only, code only, statistics only, writing only). Default is full.
4. **Anything the user wants particularly checked** — e.g., "I'm worried about Chapter 3 statistics", "supervisor said the related work is thin", "please be tough on the discussion section".
5. **Output language** — bilingual ID + EN (default), Indonesian only, or English only.

If the user already provided any of these earlier in the conversation, do not re-ask — just summarize what you'll do and proceed.

### Step 1 — Load the rubric

Before opening the document, read the reference files. This fixes your standards before you encounter the document so they cannot drift:

- `references/review-protocol.md` — section-by-section rubric for both thesis-style (Bab 1–5) and paper-style (IMRaD) documents. Required reading.
- `references/code-review-criteria.md` — required if the document has any code (in the body, an appendix, or as supplementary files).
- `references/report-template.md` — the output format. Required reading.
- `references/indonesian-academic-voice.md` — required reading whenever the output includes Indonesian (bilingual mode or ID-only mode). Phrase patterns, register, and anti-patterns for writing the review in the voice of a senior Indonesian academic (Profesor / Guru Besar / penguji senior), not in translated AI-speak.

Read these in full. Do not skim.

### Step 2 — Inventory pass

Make one fast pass through the document to map its structure. Produce an explicit **section inventory** that you will use as your coverage checklist later. For each chapter / section / subsection record:

- Section title and starting page
- Approximate page count
- Whether it contains code, equations, figures, tables
- Language used (especially abstract vs abstrak)

Also record at document level:
- Total page count
- Document type (thesis, paper, proposal, report)
- Structure type (Bab 1–5 Indonesian thesis, IMRaD, hybrid)
- Front matter present: cover, approval page (lembar pengesahan), originality statement (pernyataan keaslian), abstract (Indonesian + English), foreword (kata pengantar), table of contents, list of figures / tables / abbreviations
- Back matter present: references (daftar pustaka), appendices (lampiran), code listings
- Any visible formatting or completeness issues at a glance

This inventory is your "first page to last page" contract. Every numbered entry must reappear in your section-by-section findings later, and you must check this before composing the report.

### Step 2.5 — Render pages to images for visual inspection

Text extraction from PDF or DOCX **loses all figures, embedded images, equation rendering, and most spatial layout**. A thorough review cannot rely on text extraction alone, because critical evidence often sits in figures, screenshots, plots, and architecture diagrams — including problems the authors themselves may not be aware of (privacy leaks in screenshots, mislabeled chart axes, blurry data points, inconsistencies between figure captions and figure content, anonymity breaches via URL bars or file paths).

Required workflow:

1. Convert the document to PDF if not already in that format (`soffice` for docx, the file directly if already PDF).
2. Rasterize every page to image at usable resolution (120 DPI is enough for inspection; 150–200 DPI if reading small fonts in figures).
3. **View every page that the inventory pass flagged as containing a figure, equation, table, or screenshot.** Do not assume the text caption is faithful to the figure content.
4. Record visual findings using the same finding format as the section pass, prefixed `VIS-` (e.g., VIS-1, VIS-2). Tag as `[F]` (figure quality), `[E]` (ethics / anonymity / privacy), or other tags as relevant.

What to look for during visual inspection:

- **Anonymity / privacy leaks** — usernames in URL bars or file paths visible in screenshots; author names visible on slides or whiteboards; faces of identifiable people in photos; institutional logos that disclose authorship in double-blind venues; timestamps that identify reviewers in tracked-changes screenshots.
- **Figure caption vs figure content consistency** — does Figure N actually show what its caption claims? Do axis labels match the caption's variable names? Are the units consistent?
- **Chart quality issues** — illegible fonts, missing legends, missing units, color choices that fail in grayscale or for colorblind readers, misleading axis scales, truncated y-axes.
- **Architecture diagrams** — does the diagram match what the equations and prose say? Sometimes the diagram is *clearer* than the text and exposes inconsistencies in the text (mis-named operations, missing components, broadcast/dimension issues).
- **Training/validation curves** — flat validation lines from epoch 1 suggest task triviality; large train/val gap suggests overfitting; impossibly smooth curves may indicate plotting from selected subset rather than all runs.
- **Confusion matrices and result tables** — do the numbers shown sum to what the methods section says the test set size is?
- **Screenshot quality** — was a notebook output cropped to hide errors? Are browser windows / IDE chrome visible (unprofessional and may leak metadata)?
- **Equation rendering** — did LaTeX/Word equations render correctly, or are there broken symbols, missing parentheses, misrendered subscripts?
- **Photographs** (if any) — for thesis appendices showing experimental setups, lab equipment, field sites: check for incidentally captured private information.

This step is not optional. Skipping it routinely misses serious findings that exist only in the visual content of the document.

### Step 3 — Forensic Line-by-Line Deep Pass (Ultra-Extreme Mode)

Now read the document in order, examining it **line-by-line and paragraph-by-paragraph**, applying `references/review-protocol.md` to each one. Do not just skim for section headings. You must actively hunt for logical gaps, missing citations for strong claims, vague filler words, and methodological inconsistencies in *every single sentence*.

If it claims "X is widely used", demand the citation. If it claims "Y achieved high accuracy", demand the exact metric and baseline. Do not let any sentence pass without extreme scrutiny.

For every finding, record all of:

- **Location** — page number, section heading, and (where useful) paragraph or line
- **Quote or close paraphrase** — what the document actually says, so the author can find it
- **Issue** — what is wrong or weak, and why it matters
- **Severity** — Major / Minor / Optional (definitions in the template)
- **Suggested fix** — concrete and actionable, not "improve clarity"

Maintain a running findings log as you go. Do not start writing the report yet.

If a section has no significant problems, record this explicitly as one entry: `Lokasi: [section]; Catatan: no major issues; key strengths: [1–2 specific things]`. Do not skip the section silently.

**Consistency rule:** apply the same rubric depth to every section. If you noticed citation format issues in Chapter 2, check for the same in Chapter 5. If you checked statistical reporting in the results section, check that the methods section actually justified those statistics. Symmetry of attention is the main thing distinguishing a thorough reviewer from a shallow one.

### Step 4 — Cross-cutting checks

After the section pass, run these whole-document checks. Record findings in the same format:

1. **Objective → method → result → conclusion alignment.** For each research objective stated in Chapter 1 / Introduction, confirm there is a matching method in Chapter 3 / Methods, a matching result in Chapter 4 / Results, and a matching conclusion in Chapter 5 / Conclusion. Flag any orphan objective (no method or no result) and any orphan result (no driving objective).
2. **Citation–reference consistency.** Spot-check that in-text citations appear in the reference list and vice versa. Flag missing references, obvious formatting drift (mixing APA / IEEE / Vancouver), and any citation to "Anonymous", "Anon", or a URL with no other metadata.
3. **Figure and table cross-references.** Every figure and table should be referred to in the body text by number. Flag orphan figures / tables and any text reference to a figure number that doesn't exist.
4. **Claim–evidence alignment.** Strong claims (especially in abstract, discussion, and conclusion) must be supported by results or citations. Flag unsupported strong claims and any overclaiming relative to what the results actually show.
5. **Code–description consistency** (if code is present). The code should implement what the methodology section describes. Flag any mismatch — e.g., paper says "we used Random Forest with 5-fold CV" but the code uses XGBoost with a single train/test split.
6. **Abstract–body consistency.** The abstract's claims, methods summary, and result numbers should match what's in the body.
7. **Reproducibility signals.** Are dataset source, preprocessing steps, hyperparameters, random seeds, evaluation metrics, and software versions documented sufficiently for someone else to reproduce the results?

### Step 5 — Code review (only if code is present)

If the document contains code in any form, run the code review per `references/code-review-criteria.md`. Treat code review with the same rigor as document review — same severity scale, same requirement for specific locations, same requirement for concrete suggested fixes. Findings go into the same log, tagged as code findings.

### Step 6 — Compose the review report

Use `references/report-template.md`. Before composing, run this **coverage check**:

- Every chapter and section from the Step 2 inventory has at least one findings log entry (a "no major issues" entry counts)
- Every finding has a location, severity, and suggested fix
- **Step 2.5 visual inspection has been performed** — every figure / equation / table flagged in the inventory has been viewed as a rendered image, and visual findings (VIS-*) are logged
- All seven cross-cutting checks have results recorded (even if "no issues")
- Code review section is present if any code was present
- Findings have not been silently dropped or merged

Only proceed to write the report once all coverage checks pass. If a check fails, return to the relevant step.

**CRITICAL FORMATTING RULE**: You MUST list findings explicitly grouped by Chapter / Sub-chapter (e.g. `## Abstract`, `## 1. Introduction`, `## 2. Methods`). DO NOT group findings by "Fatal", "Major", or "Minor". You must walk through the document chronologically and list the flaws exactly where they appear.

Compose the report bilingual by default (ID + EN), or in the language(s) the user selected in Step 0. Match the chosen reviewer role: penguji is direct, pembimbing is constructive, peer reviewer applies journal standards. End with the appropriate decision:

- Penguji → revision recommendation (Revisi Major / Revisi Minor / Diterima)
- Pembimbing → prioritized action list for the student (top 3–7 next steps)
- Peer reviewer → Reject / Major Revision / Minor Revision / Accept, with a brief justification

## Calibration rules

- **Never invent issues to seem rigorous.** False positives undermine trust as much as false negatives. If a section is genuinely solid, say so with one or two specific strengths.
- **Severity is about impact on the work, not effort to fix.** A missing citation in the abstract for a strong claim is Major even though it takes 30 seconds to fix. A typo on page 47 is Minor even if it's annoying.
- **Be specific.** "Methods section is unclear" is not a finding. "Page 23, section 3.2.1: the train/test split ratio is not stated, and the random seed is not given, so the reported 87.3% accuracy is not reproducible" is a finding.
- **Quote the document.** When flagging an issue, quote or closely paraphrase the actual text. This makes the finding verifiable and saves the author time hunting for the problem.
- **Distinguish writing problems from substance problems.** Both matter. Use the rubric tags (W = writing, S = substance, M = methodology, C = code, R = references, F = figures/tables, E = ethics) to make this explicit.

## On length and tone

A serious review of a 60-page thesis typically runs 8–20 pages. Do not pad with restatement of what the document already says. Every paragraph in the review should: (a) identify a specific issue, (b) confirm a specific strength, or (c) make a specific recommendation. If a paragraph does none of these three, cut it.

In bilingual mode, ID and EN convey the same content — not different content. Translate findings, do not invent new ones for the other language.

## On Indonesian academic voice (penting)

When the review output includes Indonesian — bilingual mode or ID-only mode — the Indonesian text must sound like a real senior Indonesian academic conducting an evaluation. Not a machine translation of the English. Not generic AI Indonesian. The voice should resemble a Profesor / Guru Besar acting as penguji, pembimbing senior, or peer reviewer for a national/international journal.

Three principles govern this voice:

1. **Specificity carries authority.** A Professor's evaluation is concrete: it names *this paragraph*, *this calculation*, *this assumption*, *this citation* — not "the methodology in general". Authority comes from specific evidence, not from forceful adjectives. "Klaim ini berlebihan" without naming the claim is weak; "Klaim pada halaman 47 bahwa model 'mengungguli semua metode sebelumnya' tidak didukung karena tidak ada perbandingan langsung dengan Xu et al. (2023) yang melaporkan akurasi serupa pada dataset yang sama" is what a Professor sounds like.

2. **Confidence with appropriate humility.** A senior academic is direct about what is clearly wrong, but acknowledges where judgment is involved. Use markers like "Saya tidak yakin apakah...", "Ini tergantung pada interpretasi...", "Dalam tradisi penelitian X, hal ini umum, namun dalam tradisi Y, tidak". Avoid both timid hedging on clear issues and false certainty on judgment calls.

3. **Pedagogical when warranted.** A Professor often explains *why* something matters — not to lecture, but because the explanation is what makes the feedback useful. "Hal ini penting karena pembaca jurnal di domain ini akan mengasumsikan..." or "Konvensi dalam bidang ini adalah..." — these turn a complaint into a teaching moment.

The detailed phrase bank, register guidance, do/don't examples, and per-mode (penguji / pembimbing / peer reviewer) voice templates are in `references/indonesian-academic-voice.md`. Consult that file whenever composing the Indonesian portion of a review. Common AI-translation tells to avoid (e.g., "dalam rangka untuk", "dapat dikatakan bahwa", excessive "yang mana", literal renderings of "this study aims to investigate") are catalogued there with their natural-Indonesian replacements.

The English portion of bilingual output should match in register: a senior academic's English, not a marketing summary. But the explicit care goes to the Indonesian — that is where translated AI-speak shows up most obviously to an Indonesian academic reader.

## Final delivery

Deliver the review as a single document (markdown by default; if the user prefers, a .docx via the docx skill). Include the coverage checklist at the end as proof that every inventoried section was reviewed. The author should be able to look at the checklist and verify that nothing was skipped.
