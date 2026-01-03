import Logo from '@/components/Logo';
import { Mail } from 'lucide-react';

const Footer = () => {
	return (
		<footer className='py-12 px-6 border-t border-border'>
			<div className='container mx-auto max-w-6xl'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-6'>
					<Logo />

					{/* Contact */}
					<a
						href='mailto:hello@inline.edu'
						className='flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200'
					>
						<Mail className='w-4 h-4' />
						<span className='text-sm'>Contact Us: hello@inlinetutor.com</span>
					</a>

					{/* Copyright */}
					<p className='text-sm text-muted-foreground'>© Inline 2026. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
