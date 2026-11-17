interface BrandMarkProps {
  inverted?: boolean;
  size?: 'sm' | 'md';
}

const LOGO_SRC = '/assets/aistudio/Minimalist_Mono_District_Logo_b207e912.png';

export function BrandMark({ inverted = false, size = 'sm' }: BrandMarkProps) {
  const dimensions =
    size === 'sm'
      ? 'h-9 w-[148px]'
      : 'h-12 w-[196px]';

  const blendStyles = inverted
    ? 'invert brightness-110 contrast-125 mix-blend-screen'
    : 'brightness-105 contrast-125 mix-blend-multiply';

  return (
    <span
      className={`relative inline-block overflow-hidden shrink-0 select-none ${dimensions}`}
    >
      <img
        src={LOGO_SRC}
        alt="MONO DISTRICT."
        referrerPolicy="no-referrer"
        className={`absolute top-1/2 left-1/2 -translate-x-[50.4%] -translate-y-[50.2%] max-w-none w-[176%] h-auto pointer-events-none ${blendStyles}`}
      />
    </span>
  );
}
