import { Moon, FileQuestion, MessageSquareHeart, ArrowRight } from 'lucide-react';

const problems = [
	{
		icon: Moon,
		title: 'The 2 AM Struggle',
		description:
			"When writing centers are closed and the deadline looms, you're usually on your own. Inline is awake when you are.",
	},
	{
		icon: FileQuestion,
		title: 'The Blank Page Fear',
		description:
			'Staring at a white screen is paralyzing. We provide the initial Socratic nudge to get your momentum going.',
	},
	{
		icon: MessageSquareHeart,
		title: 'Honest Feedback',
		description:
			'Logic checking without the judgment. Get the rigorous critique you need without the fear of looking foolish.',
	},
];

const ProblemGrid = () => {
	const scrollToIntegrity = () => {
		const nextSection = document.getElementById('integrity');
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section id='features' className='py-24 lg:py-32 px-6 bg-white border-y border-slate-100'>
			<div className='container mx-auto max-w-6xl'>
				{/* Header */}
				<div className='mb-16 lg:mb-20 max-w-2xl'>
					<h2 className='text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6'>
						Writing is hard. <br />
						<span className='text-primary'>We get it.</span>
					</h2>
					<p className='text-lg text-slate-600 leading-relaxed font-medium'>
						The friction of writing isn't just about grammar. It's about confidence, timing, and flow. We
						built Inline to solve the real blockers.
					</p>
				</div>

				{/* The Swiss Grid Layout */}
				<div className='grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm'>
					{problems.map((problem) => (
						<div
							key={problem.title}
							onClick={scrollToIntegrity}
							className='group bg-white p-8 lg:p-10 hover:bg-slate-50 transition-all duration-300 flex flex-col items-start h-full cursor-pointer relative'
						>
							{/* ACCENT LINE LOGIC:
                 Mobile: Vertical strip on the LEFT (w-1 h-full). Always visible.
                 Desktop: Horizontal strip on the TOP (h-1 w-full). Hidden until hover.
              */}
							<div
								className='absolute bg-primary transition-transform duration-300 origin-left
                /* MOBILE STYLES (Vertical Left Strip) */
                left-0 top-0 bottom-0 w-1
                
                /* DESKTOP STYLES (Horizontal Top Strip) */
                md:w-full md:h-1 md:bottom-auto md:scale-x-0 md:group-hover:scale-x-100'
							/>

							{/* Icon Container */}
							<div className='mb-8 inline-flex p-3 rounded-lg bg-indigo-50/50 border border-indigo-100 md:group-hover:scale-105 transition-transform duration-300'>
								<problem.icon className='w-6 h-6 text-primary' strokeWidth={2} />
							</div>

							{/* Content */}
							<h3 className='text-xl font-bold text-slate-900 mb-3 md:group-hover:text-primary transition-colors'>
								{problem.title}
							</h3>

							<p className='text-slate-600 leading-relaxed text-sm mb-8 flex-grow'>
								{problem.description}
							</p>

							{/* Reveal Arrow - Visible on Mobile, Slide-in on Desktop */}
							<div className='flex items-center gap-2 text-sm font-bold text-primary transition-all duration-300 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0'>
								<span>See the difference</span>
								<ArrowRight className='w-4 h-4' />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProblemGrid;
