import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  PortfolioCategory,
  PortfolioItem,
} from '../data/portfolioItems';
import { EASE_EDITORIAL, EditorialReveal, HairlineRule } from './MotionPrimitives';
import { PortfolioLightbox } from './PortfolioLightbox';

interface PortfolioSectionProps {
  onBookCall: () => void;
}

const INITIAL_VISIBLE_COUNT = 8;

function PortfolioTile({
  item,
  index,
  onClick,
}: {
  item: PortfolioItem;
  index: number;
  onClick: () => void;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{
        duration: 0.32,
        delay: Math.min(index * 0.03, 0.24),
        ease: EASE_EDITORIAL,
      }}
      className="group"
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A]"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-neutral-100 border border-neutral-200">
          {hasError ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-100">
              <span className="font-mono text-xs text-neutral-400 mb-2">{item.index}</span>
              <span className="font-display text-sm font-medium text-neutral-700">
                {item.title}
              </span>
            </div>
          ) : (
            <img
              src={item.imageUrl}
              alt={`${item.title} — ${item.category} social media posting`}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setHasError(true)}
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          )}
        </div>

        <div className="pt-3.5 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-xs text-neutral-500">
              <span className="font-mono tabular-nums">{item.index}</span>
              <span aria-hidden="true">·</span>
              <span className="truncate">{item.category}</span>
            </div>
            <h3 className="font-display font-medium text-sm sm:text-[15px] text-[#0A0A0A] mt-1 truncate group-hover:underline underline-offset-4">
              {item.title}
            </h3>
          </div>
          <ArrowUpRight
            className="w-4 h-4 text-neutral-400 group-hover:text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0 mt-1"
            aria-hidden="true"
          />
        </div>
      </button>
    </motion.article>
  );
}

export function PortfolioSection({ onBookCall }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | PortfolioCategory>('All');
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const visibleItems = useMemo(() => {
    if (activeCategory !== 'All' || showAll) {
      return filteredItems;
    }
    return filteredItems.slice(0, INITIAL_VISIBLE_COUNT);
  }, [activeCategory, filteredItems, showAll]);

  const handleCategoryChange = (category: 'All' | PortfolioCategory) => {
    setActiveCategory(category);
    setLightboxIndex(null);
  };

  return (
    <section
      id="work"
      className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-12"
    >
      <HairlineRule />

      <div className="py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-14">
          <EditorialReveal className="lg:col-span-5">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A] mb-3 text-balance">
              Selected Work.
            </h2>
            <p className="text-base text-neutral-600">
              Real social media creatives produced for client feeds and campaigns.
            </p>
          </EditorialReveal>

          <EditorialReveal delay={0.08} className="lg:col-span-7 flex flex-wrap lg:justify-end gap-2">
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === 'All'
                  ? PORTFOLIO_ITEMS.length
                  : PORTFOLIO_ITEMS.filter((item) => item.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={isActive}
                  className={`relative isolate px-3.5 py-2 text-xs font-medium border transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A] ${
                    isActive
                      ? 'text-white border-[#0A0A0A]'
                      : 'bg-transparent text-neutral-600 border-neutral-200 hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-category-active"
                      transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
                      className="absolute inset-0 bg-[#0A0A0A] z-0"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">
                    {category}{' '}
                    <span className="font-mono tabular-nums opacity-70 ml-1">{count}</span>
                  </span>
                </button>
              );
            })}
          </EditorialReveal>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${showAll}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: EASE_EDITORIAL }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10"
          >
            {visibleItems.map((item, idx) => (
              <PortfolioTile
                key={item.id}
                item={item}
                index={idx}
                onClick={() => setLightboxIndex(idx)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {activeCategory === 'All' && PORTFOLIO_ITEMS.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-xs tabular-nums text-neutral-500">
              Showing {visibleItems.length} of {PORTFOLIO_ITEMS.length} client samples
            </p>
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-3 border border-[#0A0A0A] text-[#0A0A0A] text-xs font-medium hover:bg-[#0A0A0A] hover:text-white transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
            >
              {showAll
                ? 'Show Fewer Samples'
                : `View All ${PORTFOLIO_ITEMS.length} Samples`}
            </button>
          </div>
        )}
      </div>

      <PortfolioLightbox
        items={visibleItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(nextIdx) => setLightboxIndex(nextIdx)}
        onBookCall={onBookCall}
      />
    </section>
  );
}
