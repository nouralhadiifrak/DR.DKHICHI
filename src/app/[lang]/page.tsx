import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FloatingButtons, MobileActionBar } from "@/components/MobileActionBar";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { hasLocale, intlLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { OPENING_HOURS, toTime } from "@/lib/schedule";
import { gallery, site } from "@/lib/site";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function JsonLd({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const data = {
    "@context": "https://schema.org",
    "@type": ["Physician", "Dentist"],
    name: site.name,
    description: dict.meta.description,
    medicalSpecialty: "Dentistry",
    url: `${site.url}/${lang}`,
    telephone: site.phone.tel,
    image: `${site.url}${gallery[0].src}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    hasMap: site.mapsUrl,
    sameAs: [site.instagram],
    openingHoursSpecification: Object.entries(OPENING_HOURS).map(([day, hours]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_NAMES[Number(day)],
      opens: toTime(hours![0]),
      closes: toTime(hours![1]),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <JsonLd lang={lang} />
      <Header lang={lang} dict={dict.nav} />
      <main>
        <Hero dict={dict.hero} portrait={gallery[0].src} portraitPosition={gallery[0].position} />
        <About dict={dict.about} />
        <Services dict={dict.services} bookLabel={dict.nav.book} />
        <Gallery dict={dict.gallery} />
        <Reviews dict={dict.reviews} />
        <Booking dict={dict.booking} lang={lang} intlLocale={intlLocale[lang]} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} nav={dict.nav} />
      <FloatingButtons dict={dict.floating} />
      <MobileActionBar dict={dict.nav} />
    </>
  );
}
