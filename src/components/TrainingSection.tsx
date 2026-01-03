import { Database, GraduationCap, Users } from "lucide-react";

const TrainingSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Database className="w-4 h-4" />
            Our Training Data
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6" style={{ color: '#1a1a1a' }}>
            Pedagogically Sound <span className="text-primary">Data</span>.
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            Our models are fine-tuned on thousands of rounds of real professor feedback
            from elite institutions, calibrated with diverse student writing to ensure
            evaluation fairness across different demographics.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-sm">Elite Institution Feedback</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-3 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm">Diverse Student Voices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;