import { Moon, FileQuestion, MessageSquareHeart } from "lucide-react";

const problems = [
  {
    icon: Moon,
    title: "The 2 AM Struggle",
    description: "When writing centers are closed, you still need help.",
  },
  {
    icon: FileQuestion,
    title: "The Blank Page Fear",
    description: "Getting started is the hardest part.",
  },
  {
    icon: MessageSquareHeart,
    title: "Honest Feedback",
    description: "Logic checking without the judgment.",
  },
];

const ProblemGrid = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ color: '#1a1a1a' }}>
            Writing is hard. <span className="text-primary">We get it.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every student faces these challenges. Inline is here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-8 rounded-2xl bg-card border border-border card-shadow hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-primary icon-slide-up" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemGrid;