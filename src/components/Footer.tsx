import { cacheLife } from "next/cache";
import type { Dictionary } from "@/i18n/dictionaries";
import { fullAddress, site } from "@/lib/site";
import { InstagramIcon } from "./Icons";
import { Logo } from "./Logo";

async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer({ dict, nav }: { dict: Dictionary["footer"]; nav: Dictionary["nav"] }) {
  const links = [
    ["#about", nav.about],
    ["#services", nav.services],
    ["#cabinet", nav.cabinet],
    ["#booking", nav.booking],
    ["#contact", nav.contact],
  ] as const;
  const year = await currentYear();

  return (
    <footer className="bg-navy-950 pb-28 pt-16 text-ice lg:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <Logo tagline={dict.tagline} className="[&_svg]:text-sky" />
          <p className="mt-6 text-sm leading-relaxed text-ice/60 rtl:text-right" dir="ltr" lang="fr">
            {fullAddress}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ice/75">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-ice">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-start gap-3 text-sm">
          <a
            href={`tel:${site.phone.tel}`}
            dir="ltr"
            className="font-semibold tabular-nums underline decoration-ice/40 decoration-1 underline-offset-4 hover:decoration-ice"
          >
            {site.phone.display}
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="inline-flex items-center gap-2 text-ice/75 underline decoration-ice/30 underline-offset-4 hover:text-ice"
          >
            <InstagramIcon /> centre.dentaire.dkhichi
          </a>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-ice/10 px-4 pt-6 text-xs text-ice/50 sm:px-6 lg:px-8">
        © {year} {site.name}. {dict.rights}
      </p>
    </footer>
  );
}
