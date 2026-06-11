# Review Protocol — Section-by-Section Rubric

This file contains the rubric to apply in Step 3 of the workflow. Read it fully before the inventory pass so your standards are fixed.

The rubric covers two structures: Indonesian thesis (Bab 1–5 + front/back matter) and IMRaD journal/conference paper. A "hybrid" document (e.g., thesis written in journal-paper style) uses whichever section's rubric maps best.

## Severity definitions

- **Fatal (Desk Reject)** — immediate rejection for Scopus Q1/Q2 or Sinta 1/2. Examples: Data leakage (e.g. normalizing before train-test split), complete absence of baseline comparison, methodological fraud (claiming Agile but doing Waterfall), unbacked claims in abstract/conclusion, or critical missing evaluation metrics.
- **Major** — affects validity, reproducibility, or core argument. Must be fixed before the work can be accepted at its target level. Examples: missing methodology details that make results irreproducible; unsupported core claim in the conclusion; statistical test inappropriate for the data; large block of unattributed text.
- **Minor** — affects clarity, completeness, or polish but not validity. Should be fixed. Examples: undefined acronym on first use; inconsistent terminology; figure caption uninformative; missing axis units; a paragraph that belongs in a different section.
- **Optional** — would improve the work but is not required. Examples: phrasing suggestions; additional reference that would strengthen a point; alternative figure type that would communicate better.

## Forensic Line-by-Line Protocol (Ultra-Ekstrem)

To ensure ZERO loopholes, enforce these rules on **every paragraph**:
1. **The "Citation Demand" Rule**: Any sentence making a factual claim, defining a concept, or stating a state-of-the-art must have a citation. If missing, flag as W/R (Writing/Reference).
2. **The "Numbers over Adjectives" Rule**: Reject words like "good", "high", "fast", "better" if they are not immediately backed by numbers (e.g., "accuracy improved by 14%", "latency reduced to 12ms"). Flag as S (Substance).
3. **The "Orphan Theory" Rule**: Any theory explained in the literature review that is NOT implemented in the methodology must be flagged for deletion.
4. **The "Methodology Audit" Rule**: Hunt for discrepancies between the method's name and its execution. If they claim "Deep Learning" but only use a 1-layer perceptron, flag as Tech-Washing (Fatal).
5. **The "Data Leakage" Hunter**: Always scrutinize the exact order of data preprocessing. If scaling/imputation is done before splitting, flag as Fatal.

## Tag system

Tag each finding with one of these for cross-cutting analysis:

- **W** — Writing / language / style
- **S** — Substance / argument / interpretation
- **M** — Methodology / experimental design / statistics
- **C** — Code / implementation / reproducibility
- **R** — References / citations
- **F** — Figures / tables / equations
- **E** — Ethics / data handling / academic integrity

Multiple tags allowed (e.g., M+C for a methodology issue rooted in the code).

---

## Front matter (Indonesian thesis)

### Cover page (Halaman Sampul / Halaman Judul)

- Title is informative, specific, and reflects the actual work (not vague like "Analisis Data Menggunakan AI")
- Title length reasonable (typically 12–20 words; very long titles often indicate unfocused work)
- Author name, NIM, program study, faculty, university, year present and correctly formatted per institution's template
- Document type clearly stated (Skripsi / Tesis / Disertasi / Tugas Akhir)

### Approval page (Lembar Pengesahan / Halaman Pengesahan)

- Present and signed (or marked for signature) by all required parties (pembimbing, ketua program studi, dekan, etc. per institution)
- Date present
- Title matches cover page exactly

### Originality statement (Pernyataan Keaslian / Pernyataan Orisinalitas)

- Present and signed
- Wording aligns with institution's template

### Abstract (Abstrak — Bahasa Indonesia)

Check:
- Length within institution's word limit (typically 150–300 words)
- Contains all four IMRaD elements: background/problem, method, key results (with numbers), conclusion
- Specific result numbers reported (e.g., accuracy 92.4%, RMSE 0.31) — not vague ("hasil yang baik")
- Keywords (kata kunci) present, 3–5 items, relevant, not duplicates of title words
- Tense and voice consistent with institutional convention
- Does not contain citations, abbreviations on first use, or future tense

### Abstract (Abstract — English)

- Present (required for most Indonesian institutions)
- Faithful translation of Indonesian abstract (same content, same numbers)
- Grammatically correct English — flag obvious machine-translation artifacts (e.g., "this research aims to investigate about...", literal word-for-word renderings, mistranslated technical terms)
- Same keyword count and meaning as kata kunci

### Foreword (Kata Pengantar)

- Present per institutional requirement
- No technical content (acknowledgments only)

### Table of contents, list of figures, list of tables, list of abbreviations

- Page numbers match actual document
- All chapters and major sections listed
- Figure and table captions in lists match those in body
- List of abbreviations (Daftar Singkatan) present if many acronyms used

---

## Chapter 1 — Introduction (Pendahuluan)

Typical subsections: Latar Belakang, Rumusan Masalah, Tujuan Penelitian, Batasan Masalah, Manfaat Penelitian, Sistematika Penulisan.

### Background (Latar Belakang)

- Establishes the broader context / domain (e.g., why disaster risk reduction matters, why food security matters)
- Narrows to the specific problem with supporting data or citations
- Identifies the research gap — not just "this hasn't been done before" but *why* it matters that it hasn't
- Citations are recent (typically ≥50% from last 5 years, except foundational works)
- Avoids generic openings ("In this era of globalization...", "Di era revolusi industri 4.0...") unless directly relevant
- Background does not drift into literature review (save that for Chapter 2)
- Flow: domain → problem → gap → this work fills the gap

### Problem formulation (Rumusan Masalah)

- Stated as research questions (typically 2–4)
- Questions are answerable within the scope of the work (not "how can we solve world hunger")
- Each question maps to a tujuan and will map to a result
- Questions are specific — flag vague phrasing like "Bagaimana mengembangkan sistem yang baik?"

### Objectives (Tujuan Penelitian)

- One tujuan per rumusan masalah (typical convention)
- Phrased as actions ("untuk mengembangkan...", "untuk menganalisis...", "untuk mengevaluasi...")
- Each tujuan must have a matching method in Chapter 3 and a matching result in Chapter 4 — note this for the cross-cutting check in Step 4

### Scope and limitations (Batasan Masalah)

- States dataset boundaries, methodological boundaries, geographic / temporal boundaries
- Not used to retroactively excuse missing work that should have been done

### Benefits (Manfaat Penelitian)

- Typically split into theoretical / academic benefits and practical / societal benefits
- Specific and realistic (not "akan mengubah dunia")

### Writing systematics (Sistematika Penulisan)

- Present and accurately describes the chapters that follow

---

## Chapter 2 — Literature Review / Theoretical Foundation (Tinjauan Pustaka / Landasan Teori)

Typical subsections: Penelitian Terdahulu / Related Work, theoretical foundations of methods used, conceptual framework.

### Related work (Penelitian Terdahulu / State of the Art)

- Covers the most relevant work in the area, not just papers easy to find
- Recent — recency expectations: S1 ≥30% last 5 years; S2/S3 ≥50% last 5 years; journal paper ≥60% last 5 years, with at least 2–3 papers from the most recent 2 years
- Comparison table or matrix is highly recommended for thesis-level work; flag its absence as Minor
- Each cited work's contribution and limitation explained, not just summarized
- Clear positioning: how does this work differ from / build on / improve upon prior work?
- Avoids over-reliance on textbook citations when peer-reviewed sources exist

### Theoretical foundations

- Covers concepts and methods actually used in the work (not unrelated background)
- Depth proportional to how the concept is used — if Random Forest is the main method, it gets a real explanation; if it's mentioned once, a sentence is enough
- Mathematical formulations correctly written and explained, not just dumped
- Definitions consistent with mainstream sources
- Avoids "Wikipedia-style" tone (encyclopedic listing without integration)

### Common Chapter 2 problems to flag

- "Theory dump" — covers every method ever heard of, then uses one of them in Chapter 3
- Missing connection between Chapter 2 and Chapter 3 — methods used in Chapter 3 should have been introduced here
- Citations stack without analysis ("(Smith, 2019; Jones, 2020; Lee, 2021)") — what did each contribute? what's different?
- Cited works' findings inaccurately reported (spot-check 2–3 if possible)
- Single-source over-reliance on one or two papers
- Predatory-journal citations (note any publisher patterns that look like predatory open-access mills)

---

## Chapter 3 — Methodology (Metodologi Penelitian / Metode Penelitian)

This is typically the most consequential chapter for reproducibility. Apply maximum rigor.

### Research design

- Research type stated (kuantitatif / kualitatif / mixed methods; experimental / observational; design science / DSR)
- Design is appropriate for the research questions
- Population, sample, sampling technique stated where relevant
- Workflow diagram present and matches the text

### Data

- Data source stated (with citation, URL, or owner if private)
- Data size: number of records, features, classes, time range
- Data collection method (if collected) or access date (if downloaded)
- Inclusion / exclusion criteria
- Preprocessing steps documented in enough detail to reproduce: missing-value handling, outlier handling, normalization / standardization, encoding, train/validation/test split with ratios, stratification if any, random seed
- Class balance if classification problem; handling strategy if imbalanced (SMOTE, class weighting, etc.) explicitly stated
- Data quality assessment present
- Ethics statement / informed consent / data privacy (if human subjects data) — flag absence as E

### Methods / models / algorithms

- All methods used are introduced (those introduced should match Chapter 2)
- Hyperparameters listed for each model (not just "we tuned with grid search" — what range, what was selected?)
- Feature engineering / selection method documented
- Software and version (Python 3.x, scikit-learn version, TensorFlow version, R packages, etc.)
- Random seeds documented for reproducibility — flag absence as M+C
- Hardware specification if computationally relevant

### Evaluation

- Metrics chosen are appropriate for the task (accuracy alone for imbalanced classification → flag M)
- Multiple metrics where appropriate (precision, recall, F1 for classification; MAE, RMSE, R² for regression)
- Validation strategy: hold-out, k-fold, time-series split as appropriate
- Baseline / comparison models defined — flag absence; you cannot claim "the model performs well" without something to compare to
- Statistical significance testing where claims of "better than" are made
- For deep learning: training curves, early stopping criteria, batch size, optimizer, learning rate

### Common Chapter 3 problems to flag

- "Black box" methodology — reader cannot reproduce the work even in principle
- Train/test contamination risks (e.g., normalization fit on full dataset before split)
- Cherry-picked metric — only the metric that looks best is reported
- No baseline comparison
- Inappropriate metric for the task (accuracy for highly imbalanced data, R² for non-linear fits, etc.)
- Method described in Chapter 3 differs from method actually implemented in the code (cross-check in Step 5)
- Missing ethics review for human-subjects work

---

## Chapter 4 — Results and Discussion (Hasil dan Pembahasan)

Often split into two parts (results, then discussion); sometimes integrated.

### Results

- Each tujuan from Chapter 1 has corresponding results — confirm in Step 4 cross-check
- Results presented before being interpreted
- Numbers reported with appropriate precision (don't report 87.3245% accuracy on 100 test samples)
- Confidence intervals or standard deviations where averaging across runs / folds
- Tables and figures captioned informatively (a reader should understand the figure without reading the text)
- Units present on all axes / values
- Color choices in figures are legible (and accessible — avoid red-green only encoding)
- Captions are self-contained (state what is shown, the source, key takeaway)

### Discussion

- Results interpreted, not just restated ("the accuracy of model A is higher than model B" → so what? *why* is it higher? what does it mean?)
- Comparison with prior work — does this work confirm / extend / contradict earlier findings?
- Limitations stated honestly (sample size, generalizability, computational constraints, dataset bias)
- Threats to validity discussed where relevant
- Practical implications, especially for applied work (disaster, health, food, agriculture domains — translate technical results to domain-relevant impact)
- No overclaiming relative to evidence

### Common Chapter 4 problems to flag

- Results section restates methodology (belongs in Chapter 3)
- Discussion repeats results without interpreting
- Limitations section absent or perfunctory ("limitasi penelitian ini adalah waktu yang terbatas") — meaningful limitations are about validity, not effort
- Results presented but never compared to prior work
- "Best model" claimed without statistical justification
- Figures and tables without text engagement ("Figure 4.3 shows the results.") — what about them?
- Discussion ventures far beyond what the data supports

---

## Chapter 5 — Conclusion and Suggestions (Kesimpulan dan Saran)

### Conclusion (Kesimpulan)

- One conclusion per rumusan masalah / tujuan, in order
- Conclusions are supported by results, not by hopes
- Numbers from results are cited (not vague "the model works well")
- Does not introduce new arguments or evidence not in Chapter 4

### Suggestions (Saran)

- Practical suggestions for stakeholders (if applicable)
- Future work suggestions are specific (not "future research could explore other methods" — *which* methods, on *what* data, for *what* purpose?)
- Limitations from Chapter 4 motivate the future work

### Common Chapter 5 problems to flag

- Mismatch between tujuan in Chapter 1 and kesimpulan in Chapter 5 (orphan tujuan, or kesimpulan that answers a question never asked)
- Overclaiming ("this study has solved...") relative to scope
- Future work is generic boilerplate
- Conclusion is just a summary of every chapter (a *summary* is not a *conclusion*)

---

## Back matter

### References (Daftar Pustaka)

- Consistent citation style throughout (APA, IEEE, Vancouver, Harvard — pick one; institutional template usually mandates one)
- Every reference has author(s), year, title, source, and location (page numbers for chapters, DOI / URL for online)
- DOIs present where available
- URLs work (spot-check 2–3 if external sources)
- No "Anonymous", no "et al." in the reference list itself (only in citations), no URL-only entries
- Predatory journals / questionable publishers spot-checked
- Sufficient number for the work's level (S1 typically 25+; S2 50+; S3 100+; journal paper 30+ — these are rough institutional norms, adjust per discipline)

### Appendices (Lampiran)

- Each appendix has a clear purpose and is referenced from the body
- Code listings (if present) are reviewable, not just dumped — see code-review-criteria.md
- Datasets / questionnaires / interview protocols included as relevant
- Ethics approval letter / informed consent template (if human subjects)
- Anti-plagiarism check result (Turnitin / iThenticate similarity report) if institution requires it

---

## IMRaD mapping (for journal / conference papers)

For papers structured as Introduction–Methods–Results–Discussion (and Abstract, Conclusion, References):

- **Title and abstract** → use the abstract rubric from front matter, with additional emphasis on the abstract because it is the entire reader's view of the paper if they don't read further
- **Introduction** → use Chapter 1 rubric, compressed; in papers the Introduction typically also embeds related work
- **Related work / Background** (if a separate section) → use Chapter 2 rubric, compressed
- **Methods** → use Chapter 3 rubric in full; methods is just as critical in papers
- **Results** → use Chapter 4 Results rubric
- **Discussion** → use Chapter 4 Discussion rubric
- **Conclusion** → use Chapter 5 rubric, compressed
- **References** → use back-matter references rubric

Additional paper-specific checks:
- Word / page limit compliance (typical journal 6000–8000 words; typical conference 6–10 pages)
- Author affiliations, ORCID, corresponding author marked
- Funding / acknowledgment / conflict-of-interest statement present
- Data availability statement present where the venue requires it
- Author contributions (CRediT taxonomy) for multi-author papers

---

## Cross-section consistency criteria (used in Step 4)

Use these in the cross-cutting checks. They are repeated here for reference.

1. **Objective → method → result → conclusion alignment**
2. **Citation–reference consistency** — bidirectional spot check
3. **Figure–text and table–text cross-references** — no orphans
4. **Claim–evidence alignment** — strong claims need support
5. **Code–description consistency** — code does what methods says
6. **Abstract–body consistency** — same numbers, same claims
7. **Reproducibility signals** — dataset source, preprocessing, hyperparameters, seeds, software versions, metrics, code availability

---

## When to be tougher

For S2 / S3 / journal paper level work, also require:

- Novelty argument made explicitly, not implied
- At least one named comparison baseline (preferably state-of-the-art for the task)
- Ablation studies or sensitivity analyses where the contribution is methodological
- Statistical significance testing for performance claims
- Generalizability evidence (cross-dataset, cross-domain, or cross-time validation) for applied ML work
- Discussion of failure modes, not only successes

For S1 / Tugas Akhir level work, the bar is lower on novelty but the same on reproducibility, ethics, and methodological soundness.
