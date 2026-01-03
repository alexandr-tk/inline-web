const TrustSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-8">
          Trusted by research partners at
        </p>
        <div className="flex flex-col items-center gap-6">
          <span className="text-xl font-semibold text-muted-foreground/80 uppercase tracking-[0.15em]">
            Lafayette College
          </span>
          <p className="text-sm text-muted-foreground max-w-md">
            And pilot programs launching at major institutions in 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;