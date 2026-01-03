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
    <section id="methodology" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How it <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to better writing.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-center">
              <div className="flex flex-col items-center text-center p-6 max-w-[200px]">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-4 shadow-lg">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mb-3 text-sm font-bold text-muted-foreground">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-6 h-6 text-border mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
