export const trainingBrands = {
  hub: "Szkolimy w systemie NAUI, KDP/CMAS, PADI oraz SSI.",
  older:
    "Starszy tekst strony głównej i strony „Pirania” wymienia szkolenie w systemie CMAS oraz NAUI, bez PADI i SSI.",
  english: "We also do english.",
  englishFollow: "Do not hesitate to contact us for further information.",
} as const;

export const healthRequirements = [
  "sprawne serce i zdrowe płuca",
  "drożne uszy i zatoki",
  "brak chorób lub poważnych dolegliwości",
  "brak uwarunkowań, które mogą spowodować utratę przytomności",
] as const;

export const swimRequirements = [
  "pływanie po powierzchni: kraul, bok, żabka, na plecach — wystarczy możliwość płynięcia, nie klasyczny styl",
  "10 minut utrzymania się na powierzchni",
  "15 metrów na jednym oddechu",
] as const;

export const audiences = [
  {
    id: "poczatkujacy",
    title: "Początkujący",
    lead: "Osoby, które nie nurkowały, spróbowały intro albo chcą międzynarodowego certyfikatu. Wystarczy pływanie po powierzchni.",
    offer: "Intro, Open Water Scuba Diver NAUI, P1 KDP/CMAS.",
  },
  {
    id: "zaawansowani",
    title: "Z uprawnieniami",
    lead: "Stopień podstawowy dowolnej federacji wymienionej na stronie: NAUI, CMAS, SSI, PADI, IANTD i inne.",
    offer: "Advanced Scuba Diver NAUI, P2 KDP/CMAS oraz nazwane specjalizacje. P3, Rescue i Master Scuba Diver są tylko wymienione.",
  },
  {
    id: "liderzy",
    title: "Liderzy",
    lead: "Organizowanie nurkowań dla osób z uprawnieniami. Strona podaje nazwy, bez osobnych programów.",
    offer: "DiveMaster NAUI, Asystent Instruktora NAUI. W terminarzu 2026/2027 dopisane są też Program FIT NAUI i kurs instruktora NAUI.",
  },
] as const;

export const basicPriceNote =
  "Karty NAUI i P1 oraz nowsza strona opłat podają różne kwoty stopnia podstawowego. Nie wybieramy jednej z nich. Szkolenie indywidualne na obu stronach jest opisane jako ustalane indywidualnie.";

export const courses = [
  {
    id: "naui-open-water",
    title: "Open Water Scuba Diver NAUI",
    lede: "Stopień podstawowy. Partnerstwo bez nadzoru do 18 m, nie głębiej niż na kursie i w podobnych warunkach.",
    facts: [
      { label: "Wiek", value: "Minimum 15 lat albo certyfikacja juniora od 10 do 14 lat." },
      { label: "Program", value: "8 teorii we Wrocławiu, 6 basenów, 6 nurkowań otwartych (Opole / Zimnik)." },
      { label: "Miejsce", value: "Zespół Szkół nr 14, al. Brucknera 10: sala i basen." },
      {
        label: "W cenie karty",
        value:
          "6 sesji basenowych, 8 teorii i egzamin, 6 nurkowań, certyfikat NAUI (plastik i elektroniczny w aplikacji), sprzęt na basen i wody otwarte: butla, kamizelka, automat, balast, pełny strój.",
      },
      {
        label: "Poza ceną",
        value: "Dojazdy, noclegi, wejście na nurkowisko, badania lekarskie. Strona sugeruje własny zestaw ABC: maska, fajka, płetwy.",
      },
    ],
  },
  {
    id: "cmas-p1",
    title: "P1 KDP/CMAS",
    lede: "Stopień podstawowy. Partnerstwo do 20 m, z co najmniej jedną pełnoletnią osobą o kwalifikacjach KDP/CMAS lub równorzędnych.",
    facts: [
      { label: "Wiek", value: "Minimum 14 lat." },
      {
        label: "Program",
        value:
          "8 teorii, 5 basenów, 6 nurkowań. Wody otwarte na karcie: Opole, Łagów, Lubikowo, Zimnik, jezioro Niesłysz — do ustalenia.",
      },
      { label: "Miejsce", value: "Zespół Szkół nr 14: sala, siedziba i basen." },
      {
        label: "W cenie karty",
        value:
          "5 sesji basenowych, 8 teorii, 6 nurkowań, certyfikat CMAS, książeczka nurkowa z logbookiem, sprzęt jak przy NAUI.",
      },
      {
        label: "Poza ceną",
        value: "Dojazdy, noclegi, wejście na nurkowisko, badania. Strona sugeruje własny zestaw ABC.",
      },
    ],
  },
  {
    id: "naui-advanced",
    title: "Advanced Scuba Diver NAUI",
    lede: "Dla osoby ze stopniem podstawowym albo chcącej certyfikacji NAUI. Na karcie uprawnień nie ma limitu 30 m. Opis szkoleń i stara strona studentów dopowiadają 30 m.",
    facts: [
      { label: "Wiek", value: "Minimum 15 lat, junior 12–14 lat. Wymagany stopień podstawowy." },
      { label: "Program", value: "6 teorii, 6 nurkowań: Opole, Honoratka, Zimnik, jezioro Budzisławskie." },
      {
        label: "Obowiązkowe",
        value: "Nawigacja, nurkowanie nocne lub z ograniczoną widocznością, nurkowanie głębokie.",
      },
      {
        label: "Cena",
        value:
          "1850 zł, członkowie Piranii 1690 zł, przy dwóch uczestnikach. Ta sama kwota jest na karcie kursu i na stronie opłat z 26 sierpnia 2026. Strona opłat dopisuje, że stawka członkowska dotyczy opłaconej składki na dany rok.",
      },
      {
        label: "W cenie",
        value: "6 teorii, 6 nurkowań, certyfikat NAUI, pełna butla i balast. Pozostały sprzęt jest dodatkowo płatny.",
      },
      { label: "Poza ceną", value: "Dojazdy, noclegi, wejście na nurkowisko, badania lekarskie." },
    ],
    choiceDives: [
      "poszukiwanie i wydobywanie",
      "nurkowanie z łodzi",
      "polowanie i zbieranie",
      "rekonesans i mapy",
      "wraki bez penetracji",
      "podwodny przyrodnik",
      "prądy",
      "nurkowanie wysokościowe",
      "wody słone albo słodkie, zależnie od tego, gdzie ktoś zwykle nurkuje",
      "foto lub film",
      "komputery nurkowe",
    ],
  },
  {
    id: "cmas-p2",
    title: "P2 KDP/CMAS",
    lede: "Do 40 m w grupie o równorzędnych lub wyższych kwalifikacjach, z co najmniej jedną osobą pełnoletnią.",
    facts: [
      {
        label: "Warunki",
        value:
          "Ukończone 16 lat, P1 KDP/CMAS lub równorzędny, specjalizacje PNO, PNA i PE albo równorzędne, 5 zalogowanych nurkowań stażowych po kursie eksploratora, zgoda opiekunów przy niepełnoletnich, orzeczenie lekarza.",
      },
      { label: "Program", value: "9 teorii, 12 nurkowań. Karta nie wymienia nazwy akwenu." },
      {
        label: "Cena",
        value:
          "2650 zł, członkowie Piranii 2250 zł. Ta sama kwota jest na karcie z 2023 roku i na stronie opłat z 26 sierpnia 2026. Strona opłat podaje te kwoty przy minimum dwóch uczestników.",
      },
      {
        label: "W cenie",
        value: "9 teorii, 12 nurkowań, certyfikat CMAS, pełna butla i balast. Reszta sprzętu dodatkowo płatna.",
      },
      { label: "Poza ceną", value: "Dojazdy, noclegi, wejście na nurkowisko, badania lekarskie." },
    ],
  },
] as const;

export const specializations = {
  names: [
    "Płetwonurek nocny PNO",
    "Płetwonurek nawigator PNA",
    "Płetwonurek eksplorator PE, do 30 m",
    "Deep Diver, do 40 m",
    "Rescue",
    "suchy skafander",
    "Nitrox",
    "nurek archeolog",
    "nurek wrakowy z zewnątrz",
    "i wiele innych — tak kończy się lista na stronie",
  ],
  price:
    "Na stronie specjalizacji (ostatnia zmiana 25 sierpnia 2023): od 790 do 1560 zł, członkowie od 670 do 1360 zł. Osobnych programów przy nazwach nie ma.",
  rhythm:
    "Start: dowolny, po ustaleniu z klubem. Miejsce teorii: ZS nr 14. Teoria 18:00–19:00 w czwartki lub wtorki. Basen, jeśli jest wymagany: 19:45–20:45 w czwartki. Wody otwarte: Łagów Lubuski, Krzeszówek, Zimnik, Lubikowo, Opole.",
  includes:
    "Sesje basenowe, jeśli są wymagane, teoria, nurkowania, certyfikat, pełna butla i balast. Poza ceną: dojazdy, noclegi, wejście, badania, pozostały sprzęt i wypożyczenie suchego skafandra.",
} as const;

export const namedOnly = [
  "P3 CMAS",
  "Rescue Diver",
  "Master Scuba Diver NAUI",
  "Side Mount",
  "DiveMaster NAUI",
  "Program FIT NAUI",
  "kurs instruktora NAUI",
  "Asystent Instruktora NAUI",
] as const;

export const scheduleNote =
  "Terminarz opublikowany 26 sierpnia 2026 podawał starty BZNW 2 i 3 września 2026 oraz stopień podstawowy 3 września 2026. Te daty już minęły. Nie ogłaszamy ich jako najbliższych terminów. DAN BLS i DAN Oxygen Provider są na tej stronie opisane jako termin na życzenie. Aktualną grupę potwierdza klub.";

export const studentsNote =
  "Strona WF dla studentów Uniwersytetu Wrocławskiego zaczyna się od zdania „Obecnie oferta nieaktualna.” Dalej jest opis historycznego zaliczenia przy kursie SD NAUI albo Advanced. Zapisów na to WF tu nie prowadzimy.";
