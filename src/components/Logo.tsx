import { TextCursor } from 'lucide-react';

interface LogoProps {
	className?: string;
}

const Logo = ({ className }: LogoProps) => {
	return (
		<a href='/' className={`flex items-center group ${className}`}>
			{/* Icon: Square with text cursor */}
			<div className='w-8 h-8 bg-primary rounded-sm flex items-center justify-center transition-all duration-200'>
				<TextCursor className='w-5 h-5 text-primary-foreground' strokeWidth={2.5} />
			</div>
			{/* Text: "nline" */}
			<span className='text-xl font-bold text-foreground tracking-tight'>nline</span>
		</a>
	);
};

export default Logo;
