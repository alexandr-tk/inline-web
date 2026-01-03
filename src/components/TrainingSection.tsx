import { GraduationCap, Users } from 'lucide-react';

const TrainingSection = () => {
	return (
		<section className='py-24 px-6 bg-slate-50 border-t border-slate-200'>
			<div className='container mx-auto max-w-4xl'>
				{/* Header - Straight to the point */}
				<div className='text-center mb-16'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-4 text-slate-900'>
						Trained on <span className='text-primary'>Real Feedback</span>.
					</h2>
					<p className='text-slate-600 text-lg max-w-2xl mx-auto'>
						Generic AI is trained on the open internet. Inline is trained on graded coursework. We use real
						student essays and faculty critiques to ensure our feedback prioritizes logical depth, not just
						statistical probability.
					</p>
				</div>

				{/* The Two Pillars - Clean Grid */}
				<div className='grid md:grid-cols-2 gap-6'>
					{/* Card 1: Quality */}
					<div className='bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow'>
						<div className='w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-primary mb-6'>
							<GraduationCap className='w-6 h-6' strokeWidth={2} />
						</div>
						<h3 className='text-xl font-bold text-slate-900 mb-2'>Elite Faculty Logic</h3>
						<p className='text-slate-500 leading-relaxed'>
							Our critique patterns are sourced from 800+ rounds of feedback provided by professors at
							top-tier research universities.
						</p>
					</div>

					{/* Card 2: Fairness */}
					<div className='bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow'>
						<div className='w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6'>
							<Users className='w-6 h-6' strokeWidth={2} />
						</div>
						<h3 className='text-xl font-bold text-slate-900 mb-2'>Diverse Voices</h3>
						<p className='text-slate-500 leading-relaxed'>
							We actively calibrate our models with essays from Community Colleges to ensure our feedback
							is fair and never biased against non-standard dialects.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrainingSection;
