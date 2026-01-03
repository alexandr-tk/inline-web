import { Check, X, Shield, Brain, MessageCircle } from 'lucide-react';
import Logo from '@/components/Logo';

const comparisons = [
	{
		category: 'Academic Safety',
		icon: Shield,
		inline: { text: '100% Plagiarism Free', subtext: 'Never writes for you' },
		genai: { text: 'High Risk', subtext: 'Flags as AI-generated' },
	},
	{
		category: 'Skill Growth',
		icon: Brain,
		inline: { text: 'Builds Critical Thinking', subtext: 'You do the thinking' },
		genai: { text: 'Stunts Growth', subtext: 'Bypasses the learning process' },
	},
	{
		category: 'Feedback Style',
		icon: MessageCircle,
		inline: { text: 'Socratic Guidance', subtext: 'Asks deeply probing questions' },
		genai: { text: 'Auto-Completion', subtext: 'Just gives you the answer' },
	},
];

const ComparisonTable = () => {
	return (
		<section id='integrity' className='py-24 px-6 bg-slate-50 border-b border-slate-200'>
			<div className='container mx-auto max-w-5xl'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-4 text-slate-900'>
						<span className='text-primary'>Think with AI.</span>
						<br className='hidden md:block' />
						<span> Don't write with it.</span>
					</h2>
					<p className='text-slate-600 text-lg max-w-2xl mx-auto'>
						Generative models replace your voice. Inline strengthens it.
					</p>
				</div>

				{/* ========================================== */}
				{/* MOBILE VIEW: Problem (Top) -> Solution (Bottom) */}
				{/* ========================================== */}
				<div className='grid gap-6 md:hidden'>
					{comparisons.map((row) => (
						<div
							key={row.category}
							className='bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden'
						>
							{/* Header: Category Title */}
							<div className='p-4 bg-slate-50 border-b border-slate-100 flex items-center gap-3'>
								<div className='w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm'>
									<row.icon className='w-4 h-4' strokeWidth={2} />
								</div>
								<span className='font-bold text-slate-900'>{row.category}</span>
							</div>

							<div className='flex flex-col'>
								{/* 1. THE PROBLEM (GenAI) - Now First */}
								<div className='p-5 relative bg-slate-50/50'>
									{/* Red Danger Strip */}
									<div className='absolute left-0 top-0 bottom-0 w-1 bg-rose-300/50' />

									<div className='pl-3 opacity-70'>
										<div className='flex items-center justify-between mb-2'>
											<span className='text-xs font-bold uppercase tracking-widest text-slate-500'>
												Generative AI
											</span>
											<X className='w-4 h-4 text-rose-500' strokeWidth={3} />
										</div>
										<p className='font-medium text-slate-500 decoration-slate-400 decoration-2 line-through decoration-wavy'>
											{row.genai.text}
										</p>
										<p className='text-sm text-slate-400 mt-1'>{row.genai.subtext}</p>
									</div>
								</div>

								{/* Divider */}
								<div className='h-px w-full bg-slate-100' />

								{/* 2. THE SOLUTION (Inline) - Now Second */}
								<div className='p-5 relative bg-white'>
									{/* Green Success Strip */}
									<div className='absolute left-0 top-0 bottom-0 w-1 bg-emerald-500' />

									<div className='pl-3'>
										<div className='flex items-center justify-between mb-2'>
											<div className='scale-75 origin-left opacity-90'>
												<Logo />
											</div>
											<Check className='w-4 h-4 text-emerald-500' strokeWidth={3} />
										</div>
										<p className='font-bold text-slate-900 text-lg'>{row.inline.text}</p>
										<p className='text-sm text-slate-500 mt-1'>{row.inline.subtext}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* ========================================== */}
				{/* DESKTOP VIEW: Comparison Table (>= 768px)  */}
				{/* ========================================== */}
				<div className='hidden md:block relative rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden'>
					{/* Header Row */}
					<div className='grid grid-cols-3 border-b border-slate-100 bg-slate-50/50'>
						<div className='p-6' />

						{/* Inline Header */}
						<div className='p-6 flex items-center justify-center bg-white border-x border-slate-100 relative'>
							<div className='absolute top-0 left-0 w-full h-1 bg-primary' />
							<Logo className='scale-110' />
						</div>

						{/* GenAI Header */}
						<div className='p-6 flex items-center justify-center'>
							<span className='text-sm font-bold uppercase tracking-wider text-slate-400'>
								Generative AI
							</span>
						</div>
					</div>

					{/* Comparison Rows */}
					{comparisons.map((row, index) => (
						<div
							key={row.category}
							className={`grid grid-cols-3 group ${
								index !== comparisons.length - 1 ? 'border-b border-slate-100' : ''
							}`}
						>
							{/* Feature Label */}
							<div className='p-8 flex items-center gap-4 bg-white'>
								<div className='w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-primary flex-shrink-0'>
									<row.icon className='w-5 h-5' strokeWidth={2} />
								</div>
								<span className='font-semibold text-slate-700'>{row.category}</span>
							</div>

							{/* Inline Column */}
							<div className='p-8 flex flex-col items-center justify-center text-center bg-white border-x border-slate-100 relative shadow-[0_0_20px_rgba(0,0,0,0.02)] z-10'>
								<div className='flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100'>
									<Check className='w-4 h-4' strokeWidth={3} />
									<span className='text-sm font-bold'>{row.inline.text}</span>
								</div>
								<span className='text-sm text-slate-500 font-medium'>{row.inline.subtext}</span>
							</div>

							{/* GenAI Column */}
							<div className='p-8 flex flex-col items-center justify-center text-center bg-slate-50/30 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500'>
								<div className='flex items-center gap-2 mb-2 text-rose-500'>
									<X className='w-5 h-5' />
									<span className='font-medium text-slate-500 decoration-slate-300 decoration-2 line-through decoration-wavy'>
										{row.genai.text}
									</span>
								</div>
								<span className='text-sm text-slate-400'>{row.genai.subtext}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ComparisonTable;
