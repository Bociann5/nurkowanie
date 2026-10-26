export const routes = {
  home: "/",
  szkolenia: "/szkolenia",
  intro: "/intro",
  dlaDzieci: "/dla-dzieci",
  hokej: "/hokej",
  wyprawy: "/wyprawy",
  oNas: "/o-nas",
  kontakt: "/kontakt",
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

export type AppHref = RoutePath | `${RoutePath}#${string}`;

export type NavItem = {
  href: RoutePath;
  label: string;
};

export type PageMeta = {
  path: RoutePath;
  title: string;
  description: string;
};

export const club = {
  name: "Klub Pirania Wrocław",
  legalName: "Akademicki Klub Płetwonurków „Pirania”",
  shortName: "AKP „Pirania”",
  tagline: "Różni ludzie – jedna pasja. Naszą pasją jest nurkowanie!",
  farewell: "Do zobaczenia pod wodą!",
  founded: 1969,
  form: "stowarzyszenie",
  metadataBase: "https://klubpirania.pl" as const,
  phoneDisplay: "+48 505 861 372",
  phoneHref: "tel:+48505861372",
  email: "info@klubpirania.pl",
  emailHref: "mailto:info@klubpirania.pl",
  addressLines: ["al. Aleksandra Brücknera 10", "51-410 Wrocław"] as const,
  seat: "Siedziba, sala i magazyn sprzętu: teren Zespołu Szkół nr 14, al. Aleksandra Brücknera 10, Wrocław.",
  krs: "0000060801",
  regon: "930229228",
  nip: "8961004291",
  bankAccount: "37 2130 0004 2001 0436 7165 0001",
  bankName: "VOLKSWAGEN BANK direct",
  offerClause: "Powyższa oferta ma charakter informacyjny i nie stanowi oferty handlowej.",
  confirmByClub:
    "Aktualną kwotę potwierdza klub: +48 505 861 372 albo info@klubpirania.pl.",
  facebook: "https://www.facebook.com/KlubPirania",
  instagram: "https://www.instagram.com/klubpirania.pl/",
  declarationPdf:
    "https://klubpirania.pl/wp-content/uploads/2025/03/2025-wniosek-czlonkowski.pdf",
} as const;

export const nav = [
  { href: routes.szkolenia, label: "Szkolenia" },
  { href: routes.dlaDzieci, label: "Dla dzieci" },
  { href: routes.hokej, label: "Hokej" },
  { href: routes.wyprawy, label: "Wyprawy" },
  { href: routes.oNas, label: "O nas" },
  { href: routes.kontakt, label: "Kontakt" },
] as const satisfies readonly NavItem[];

export const pages = {
  home: {
    path: routes.home,
    title: "Klub Pirania Wrocław",
    description:
      "Akademicki Klub Płetwonurków „Pirania” we Wrocławiu od 1969 roku. Szkolenia nurkowe, zajęcia dla dzieci i hokej podwodny.",
  },
  szkolenia: {
    path: routes.szkolenia,
    title: "Szkolenia nurkowe",
    description:
      "Szkolenia NAUI i KDP/CMAS. Na nowszych stronach klubu są też PADI i SSI. Intro bez certyfikatu, stopień podstawowy, Advanced i P2.",
  },
  intro: {
    path: routes.intro,
    title: "Intro nurkowe",
    description:
      "Próbne nurkowanie z instruktorem w basenie albo w wodach o warunkach zbliżonych do basenowych. Bez certyfikatu.",
  },
  dlaDzieci: {
    path: routes.dlaDzieci,
    title: "Nurkowanie dla dzieci",
    description:
      "Bezpieczna Zabawa Nad Wodą od 2010 roku. Misja podstawy i misje specjalne dla dzieci, które umieją pływać.",
  },
  hokej: {
    path: routes.hokej,
    title: "Hokej podwodny",
    description:
      "Sekcja hokeja podwodnego od lutego 2012. Grafik opublikowany na stronie klubu: Wrocław i Środa Śląska.",
  },
  wyprawy: {
    path: routes.wyprawy,
    title: "Wyprawy nurkowe",
    description:
      "Wyjazdy klubu. Plan opublikowany na 2026 ma daty, które już minęły. Nowy termin potwierdza klub.",
  },
  oNas: {
    path: routes.oNas,
    title: "O klubie",
    description:
      "Stowarzyszenie od 1969 roku. Składki opublikowane na sezon 2024/25, instruktorzy, baseny i badania.",
  },
  kontakt: {
    path: routes.kontakt,
    title: "Kontakt",
    description:
      "Telefon +48 505 861 372, info@klubpirania.pl, al. Aleksandra Brücknera 10, 51-410 Wrocław.",
  },
} as const satisfies Record<string, PageMeta>;

export function pageList(): readonly PageMeta[] {
  return [
    pages.home,
    pages.szkolenia,
    pages.intro,
    pages.dlaDzieci,
    pages.hokej,
    pages.wyprawy,
    pages.oNas,
    pages.kontakt,
  ];
}
