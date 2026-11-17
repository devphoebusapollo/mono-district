import { useState } from 'react';

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
    <div className={`relative w-full overflow-hidden bg-neutral-200 ${aspectClassName} ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover grayscale contrast-[1.04]"
      />
    </div>
  );
}
