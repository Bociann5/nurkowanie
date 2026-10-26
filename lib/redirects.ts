/**
 * Old club URLs that this preview actually covers.
 * Paths with no new page are listed in docs/redirect-map.md and are not sent to /.
 * `/kursy` and `/hokej-podwodny` are aliases from an earlier local shell, not WordPress.
 *
 * `pnpm dev` applies this list through Next.js `redirects()`.
 * A Pages export ignores that config, so `scripts/write-static-redirects.mjs`
 * writes the same concrete paths as HTML redirects into `out/`. The
 * `/index.php/:path*` pattern is not expanded across the blog archive.
 */
export const previewRedirects: {
  source: string;
  destination: string;
  permanent: boolean;
}[] = [
  { source: "/intro-nurkowe-nurkowanie-na-probe", destination: "/intro", permanent: true },
  { source: "/szkolenia/opis-szkolen/intro-nurkowe", destination: "/intro", permanent: true },
  { source: "/intro-nurkowe-czyli-nurkowanie-na-probe", destination: "/intro", permanent: true },
  { source: "/kurs-nurkowania-wroclaw-p1-owd", destination: "/szkolenia", permanent: true },
  { source: "/szkolenia/opis-szkolen", destination: "/szkolenia", permanent: true },
  { source: "/szkolenia/dla-kogo", destination: "/szkolenia#dla-kogo", permanent: true },
  {
    source: "/szkolenia/opis-szkolen/stopien-podstawowy-naui",
    destination: "/szkolenia#naui-open-water",
    permanent: true,
  },
  {
    source: "/szkolenia/opis-szkolen/stopien-podstawowy-cmas",
    destination: "/szkolenia#cmas-p1",
    permanent: true,
  },
  { source: "/szkolenia/advanced-scuba-diver", destination: "/szkolenia#naui-advanced", permanent: true },
  { source: "/szkolenia/stopien-p2-sredni-cmas", destination: "/szkolenia#cmas-p2", permanent: true },
  {
    source: "/szkolenia/szkolenia-specjalistyczne",
    destination: "/szkolenia#specjalizacje",
    permanent: true,
  },
  { source: "/szkolenia/terminy", destination: "/szkolenia#terminy", permanent: true },
  { source: "/szkolenia/oplaty", destination: "/szkolenia#oplaty", permanent: true },
  { source: "/szkolenia/dla-dzieci-i-mlodziezy", destination: "/dla-dzieci#stopnie-mlodziezowe", permanent: true },
  { source: "/proba", destination: "/dla-dzieci", permanent: true },
  { source: "/nurkowanie-dzieci-podstawy", destination: "/dla-dzieci#misja-podstawy", permanent: true },
  {
    source: "/nurkowanie-dzieci-zaawansowany",
    destination: "/dla-dzieci#misje-specjalne",
    permanent: true,
  },
  { source: "/nurkowanie-dla-dzieci", destination: "/dla-dzieci", permanent: true },
  { source: "/wyprawy-nurkowe-2025", destination: "/wyprawy", permanent: true },
  { source: "/pirania", destination: "/o-nas", permanent: true },
  { source: "/instruktorzy", destination: "/o-nas#instruktorzy", permanent: true },
  { source: "/kadra", destination: "/o-nas#instruktorzy", permanent: true },
  {
    source: "/instruktor-nurkowania-wroclaw-marcin-reif-naui",
    destination: "/o-nas#marcin-reif",
    permanent: true,
  },
  {
    source: "/divemasterka-naui-jolanta-franczak",
    destination: "/o-nas#jolanta-franczak",
    permanent: true,
  },
  { source: "/badania", destination: "/o-nas#badania", permanent: true },
  { source: "/baseny", destination: "/o-nas#baseny", permanent: true },
  { source: "/osoby-do-kontaktu", destination: "/kontakt", permanent: true },
  { source: "/adres", destination: "/kontakt", permanent: true },
  { source: "/dane-rejestrowe", destination: "/kontakt#dane-rejestrowe", permanent: true },
  { source: "/konto-bankowe", destination: "/kontakt#konto", permanent: true },
  { source: "/kursy", destination: "/szkolenia", permanent: false },
  { source: "/hokej-podwodny", destination: "/hokej", permanent: false },
  { source: "/index.php", destination: "/", permanent: true },
  { source: "/index.php/:path*", destination: "/:path*", permanent: true },
];
