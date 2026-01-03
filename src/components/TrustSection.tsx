const TrustSection = () => {
  return (
    <section className="py-16 px-6 border-y border-border/50 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
          Trusted by research partners at
        </p>
        <div className="flex flex-col items-center gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lafayette_College_Leopard_logo.svg/1200px-Lafayette_College_Leopard_logo.svg.png"
            alt="Lafayette College"
            className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
          />
          <p className="text-sm text-muted-foreground">
            And pilot programs launching at major institutions in 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;