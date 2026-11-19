import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { EASE_EDITORIAL } from './MotionPrimitives';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[16/9]',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  if (hasError) {
    return (
      <div
        className={`relative w-full ${aspectClassName} bg-neutral-100 border border-neutral-200 flex flex-col items-center justify-center p-8 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-neutral-400 mb-3"
        >
          <rect x="2" y="3" width="20" height="18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 16L8 10L13 15L16 12L22 18" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="1.5" fill="currentColor" />
        </svg>
        <p className="text-xs font-mono text-neutral-500 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      initial={priority ? { opacity: 0, y: 12 } : { opacity: 0, y: 16 }}
      animate={priority ? { opacity: 1, y: 0 } : undefined}
      whileInView={priority ? undefined : { opacity: 1, y: 0 }}
      viewport={priority ? undefined : { once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
      className={`relative w-full overflow-hidden bg-neutral-200 ${aspectClassName} ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{ y: parallaxY, scale: 1.07 }}
        animate={{ opacity: isLoaded ? 1 : 0.85 }}
        transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
        className="w-full h-full object-cover grayscale contrast-[1.04] will-change-transform"
      />
    </motion.div>
  );
}
