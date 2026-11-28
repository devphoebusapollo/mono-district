import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { EASE_EDITORIAL } from './MotionPrimitives';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDiscipline?: string;
}

const CALENDLY_BASE_URL = 'https://calendly.com/support-monodistrict/30min';

export function ProjectBriefModal({
  isOpen,
  onClose,
  defaultDiscipline,
}: ProjectBriefModalProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsLoaded(false);
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const embedDomain =
    typeof window !== 'undefined' ? window.location.hostname : 'localhost';

  const calendlyUrl = `${CALENDLY_BASE_URL}?embed_domain=${encodeURIComponent(
    embedDomain
  )}&embed_type=Inline&hide_gdpr_banner=1&background_color=fafafa&text_color=0a0a0a&primary_color=0a0a0a`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="calendly-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brief-modal-title"
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
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-neutral-200 shrink-0">
              <div className="flex items-center gap-6 min-w-0">
                <BrandMark size="sm" />
                <div className="sr-only sm:not-sr-only sm:flex items-center gap-2 text-xs text-neutral-500 truncate">
                  <span id="brief-modal-title">Book a free 30-minute consultation for your quote</span>
                  {defaultDiscipline && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#0A0A0A] font-medium truncate">
                        {defaultDiscipline}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close scheduling dialog"
                className="w-10 h-10 flex items-center justify-center border border-neutral-200 text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors duration-150 cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative flex-1 min-h-[540px] sm:min-h-[620px] bg-[#FAFAFA] overflow-hidden">
              {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center pointer-events-none">
                  <div className="w-6 h-6 border border-neutral-300 border-t-[#0A0A0A] rounded-full animate-spin" />
                  <p className="text-xs font-mono text-neutral-500">
                    Loading calendar...
                  </p>
                </div>
              )}

              <iframe
                src={calendlyUrl}
                title="Schedule a 30-minute project call with MONO DISTRICT."
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-[540px] sm:h-[620px] max-h-[72vh] border-0 transition-opacity duration-200 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>

            <div className="px-6 sm:px-8 py-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 shrink-0">
              <span>
                Prefer a quote by email?{' '}
                <a
                  href="mailto:support.monodistrict@gmail.com"
                  className="text-[#0A0A0A] underline underline-offset-4 hover:text-neutral-700"
                >
                  support.monodistrict@gmail.com
                </a>
              </span>
              <a
                href={CALENDLY_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#0A0A0A] font-medium hover:underline underline-offset-4 whitespace-nowrap shrink-0"
              >
                <span>Open calendar directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
