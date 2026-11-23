import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { PortfolioItem } from '../data/portfolioItems';
import { EASE_EDITORIAL } from './MotionPrimitives';

interface PortfolioLightboxProps {
  items: readonly PortfolioItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  onBookCall: () => void;
}

export function PortfolioLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
  onBookCall,
}: PortfolioLightboxProps) {
  const [hasError, setHasError] = useState(false);

  const item = activeIndex !== null ? items[activeIndex] ?? null : null;

  useEffect(() => {
    setHasError(false);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onNavigate((activeIndex - 1 + items.length) % items.length);
      } else if (event.key === 'ArrowRight') {
        onNavigate((activeIndex + 1) % items.length);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, items.length, onClose, onNavigate]);

  const prevIndex =
    activeIndex !== null ? (activeIndex - 1 + items.length) % items.length : 0;
  const nextIndex = activeIndex !== null ? (activeIndex + 1) % items.length : 0;

  return (
    <AnimatePresence>
      {activeIndex !== null && item && (
        <motion.div
          key="portfolio-lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-[2px] p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
            className="w-full max-w-4xl bg-[#FAFAFA] border border-neutral-300 flex flex-col max-h-[92vh]"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between gap-6 px-6 py-4 border-b border-neutral-200 shrink-0">
              <div className="min-w-0">
                <h3
                  id="lightbox-title"
                  className="font-display font-semibold text-base sm:text-lg text-[#0A0A0A] truncate"
                >
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate(prevIndex)}
                  aria-label="Previous sample"
                  className="w-10 h-10 flex items-center justify-center border border-neutral-200 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-colors duration-150 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate(nextIndex)}
                  aria-label="Next sample"
                  className="w-10 h-10 flex items-center justify-center border border-neutral-200 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-colors duration-150 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close sample viewer"
                  className="w-10 h-10 flex items-center justify-center border border-neutral-200 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-colors duration-150 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Artwork / Video canvas */}
            <div className="flex-1 bg-neutral-100 flex items-center justify-center p-4 sm:p-8 overflow-auto">
              <AnimatePresence mode="wait">
                {hasError ? (
                  <motion.div
                    key={`${item.id}-fallback`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, ease: EASE_EDITORIAL }}
                    className="w-full max-w-md aspect-square bg-neutral-200 border border-neutral-300 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <p className="font-display font-medium text-sm text-[#0A0A0A]">{item.title}</p>
                  </motion.div>
                ) : item.mediaType === 'video' ? (
                  <motion.video
                    key={item.id}
                    src={item.mediaUrl}
                    poster={item.posterUrl}
                    controls
                    playsInline
                    loop
                    autoPlay
                    onLoadedMetadata={(e) => {
                      const video = e.currentTarget;
                      video.play().catch(() => {
                        video.muted = true;
                        video.play().catch(() => {});
                      });
                    }}
                    onError={() => setHasError(true)}
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
                    className="max-h-[65vh] w-auto max-w-full object-contain border border-neutral-200 bg-black"
                  />
                ) : (
                  <motion.img
                    key={item.id}
                    src={item.mediaUrl}
                    alt={`${item.title} — social media creative sample`}
                    referrerPolicy="no-referrer"
                    onError={() => setHasError(true)}
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
                    className="max-h-[65vh] w-auto max-w-full object-contain border border-neutral-200 bg-white"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Footer action */}
            <div className="px-6 py-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4 shrink-0">
              <span className="font-mono text-xs tabular-nums text-neutral-500">
                Sample {activeIndex + 1} of {items.length}
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookCall();
                }}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0A0A] text-white text-xs font-medium hover:bg-neutral-800 transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.98]"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
