<div align="center">
<img src="public/favicon.svg" alt="Inline Logo" width="50" height="50" style="vertical-align: middle;" /> 
  <span style="font-size: 40px; font-weight: bold; vertical-align: middle; color: #1a1a1a;">nline</span>
  
  <p><strong>The Socratic Logic Engine for Academic Writing</strong></p>

  <p>
    <a href="LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
    </a>
    <img src="https://img.shields.io/badge/Status-Data_Collection-orange" alt="Current Status" />
    <img src="https://img.shields.io/badge/Model-Qwen_3_Fine--Tuned-purple" alt="Model Target" />
  </p>
</div>

## 🚧 Current Status: R&D Phase

**Inline is currently in the Data Collection & Annotation phase.**

This repository hosts the **public web client** (`inline-web`), which currently serves as the project's landing portal and interactive concept demonstration. The Socratic reasoning backend is under active development and is not yet connected to this frontend.

---

## 🏗️ Planned System Architecture

The platform is being architected as a **Human-in-the-Loop (HITL)** system. While the UI is public, the logic core operates on a private high-performance data pipeline to ensure academic integrity.

### 🧩 The Stack
| Component | Tech | Responsibility |
| :--- | :--- | :--- |
| **Client (This Repo)** | React, Vite, Tailwind | **Public:** Landing page, waitlist management, and concept demo. |
| **Data Engine** | HF Datasets, JSONL Shards | **[Internal]** Streaming pipeline for tokenization and artifact removal. |
| **Model Target** | Qwen 3 (72B+) | **[Internal]** Fine-tuning target using parameter-efficient optimization (LoRA). |

---

## 🔬 Research & Data Engineering

Our model is being trained on a proprietary dataset collected under **Lafayette College IRB** supervision. We are aggregating student essays into **JSONL shards** to train a model that optimizes for **Cognitive Load** rather than text generation.

### Pedagogical Schema
To prepare for the training run, we have defined a strict annotation schema (see [`specifications/dataset_schema.ts`](specifications/dataset_schema.ts)) that governs our internal grading tools:

* **Feedback Categories:** Annotators classify inputs into `Thesis`, `Evidence`, `Analysis`, `Logic Flow`, or `Clarity`.
* **Intervention Type:** Distinct labels for `Socratic Inquiry` (questions) vs `Constructive Critique` vs `Praise`.
* **Chain of Thought (CoT):** Every annotation includes an `explanation` field to teach the model *why* a specific intervention was chosen.

---

## 🛠️ Local Development

To run the web client locally:

```bash
git clone [https://github.com/alexandr-tk/inline-web.git](https://github.com/alexandr-tk/inline-web.git)
npm install
npm run dev

```

## 📄 License
This frontend client is available under the [MIT License](LICENSE).