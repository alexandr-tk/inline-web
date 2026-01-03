import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle, AlertTriangle, Award } from 'lucide-react';

interface FeedbackSegment {
	id: string;
	type: 'socratic' | 'logic' | 'praise';
	text: string;
	feedback: string;
}

const segments: FeedbackSegment[] = [
	{
		id: 'segment-1',
		type: 'socratic',
		text: 'A close reading of the photograph is therefore a way of decoding how all these meanings work together to carry the intent of the photographer and what the picture is trying to say to its viewer.',
		feedback:
			"Good start. However, you might want to consider how the 'connotative' invites interpretation, which is distinct from being purely 'subjective'. How does that distinction change your analysis?",
	},
	{
		id: 'segment-2',
		type: 'logic',
		text: 'You cannot definitely tell that unless you have seen this picture before, so you can find such information only by searching it up.',
		feedback:
			'Yes—this is exactly how research provides insight. But you missed an opportunity to describe the visual hierarchy here: why is one figure positioned above the other? Does this posture suggest a celebration?',
	},
	{
		id: 'segment-3',
		type: 'praise',
		text: 'This is the power of research.',
		feedback:
			'Excellent point! You have successfully tied the visual analysis back to the historical context to reveal a hidden truth.',
	},
];

const getHighlightStyles = (type: FeedbackSegment['type'], isActive: boolean) => {
	const base = 'cursor-pointer transition-all duration-200 rounded-sm px-0.5 -mx-0.5';

	// Marker-style background with underline when active
	switch (type) {
		case 'socratic':
			return cn(base, 'bg-blue-200/40', isActive && 'bg-blue-300/60 decoration-2 underline decoration-blue-500');
		case 'logic':
			return cn(
				base,
				'bg-amber-200/40',
				isActive && 'bg-amber-300/60 decoration-2 underline decoration-amber-500'
			);
		case 'praise':
			return cn(base, 'bg-teal-200/40', isActive && 'bg-teal-300/60 decoration-2 underline decoration-teal-500');
	}
};

const getFeedbackCardStyles = (type: FeedbackSegment['type'], isActive: boolean) => {
	const base = 'p-4 rounded-xl bg-card cursor-pointer transition-all duration-300';

	if (isActive) {
		return cn(base, 'opacity-100 scale-105 shadow-xl z-10 relative');
	}

	return cn(base, 'opacity-70 shadow-sm hover:opacity-90');
};

const getBadgeStyles = (type: FeedbackSegment['type']) => {
	switch (type) {
		case 'socratic':
			return 'bg-blue-100 text-blue-600';
		case 'logic':
			return 'bg-amber-100 text-amber-600';
		case 'praise':
			return 'bg-teal-100 text-teal-600';
	}
};

const getFeedbackIcon = (type: FeedbackSegment['type']) => {
	switch (type) {
		case 'socratic':
			return <MessageCircle className='w-3 h-3' />;
		case 'logic':
			return <AlertTriangle className='w-3 h-3' />;
		case 'praise':
			return <Award className='w-3 h-3' />;
	}
};

const getFeedbackLabel = (type: FeedbackSegment['type']) => {
	switch (type) {
		case 'socratic':
			return 'SOCRATIC';
		case 'logic':
			return 'LOGIC GAP';
		case 'praise':
			return 'PRAISE';
	}
};

const InteractiveDemo = () => {
	const [activeSegment, setActiveSegment] = useState<string | null>(null);
	const feedbackRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
	const textRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});

	useEffect(() => {
		if (activeSegment && feedbackRefs.current[activeSegment]) {
			feedbackRefs.current[activeSegment]?.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
			});
		}
	}, [activeSegment]);

	const handleSegmentClick = (id: string) => {
		setActiveSegment(activeSegment === id ? null : id);
	};

	const renderTextWithHighlights = () => {
		return (
			<div className='prose prose-sm max-w-none text-foreground leading-relaxed'>
				<p className='mb-4'>
					Every photograph has a unique, indefinite quality; it is both objective and subjective at the same
					time. By just looking at the photograph, you can read its denotative meaning. The connotative
					meaning of the photograph, in turn, is its subjective aspect. These two qualities complement each
					other and usually shape our perception of the image simultaneously.{' '}
					<span
						ref={(el) => (textRefs.current[segments[0].id] = el)}
						className={getHighlightStyles(segments[0].type, activeSegment === segments[0].id)}
						onClick={() => handleSegmentClick(segments[0].id)}
					>
						{segments[0].text}
					</span>
				</p>

				<p className='mb-4'>
					Take this photograph depicting two men, for example. Both of them are formally dressed and smoking
					cigars. In the background, you can see a building in the Revival architectural style, which was very
					common in the 19th century in England and the US. Combining these elements together, it is easy to
					suggest that the photo was taken in one of those countries during the 1800s. While the timeframe is
					right, it turns out that the actual location of the photograph has nothing to do with these
					countries; the photograph was taken in Russia.{' '}
					<span
						ref={(el) => (textRefs.current[segments[1].id] = el)}
						className={getHighlightStyles(segments[1].type, activeSegment === segments[1].id)}
						onClick={() => handleSegmentClick(segments[1].id)}
					>
						{segments[1].text}
					</span>
				</p>

				<p>
					That brings us to the second important part of close readings—research. The close reading of the
					photograph itself is often very useful for understanding the context behind the photograph. But when
					combined with research, it may offer surprising results. The fact that it was easy to confuse
					19th-century Russia with England encourages you to think more about the history of Russia at that
					time. You may find out that after the 1700s it underwent westernization under Peter the Great, which
					made the country look very similar to Europe.{' '}
					<span
						ref={(el) => (textRefs.current[segments[2].id] = el)}
						className={getHighlightStyles(segments[2].type, activeSegment === segments[2].id)}
						onClick={() => handleSegmentClick(segments[2].id)}
					>
						{segments[2].text}
					</span>
				</p>
			</div>
		);
	};

	return (
		<section id='demo' className='py-24 px-6'>
			<div className='container mx-auto max-w-7xl'>
				<div className='text-center mb-12'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6'>
						<MessageCircle className='w-4 h-4' />
						Interactive Demo
					</div>
					<h2 className='text-3xl lg:text-4xl font-extrabold mb-4' style={{ color: '#1a1a1a' }}>
						See Inline in <span className='text-primary'>Action</span>
					</h2>
					<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
						Click on highlighted passages to see the corresponding feedback.
					</p>
				</div>

				<div className='bg-card rounded-2xl border border-border card-shadow overflow-hidden'>
					{/* Editor Header */}
					<div className='flex items-center gap-3 px-6 py-4 border-b border-border bg-muted/30'>
						<div className='flex items-center gap-2'>
							<div className='w-3 h-3 rounded-full bg-destructive/60' />
							<div className='w-3 h-3 rounded-full bg-amber-400/60' />
							<div className='w-3 h-3 rounded-full bg-teal-400/60' />
						</div>
						<span className='text-sm text-muted-foreground'>photography_analysis_essay.docx</span>
					</div>

					{/* Split View */}
					<div className='grid lg:grid-cols-[65%_35%] min-h-[500px]'>
						{/* Document Editor */}
						<div className='p-8 border-r border-border overflow-auto'>{renderTextWithHighlights()}</div>

						{/* Feedback Sidebar */}
						<div className='p-6 bg-muted/20 overflow-auto'>
							<h3 className='text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4'>
								Feedback ({segments.length})
							</h3>

							<div className='space-y-4'>
								{segments.map((segment) => (
									<div
										key={segment.id}
										ref={(el) => (feedbackRefs.current[segment.id] = el)}
										className={getFeedbackCardStyles(segment.type, activeSegment === segment.id)}
										onClick={() => handleSegmentClick(segment.id)}
									>
										<div className='flex items-center justify-between mb-3'>
											<div
												className={cn(
													'inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider',
													getBadgeStyles(segment.type)
												)}
											>
												{getFeedbackIcon(segment.type)}
												{getFeedbackLabel(segment.type)}
											</div>
										</div>
										<p className='text-sm text-foreground leading-relaxed'>{segment.feedback}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InteractiveDemo;
