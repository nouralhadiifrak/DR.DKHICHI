import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const CalendarIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
  </Icon>
);

export const SunIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Icon>
);

export const MoonIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5" />
  </Icon>
);

export const MenuIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const ChevronIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m9 6 6 6-6 6" />
  </Icon>
);

export const ArrowIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const ClockIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m5 12 4.5 4.5L19 7" />
  </Icon>
);

export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...p}>
    <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" />
  </svg>
);

export const GoogleIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...p}>
    <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3" />
    <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22" />
    <path fill="#FBBC05" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z" />
    <path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10C7.2 7.7 9.4 5.9 12 5.9" />
  </svg>
);

// Dental line icons for the treatment cards. All share the same tooth outline.
const TOOTH =
  "M8.3 3.5C5.9 3.5 4 5.4 4 8.1c0 2.9 1.3 4.6 1.9 7.3.5 2.4.8 5.1 2.2 5.1 1.5 0 1.7-2.8 2.3-4.6.4-1.4.9-2.1 1.6-2.1s1.2.7 1.6 2.1c.6 1.8.8 4.6 2.3 4.6 1.4 0 1.7-2.7 2.2-5.1.6-2.7 1.9-4.4 1.9-7.3 0-2.7-1.9-4.6-4.3-4.6-1.9 0-2.6 1.1-3.7 1.1S10.2 3.5 8.3 3.5";

export const ToothIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d={TOOTH} />
  </Icon>
);

export const ToothCareIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d={TOOTH} />
    <path d="M9 8.5c.6-.8 1.5-1.2 2.5-1.2" />
  </Icon>
);

export const ExtractionIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M8.8 8.5C7 8.5 5.6 9.9 5.6 12c0 2.2 1 3.5 1.4 5.5.4 1.8.6 3.5 1.6 3.5 1.1 0 1.3-2 1.7-3.3.3-1 .7-1.5 1.2-1.5s.9.5 1.2 1.5c.4 1.3.6 3.3 1.7 3.3 1 0 1.2-1.7 1.6-3.5.4-2 1.4-3.3 1.4-5.5 0-2.1-1.4-3.5-3.2-3.5-1.4 0-1.9.8-2.7.8s-1.3-.8-2.7-.8" />
    <path d="M12 6V2.5M9.8 4.4 12 2.2l2.2 2.2" />
  </Icon>
);

export const ImplantIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 3.5c-1.7 0-3 1.2-3 3 0 1.5.9 2.5 1.4 3.5h13.2c.5-1 1.4-2 1.4-3.5 0-1.8-1.3-3-3-3-1.6 0-2.4.8-5 .8s-3.4-.8-5-.8" />
    <path d="M9 10h6l-.5 2h-5zM8.6 13.5h6.8M9.2 16h5.6M9.8 18.5h4.4M12 12v9" />
  </Icon>
);

export const CrownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d={TOOTH} />
    <path d="M5.5 11h13" />
    <path d="M7 3.9 8.5 6 10 4.3M14 4.3 15.5 6 17 3.9" />
  </Icon>
);

export const BracesIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d={TOOTH} />
    <rect x="9.5" y="8" width="5" height="3.5" rx="0.8" />
    <path d="M2.5 9.75h7M14.5 9.75h7" />
  </Icon>
);

export const SparkleToothIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d={TOOTH} />
    <path d="M20 1.8v3.4M18.3 3.5h3.4M3.5 17.5v2.4M2.3 18.7h2.4" />
  </Icon>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.4A9.9 9.9 0 1 0 12 2m0 18.1c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 1 1 12 20.1m4.5-6c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7s1.9 2.9 4.5 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.2" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <Icon {...p} strokeWidth={1.8}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </Icon>
);
