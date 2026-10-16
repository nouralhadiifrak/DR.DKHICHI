type LogoProps = { tagline: string; className?: string };

/** Emblem: a tooth drawn in one line, with a small sparkle, inside a fine double ring. */
export function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="24" cy="24" r="22.5" strokeWidth="1" />
      <circle cx="24" cy="24" r="19" strokeWidth="0.6" opacity="0.55" />
      <path
        d="M17.6 14.2c-2.6 0-4.6 2.2-4.6 5.2 0 3.3 1.4 5.3 2.1 8.4.6 2.8.9 6 2.5 6 1.7 0 1.9-3.2 2.6-5.4.5-1.6 1.1-2.4 2.3-2.4h3c1.2 0 1.8.8 2.3 2.4.7 2.2.9 5.4 2.6 5.4 1.6 0 1.9-3.2 2.5-6 .7-3.1 2.1-5.1 2.1-8.4 0-3-2-5.2-4.6-5.2-2.3 0-3.4 1.3-6.4 1.3s-4.1-1.3-6.4-1.3z"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M33.5 9.5v3.4M31.8 11.2h3.4" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ tagline, className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <Emblem className="size-8 shrink-0 text-accent sm:size-10" />
      <span className="flex flex-col leading-none">
        {/* Two short lines on phones to leave room for the header controls. */}
        <span className="font-display text-[0.95rem] font-semibold leading-[1.05] tracking-wide sm:text-[1.15rem] sm:leading-none" dir="ltr">
          <span className="block sm:inline">Dr Mohamed </span>
          <span className="block sm:inline">DKHICHI</span>
        </span>
        <span className="mt-1 hidden text-[0.62rem] font-medium uppercase tracking-[0.22em] opacity-70 sm:block">
          {tagline}
        </span>
      </span>
    </span>
  );
}
