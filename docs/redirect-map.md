# Mapa przekierowań

Podgląd z 26 października 2026. Stare adresy idą na stronę, która naprawdę opisuje ten temat. Archiwum wpisów, kategorie, autorzy oraz stare edycje wyjazdów, hokeja i BZNW **nie** są przekierowane na `/`. Zostają jako brak odpowiednika (na tym podglądzie zwracają 404).

Kanoniczne intro to `/intro`. Długi adres z menu WordPressa przekierowuje na `/intro`.

Ścieżka `/index.php/...` jest aliasem czystego adresu (ten sam mechanizm co w WordPressie) i nie ląduje osobno na stronie głównej.

`/kursy` i `/hokej-podwodny` to aliasy wcześniejszego lokalnego szkicu, nie adresy ze starej strony. Idą tymczasowo na `/szkolenia` i `/hokej`.

Na `pnpm dev` ta lista działa jako `redirects()` w Next.js. Statyczny eksport na GitHub Pages ignoruje tę konfigurację. Build z ustawionym `BASE_PATH` (workflow bierze nazwę repozytorium, dla tego projektu `/nurkowanie`) dopisuje do `out/` stronę HTML na każdy konkretny stary adres z `lib/redirects.ts`: meta refresh i `location.replace` na ten sam cel, już ze ścieżką podglądu i ukośnikiem na końcu. `<link rel="canonical">` zostaje przy `https://klubpirania.pl`.

Wzorzec `/index.php/:path*` nie rozciąga się na archiwum. Eksport dodaje `/index.php` → `/` oraz alias `/index.php` przed znaną stroną albo starym adresem z tabeli. Ścieżki z sekcji „Brak odpowiednika”, w tym całe archiwum wpisów, nie dostają stron przekierowujących.

## Przekierowania

| Stary adres | Nowa strona |
| --- | --- |
| `/` | `/` |
| `/szkolenia/` | `/szkolenia` |
| `/kurs-nurkowania-wroclaw-p1-owd/` | `/szkolenia` |
| `/szkolenia/opis-szkolen/` | `/szkolenia` |
| `/szkolenia/dla-kogo/` | `/szkolenia#dla-kogo` |
| `/intro-nurkowe-nurkowanie-na-probe/` | `/intro` |
| `/szkolenia/opis-szkolen/intro-nurkowe/` | `/intro` |
| `/intro-nurkowe-czyli-nurkowanie-na-probe/` | `/intro` |
| `/szkolenia/opis-szkolen/stopien-podstawowy-naui/` | `/szkolenia#naui-open-water` |
| `/szkolenia/opis-szkolen/stopien-podstawowy-cmas/` | `/szkolenia#cmas-p1` |
| `/szkolenia/advanced-scuba-diver/` | `/szkolenia#naui-advanced` |
| `/szkolenia/stopien-p2-sredni-cmas/` | `/szkolenia#cmas-p2` |
| `/szkolenia/szkolenia-specjalistyczne/` | `/szkolenia#specjalizacje` |
| `/szkolenia/terminy/` | `/szkolenia#terminy` |
| `/szkolenia/oplaty/` | `/szkolenia#oplaty` |
| `/szkolenia/dla-dzieci-i-mlodziezy/` | `/dla-dzieci#stopnie-mlodziezowe` |
| `/dla-dzieci/` | `/dla-dzieci` |
| `/proba/` | `/dla-dzieci` |
| `/nurkowanie-dzieci-podstawy/` | `/dla-dzieci#misja-podstawy` |
| `/nurkowanie-dzieci-zaawansowany/` | `/dla-dzieci#misje-specjalne` |
| `/nurkowanie-dla-dzieci/` | `/dla-dzieci` |
| `/hokej/` | `/hokej` |
| `/wyprawy-nurkowe-2025/` | `/wyprawy` |
| `/o-nas/` | `/o-nas` |
| `/pirania/` | `/o-nas` |
| `/instruktorzy/` | `/o-nas#instruktorzy` |
| `/kadra/` | `/o-nas#instruktorzy` |
| `/instruktor-nurkowania-wroclaw-marcin-reif-naui/` | `/o-nas#marcin-reif` |
| `/divemasterka-naui-jolanta-franczak/` | `/o-nas#jolanta-franczak` |
| `/badania/` | `/o-nas#badania` |
| `/baseny/` | `/o-nas#baseny` |
| `/kontakt/` | `/kontakt` |
| `/osoby-do-kontaktu/` | `/kontakt` |
| `/adres/` | `/kontakt` |
| `/dane-rejestrowe/` | `/kontakt#dane-rejestrowe` |
| `/konto-bankowe/` | `/kontakt#konto` |
| `/kursy/` | `/szkolenia` |
| `/hokej-podwodny/` | `/hokej` |
| `/index.php` | `/` |

Te same cele mają wpisy o identycznym adresie co strony powyżej (intro, kadra, kursy, wyprawy 2025, nurkowanie dla dzieci).

## Brak odpowiednika

Nie przekierowywać na `/`.

Strony stałe:

- `/szkolenia/w-f-dla-studentow-uwr/` — strona sama oznacza ofertę jako nieaktualną
- `/bznw-wroclaw/`
- `/bznw-olawa/`
- `/hokej/hokej-dla-dzieci-wroclaw/`
- `/hokej/hokej-olawa/`
- `/45-lat-piranii/`
- `/filmy/`
- `/logo/`
- `/pirania-cup/` — podstrona pusta; turniej jest na piraniacup.pl i jest podlinkowany z `/hokej`
- `/italia-2023-nerano/`
- `/jezioro-pluszne-oboz/`
- `/oboz-sportowy-piranii-z-nurkowaniem/`
- `/norwegia/`
- `/chorwacja-metajna/`
- `/chorwacja-hvar/`
- `/kurs-nurkowy-podstawowy-w-chorwacji/`
- `/kurs-zaawansowany-w-chorwacji/`
- `/egipt-safaga/`
- `/safari-egipt-brothers-island-deadalus/`
- `/safari-nurkowe-rafy-kierunek-poludnie-st-johns/`
- `/wyspa-gozo/`
- `/lagow/`
- `/nieslysz/`
- `/wspierajmy/`
- `/wspierajmy/emilka/`
- `/wspierajmy/zbigniew/`
- `/index.php/2010/01/1-dla-arki-z-wroclawia-fundacja/`
- `/polityka-ochrony-dzieci/` — pełnego regulaminu nie ma w inwentarzu, więc podgląd go nie skraca
- `/polityka-plikow-cookies-eu/` — treści cookies nie skopiowano do inwentarza

Kategorie: `/category/baseny/`, `/category/imprezy/`, `/category/dotacje/`, `/category/spotkania-klubowe/`, `/category/wydarzenia/`, `/category/polecane/`, `/category/wazne/`, `/category/badania/`, `/category/kursy-nurkowe/`, `/category/filmy/`, `/category/expressnur/`, `/category/wyprawy/`, `/category/ciekawostki/`, `/category/relacje/`, `/category/konkursy/`, `/category/hokej-pod-woda-2/`, `/category/freediving-2/`, `/category/nurkowanie-2/`, `/category/nurek/`, `/category/hokej-podwodny/`.

Autorzy: `/author/admin/`, `/author/marcin-reif/`.

Wpisy: całe archiwum 273 adresów z mapy wpisów (stan 26.10.2026) — brak odpowiednika, bez przekierowania na `/`. Lista jest w `docs/content-audit.md`. Ogłoszenia o terminach z 2024–2026 też tu zostają; oferta ma własne strony powyżej.
