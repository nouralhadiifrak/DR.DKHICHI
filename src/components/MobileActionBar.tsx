import type { Dictionary } from "@/i18n/dictionaries";
import { site, whatsappUrl } from "@/lib/site";
import { PhoneRingIcon } from "./AnimatedIcons";
import { BrandButton } from "./BrandButton";
import { CalendarIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

/** Sticky call / book actions on small screens. */
export function MobileActionBar({ dict }: { dict: Dictionary["nav"] }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <BrandButton variant="outline" href={`tel:${site.phone.tel}`} icon={<PhoneRingIcon />} className="!py-3">
          {dict.call}
        </BrandButton>
        <BrandButton href="#booking" icon={<CalendarIcon />} className="!py-3">
          {dict.booking}
        </BrandButton>
      </div>
    </div>
  );
}

/** Floating WhatsApp and Instagram buttons: above the mobile bar, bottom corner on desktop. */
export function FloatingButtons({ dict }: { dict: Dictionary["floating"] }) {
  return (
    <div className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] end-4 z-30 flex flex-col items-center gap-3 lg:bottom-6 lg:end-6">
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.instagram}
        title={dict.instagram}
        className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-xl text-white shadow-lg shadow-navy-950/25 transition hover:scale-105"
      >
        <InstagramIcon />
      </a>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.whatsapp}
        title={dict.whatsapp}
        className="relative grid size-14 place-items-center rounded-full bg-[#25d366] text-3xl text-white shadow-lg shadow-navy-950/25 transition hover:scale-105"
      >
        <span aria-hidden="true" className="soft-ping absolute inset-0 rounded-full bg-[#25d366]" />
        <WhatsAppIcon className="relative" />
      </a>
    </div>
  );
}
