import { Upload, HelpCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Draft",
    description: "Paste or upload your essay draft",
    pulseClass: "step-pulse-1",
  },
  {
    icon: HelpCircle,
    title: "Receive Socratic Inquiries",
    description: "Get thoughtful questions about your arguments",
    pulseClass: "step-pulse-2",
  },
  {
    icon: Sparkles,
    title: "Refine & Polish",
    description: "Strengthen your writing with clarity",
    pulseClass: "step-pulse-3",
  },
];

const HowItWorks = () => {
  return (
    <section id="methodology" className="py-10 px-6 dot-pattern">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-2" style={{ color: '#1a1a1a' }}>
            How it <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to better writing.
          </p>
        </div>

        {/* Steps with connecting line */}
        <div className="relative steps-line">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center p-4 max-w-[200px]">
                <div className={`w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-3 shadow-lg relative z-10 ${step.pulseClass}`}>
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="w-7 h-7 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-2 text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <h3 className="text-base font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
