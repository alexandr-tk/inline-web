import { Moon, FileQuestion, MessageSquareHeart } from "lucide-react";

const problems = [
  {
    icon: Moon,
    title: "The 2 AM Struggle",
    description: "When writing centers are closed, you still need help.",
    iconColor: "text-indigo-600",
  },
  {
    icon: FileQuestion,
    title: "The Blank Page Fear",
    description: "Getting started is the hardest part.",
    iconColor: "text-cyan-600",
  },
  {
    icon: MessageSquareHeart,
    title: "Honest Feedback",
    description: "Logic checking without the judgment.",
    iconColor: "text-rose-600",
  },
];

const ProblemGrid = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ color: '#1a1a1a' }}>
            Writing is hard. <span className="text-primary">We get it.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Every student faces these challenges. Inline is here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group p-6 rounded-lg bg-indigo-50/50 border border-indigo-100 transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50/80"
            >
              <problem.icon className={`w-10 h-10 ${problem.iconColor} mb-5`} />
              <h3 className="text-xl font-bold text-slate-900 mb-2 text-left">{problem.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed text-left">
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
