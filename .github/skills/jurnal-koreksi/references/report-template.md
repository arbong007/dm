# Review Report Template

This is the structure to use when composing the final review in Step 6. Adapt the bilingual formatting per the user's language choice from Step 0.

The report has six required parts:
1. Header
2. Executive summary
3. Findings by section (the bulk of the report)
4. Cross-cutting findings
5. Code review (only if code was reviewed)
6. Decision / recommendation
7. Coverage checklist (proof-of-completeness)

---

## Part 1 — Header

```
# Review Report — [Document title]

- Dokumen / Document: [title, author if available]
- Level / Level: [S1 Tugas Akhir / S1 Skripsi / S2 Tesis / S3 Disertasi / Journal paper / Conference paper / Proposal]
- Halaman / Pages: [N pages]
- Mode reviewer / Reviewer mode: [Penguji / Pembimbing / Peer reviewer]
- Tanggal review / Review date: [date]
- Bahasa output / Output language: [Bilingual ID + EN / ID / EN]
- Fokus review / Review scope: [Full / specific chapters]
```

---

## Part 2 — Executive summary

Two paragraphs in each language (or only the chosen language), in this order:

**Indonesian first**, then English. Each paragraph covers:

1. What the document is about and what it attempts to contribute, in 2–3 sentences.
2. The headline assessment — overall quality, what works well (1–2 specific strengths), and the highest-priority concerns (the 2–3 most important Major findings, named).

End the executive summary with a one-line decision preview (full decision goes in Part 6).

Example skeleton:

```
## Ringkasan Eksekutif

Penelitian ini bertujuan [...]. Pendekatan yang digunakan adalah [...]. Kontribusi yang diklaim adalah [...].

Secara keseluruhan, [...]. Kekuatan utama adalah [...]. Tiga isu prioritas tertinggi yang perlu ditangani sebelum [keputusan/publikasi]: (1) [...]; (2) [...]; (3) [...]. Lihat bagian temuan untuk detail.

Rekomendasi sementara: [Revisi Mayor / Revisi Minor / Diterima / Reject / ...].

## Executive Summary

This work aims to [...]. The approach is [...]. The claimed contribution is [...].

Overall, [...]. The main strengths are [...]. The three highest-priority concerns to address before [decision/publication]: (1) [...]; (2) [...]; (3) [...]. See the findings section for details.

Preliminary recommendation: [...].
```

---

## Part 3 — Findings by section

Cover every section in order, matching the inventory from Step 2. For each section, use this header:

```
## [Section name / Section title] (halaman / pages X–Y)
```

Then list findings in severity order (Major → Minor → Optional). Use this format for each finding:

```
**Temuan / Finding [SECTION-N] — [Severity] [Tag(s)]**

- Lokasi / Location: Halaman X, [section/subsection]; paragraf/baris jika perlu
- Kutipan / Quote: "[text from the document]"
- Isu (ID): [what's wrong and why it matters, 1–4 sentences]
- Issue (EN): [same in English]
- Saran (ID): [concrete, actionable fix]
- Suggestion (EN): [same in English]
```

Use IDs like `INTRO-1`, `INTRO-2`, `LITREV-1`, `METHOD-1`, etc. — section-prefixed numbering so the author can locate findings quickly.

If a section has no major issues, record it explicitly:

```
**Catatan / Note [SECTION] — No major issues**

- Lokasi / Location: [section, pages]
- Kekuatan (ID): [1–2 specific things this section does well]
- Strengths (EN): [same]
```

Do not omit a section just because it is clean. The point is to give the author confidence that you actually read it.

### Section ordering for Indonesian thesis structure

1. Halaman judul dan halaman depan / Cover and front matter
2. Abstrak (ID) / Abstract (ID)
3. Abstract (EN) / Abstract (EN)
4. Bab 1 Pendahuluan / Chapter 1 Introduction
5. Bab 2 Tinjauan Pustaka / Chapter 2 Literature Review
6. Bab 3 Metodologi / Chapter 3 Methodology
7. Bab 4 Hasil dan Pembahasan / Chapter 4 Results and Discussion
8. Bab 5 Kesimpulan dan Saran / Chapter 5 Conclusion and Suggestions
9. Daftar Pustaka / References
10. Lampiran / Appendices

### Section ordering for IMRaD / journal paper

1. Title, authors, abstract, keywords
2. Introduction (including related work if integrated)
3. Related Work (if separate)
4. Methods / Methodology
5. Experiments / Setup (if separate from methods)
6. Results
7. Discussion
8. Conclusion
9. References
10. Supplementary / Appendix

---

## Part 4 — Cross-cutting findings

Report results of the seven cross-cutting checks from Step 4. Number these `CROSS-1` through `CROSS-7`.```
## Pemeriksaan Lintas-Bab / Cross-cutting Findings

### CROSS-1 — Objective → method → result → conclusion alignment

[Table or numbered list showing each tujuan from Ch1 and its corresponding method (Ch3), result (Ch4), and conclusion (Ch5). Flag any orphan.]

| # | Tujuan / Objective | Method (Ch3) | Result (Ch4) | Conclusion (Ch5) | Status |
|---|---|---|---|---|---|
| 1 | ... | p.X §3.x | p.Y §4.x | p.Z §5.x | ✓ Aligned / ⚠ Misaligned / ✗ Orphan |

[Narrative: any orphan tujuan or orphan result, in both languages]

### CROSS-2 — Citation–reference consistency
### CROSS-3 — Figure / table cross-references
### CROSS-4 — Claim–evidence alignment
### CROSS-5 — Code–description consistency
### CROSS-6 — Abstract–body consistency
### CROSS-7 — Reproducibility signals
```

Each subsection records findings or "no issues found" in both languages.

---

## Part 4.5 — Visual Figure Inspection

This part records findings from Step 2.5 (rendering pages to images and viewing figures, equations, screenshots, and tables directly). Skip only if the document had no figures, equations, or images of any kind.

```
## Pemeriksaan Visual Figure / Visual Figure Inspection

### Cara pemeriksaan / Method
- Convert source (.docx / .pdf) to PDF if needed, then rasterize each page to image at 120 DPI.
- Every page flagged in the Step 2 inventory as containing figure / equation / table / screenshot was viewed directly.

### Temuan visual / Visual findings
[Listed by severity, using the same finding format. Number as VIS-1, VIS-2, etc.]

**Temuan VIS-1 — [Severity] [Tag(s)]**
- Lokasi / Location: Figure N (halaman / page X)
- Detail visual / Visual detail: [what is shown that the text extraction missed]
- Isu (ID): ...
- Issue (EN): ...
- Saran / Suggestion: ...
```

What this part typically catches (and the section-by-section pass doesn't):
- Anonymity / privacy leaks visible in screenshots (usernames, file paths, faces, badges)
- Figure caption vs figure content mismatches
- Architecture diagrams that contradict the body text
- Misrendered equations that text extraction couldn't show
- Misleading axes / units / legends in plots
- Browser or IDE chrome captured in screenshots (unprofessional, may leak metadata)
- Training/validation curves that visually reveal task triviality (flat val curve from epoch 1) or overfitting (large train/val gap)

If no visual findings, record: "No visual issues found across N inspected figures/tables/equations."

---

## Part 5 — Code review (only if code is present)

If no code is in the document, skip this part and note in the header that no code was provided.

```
## Code Review

### Karakterisasi / Characterization
- Bahasa / Language: [Python / R / ...]
- Lokasi / Location: [appendix pages / GitHub link / supplementary]
- Lingkup / Scope: [N files, ~M lines]

### Temuan kode / Code findings
[Listed by severity, using the code-finding format from code-review-criteria.md]

### Verdict
- Reproducibility: [Yes / Partial / No] — [reason]
- Faithfulness to methodology: [Yes / Discrepancies / Major discrepancies] — [reason]
- Correctness: [No issues / Minor issues / Major issues] — [reason]

### Top 3 code fixes (prioritized)
1. ...
2. ...
3. ...
```

---

## Part 6 — Decision / recommendation

The form depends on the reviewer mode chosen in Step 0.

### Penguji mode

```
## Rekomendasi / Recommendation (Penguji)

**Keputusan / Decision:** [Revisi Mayor / Major Revision / Revisi Minor / Minor Revision / Diterima / Accepted]

**Justifikasi (ID):** [3–6 sentences naming the Major findings that drive the decision]
**Justification (EN):** [same in English]

**Daftar revisi wajib / Required revisions:**
1. [Specific revision, mapped to finding ID]
2. ...
```

### Pembimbing mode

```
## Rekomendasi / Recommendation (Pembimbing)

**Status: [Lanjutkan dengan revisi / Lanjutkan dengan revisi besar / Siap diajukan ujian]**

**Untuk diskusi dengan mahasiswa (ID):** [warm but honest framing]
**For discussion with the student (EN):** [same]

**Daftar tugas prioritas / Prioritized to-do list:**

Prioritas 1 / Priority 1 — sebelum lanjut / before moving on:
1. [task linked to finding ID]
2. ...

Prioritas 2 / Priority 2 — minggu berikutnya / next week:
1. ...

Prioritas 3 / Priority 3 — sebelum sidang / before defense:
1. ...
```

### Peer reviewer mode

```
## Recommendation (Peer Reviewer)

**Decision:** [Reject / Major Revision / Minor Revision / Accept]

**Comments to the editor (confidential):** [1 short paragraph]

**Comments to the authors:**

*Summary of the paper:*
[1 paragraph]

*Strengths:*
[bulleted list, specific]

*Detailed Findings by Section / Sub-chapter:*
(WAJIB DIJABARKAN PER BAB / SUBBAB SEPERTI PART 3, JANGAN DIGABUNG BERDASARKAN SEVERITY. Contoh: "## Abstract", lalu daftarkan temuan. "## 1. Introduction", dst.)
[List sections here with their respective findings]

*Optional suggestions:*
[numbered list]
```

For peer reviewer mode, write the public comments in the manuscript's language. If bilingual was requested, provide both.

---

## Part 7 — Coverage checklist

This is the proof-of-completeness section. It is *required* and goes at the very end of the report. It serves as the author's verification that nothing was skipped.

```
## Daftar Coverage / Coverage Checklist

Section inventory from Step 2, and the number of findings logged for each. A "✓ no major issues" entry counts as coverage.

| # | Section | Pages | Findings logged | Status |
|---|---|---|---|---|
| 1 | Halaman judul + halaman depan | i–xv | 2 | ✓ |
| 2 | Abstrak ID | xvi | 1 | ✓ |
| 3 | Abstract EN | xvii | 3 | ✓ |
| 4 | Bab 1 Pendahuluan | 1–8 | 5 | ✓ |
| ... | ... | ... | ... | ... |
| n | Lampiran | A1–A20 | 4 | ✓ |

Cross-cutting checks:
- CROSS-1 alignment ✓
- CROSS-2 citations ✓
- CROSS-3 figures/tables ✓
- CROSS-4 claims/evidence ✓
- CROSS-5 code/description ✓ (or N/A if no code)
- CROSS-6 abstract/body ✓
- CROSS-7 reproducibility ✓

Code review: [present / N/A]

Total findings: [N] (Major: [n1], Minor: [n2], Optional: [n3])
```

---

## Formatting and style notes

- Use markdown headings exactly as shown so the document is navigable
- Quote document text using markdown blockquotes `>` or inline quotes `"..."`
- For long quoted passages, prefer paraphrase + page reference
- Tables in markdown using pipe syntax; keep them readable in plain text
- Avoid excessive emphasis — bolding only for finding headers and the few specific labels above
- For bilingual sections, ID comes first by default (since the user is in Indonesia and the document is most likely Indonesian)
- Numbers (page references, finding IDs, severity counts) should be exact, not approximate
- Do not invent page numbers; if uncertain, write "approx. p. X" or omit and rely on section reference

## Voice requirement (critical for Indonesian output)

The Indonesian portion of the report must read in the voice of a senior Indonesian academic — Profesor, Guru Besar, or penguji senior — not as a machine translation of the English. See `indonesian-academic-voice.md` for the full phrase bank, anti-patterns, and per-mode voice templates. Before finalizing, reread the Indonesian portion and confirm it does not contain the AI-translation tells listed there ("dalam rangka untuk", "dapat dikatakan bahwa", "yang mana" overuse, excessive "tersebut", boilerplate openings, generic praise, apologetic hedging). The English portion should also avoid AI-English tells ("delve into", "leverage", "robust", "comprehensive", "in today's rapidly evolving landscape", etc.).

---

## What a finished review looks like

A good 60-page S1 thesis review using this template will typically be:
- 8–15 pages of content
- 30–60 total findings (mix of Major, Minor, Optional)
- All seven cross-cutting checks present
- Coverage checklist showing every section accounted for
- Decision clear and justified

A good 8-page journal paper review will typically be:
- 3–6 pages
- 10–25 findings
- Cross-cutting checks present
- Peer-reviewer-style decision with major/minor concerns
