export const kids = {
  project: "Bezpieczna Zabawa Nad Wodą",
  since: "Zajęcia BZNW klub prowadzi od 2010 roku.",
  headline: "Nurkowanie dla dzieci. Na stronie klubu: nowa odsłona, dwa warianty.",
  who: "Dzieci, które umieją pływać. Minimum 4 osoby.",
  ageNote:
    "Strony klubu podają różny wiek: od 9 lat, od 10 lat albo 10–15 lat. Nie wybieramy jednej liczby. Grupę potwierdza klub.",
  goals: [
    "promowanie zachowań prozdrowotnych",
    "aktywny czas wolny",
    "połączenie nurkowania, pływania, hokeja podwodnego i gier w wodzie",
    "kondycja krążeniowo-oddechowa",
    "bezpieczna zabawa i zachowanie nad wodą",
    "podstawowa wiedza, jak udzielić pierwszej pomocy i jak wezwać pomoc",
  ],
  places: [
    {
      when: "Środa",
      detail: "Ślęza Centrum, ul. Błękitna 2 — 19:45, 60 minut. Tak zapisano grupy podstawową i zaawansowaną.",
    },
    {
      when: "Czwartek",
      detail:
        "ZS nr 14, al. Brucknera 10 — 19:45, 45 minut. Tak zapisano grupy podstawową i zaawansowaną. Ta sama godzina jest też przy hokeju dla dzieci i przy zajęciach członków.",
    },
  ],
  pastStarts:
    "Na stronie zapisano start 2 września 2026 na Ślęzie i 3 września 2026 na Brucknera. Te daty już minęły. Nie wiadomo z samej strony, czy nabór trwa.",
  pricesTitle: "Kwoty opublikowane w 2026 roku za 10 zajęć, grupa 4–6 osób.",
  pricesNote: "To cennik opublikowany na stronie, nie ogłoszenie nowego terminu startu.",
  prices: [
    { label: "Podstawowa, 5+5", value: "1050 zł Brucknera, 1140 zł Ślęza Centrum." },
    { label: "Zaawansowana, 3+7", value: "1180 zł Brucknera, 1220 zł Ślęza Centrum." },
    { label: "Raty", value: "2–3 raty, 0%, bez dodatkowych opłat." },
  ],
  package:
    "Opcjonalnie pakiet Młodszego Płetwonurka, stopień brązowy CMAS, opisany dla wieku 10–12 lat: książka nurkowa, certyfikat i książeczka, koszulka, torba, dyplom. Ceny tego pakietu na aktualnej stronie nie ma.",
  gear: "W cenie: ABC (maska, płetwy, fajka) oraz automat z butlą i kamizelka. Uczestnik przynosi strój, ręcznik, klapki i czepek.",
  funding:
    "Zajęcia edycji 1–4 były dofinansowane przez Gminę Wrocław. Edycja 2026: dofinansowanie z Rządowego Programu Klub (MSiT).",
  contactEmail: "marcin.reif@klubpirania.pl",
} as const;

export const missionBase = {
  title: "Misja podstawy (5+5)",
  lede: "Dla początkujących. 10 zajęć: 5 w ABC i 5 w pełnym sprzęcie.",
  abc: [
    "pływanie w płetwach",
    "pływanie z maską i fajką",
    "opróżnianie fajki",
    "sposoby zanurzania w ABC",
    "skoki do wody w ABC, dwa sposoby",
    "elementy ratownictwa, w tym holowanie",
    "samoratownictwo, na przykład rozluźnianie skurczy",
    "gry i zabawy",
  ],
  gear: [
    "przygotowanie sprzętu",
    "znaki nurkowe",
    "oddychanie z automatu",
    "nurkowanie",
    "wyrównywanie ciśnienia w uszach i masce",
    "obsługa kamizelki",
    "zanurzanie i wynurzanie",
    "oczyszczanie automatu, dwa sposoby",
    "odnajdywanie automatu, dwa sposoby",
    "opróżnianie maski zalanej częściowo lub całkowicie",
    "oddychanie z alternatywnego źródła",
    "kontrola pływalności",
    "monitorowanie powietrza w butli",
    "gry i zabawy",
  ],
} as const;

export const missionSpecial = {
  title: "Misje specjalne (3+7)",
  lede: "10 zajęć: 3 w ABC z misją ratowniczą i 7 specjalistycznych misji wybieranych z listy 10.",
  abc: [
    "przypomnienie ABC",
    "zakładanie elementów ABC pod wodą",
    "wyciąganie nurka z dna",
    "trzeci sposób skoku",
    "gry",
  ],
  missions: [
    "przygotowawcza — powtórka z misji podstawy",
    "identyfikacja stworzeń, w tym znaki nurkowe",
    "środowisko — pozycja ciała, zbieranie śmieci",
    "„przestrzeń kosmiczna” — kontrola pływalności",
    "nawigacja — odległość, kompas",
    "nurkowanie „nocne” — latarki, komunikacja świetlna",
    "bezpieczeństwo — skurcze, holowanie, oddychanie z octopusa",
    "poszukiwanie i wydobywanie",
    "podwodne zdjęcia i filmiki",
    "nurkowanie na wraku, tabliczka",
  ],
} as const;

export const youthDegrees = {
  note: "Strona stopni młodzieżowych z 16 marca 2025 nie podaje cen ani terminów. Wiek na niej nie zgadza się ze stroną BZNW i z opisem szkoleń. Nazwy i limity głębokości poniżej są z tej jednej strony.",
  items: [
    "BZNW oraz BZNW ADV1, opisane jako zaawansowana wersja BZNW",
    "INTRO — na tej stronie od 9 lat",
    "PMB, młodszy płetwonurek brązowy, do 2 m, na tej stronie od 9 lat",
    "PMS, srebrny, do 6 m, na tej stronie od 10 lat",
    "PMZ, złoty, do 12 m, na tej stronie od 12 lat",
    "Junior Scuba Diver, do 12 m, na tej stronie 10–14 lat",
  ],
} as const;
