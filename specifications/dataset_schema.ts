/**
 * Inline Data Schema v2.2 (Document-Level)
 * * Defines the structure of the JSONL shards used for Qwen 3 fine-tuning.
 * * Each shard represents a full academic paper with hierarchical annotations
 * * validated by 2-stage human review.
 */

export type FeedbackCategory = 
  | 'Thesis / Claim' 
  | 'Evidence' 
  | 'Analysis' 
  | 'Structure' 
  | 'Clarity' 
  | 'Logic Flow';

export type FeedbackType = 
  | 'socratic_inquiry' // The core value prop: questions that prompt thought
  | 'constructive_critique' 
  | 'praise'; // Reinforcement of good patterns

export type Severity = 'low' | 'medium' | 'high';

export interface PedagogicalAnnotation {
  /** * Exact character indices [start, end] for frontend highlighting 
   */
  char_spans: number[][]; 
  
  /** * The specific text snippet from the student's essay 
   */
  highlights: string[];

  /** * The Human-in-the-Loop (HITL) curated output.
   * This is the "label" the model is trained to generate.
   */
  feedback: string;

  /**
   * Internal pedagogical rationale. 
   * Used for "Chain of Thought" (CoT) training to teach the model WHY it is giving feedback.
   */
  explanation: string;

  categories: FeedbackCategory[];
  
  severity: Severity;
  
  /** * New field added in v2 to distinguish between praise and critique 
   */
  feedback_type: FeedbackType; 
}

export interface TrainingDocument {
  metadata: {
    version: string;
    id: string; // e.g., "ENG-2025-000001"
    author_hash: string; // Anonymized via SHA256 for IRB compliance
    date_created: string;
    annotator_ids: string[]; // Tracking the 2-stage review process
  };

  input: {
    full_paper: string; // Full context window
  };

  annotations: PedagogicalAnnotation[];
}