import { ReactNode } from 'react';
import { motion } from 'motion/react';

export const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

interface EditorialRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  immediate?: boolean;
}

export function EditorialReveal({
  children,
  delay = 0,
  y = 14,
  className = '',
  immediate = false,
}: EditorialRevealProps) {
  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay, ease: EASE_EDITORIAL }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay, ease: EASE_EDITORIAL }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface HairlineRuleProps {
  className?: string;
  dark?: boolean;
}

export function HairlineRule({ className = '', dark = false }: HairlineRuleProps) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, ease: EASE_EDITORIAL }}
      style={{ transformOrigin: '0% 50%' }}
      className={`h-px w-full ${dark ? 'bg-neutral-800' : 'bg-neutral-200'} ${className}`}
    />
  );
}
