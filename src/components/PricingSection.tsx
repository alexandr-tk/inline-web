import { Check, Sparkles, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Student Basic",
    price: "Free",
    description: "Forever free for students",
    icon: GraduationCap,
    highlighted: true,
    available: true,
    features: [
      "5 essays per month",
      "Basic Socratic feedback",
      "Logic gap detection",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Scholar Pro",
    price: "Coming Soon",
    description: "Advanced features for power users",
    icon: Sparkles,
    highlighted: false,
    available: false,
    features: [
      "Unlimited essays",
      "Advanced feedback modes",
      "Citation assistance",
      "Priority support",
    ],
    cta: "Unavailable",
  },
  {
    name: "Institutional",
    price: "Contact Sales",
    description: "For universities and organizations",
    icon: Building2,
    highlighted: false,
    available: false,
    features: [
      "Unlimited seats",
      "Admin dashboard",
      "LMS integration",
      "Dedicated support",
    ],
    cta: "Contact Sales",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Simple <span className="text-primary">Plans</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start free. Upgrade when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-card card-shadow-hover hover-lift"
                  : plan.available
                  ? "border-border bg-card hover-lift"
                  : "border-border bg-muted/30 opacity-70"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Recommended
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground"
                      : plan.available
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <plan.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <span
                  className={`text-2xl font-bold ${
                    plan.available ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 ${
                        plan.available ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <span
                      className={plan.available ? "text-foreground" : "text-muted-foreground"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full"
                disabled={!plan.available}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;