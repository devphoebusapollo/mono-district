import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Plus } from 'lucide-react';
import { EASE_EDITORIAL, EditorialReveal, HairlineRule } from './MotionPrimitives';

interface FaqSectionProps {
  onBookCall: () => void;
}

const FAQ_ITEMS = [
  {
    id: 'specialist-roles',
    question: 'What specialist VAs can I hire?',
    answer:
      'You can hire dedicated virtual assistants in four specializations: Social Media Managers (content strategy, scheduling, basic design, community management, and analytics), Graphic Designers, Video Editors, and Web Designers/Developers.',
  },
  {
    id: 'account-manager-communication',
    question: 'How does communication work if I hire multiple VAs?',
    answer:
      'You never communicate directly with the specialist VAs. One dedicated Account Manager sits between you and your team—so whether you have one VA or four, you only ever talk to one person.',
  },
  {
    id: 'mix-and-match',
    question: 'Can I hire just one specialist VA or combine multiple roles?',
    answer:
      'Yes. Hire a single specialist role or combine Social Media Managers, Graphic Designers, Video Editors, and Web Designers/Developers—your Account Manager coordinates all of them behind the scenes for you.',
  },
  {
    id: 'turnaround-times',
    question: 'What are typical turnaround times across disciplines?',
    answer:
      'Social media posts and static graphic designs are typically delivered within 24 to 48 business hours. Short-form video edits (Reels, TikToks, video ads) take 2 to 3 business days, and web design or development milestones follow clear weekly sprint targets.',
  },
  {
    id: 'collaboration-tools',
    question: 'What tools do we use to share files and feedback?',
    answer:
      'No new software to learn. Share brand files, Figma links, raw footage, or web staging access via Google Drive, Dropbox, Frame.io, or Notion, and message your dedicated Account Manager directly on Slack or email—they relay and manage everything with your VAs.',
  },
  {
    id: 'payment-terms',
    question: 'How do pricing and rates work?',
    answer:
      'Rates are hourly or monthly depending on your needs and the specialist VA roles you select. Tell us which disciplines and hours you require on your consultation, and we will provide a custom quote—billed via card or bank transfer with no long-term lock-in contracts.',
  },
  {
    id: 'ai-and-craft',
    question: 'Do you use AI to create designs, videos, or websites?',
    answer:
      'No. All social copy, graphic designs, video edits, and web builds are crafted by real specialists—never AI-generated artwork. We only use AI internally for workflow efficiency like organizing briefs, transcription, and research.',
  },
] as const;

export function FaqSection({ onBookCall }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-12"
    >
      <HairlineRule />

      <div className="py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <EditorialReveal className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A] mb-4 text-balance">
              Frequently Asked Questions.
            </h2>
            <p className="text-base leading-[1.6] text-neutral-600 mb-6">
              Clear answers on specialist VA roles, your dedicated Account Manager, hourly and monthly rates, and turnaround times.
            </p>
            <button
              type="button"
              onClick={onBookCall}
              className="group inline-flex items-center gap-2 text-xs font-medium text-[#0A0A0A] hover:underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
            >
              <span>Still have questions? Book a call</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </button>
          </EditorialReveal>

          <div className="lg:col-span-8 border-b border-neutral-200">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-trigger-${item.id}`;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: EASE_EDITORIAL,
                  }}
                  className="border-t border-neutral-200"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      className="w-full py-6 sm:py-7 flex items-center justify-between gap-6 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                    >
                      <span className="font-display font-semibold text-lg sm:text-xl tracking-tight text-[#0A0A0A] group-hover:text-neutral-700 transition-colors duration-150">
                        {item.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="w-8 h-8 flex items-center justify-center border border-neutral-200 text-[#0A0A0A] group-hover:border-[#0A0A0A] transition-colors duration-150 shrink-0"
                      >
                        <Plus
                          className={`w-4 h-4 transition-transform duration-200 ease-out ${
                            isOpen ? 'rotate-45' : 'rotate-0'
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
                        className="pb-7 pr-10 sm:pr-14"
                      >
                        <p className="text-base leading-[1.7] text-neutral-600 max-w-2xl">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
