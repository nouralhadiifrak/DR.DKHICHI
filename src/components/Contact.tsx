import type { Dictionary } from "@/i18n/dictionaries";
import { hourGroups, toTime } from "@/lib/schedule";
import { fullAddress, site, whatsappUrl } from "@/lib/site";
import { PhoneRingIcon, PinSpinIcon } from "./AnimatedIcons";
import { ArrowIcon, ClockIcon, WhatsAppIcon } from "./Icons";
import { SectionHeading } from "./ui";

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  const block = "flex gap-4 py-5 first:pt-0 last:pb-0";
  const icon = "mt-0.5 shrink-0 text-xl text-accent";
  const label = "font-display text-lg font-semibold leading-none";
  const link =
    "font-semibold tabular-nums text-accent underline decoration-accent/50 decoration-1 underline-offset-4 transition hover:decoration-accent";

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={dict.kicker} title={dict.title} />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="divide-y divide-line rounded-3xl border border-line bg-surface p-6 shadow-sm shadow-navy-950/5 sm:p-7">
            <div className={block}>
              <PinSpinIcon className={icon} />
              <div className="flex-1">
                <p className={label}>{dict.address}</p>
                <address className="mt-2 text-sm not-italic leading-relaxed text-muted rtl:text-right" dir="ltr" lang="fr">
                  {fullAddress}
                </address>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-flex items-center gap-1.5 text-sm ${link}`}
                >
                  {dict.directions} <ArrowIcon className="rtl:-scale-x-100" />
                </a>
              </div>
            </div>

            <div className={block}>
              <ClockIcon className={icon} />
              <div className="flex-1">
                <p className={label}>{dict.hours}</p>
                <dl className="mt-2 space-y-1 text-sm">
                  {hourGroups().map((g) => (
                    <div key={g.from} className="flex justify-between gap-4">
                      <dt className="font-medium">
                        {g.from === g.to ? dict.days[g.from] : `${dict.days[g.from]} – ${dict.days[g.to]}`}
                      </dt>
                      <dd className={g.hours ? "tabular-nums text-muted" : "text-muted/70"} dir="ltr">
                        {g.hours ? `${toTime(g.hours[0])} – ${toTime(g.hours[1])}` : dict.closed}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className={block}>
              <PhoneRingIcon className={icon} />
              <div className="flex-1">
                <p className={label}>{dict.phone}</p>
                <ul className="mt-2 space-y-1.5 text-sm">
                  <li className="flex items-center justify-between gap-4">
                    <span className="text-muted">{dict.call}</span>
                    <a href={`tel:${site.phone.tel}`} dir="ltr" className={link}>
                      {site.phone.display}
                    </a>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-1.5 text-muted">
                      <WhatsAppIcon className="text-[#1f9d55]" /> {dict.whatsapp}
                    </span>
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" dir="ltr" className={link}>
                      {site.phone.display}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fixed heights: a percentage height inside an auto-height box collapses on
              phones, and a lazy iframe with no height never loads. */}
          <div className="relative h-72 overflow-hidden rounded-3xl border border-line bg-surface-2 sm:h-80 lg:h-auto lg:min-h-[20rem]">
            <iframe
              title={dict.mapTitle}
              src={site.mapsEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 dark:opacity-90 dark:[filter:invert(0.9)_hue-rotate(180deg)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
