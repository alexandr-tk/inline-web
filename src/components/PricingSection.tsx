import { useState } from 'react';
import { Check, Sparkles, Building2, GraduationCap, Lock, ArrowDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
	{
		id: 'student',
		name: 'Student Basic',
		price: '$0',
		period: '/ forever',
		description: 'Everything you need to write better, right now.',
		icon: GraduationCap,
		status: 'active',
		features: [
			'Unlimited Essays',
			'Socratic Logic Checking',
			'Grammar & Style Fixes',
			'24/7 AI Availability',
			'Fair Use Policy Applied',
		],
		cta: 'Join Waitlist',
	},
	{
		id: 'scholar',
		name: 'Scholar Pro',
		price: '$10',
		period: '/ month',
		description: 'Deep research tools for power users.',
		icon: Sparkles,
		status: 'coming_soon',
		features: [
			'Access to latest Beta Models',
			'Deep Context Awareness',
			'Automated Citation Manager',
			'Plagiarism Shield',
			'Priority Support',
		],
		cta: 'Coming Soon',
	},
	{
		id: 'institution',
		name: 'Institutional',
		price: 'Custom',
		period: 'annual billing',
		description: 'For universities and writing centers.',
		icon: Building2,
		status: 'contact',
		features: [
			'Scholar Pro for all students',
			'LMS Integration (Canvas/BB)',
			'Departmental Analytics',
			'SSO & Security Compliance',
			'Dedicated Success Manager',
		],
		cta: 'Contact Sales',
	},
];

const PricingSection = () => {
	const [activeTab, setActiveTab] = useState('student');

	const scrollToFooter = () => {
		const footer = document.getElementById('footer');
		if (footer) {
			footer.scrollIntoView({ behavior: 'smooth' });
		} else {
			window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
		}
	};

	const handleContactClick = () => {
		window.location.href = 'mailto:partnerships@inline.ai?subject=Inquiry regarding Institutional Access';
	};

	return (
		<section id='pricing' className='py-24 px-6 bg-slate-50 border-t border-slate-200'>
			<div className='container mx-auto max-w-6xl'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-6 text-slate-900'>
						Simple, Transparent <span className='text-primary'>Plans</span>.
					</h2>
					<p className='text-slate-600 text-lg max-w-2xl mx-auto'>
						Our mission is to democratize elite writing feedback. That's why our core features will always
						be free for students.
					</p>
				</div>

				{/* --- MOBILE TABS (Grid for Equal Width) --- */}
				<div className='flex justify-center mb-8 md:hidden'>
					{/* Changed 'flex' to 'grid grid-cols-3' to force equal widths */}
					<div className='grid grid-cols-3 w-full max-w-sm bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm gap-1'>
						{plans.map((plan) => (
							<button
								key={plan.id}
								onClick={() => setActiveTab(plan.id)}
								className={`
                  py-2 text-xs font-bold rounded-lg transition-all duration-200 text-center truncate px-1
                  ${
						activeTab === plan.id
							? 'bg-slate-900 text-white shadow-md'
							: 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
					}
                `}
							>
								{/* Truncate ensures text doesn't break layout */}
								{plan.name.split(' ')[0]}
							</button>
						))}
					</div>
				</div>

				{/* Pricing Grid */}
				<div className='grid md:grid-cols-3 gap-8 items-start'>
					{plans.map((plan) => {
						const isComingSoon = plan.status === 'coming_soon';
						const isActive = plan.status === 'active';
						const isContact = plan.status === 'contact';
						const isHiddenOnMobile = activeTab !== plan.id;

						return (
							<div
								key={plan.name}
								className={`
                  relative flex flex-col h-full p-8 rounded-2xl transition-all duration-300
                  ${isHiddenOnMobile ? 'hidden md:flex' : 'flex'} 
                  
                  ${
						isActive
							? 'bg-white border-2 border-indigo-100 shadow-xl shadow-indigo-50/50 z-10 scale-100 md:scale-105'
							: 'bg-white border border-slate-200 shadow-sm'
					}
                  ${isComingSoon ? 'border-dashed opacity-80 bg-slate-50' : ''}
                `}
							>
								{/* Header */}
								<div className='mb-6'>
									{/* Icon Container: Only the Active plan gets the colorful background now */}
									<div
										className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 
                    ${isActive ? 'bg-indigo-50 text-primary' : 'bg-slate-100 text-slate-500'}
                  `}
									>
										<plan.icon className='w-6 h-6' />
									</div>
									<h3 className='text-xl font-bold text-slate-900 mb-2'>{plan.name}</h3>
									<p className='text-sm text-slate-500 leading-relaxed min-h-[40px]'>
										{plan.description}
									</p>
								</div>

								{/* Price */}
								<div className='mb-8 min-h-[50px] flex flex-col justify-center'>
									{isContact ? (
										<div className='flex flex-col'>
											<span className='text-3xl font-bold text-slate-900'>Custom</span>
											{/* Softer color for the subtext */}
											<span className='text-xs font-bold uppercase tracking-wider text-slate-400 mt-1'>
												Annual Billing
											</span>
										</div>
									) : (
										<div>
											<span
												className={`text-4xl font-bold ${
													isActive ? 'text-slate-900' : 'text-slate-700'
												}`}
											>
												{plan.price}
											</span>
											<span className='text-slate-400 font-medium ml-1'>{plan.period}</span>
										</div>
									)}
								</div>

								{/* Features */}
								<ul className='space-y-4 mb-8 flex-grow'>
									{plan.features.map((feature) => (
										<li key={feature} className='flex items-start gap-3 text-sm'>
											<div className={`mt-0.5 ${isActive ? 'text-primary' : 'text-slate-400'}`}>
												{isComingSoon ? (
													<Lock className='w-4 h-4' />
												) : (
													<Check className='w-4 h-4' />
												)}
											</div>
											<span className={isComingSoon ? 'text-slate-400' : 'text-slate-600'}>
												{feature}
											</span>
										</li>
									))}
								</ul>

								{/* CTA Button */}
								<Button
									variant={isActive ? 'default' : 'outline'}
									onClick={isContact ? scrollToFooter : !isComingSoon ? scrollToFooter : undefined}
									className={`
                    w-full h-12 text-base font-semibold transition-all
                    ${
						isComingSoon
							? 'opacity-70 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-100'
							: ''
					}
                    
                    /* Active Plan: Pop off the page */
                    ${isActive ? 'shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5' : ''}
                    
                    /* Institutional Plan: Subtle Outline (Gray -> Dark on Hover) */
                    ${
						isContact
							? 'bg-white border border-slate-200 text-slate-500 hover:border-slate-800 hover:text-slate-900'
							: ''
					}
                  `}
									disabled={isComingSoon}
								>
									{plan.cta}
									{isContact && <ArrowDown className='w-4 h-4 ml-2' />}
									{isActive && <ArrowDown className='w-4 h-4 ml-2' />}
								</Button>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
