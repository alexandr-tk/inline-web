import { Upload, HelpCircle, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Draft",
    description: "Paste or upload your essay draft",
  },
  {
    icon: HelpCircle,
    title: "Receive Socratic Inquiries",
    description: "Get thoughtful questions about your arguments",
  },
  {
    icon: Sparkles,
    title: "Refine & Polish",
    description: "Strengthen your writing with clarity",
  },
];

const HowItWorks = () => {
  return (
    <section id="methodology" className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            How it <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to better writing.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-center">
              <div className="flex flex-col items-center text-center p-4 max-w-[200px] group">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-3 shadow-md icon-pulse cursor-default">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center mb-2 text-sm font-bold text-muted-foreground">
                  {index + 1}
                </div>
                <h3 className="text-base font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-5 h-5 text-border mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;