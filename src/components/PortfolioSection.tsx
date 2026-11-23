import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioItems';
import { EASE_EDITORIAL, EditorialReveal, HairlineRule } from './MotionPrimitives';
import { PortfolioLightbox } from './PortfolioLightbox';

interface PortfolioSectionProps {
  onBookCall: () => void;
}

const ROW_ONE_ITEMS = PORTFOLIO_ITEMS.slice(0, 12);
const ROW_TWO_ITEMS = PORTFOLIO_ITEMS.slice(12);

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 639px)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}

function PortfolioTile({
  item,
  onClick,
  fullWidth = false,
}: {
  item: PortfolioItem;
  onClick: () => void;
  fullWidth?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <article
      className={`group shrink-0 ${
        fullWidth ? 'w-full' : 'w-[240px] sm:w-[270px] lg:w-[290px]'
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A]"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-neutral-100 border border-neutral-200">
          {hasError ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-100">
              <span className="font-display text-sm font-medium text-neutral-700">
                {item.title}
              </span>
            </div>
          ) : (
            <img
              src={item.imageUrl}
              alt={`${item.title} — social media creative sample`}
              referrerPolicy="no-referrer"
              decoding="async"
              onError={() => setHasError(true)}
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          )}
        </div>

        <div className="pt-3 flex items-center justify-between gap-3">
          <h3 className="font-display font-medium text-sm sm:text-[15px] text-[#0A0A0A] truncate group-hover:underline underline-offset-4">
            {item.title}
          </h3>
          <ArrowUpRight
            className="w-4 h-4 text-neutral-400 group-hover:text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0"
            aria-hidden="true"
          />
        </div>
      </button>
    </article>
  );
}

function MobileSlideRow({
  items,
  rowLabel,
  globalOffset,
  intervalMs,
  externalPaused,
  onSelectItem,
}: {
  items: readonly PortfolioItem[];
  rowLabel: string;
  globalOffset: number;
  intervalMs: number;
  externalPaused: boolean;
  onSelectItem: (globalIndex: number) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isInteracting, setIsInteracting] = useState(false);
  const [interactionVersion, setInteractionVersion] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const stepBy = useCallback(
    (delta: 1 | -1, isManual = false) => {
      setDirection(delta);
      setActiveIndex((prev) => (prev + delta + items.length) % items.length);
      if (isManual) {
        setInteractionVersion((v) => v + 1);
      }
    },
    [items.length]
  );

  useEffect(() => {
    if (prefersReducedMotion || externalPaused || isInteracting) return;

    const timer = window.setInterval(() => {
      stepBy(1, false);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, externalPaused, isInteracting, intervalMs, interactionVersion, stepBy]);

  const activeItem = items[activeIndex];

  return (
    <div
      className="relative"
      onFocus={() => setIsInteracting(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsInteracting(false);
        }
      }}
    >
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeItem.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 28 : -28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -28 : 28 }}
            transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
          >
            <PortfolioTile
              item={activeItem}
              fullWidth
              onClick={() => onSelectItem(globalOffset + activeIndex)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Left / Right buttons flanking the slide on mobile */}
        <button
          type="button"
          onClick={() => stepBy(-1, true)}
          aria-label={`Previous sample in ${rowLabel}`}
          className="absolute left-3 top-[calc(50%-18px)] -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center border border-neutral-300 bg-[#FAFAFA]/95 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] active:scale-[0.95] transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => stepBy(1, true)}
          aria-label={`Next sample in ${rowLabel}`}
          className="absolute right-3 top-[calc(50%-18px)] -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center border border-neutral-300 bg-[#FAFAFA]/95 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] active:scale-[0.95] transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function AutoCarouselRow({
  items,
  rowLabel,
  globalOffset,
  speedPxPerSec,
  externalPaused,
  onSelectItem,
}: {
  items: readonly PortfolioItem[];
  rowLabel: string;
  globalOffset: number;
  speedPxPerSec: number;
  externalPaused: boolean;
  onSelectItem: (globalIndex: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef<number>(0);
  const offsetRef = useRef<number>(0);
  const manualAnimRef = useRef<{
    startOffset: number;
    delta: number;
    startTime: number;
    duration: number;
  } | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const loopedItems = [...items, ...items];

  const wrapOffset = useCallback((value: number, width: number) => {
    if (width <= 0) return 0;
    return ((value % width) + width) % width;
  }, []);

  const applyTransform = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const w = loopWidthRef.current;
    const wrapped = wrapOffset(offsetRef.current, w);
    offsetRef.current = wrapped;
    el.style.transform = `translate3d(${-wrapped}px, 0, 0)`;
  }, [wrapOffset]);

  const measureLoopWidth = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const secondCycleFirst = el.children[items.length] as HTMLElement | undefined;
    if (secondCycleFirst) {
      loopWidthRef.current = secondCycleFirst.offsetLeft;
      applyTransform();
    }
  }, [items.length, applyTransform]);

  useEffect(() => {
    measureLoopWidth();
    const el = trackRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(() => measureLoopWidth());
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, [measureLoopWidth]);

  useEffect(() => {
    let rafId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const anim = manualAnimRef.current;
      if (anim) {
        const t = Math.min((now - anim.startTime) / anim.duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        offsetRef.current = anim.startOffset + anim.delta * eased;
        applyTransform();
        if (t >= 1) {
          manualAnimRef.current = null;
        }
      } else if (!prefersReducedMotion && !isHovered && !isFocused && !externalPaused) {
        offsetRef.current += speedPxPerSec * dt;
        applyTransform();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [
    speedPxPerSec,
    prefersReducedMotion,
    isHovered,
    isFocused,
    externalPaused,
    applyTransform,
  ]);

  const nudge = (direction: -1 | 1) => {
    const el = trackRef.current;
    const firstCard = el?.children[0] as HTMLElement | undefined;
    const step = firstCard ? firstCard.offsetWidth + 24 : 314;

    manualAnimRef.current = {
      startOffset: offsetRef.current,
      delta: direction * step,
      startTime: performance.now(),
      duration: 380,
    };
  };

  return (
    <div
      className="flex items-center gap-3 sm:gap-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
    >
      <button
        type="button"
        onClick={() => nudge(-1)}
        aria-label={`Previous items in ${rowLabel}`}
        className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-neutral-300 bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] active:scale-[0.96] transition-all duration-150 cursor-pointer shrink-0 -mt-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>

      <div className="flex-1 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 w-max will-change-transform"
        >
          {loopedItems.map((item, idx) => (
            <PortfolioTile
              key={`${item.id}-${idx < items.length ? 'a' : 'b'}`}
              item={item}
              onClick={() => onSelectItem(globalOffset + (idx % items.length))}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => nudge(1)}
        aria-label={`Next items in ${rowLabel}`}
        className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-neutral-300 bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] active:scale-[0.96] transition-all duration-150 cursor-pointer shrink-0 -mt-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export function PortfolioSection({ onBookCall }: PortfolioSectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isLightboxOpen = lightboxIndex !== null;
  const isMobile = useIsMobile();

  return (
    <section
      id="work"
      className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-12"
    >
      <HairlineRule />

      <div className="py-16 sm:py-20 lg:py-28">
        <EditorialReveal className="mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.025em] text-[#0A0A0A] mb-3 text-balance">
            Selected Work.
          </h2>
          <p className="text-base text-neutral-600">
            Real social media graphics and campaign posts produced for client feeds.
          </p>
        </EditorialReveal>

        {isMobile ? (
          <div className="space-y-10">
            <MobileSlideRow
              items={ROW_ONE_ITEMS}
              rowLabel="samples row 1"
              globalOffset={0}
              intervalMs={3600}
              externalPaused={isLightboxOpen}
              onSelectItem={setLightboxIndex}
            />

            <MobileSlideRow
              items={ROW_TWO_ITEMS}
              rowLabel="samples row 2"
              globalOffset={ROW_ONE_ITEMS.length}
              intervalMs={4200}
              externalPaused={isLightboxOpen}
              onSelectItem={setLightboxIndex}
            />
          </div>
        ) : (
          <div className="space-y-12">
            <AutoCarouselRow
              items={ROW_ONE_ITEMS}
              rowLabel="samples row 1"
              globalOffset={0}
              speedPxPerSec={28}
              externalPaused={isLightboxOpen}
              onSelectItem={setLightboxIndex}
            />

            <AutoCarouselRow
              items={ROW_TWO_ITEMS}
              rowLabel="samples row 2"
              globalOffset={ROW_ONE_ITEMS.length}
              speedPxPerSec={-24}
              externalPaused={isLightboxOpen}
              onSelectItem={setLightboxIndex}
            />
          </div>
        )}
      </div>

      <PortfolioLightbox
        items={PORTFOLIO_ITEMS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(nextIdx) => setLightboxIndex(nextIdx)}
        onBookCall={onBookCall}
      />
    </section>
  );
}
