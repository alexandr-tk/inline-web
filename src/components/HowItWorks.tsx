import { useState, useEffect, useRef } from 'react';
import { Upload, HelpCircle, Sparkles } from 'lucide-react';

const steps = [
	{
		icon: Upload,
		title: 'Upload Draft',
		description: 'Paste your text or upload a doc. We handle the formatting instantly.',
	},
	{
		icon: HelpCircle,
		title: 'Socratic Inquiry',
		description: 'Our AI identifies weak arguments and asks questions to spark deeper thinking.',
	},
	{
		icon: Sparkles,
		title: 'Refine & Polish',
		description: 'You rewrite the arguments. We check the logic again. Iterate until perfect.',
	},
];

const HowItWorks = () => {
	const sectionRef = useRef(null);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [activeStep, setActiveStep] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return;

			const element = sectionRef.current;
			const rect = element.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			const start = windowHeight * 0.8;
			const end = -rect.height * 0.5;

			let progress = (start - rect.top) / (start - end);
			progress = Math.min(Math.max(progress, 0), 1);

			setScrollProgress(progress * 100);

			if (progress < 0.33) setActiveStep(0);
			else if (progress < 0.66) setActiveStep(1);
			else setActiveStep(2);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section ref={sectionRef} id='methodology' className='py-24 px-6 bg-white relative overflow-hidden'>
			{/* Background Dots */}
			<div className='absolute inset-0 dot-pattern opacity-30 pointer-events-none' />

			<div className='container mx-auto max-w-5xl relative z-10'>
				{/* Header */}
				<div className='text-center mb-16 md:mb-24'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-4 text-slate-900'>
						How it <span className='text-primary'>Works</span>
					</h2>
					<p className='text-slate-600 text-lg max-w-xl mx-auto leading-relaxed'>
						We don't just fix your grammar. We challenge your ideas.
					</p>
				</div>

				{/* Steps Container */}
				<div className='relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8 min-h-[400px] md:min-h-0'>
					{/* --- DESKTOP LINES (Horizontal) --- */}
					<div className='absolute top-10 left-0 w-full hidden md:block z-0 px-16'>
						<div className='w-full h-1 bg-slate-100 rounded-full' />
						<div
							className='absolute top-0 left-0 h-1 bg-primary transition-all duration-100 ease-out rounded-full'
							style={{ width: `${scrollProgress}%` }}
						/>
					</div>

					{/* --- MOBILE LINES (Vertical) --- */}
					{/* FIXED: Moved line to left-10 (40px) to align with icon centers */}
					<div className='absolute left-10 top-0 h-full w-1 md:hidden z-0'>
						<div className='h-full w-full bg-slate-100 rounded-full' />
						<div
							className='absolute top-0 left-0 w-full bg-primary transition-all duration-100 ease-out rounded-full'
							style={{ height: `${scrollProgress}%` }}
						/>
					</div>

					{/* --- STEPS --- */}
					{steps.map((step, index) => {
						const isActive = index <= activeStep;

						return (
							<div
								key={step.title}
								// FIXED: Flex-row on mobile (side-by-side), Flex-col on desktop (centered)
								className='flex flex-row md:flex-col items-start md:items-center text-left md:text-center relative z-10 w-full md:w-1/3 transition-all duration-500 gap-6 md:gap-0'
								style={{
									transform: `translateY(${isActive ? 0 : 20}px)`,
								}}
							>
								{/* Icon Circle Container */}
								{/* Flex-shrink-0 ensures icon doesn't squish on small screens */}
								<div className='relative flex-shrink-0'>
									<div
										className={`
                      w-20 h-20 rounded-2xl flex items-center justify-center mb-0 md:mb-6 border-4 transition-all duration-500 relative z-20
                      ${
							isActive
								? 'bg-primary border-primary shadow-xl shadow-indigo-200 scale-110'
								: 'bg-white border-slate-100 scale-100'
						}
                    `}
									>
										<step.icon
											className={`w-8 h-8 transition-colors duration-300 ${
												isActive ? 'text-white' : 'text-slate-300'
											}`}
											strokeWidth={2}
										/>
									</div>

									{/* White background patch behind the icon to hide the line perfectly */}
									<div className='absolute inset-2 bg-white z-10 rounded-xl' />
								</div>

								{/* Text Content Wrapper */}
								<div className='flex flex-col items-start md:items-center pt-2 md:pt-0'>
									{/* Step Number Badge */}
									<div
										className={`
                    mb-3 md:mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-500 bg-white relative z-20
                    ${isActive ? 'text-primary border-indigo-100' : 'text-slate-300 border-transparent'}
                    `}
									>
										Step 0{index + 1}
									</div>

									{/* Text Content */}
									<h3
										className={`text-xl font-bold mb-2 md:mb-3 transition-colors duration-300 ${
											isActive ? 'text-slate-900' : 'text-slate-300'
										}`}
									>
										{step.title}
									</h3>
									<p
										className={`leading-relaxed max-w-full md:max-w-[280px] text-sm transition-colors duration-300 ${
											isActive ? 'text-slate-600' : 'text-slate-300'
										}`}
									>
										{step.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
