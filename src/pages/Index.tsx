import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemGrid from '@/components/ProblemGrid';
import ComparisonTable from '@/components/ComparisonTable';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import TrainingSection from '@/components/TrainingSection';
import InteractiveDemo from '@/components/InteractiveDemo';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
	return (
		<div className='min-h-screen bg-background'>
			<Navbar />
			<main>
				<HeroSection />
				<ProblemGrid />
				<ComparisonTable />
				<HowItWorks />

				<TrainingSection />
				<InteractiveDemo />
				<PricingSection />
				<TrustSection />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
