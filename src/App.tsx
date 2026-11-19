import { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { BrandMark } from './components/BrandMark';
import { EditorialImage } from './components/EditorialImage';
import { EASE_EDITORIAL, EditorialReveal, HairlineRule } from './components/MotionPrimitives';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectBriefModal } from './components/ProjectBriefModal';

const HERO_IMAGE = '/src/assets/images/editorial_hero_studio_1794876730925.jpg';
const CRAFT_IMAGE = '/src/assets/images/editorial_craft_layouts_1794876731989.jpg';
const CONTACT_IMAGE = '/src/assets/images/editorial_point_of_contact_1794876732893.jpg';
const CLOSING_IMAGE = '/src/assets/images/editorial_closing_suite_1794876732812.jpg';

const SERVICES = [
  {
    title: 'Copywriting',
    description:
      'Clear, engaging captions, hooks, and ad copy built to stop the scroll and drive action across social channels.',
  },
  {
    title: 'Graphic Design',
    description:
      'Clean, purposeful social media visuals, carousels, and branded posts that make your feed stand out.',
  },
  {
    title: 'Video Editing',
    description:
      'Engaging short-form social media videos, Reels, and ads edited to capture attention and keep your audience watching.',
  },
] as const;

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Send your project.',
    description:
      'Tell us what your channels need. Share your brief, brand assets, and content requirements.',
  },
  {
    number: '02',
    title: 'We get to work.',
    description:
      'Our social media creative team handles the copy, design, and editing, while your dedicated account manager handles communication and updates.',
  },
  {
    number: '03',
    title: 'We deliver.',
    description:
      'Receive ready-to-publish social media creatives, formatted for your feeds, stories, and campaigns.',
  },
] as const;

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | undefined>(undefined);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openBriefModal = (discipline?: string) => {
    setSelectedDiscipline(discipline);
    setModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] flex flex-col">
        {/* Top Bar: 3-zone contract */}
        <header className="sticky top-0 z-40 h-16 bg-[#FAFAFA]/95 backdrop-blur-sm border-b border-neutral-200">
          <div className="max-w-[1360px] mx-auto h-full px-6 md:px-10 lg:px-12 flex items-center justify-between gap-8">
            <a
              href="#top"
              className="whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A]"
              aria-label="MONO DISTRICT. Home"
            >
              <BrandMark size="sm" />
            </a>

            <nav
              aria-label="Primary navigation"
              className="hidden md:flex items-center gap-8 text-sm text-neutral-600"
            >
              <a
                href="#what-we-do"
                className="hover:text-[#0A0A0A] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                What We Do
              </a>
              <a
                href="#work"
                className="hover:text-[#0A0A0A] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Selected Work
              </a>
              <a
                href="#process"
                className="hover:text-[#0A0A0A] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Process
              </a>
              <a
                href="#start"
                className="hover:text-[#0A0A0A] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openBriefModal()}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#0A0A0A] text-white text-xs font-medium tracking-wide hover:bg-neutral-800 active:scale-[0.98] transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
              >
                Free Consultation
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="md:hidden w-11 h-11 flex items-center justify-center border border-neutral-200 text-[#0A0A0A] hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile navigation drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: EASE_EDITORIAL }}
                className="md:hidden bg-[#FAFAFA] border-b border-neutral-200 px-6 py-6 space-y-4"
              >
                <nav aria-label="Mobile navigation" className="flex flex-col space-y-3 text-base text-neutral-800">
                  <a
                    href="#what-we-do"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 hover:text-[#0A0A0A]"
                  >
                    What We Do
                  </a>
                  <a
                    href="#work"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 hover:text-[#0A0A0A]"
                  >
                    Selected Work
                  </a>
                  <a
                    href="#process"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 hover:text-[#0A0A0A]"
                  >
                    Process
                  </a>
                  <a
                    href="#start"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 hover:text-[#0A0A0A]"
                  >
                    Contact
                  </a>
                </nav>
                <button
                  type="button"
                  onClick={() => openBriefModal()}
                  className="w-full py-3 px-6 bg-[#0A0A0A] text-white text-sm font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all duration-150 cursor-pointer whitespace-nowrap"
                >
                  Free Consultation
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-16 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end pb-12 lg:pb-16">
              <EditorialReveal immediate y={10} className="lg:col-span-8">
                <h1 className="font-display font-bold text-[clamp(2.5rem,5.2vw,4.75rem)] leading-[1.02] tracking-[-0.03em] text-[#0A0A0A] text-balance">
                  Your dedicated social media
                  <br />
                  creatives partner.
                </h1>
              </EditorialReveal>

              <EditorialReveal immediate y={10} delay={0.08} className="lg:col-span-4 space-y-6">
                <p className="text-base sm:text-[17px] leading-[1.6] text-neutral-700">
                  A dedicated social media creatives content provider delivering copywriting, graphic design, and video editing for brands and agencies.
                </p>
                <p className="text-sm leading-[1.6] text-neutral-500">
                  No complicated processes. No unnecessary back-and-forth. Just consistent social content, delivered.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openBriefModal()}
                    className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#0A0A0A] text-white text-sm font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                  >
                    <span>Free Consultation</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </button>
                </div>
              </EditorialReveal>
            </div>

            <EditorialImage
              src={HERO_IMAGE}
              alt="Minimalist monochrome creative studio interior with tall windows and long matte black oak table"
              aspectClassName="aspect-[16/9]"
              priority
            />
          </section>

          {/* Section 1: What We Do */}
          <section
            id="what-we-do"
            className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-12"
          >
            <HairlineRule />

            <div className="py-20 lg:py-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 lg:mb-16">
                <EditorialReveal className="lg:col-span-4">
                  <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A] text-balance">
                    What We Do.
                  </h2>
                </EditorialReveal>
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 border-t border-neutral-200 md:border-t-0">
                    {SERVICES.map((service, index) => (
                      <motion.article
                        key={service.title}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.08,
                          ease: EASE_EDITORIAL,
                        }}
                        className={`py-8 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 border-neutral-200 ${
                          index < SERVICES.length - 1 ? 'md:border-r md:border-neutral-200' : ''
                        } flex flex-col justify-between`}
                      >
                        <div>
                          <h3 className="font-display font-semibold text-xl tracking-tight text-[#0A0A0A] mb-3">
                            {service.title}
                          </h3>
                          <p className="text-sm sm:text-[15px] leading-[1.6] text-neutral-600">
                            {service.description}
                          </p>
                        </div>

                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => openBriefModal(service.title)}
                            className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#0A0A0A] hover:underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                          >
                            <span>Brief {service.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                          </button>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>

              <EditorialImage
                src={CRAFT_IMAGE}
                alt="Monochrome overhead editorial photograph of print layouts, typography proofs, and minimalist design workspace"
                aspectClassName="aspect-[16/9]"
              />
            </div>
          </section>

          {/* Portfolio: Selected Work */}
          <PortfolioSection onBookCall={() => openBriefModal('Graphic Design')} />

          {/* Section 2: Simple By Design */}
          <section
            id="process"
            className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-12"
          >
            <HairlineRule />

            <div className="py-20 lg:py-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <EditorialReveal className="lg:col-span-4 lg:sticky lg:top-24">
                  <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A] mb-4 text-balance">
                    Simple By Design.
                  </h2>
                  <p className="text-base sm:text-lg text-neutral-600">
                    Your social content. Our execution.
                  </p>
                </EditorialReveal>

                <div className="lg:col-span-8 border-b border-neutral-200">
                  {PROCESS_STEPS.map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                        ease: EASE_EDITORIAL,
                      }}
                      className="border-t border-neutral-200 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-baseline"
                    >
                      <div className="sm:col-span-2">
                        <span className="font-mono text-sm tabular-nums text-neutral-400">
                          {step.number}
                        </span>
                      </div>
                      <div className="sm:col-span-10">
                        <h3 className="font-display font-semibold text-xl sm:text-2xl tracking-tight text-[#0A0A0A] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-base leading-[1.65] text-neutral-600 max-w-xl">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Integrated within Process: One Point of Contact */}
              <div className="mt-20 lg:mt-24 pt-16 lg:pt-20 border-t border-neutral-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
                  <div className="lg:col-span-6">
                    <EditorialImage
                      src={CONTACT_IMAGE}
                      alt="Editorial monochrome portrait of a creative account manager seated at a concrete table reviewing a notebook"
                      aspectClassName="aspect-[3/4]"
                      className="lg:h-full"
                    />
                  </div>

                  <EditorialReveal
                    delay={0.08}
                    className="lg:col-span-6 flex flex-col justify-between py-2 lg:py-6"
                  >
                    <div>
                      <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.06] text-[#0A0A0A] mb-6 text-balance">
                        One Point of Contact.
                      </h3>
                      <p className="font-display font-medium text-xl sm:text-2xl tracking-tight text-neutral-800 mb-10">
                        One account manager. Every account.
                      </p>

                      <div className="space-y-6 text-base sm:text-[17px] leading-[1.7] text-neutral-600 max-w-lg">
                        <p>
                          No chasing separate writers, designers, or editors—or figuring out who to contact.
                        </p>
                        <p>
                          You&apos;ll have a dedicated account manager as your main point of contact for social content requests, updates, feedback, and ongoing creatives.
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-neutral-200">
                      <p className="font-display font-semibold text-lg sm:text-xl text-[#0A0A0A]">
                        You focus on your business. We handle your social media creatives.
                      </p>
                    </div>
                  </EditorialReveal>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Closing Statement & Editorial Showcase */}
          <section id="start" className="bg-[#0A0A0A] text-white">
            <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-12 pt-20 lg:pt-28 pb-16 lg:pb-24">
              <EditorialImage
                src={CLOSING_IMAGE}
                alt="Monochrome wide photograph of a dark architectural video editing and graphic design studio suite"
                aspectClassName="aspect-[16/9]"
                className="mb-16 lg:mb-20"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
                <EditorialReveal className="lg:col-span-7">
                  <h2 className="font-display font-bold text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.04] tracking-[-0.03em] text-white text-balance">
                    Less Management.
                    <br />
                    More Creating.
                  </h2>
                </EditorialReveal>

                <EditorialReveal delay={0.08} className="lg:col-span-5 space-y-6">
                  <p className="text-base sm:text-[17px] leading-[1.65] text-neutral-300">
                    A dedicated social media creatives content provider you can count on—without the complexity of managing an in-house team.
                  </p>
                  <p className="font-display font-medium text-lg text-white">
                    You brief. We create. We deliver.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => openBriefModal()}
                      className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[#0A0A0A] text-sm font-medium hover:bg-neutral-200 active:scale-[0.98] transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <span>Free Consultation</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                    </button>
                  </div>
                </EditorialReveal>
              </div>
            </div>
          </section>
        </main>

        {/* Quiet Footer */}
        <footer className="bg-[#0A0A0A] text-neutral-400">
          <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-12">
            <HairlineRule dark />
            <div className="py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <BrandMark inverted size="sm" />
                <span className="font-mono text-xs text-neutral-400 tracking-wide">
                  © 2026
                </span>
              </div>

              <p className="text-sm text-neutral-400">
                Social media creatives, made simple.
              </p>

              <a
                href="mailto:support.monodistrict@gmail.com"
                className="text-sm text-neutral-300 hover:text-white underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
              >
                support.monodistrict@gmail.com
              </a>
            </div>
          </div>
        </footer>

        <ProjectBriefModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          defaultDiscipline={selectedDiscipline}
        />
      </div>
    </MotionConfig>
  );
}
