import { Moon, FileQuestion, MessageSquareHeart } from "lucide-react";

const problems = [
  {
    icon: Moon,
    title: "The 2 AM Struggle",
    description: "When writing centers are closed, you still need help.",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: FileQuestion,
    title: "The Blank Page Fear",
    description: "Getting started is the hardest part.",
    bgColor: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    icon: MessageSquareHeart,
    title: "Honest Feedback",
    description: "Logic checking without the judgment.",
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600",
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
              className="group relative p-8 rounded-2xl bg-card border border-border card-shadow hover-lift overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Watermark icon */}
              <problem.icon className="watermark-icon w-32 h-32 text-foreground" />
              
              <div className={`w-14 h-14 rounded-xl ${problem.bgColor} flex items-center justify-center mb-6`}>
                <problem.icon className={`w-7 h-7 ${problem.iconColor} icon-slide-up`} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1a1a1a' }}>{problem.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
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
