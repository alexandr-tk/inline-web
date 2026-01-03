import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold gradient-text">
          Inline
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Features
          </a>
          <a
            href="#methodology"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Methodology
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Pricing
          </a>
        </div>

        {/* CTA */}
        <Button variant="gradient-pill" onClick={scrollToDemo}>
          Try Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
