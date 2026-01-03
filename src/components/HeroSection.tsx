import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles } from 'lucide-react'; // Added Sparkles

const HeroSection = () => {
	const [isHovered, setIsHovered] = useState(false);

	const scrollToDemo = () => {
		document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
	};

	const scrollToFeatures = () => {
		document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className='pt-32 pb-20 px-6 dot-pattern overflow-x-clip'>
			<div className='container mx-auto max-w-6xl'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left: Content */}
					<div className='space-y-8 animate-fade-in z-20 relative'>
						<h1
							className='text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-balance'
							style={{ color: '#2D3C59' }}
						>
							Your Writing Tutor. {/* Added "Free" here as well for double impact, or keep it simple */}
							<span className='text-primary'>Available 24/7.</span>
						</h1>
						<p className='text-xl text-muted-foreground leading-relaxed max-w-lg'>
							Don't let a deadline panic you into plagiarism. Inline helps you strengthen your arguments
							and fix logic gaps instantly.
						</p>
						<div className='flex flex-col sm:flex-row gap-4'>
							<Button
								size='xl'
								onClick={scrollToDemo}
								className='bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 transition-all'
							>
								Try Demo
							</Button>

							<Button
								variant='outline'
								size='xl'
								className='border-2 hover:bg-gray-50/50'
								onClick={scrollToFeatures}
							>
								Learn More
							</Button>
						</div>
					</div>

					{/* Right: Visual with Parallax Effect */}
					<div
						className='relative animate-fade-in lg:pl-12 lg:pr-12 perspective-1000'
						style={{ animationDelay: '0.2s' }}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						{/* Main Document Card */}
						<div
							className={`relative bg-card rounded-2xl card-shadow p-6 border border-border/50 transition-all duration-700 ease-out origin-center ${
								isHovered ? 'rotate-0 scale-[1.02]' : '-rotate-2'
							}`}
						>
							<div className='space-y-4 select-none'>
								<div className='flex items-center gap-3 pb-4 border-b border-border/50'>
									<div className='w-3 h-3 rounded-full bg-rose-400/80' />
									<div className='w-3 h-3 rounded-full bg-amber-400/80' />
									<div className='w-3 h-3 rounded-full bg-emerald-400/80' />
									<span className='text-sm text-muted-foreground ml-2 font-mono'>
										essay_draft.docx
									</span>
								</div>

								<div className='space-y-3 opacity-80'>
									<div className='h-3 bg-muted rounded w-full' />
									<div className='h-3 bg-muted rounded w-4/5' />
									<div className='h-3 bg-primary/10 rounded w-full border-l-2 border-primary' />
									<div className='h-3 bg-muted rounded w-3/4' />
									<div className='h-3 bg-muted rounded w-5/6' />
									<div className='h-3 bg-muted rounded w-full' />
								</div>
							</div>

							{/* Floating feedback card */}
							<div
								className={`
                  absolute 
                  bottom-6 right-4 
                  lg:bottom-12 lg:-right-6 
                  bg-white rounded-xl card-shadow-hover p-4 border border-primary/10 
                  w-[240px] z-10
                  transition-all duration-700 ease-out
                  ${isHovered ? 'rotate-3 translate-y-[-10px]' : 'rotate-6'}
                `}
							>
								<div className='flex items-start gap-3'>
									<div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0'>
										<MessageCircle className='w-4 h-4 text-primary' />
									</div>
									<div className='space-y-1'>
										<p className='text-xs font-bold text-primary uppercase tracking-wider'>
											Socratic Question
										</p>
										<p className='text-sm text-slate-600 leading-snug font-medium'>
											"What specific evidence supports this assertion?"
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Background decoration */}
						<div className='absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-3xl' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
