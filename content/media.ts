export type ClubImage = {
  src: `/${string}`;
  alt: string;
  width: number;
  height: number;
};

export const images = {
  logo: {
    src: "/zdjecia/logo-klub-pirania-cropped.png",
    alt: "Klub Pirania",
    width: 240,
    height: 231,
  },
  logoHockey: {
    src: "/zdjecia/logo-sekcja-hokejowa.jpg",
    alt: "Znak sekcji hokejowej: pirania z kijem, napis Klub Pirania Sekcja Hokejowa",
    width: 1600,
    height: 1600,
  },
  hero: {
    src: "/zdjecia/foto-bznw-grupa-2024-12.jpg",
    alt: "Zajęcia pod wodą na torze basenowym: nurkowie i rurki",
    width: 1280,
    height: 720,
  },
  intro: {
    src: "/zdjecia/foto-intro-basen.jpeg",
    alt: "Kamizelki i automaty na brzegu basenu, nurkowanie intro",
    width: 1600,
    height: 1200,
  },
  kidsSleza: {
    src: "/zdjecia/foto-bznw-sleza.jpg",
    alt: "Dziecko w sprzęcie nurkowym pod wodą na basenie",
    width: 1280,
    height: 960,
  },
  kidsPuzzle: {
    src: "/zdjecia/foto-bznw-2025-005.jpg",
    alt: "Dwie osoby układają puzzle na dnie basenu",
    width: 1280,
    height: 720,
  },
  kidsNet: {
    src: "/zdjecia/foto-bznw-2025-013.jpg",
    alt: "Zajęcia pod wodą przy siatce na dnie basenu",
    width: 1280,
    height: 720,
  },
  hockeyWater: {
    src: "/zdjecia/foto-uwh-w-wodzie.jpg",
    alt: "Zawodnicy hokeja podwodnego w czepkach, z kijkami, na powierzchni wody",
    width: 3264,
    height: 1504,
  },
  hockeyGear: {
    src: "/zdjecia/foto-hokej-slider.jpg",
    alt: "Maska, kij, rękawica i worek z napisem Klub Pirania przy basenie",
    width: 1600,
    height: 1067,
  },
  hockeyTeam: {
    src: "/zdjecia/foto-uwh-mp-2025.jpg",
    alt: "Zdjęcie grupowe sekcji hokeja na hali basenowej, różowe koszulki z piranią",
    width: 2048,
    height: 1428,
  },
  marcin: {
    src: "/zdjecia/foto-instruktor-marcin-reif.jpg",
    alt: "Marcin Reif. Na zdjęciu z biogramu jest też druga osoba, której strona klubu nie nazywa.",
    width: 1152,
    height: 2048,
  },
  jolanta: {
    src: "/zdjecia/foto-divemaster-jolanta-franczak.jpg",
    alt: "Jolanta Franczak",
    width: 1536,
    height: 1024,
  },
} as const satisfies Record<string, ClubImage>;
