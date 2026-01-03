import { Check, X, Shield, Brain, MessageCircle } from "lucide-react";

const comparisons = [
  {
    category: "Integrity",
    icon: Shield,
    inline: { text: "100% Academic Safe", subtext: "Think with you", positive: true },
    genai: { text: "Risk of Plagiarism", subtext: "Writes for you", positive: false },
  },
  {
    category: "Learning",
    icon: Brain,
    inline: { text: "Builds Critical Thinking", subtext: "You grow as a writer", positive: true },
    genai: { text: "Bypasses Learning", subtext: "Quick fix, no growth", positive: false },
  },
  {
    category: "Feedback",
    icon: MessageCircle,
    inline: { text: "Socratic Questions", subtext: "Guides your thinking", positive: true },
    genai: { text: "Auto-complete", subtext: "Replaces your voice", positive: false },
  },
];

const ComparisonTable = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            The <span className="text-primary">Integrity</span> Difference
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how Inline compares to generative AI tools like ChatGPT.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border card-shadow overflow-hidden hover-lift">
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
            <div className="p-6 font-medium text-muted-foreground" />
            <div className="p-6 text-center">
              <span className="text-lg font-bold text-primary">Inline</span>
            </div>
            <div className="p-6 text-center">
              <span className="text-lg font-semibold text-muted-foreground">Generative AI</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={row.category}
              className={`grid grid-cols-3 group transition-colors duration-200 hover:bg-muted/20 ${
                index !== comparisons.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <row.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="font-medium">{row.category}</span>
              </div>
              
              <div className="p-6 flex flex-col items-center justify-center text-center bg-primary/5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-feedback-teal/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-feedback-teal" />
                  </div>
                  <span className="font-medium text-foreground">{row.inline.text}</span>
                </div>
                <span className="text-sm text-muted-foreground">{row.inline.subtext}</span>
              </div>
              
              <div className="p-6 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="font-medium text-muted-foreground">{row.genai.text}</span>
                </div>
                <span className="text-sm text-muted-foreground">{row.genai.subtext}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;