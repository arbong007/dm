# Code Review Criteria

Apply these criteria in Step 5 when the document contains code — in the body, an appendix (Lampiran), or as supplementary / linked files.

Research code is reviewed against a different bar than production code. The priorities, in order, are:

1. **Faithfulness to the methodology** — does the code do what the methodology section claims?
2. **Reproducibility** — can someone else re-run this and get the same numbers?
3. **Correctness** — are there logic errors that invalidate the results?
4. **Quality** — readability, structure, documentation, sufficient for the reader to follow

Performance, scalability, software engineering polish are **secondary** for research code unless the contribution itself is engineering-oriented.

Use the same severity scale (Major / Minor / Optional) and the same tags (primarily **C**, often combined with **M** when the issue is methodological).

---

## Pre-review: locate and characterize the code

Before reviewing, establish:

- Where is the code? (appendix pages, GitHub link, supplementary zip, embedded snippets)
- What language(s)? (Python, R, MATLAB, JavaScript, etc.)
- How many files / lines?
- Is the code complete or are snippets only?
- Is there a README, requirements file, or environment specification?
- Is there a notebook (.ipynb) or only scripts?

If code is referenced but not provided, that itself is a Major **C** finding for any work claiming reproducibility.

---

## Reproducibility (highest priority)

### Environment

- **Dependencies pinned.** A `requirements.txt`, `environment.yml`, `pyproject.toml`, `renv.lock`, or `Project.toml` with versions. "We used Python and TensorFlow" is not sufficient — flag absence as **C Major** for graduate-level work, **C Minor** for S1.
- **Python / R / language version stated.**
- **Hardware mentioned if relevant** (GPU model, RAM) — for deep learning especially.
- **Setup instructions.** A README explaining how to set up and run, even if brief.

### Data

- **Data source clear.** Public dataset cited with version / accession date, private dataset's access process described.
- **Data files referenced consistently.** Paths in the code match what is described.
- **Preprocessing reproducible.** Either: (a) preprocessed data is included; or (b) the preprocessing script is included and produces the data from a documented raw source.
- **No hardcoded local paths** like `C:/Users/Andi/Desktop/data.csv` without explanation. Flag as **C Minor** (functional issue) — readers cannot run the code without manual edits.

### Randomness

- **Seeds set everywhere.** `np.random.seed`, `random.seed`, `torch.manual_seed`, `tf.random.set_seed`, and where applicable `os.environ['PYTHONHASHSEED']`. Flag missing seeds as **M+C Major** for any work reporting precision-sensitive numerical results.
- **Deterministic operations enabled** where the framework requires extra flags (`torch.backends.cudnn.deterministic = True`, etc.) for deep learning work.
- **k-fold splits use fixed random state.**

### Execution

- **Code actually runs.** Spot-check imports and obvious syntax issues. (You cannot literally execute the code here, but you can read it well enough to flag clear breakage — missing imports, undefined variables, dead references to deleted functions.)
- **Order of execution is clear.** Numbered scripts (`01_load.py`, `02_preprocess.py`, ...) or a master script / notebook with a clear top-to-bottom flow.
- **Outputs deterministic** given the seeds and inputs (no time-dependent randomness, no calls to non-deterministic external APIs without caching).

---

## Faithfulness to the methodology

This is the cross-check that makes the code review feed back into the document review.

For each major methodological choice claimed in Chapter 3 / Methods, verify the code:

- **Algorithm matches.** Paper says Random Forest → code uses RandomForestClassifier (not GradientBoostingClassifier). Paper says LSTM with attention → code has both. Discrepancies are **M+C Major**.
- **Hyperparameters match.** Paper reports `n_estimators=200, max_depth=10, random_state=42` — these appear in the code.
- **Data split matches.** Paper says 80/10/10 train/val/test with stratification → `train_test_split(..., test_size=0.2, stratify=y, random_state=42)` and a further split for validation.
- **Preprocessing matches.** Paper says "we standardized features using StandardScaler" → `StandardScaler().fit_transform(...)` appears, and importantly is **fit on training data only** (not on the full dataset before split — that is data leakage, **M+C Major**).
- **Evaluation metrics match.** Paper reports accuracy, precision, recall, F1 → code computes all four.
- **Cross-validation matches.** Paper says 5-fold stratified CV → `StratifiedKFold(n_splits=5)`, not `KFold(n_splits=5)` (which wouldn't stratify).
- **Class imbalance handling matches.** Paper says SMOTE → SMOTE present; paper says class weighting → `class_weight='balanced'` or explicit weights present.

When the code deviates from the paper, *the result in the paper is suspect*. Flag every such deviation as Major.

---

## Correctness — common bugs to look for

These are the bugs that most commonly invalidate research results. Scan the code specifically for these:

### Data leakage

- **Normalization / scaling fit on full data before train/test split.** The scaler should be `fit` on training only, then `transform` on test.
- **Feature engineering using future information** in time-series problems (e.g., computing a moving average that includes future timesteps).
- **Target leakage** — features that are derived from or contain the target.
- **Train/test contamination** — same samples appearing in both sets (especially common with patient data: same patient in both train and test, even if different records).
- **Hyperparameter tuning on the test set** — test set should be touched only for the final evaluation.

### Class imbalance handling errors

- **SMOTE applied before train/test split** — leaks synthetic minority examples from train to test.
- **Resampling applied to test set** — test set should reflect real distribution.

### Evaluation errors

- **Accuracy reported on highly imbalanced data** without also reporting per-class metrics or balanced accuracy.
- **Test set evaluated multiple times during development** (effectively making it a second validation set).
- **Reported number doesn't match the metric computed** — e.g., paper says "F1 = 0.87" but code reports precision.
- **Averaging metric across folds incorrectly** (e.g., averaging precision and recall separately then computing F1 — should compute F1 per fold then average, or use micro/macro F1).

### Statistical errors

- **Paired test used on unpaired data** or vice versa.
- **Multiple comparisons without correction** (Bonferroni, Holm, FDR).
- **t-test on clearly non-normal data without justification.**
- **R² reported as the only metric** for regression — also flag if RMSE / MAE are missing.

### Numerical / implementation errors

- **Division without checking for zero.**
- **Logarithm of zero or negative values** without handling.
- **Index off-by-one in slicing or loops.**
- **Mismatched dimensions** (rare in well-tested libraries, common in custom code).
- **Mutating data inside loops** when the loop is supposed to be over copies.

### Deep learning specific

- **Activation function on output layer wrong for the task** (e.g., softmax for binary classification when sigmoid is intended, or no activation when one is needed).
- **Loss function mismatch** (e.g., MSE for classification, categorical_crossentropy when labels are integers without `sparse_` prefix).
- **Optimizer / learning rate not stated.**
- **No early stopping or other overfit mitigation** for small datasets.
- **Validation loss / accuracy not tracked.**
- **Inference uses training-time settings** (dropout still active, batch norm not in eval mode).

---

## Quality

### Readability

- **Variable names meaningful.** `df_train`, `model_rf`, `accuracy_val` not `df`, `m`, `a`.
- **Function decomposition.** Long scripts (>200 lines) without functions are harder to verify. Suggest decomposition where appropriate.
- **Comments explain *why*, not *what*.** `# load data` adds nothing; `# Drop 2018 records: data collection methodology changed mid-year` adds context.
- **Magic numbers explained.** `0.7` is not a meaningful threshold without context.
- **Code follows language idioms.** Pythonic Python, tidyverse-style R, etc. — not literal translations from another language.

### Structure

- **Separation of concerns.** Data loading separate from preprocessing separate from modeling separate from evaluation, even if in the same notebook.
- **Configuration centralized.** Hyperparameters in a config dict / file / cell near the top, not scattered through the code.
- **Avoid dead code.** Commented-out alternative approaches without explanation are noise.

### Documentation

- **Docstrings** for non-trivial functions.
- **Type hints** appreciated but not required.
- **README** explaining the project, how to run, expected outputs.

### Notebook hygiene (if .ipynb)

- **Cells run in order** — flag notebooks where cell execution counts are out of order or missing.
- **Outputs cleared or saved** consistent with the rest of the work (often institutions require cleared outputs in the submitted notebook).
- **Markdown cells explain the flow** — a notebook with only code cells is harder to follow than necessary.

---

## Ethics and integrity

- **Data licensing respected** — public datasets used per their license, attributions where required.
- **Personally identifiable information** removed or properly de-identified from any data in the appendix.
- **No hardcoded credentials** (API keys, passwords, tokens) — flag as **C+E Major** even if the credentials are revoked.
- **Plagiarism check** — code that closely mirrors a tutorial or repository should cite the source. Flag obvious copy-paste without attribution as **E Major**.

---

## Code-specific findings format

Use the same finding format as document findings, but include:

- **File and line range** as the location (e.g., `train.py L42–L58`, `notebook.ipynb cell 12`)
- A short code excerpt (3–10 lines) showing the issue
- The expected behavior or fix

Example:

```
**Finding C-7 — Major [M+C]**
- Location: notebook.ipynb cell 8, lines 3–4
- Excerpt:
  scaler = StandardScaler()
  X_scaled = scaler.fit_transform(X)
  X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, ...)
- Issue (ID): Standardisasi diterapkan ke seluruh dataset sebelum train/test split. Ini menyebabkan kebocoran informasi dari test set ke proses pelatihan, dan akurasi yang dilaporkan kemungkinan optimistik.
- Issue (EN): Standardization is fit on the entire dataset before the train/test split. This leaks distributional information from the test set into the training process and the reported accuracy is likely optimistic.
- Fix: Split first, then fit the scaler on X_train only, then transform both X_train and X_test:
  X_train, X_test, y_train, y_test = train_test_split(X, y, ...)
  scaler = StandardScaler().fit(X_train)
  X_train = scaler.transform(X_train); X_test = scaler.transform(X_test)
```

---

## Final code-review summary

End the code-review section of the report with:

- **Reproducibility verdict** — can someone re-run this and reproduce the reported numbers, in principle? (Yes / Partial / No, with reasons)
- **Faithfulness verdict** — does the code match the methodology? (Yes / Discrepancies found / Major discrepancies)
- **Correctness verdict** — any bugs that affect validity? (None found / Minor / Major)
- **Top 3 code fixes** prioritized
