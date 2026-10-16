// Practice details shown across the site. Edit here to update every section.

// Google Maps place id (CID), taken from the client's Google Maps link.
const CID = "14916062686989187367";

export const site = {
  name: "Dr Mohamed DKHICHI",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // One number for calls and WhatsApp. No landline.
  phone: { display: "06 24 96 61 03", tel: "+212624966103", whatsapp: "212624966103" },
  address: {
    line1: "N37, Lot Bernoussi 2",
    line2: "Bd Mbarek Ben Boubker Hammadi",
    city: "Casablanca",
    postalCode: "20610",
    country: "MA",
  },
  instagram: "https://www.instagram.com/centre.dentaire.dkhichi/",
  // Opens the practice on Google Maps (address, photos and all reviews).
  mapsUrl: `https://maps.google.com/?cid=${CID}`,
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Docteur+Mohamed+DKHICHI+Dentiste,+Bd+Mbarek+Ben+Boubker+Hammadi,+Casablanca&z=16&hl=fr&output=embed",
};

export const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.postalCode} ${site.address.city}`;

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${site.phone.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Gallery order: portrait first, then building, reception, waiting room,
// office and treatment rooms. These are placeholders until the real photos
// arrive (see docs/PROJECT_NOTES.md). `fit: "contain"` shows tall photos in
// full over a blurred copy of themselves.
export const gallery = [
  { src: "/images/doctor-portrait.svg", key: "doctor", position: "50% 30%" },
  { src: "/images/building.svg", key: "building", fit: "contain" },
  { src: "/images/reception.svg", key: "reception" },
  { src: "/images/waiting-room.svg", key: "waiting" },
  { src: "/images/office.svg", key: "office" },
  { src: "/images/treatment-room.svg", key: "treatment" },
  { src: "/images/treatment-room-2.svg", key: "treatment2" },
] as const satisfies readonly { src: string; key: string; fit?: "contain"; position?: string }[];

export type GalleryKey = (typeof gallery)[number]["key"];

// Verbatim Google reviews (French originals). Never edit or invent.
export const reviews = [
  {
    author: "Nisrine Hajhajat",
    rating: 5,
    text: "Très satisfaite de mon expérience ! Le dentiste m’a retiré ma dent de sagesse avec beaucoup de douceur et de professionnalisme. Tout s’est très bien passé, sans douleur, et il a pris le temps de bien m’expliquer chaque étape. Je recommande vivement ce dentiste pour son sérieux, sa gentillesse et son excellent travail.",
  },
  {
    author: "Soufiane ELKOTBI",
    rating: 5,
    text: "Je tiens à remercier chaleureusement mon dentiste \"Mohamed\" pour son professionnalisme et son écoute. Dès la première consultation, j’ai été rassuré par son approche douce et attentive. Ses explications étaient claires, chaque étape du traitement a été détaillée, ce qui m’a permis de me sentir en confiance. Le cabinet est moderne, bien équipé et l’hygiène irréprochable. Grâce à son expertise brillante, mes soins se sont déroulés sans douleur et avec un résultat impeccable. Je recommande vivement ce praticien à toute personne recherchant compétence, sérieux et humanité.",
  },
  {
    author: "yousef grine",
    rating: 5,
    text: "Je recommande vivement le Dr Mohammed DKHICHI pour son professionnalisme et la qualité de ses soins. Très à l’écoute, rassurant et précis dans ses explications, il met tout de suite en confiance. Le cabinet est propre, bien organisé et l’accueil est chaleureux. Une excellente expérience du début à la fin — merci pour votre sérieux et votre engagement.",
  },
];
