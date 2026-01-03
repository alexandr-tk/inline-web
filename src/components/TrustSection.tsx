const TrustSection = () => {
	return (
		<section className='py-24 px-6 border-t border-slate-100 bg-white relative overflow-hidden'>
			{/* Subtle background texture */}
			<div className='absolute inset-0 dot-pattern opacity-30' />

			{/* Gradient masks to fade edges */}
			<div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none' />

			<div className='container mx-auto max-w-4xl text-center relative z-10'>
				{/* Label */}
				<p className='text-xs font-bold text-indigo-900/30 uppercase tracking-[0.3em] mb-10'>
					Developed in partnership with research faculty at
				</p>

				<div className='flex flex-col items-center justify-center gap-6'>
					{/* The "Logo" Representation */}
					{/* We use font-serif to distinguish the college from the app UI */}
					<h3 className='text-3xl md:text-4xl font-serif text-slate-800 tracking-wide opacity-90 hover:opacity-100 transition-opacity cursor-default'>
						LAFAYETTE COLLEGE
					</h3>

					{/* Separation Line */}
					<div className='w-12 h-px bg-slate-200 my-2' />

					{/* Future Proofing Text */}
					<div className='flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100'>
						<span className='relative flex h-2 w-2'>
							<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
							<span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
						</span>
						<p className='text-xs font-medium text-slate-500'>
							Pilot programs launching at major institutions in 2026
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrustSection;
