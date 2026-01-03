const TrustSection = () => {
  return (
    <section className="py-16 px-6 border-y border-border/50 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
          Trusted by research partners at
        </p>
        <div className="flex flex-col items-center gap-3">
          <span className="text-2xl font-bold text-foreground">
            Lafayette College
          </span>
          <p className="text-sm text-muted-foreground">
            And pilot programs launching at major institutions in 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
