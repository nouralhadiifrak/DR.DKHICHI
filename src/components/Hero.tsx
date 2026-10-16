import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import { PinSpinIcon } from "./AnimatedIcons";
import { BrandButton } from "./BrandButton";
import { CurtainReveal } from "./fx/CurtainReveal";
import { CalendarIcon, StarIcon } from "./Icons";
import { Photo } from "./Photo";

type Props = { dict: Dictionary["hero"]; portrait: string; portraitPosition?: string };

// Phones stack: title + subtitle → portrait → 5★ Google → the two buttons.
// From lg, the text column uses named grid areas and the portrait spans all rows.
export function Hero({ dict, portrait, portraitPosition = "50% 50%" }: Props) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-bg text-ink">
      {/* Ambient light and fine rings, tinted for each theme */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 end-[-10%] size-[42rem] rounded-full bg-ice blur-[120px] dark:bg-navy-700/45" />
        <div className="absolute bottom-[-30%] start-[-10%] size-[36rem] rounded-full bg-sky/25 blur-[100px] dark:bg-navy-900/70" />
        <svg
          className="absolute end-[-12rem] top-1/2 hidden size-[56rem] -translate-y-1/2 text-ink/[0.06] lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.15"
        >
          <circle cx="50" cy="50" r="49" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="31" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-24 sm:px-6 lg:min-h-[100svh] lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-[1fr_auto_auto_auto_1fr] lg:gap-x-16 lg:gap-y-0 lg:px-8 lg:pb-20 lg:pt-32 lg:[grid-template-areas:'._portrait''intro_portrait''cta_portrait''badges_portrait''._portrait']">
        <div className="lg:[grid-area:intro]">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-kicker text-muted">
            <span className="h-px w-10 bg-ink/30" aria-hidden="true" />
            {dict.eyebrow}
          </p>
          <CurtainReveal
            tag="h1"
            text={dict.title}
            className="tracking-title mt-6 pb-2 font-display text-[2.4rem] font-semibold uppercase leading-[1.05] text-balance sm:text-6xl lg:text-[4.4rem]"
          />
          <CurtainReveal
            tag="p"
            text={dict.subtitle}
            delay={0.35}
            className="mt-6 max-w-xl text-sm uppercase leading-relaxed tracking-[0.12em] text-muted rtl:tracking-normal sm:text-base"
          />
        </div>

        <div className="relative mx-auto w-full max-w-[17rem] min-[390px]:max-w-xs sm:max-w-sm lg:max-w-md lg:self-center lg:[grid-area:portrait]">
          <div aria-hidden="true" className="absolute -inset-3 rounded-t-full border border-ink/20" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-surface-2 shadow-2xl shadow-navy-950/25 dark:shadow-black/40">
            <Photo
              src={portrait}
              alt={dict.portraitAlt}
              fill
              preload
              sizes="(min-width: 1024px) 28rem, 20rem"
              className="object-cover"
              style={{ objectPosition: portraitPosition }}
            />
          </div>
        </div>

        {/* Phone-only rating line, right under the portrait. */}
        <p className="-mt-2 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] rtl:normal-case rtl:tracking-normal lg:hidden">
          <Stars className="text-base" />
          {dict.rating}
        </p>

        <div className="flex flex-wrap justify-center gap-3 lg:mt-10 lg:justify-start lg:[grid-area:cta]">
          <BrandButton
            variant="outline"
            href={site.mapsUrl}
            newTab
            icon={<PinSpinIcon />}
            className="min-w-0 flex-1 basis-[10.5rem] !gap-1.5 !px-3 !py-3 !text-[0.8rem] min-[390px]:basis-0 sm:flex-none sm:!px-6 sm:!py-3.5 sm:!text-sm"
          >
            {dict.ctaVisit}
          </BrandButton>
          <BrandButton
            href="#booking"
            icon={<CalendarIcon />}
            className="min-w-0 flex-1 basis-[10.5rem] !gap-1.5 !px-3 !py-3 !text-[0.8rem] min-[390px]:basis-0 sm:flex-none sm:!px-6 sm:!py-3.5 sm:!text-sm"
          >
            {dict.ctaBook}
          </BrandButton>
        </div>

        <ul className="mt-12 hidden flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.12em] text-muted rtl:normal-case rtl:tracking-normal lg:flex lg:[grid-area:badges]">
          <li className="flex items-center gap-2 text-ink">
            <Stars />
            {dict.rating}
          </li>
          {dict.badges.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-ink/40" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex text-gold ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} />
      ))}
    </span>
  );
}
