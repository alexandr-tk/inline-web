import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-6 dot-pattern">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-balance" style={{ color: '#1a1a1a' }}>
              Your Writing Tutor.{" "}
              <span className="text-primary">Available 24/7.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Don't let a deadline panic you into plagiarism. Inline helps you
              strengthen your arguments and fix logic gaps instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                onClick={scrollToDemo}
              >
                Try Demo
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Visual with Parallax Effect */}
          <div 
            className="relative animate-fade-in hidden lg:block" 
            style={{ animationDelay: "0.2s" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Document Card - "Messy desk" rotation */}
            <div 
              className={`relative bg-card rounded-2xl card-shadow p-6 border border-border transition-all duration-700 ease-out ${
                isHovered ? 'rotate-0' : '-rotate-1'
              }`}
            >
              {/* Document mockup */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-feedback-amber/60" />
                  <div className="w-3 h-3 rounded-full bg-feedback-teal/60" />
                  <span className="text-sm text-muted-foreground ml-2">essay_draft.docx</span>
                </div>
                
                <div className="space-y-3">
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-4/5" />
                  <div className="h-3 bg-primary/20 rounded w-full border-l-2 border-primary" />
                  <div className="h-3 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-5/6" />
                </div>
              </div>

              {/* Floating feedback card - repositioned to stay in viewport */}
              <div 
                className={`absolute right-4 top-1/2 -translate-y-1/2 translate-x-[60%] bg-card rounded-xl card-shadow-hover p-4 border border-primary/20 max-w-[200px] transition-all duration-700 ease-out ${
                  isHovered ? 'rotate-3' : 'rotate-1'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-foreground">Socratic Question</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      "Why does this argument hold true?"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-light rounded-full blur-3xl opacity-40" />
          </div>

          {/* Mobile: Simplified mockup */}
          <div className="lg:hidden relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl card-shadow p-6 border border-border">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-feedback-amber/60" />
                  <div className="w-3 h-3 rounded-full bg-feedback-teal/60" />
                  <span className="text-sm text-muted-foreground ml-2">essay_draft.docx</span>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-4/5" />
                  <div className="h-3 bg-primary/20 rounded w-full border-l-2 border-primary" />
                  <div className="h-3 bg-muted rounded w-3/4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
