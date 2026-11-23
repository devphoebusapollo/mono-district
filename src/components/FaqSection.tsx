import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Plus } from 'lucide-react';
import { EASE_EDITORIAL, EditorialReveal, HairlineRule } from './MotionPrimitives';

interface FaqSectionProps {
  onBookCall: () => void;
}

const FAQ_ITEMS = [
  {
    id: 'turnaround-times',
    question: 'What are your typical turnaround times?',
    answer:
      'Static social media graphics and caption drafts are typically delivered within 24 to 48 business hours. Short-form video edits (Reels, TikToks, and social ads) are delivered within 2 to 3 business days depending on scope, with every deadline tracked and coordinated by your virtual assistant.',
  },
  {
    id: 'scheduling-community',
    question: 'Do you also handle post scheduling and community management?',
    answer:
      'Yes—when you need more than standalone assets, your virtual assistant can schedule and publish approved posts across your social calendar and handle day-to-day community management, including comment replies and inbox triage.',
  },
  {
    id: 'collaboration-tools',
    question: 'What collaboration tools do you use for briefs, assets, and feedback?',
    answer:
      'We fit directly into your existing workflow so there is no new software to learn. Share brand guidelines, raw footage, and feedback via Google Drive, Dropbox, Frame.io, or Notion—and communicate with your dedicated virtual assistant over email or Slack.',
  },
  {
    id: 'revisions-approvals',
    question: 'How do revisions and approvals work?',
    answer:
      'Every deliverable includes structured revision rounds managed in one thread by your virtual assistant. Send consolidated notes or timestamped video edits to one person, and they coordinate changes across our designers, editors, and writers until everything is ready.',
  },
  {
    id: 'payment-terms',
    question: 'What are your payment terms and billing options?',
    answer:
      'We offer straightforward monthly retainers for ongoing social media management and creative production, as well as fixed-scope project packages. Invoices are billed upfront via card or bank transfer with clear scope—no hidden fees or long-term lock-in contracts.',
  },
  {
    id: 'virtual-assistant-point',
    question: 'Who will I actually be talking to every day?',
    answer:
      'You only talk to one seasoned virtual assistant with years of social media management experience. Instead of you chasing separate graphic designers, video editors, and caption writers, your virtual assistant manages the entire team, schedule, and delivery queue for you.',
  },
  {
    id: 'ai-and-craft',
    question: 'Do you use AI to create your designs or artworks?',
    answer:
      'No. Every graphic, video edit, and piece of visual artwork is crafted by real human creatives on our team. We use AI only behind the scenes for workflow efficiency—such as organizing briefs, transcription, and internal coordination—never to generate your artworks.',
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
              Clear answers on turnaround times, scheduling and community support, collaboration tools, and payment terms.
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
