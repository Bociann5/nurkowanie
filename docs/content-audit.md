# Audyt treści — Klub Pirania Wrocław

Data audytu: **26 października 2026**.  
Źródło: [https://klubpirania.pl/](https://klubpirania.pl/).  
Cel: materiał pod nową stronę. Poniżej są tylko informacje odczytane ze strony. Nic nie zostało dopisane jako fakt klubu.

## 1. Stan workspace

Repozytorium `/Users/bociann/Documents/Projects/nurkowanie` nie zawiera aplikacji.

- Gałąź `main`, jeden commit `2d1f22d` z komunikatem `test`.
- Jedyny plik użytkownika: `readme.md` o treści `test`.
- Brak Next.js, brak `package.json`, brak komponentów.

Nowej strony nie zakładano. Pliku `readme.md` nie usuwano. Projekt należy **rozszerzyć** od zera, a nie nadpisywać istniejącej aplikacji — aplikacji tu nie ma.

## 2. Metoda

| Metoda | Co zrobiono |
| --- | --- |
| Przeglądarka (cursor-ide-browser) | Otwarte strony z menu. Zrzut dostępności każdej z nich. Zrzut ekranu strony głównej się udał. Kolejne zrzuty (w tym pełnej strony „Dla dzieci” i widoku hokeja) kończyły się timeoutem. |
| Fetch / API | `curl` i WordPress REST (`/wp-json/wp/v2/pages`, `/wp-json/wp/v2/posts`). 58 stron i metadane 273 wpisów. Treść istotnych stron i nowszych wpisów zapisana jako tekst. |
| Sitemap | `https://klubpirania.pl/sitemap.xml` przekierowuje na `https://klubpirania.pl/wp-sitemap.xml`. Pobrano indeks oraz mapy stron, wpisów, kategorii i autorów. `robots.txt` pozwala na całą witrynę poza `/wp-admin/` (wyjątek: `admin-ajax.php`). |

### Ograniczenia

- Po pierwszym zrzucie ekranu narzędzie zrzutów przestało zwracać obraz (timeout). Wygląd podstron opisany jest z HTML, CSS motywu i zrzutu strony głównej, nie z kolejnych screenshotów.
- Nie klikano każdego z 273 wpisów w przeglądarce. Wpisy historyczne są w mapie URL na podstawie sitemap i REST.
- Karty kursów (NAUI, CMAS, P2, specjalizacje, opłaty, terminy, baseny, dane rejestrowe) odczytano z REST, nie każdą otwarto osobno w przeglądarce. Intro, hub kursów, dzieci, hokej, o nas, kontakt, wyprawy i instruktorzy otwarto w przeglądarce.
- Strona miesza kilka cenników i godzin. Rozbieżności są opisane jako luki. Nie wybrano „aktualnej” wersji.
- Daty z 2026 wcześniejsze niż 26 października 2026 opisano jako opublikowane i już minione. Nie są nadchodzącymi wydarzeniami.

### Adresy otwarte w przeglądarce

1. https://klubpirania.pl/
2. https://klubpirania.pl/szkolenia/
3. https://klubpirania.pl/dla-dzieci/
4. https://klubpirania.pl/hokej/
5. https://klubpirania.pl/o-nas/
6. https://klubpirania.pl/kontakt/
7. https://klubpirania.pl/wyprawy-nurkowe-2025/
8. https://klubpirania.pl/intro-nurkowe-nurkowanie-na-probe/
9. https://klubpirania.pl/instruktorzy/

### Adresy pobrane fetch/API (wybór merytoryczny)

Strony: wszystkie 58 z REST (lista w mapie URL).  
W szczególności treść: intro (`/szkolenia/opis-szkolen/intro-nurkowe/`), stopnie NAUI i CMAS, Advanced, P2, specjalizacje, dla kogo, opis szkoleń, terminy, opłaty, programy dla dzieci i studentów, misja podstawy, misje specjalne, BZNW Wrocław i Oława, hokej dla dzieci (stare podstrony), baseny, adres, konto, dane rejestrowe, osoby do kontaktu, kadra, biogramy Marcina Reifa i Jolanty Franczak, badania, wspierajmy, polityka ochrony dzieci, polityka cookies, wyprawy archiwalne (Włochy, Chorwacja, Egipt, Norwegia, Gozo, Łagów, Niesłysz, Pluszne), obóz 2025.  
Wpisy: pełny indeks 273; treść wpisów od 2019 oraz wpisów o intro, kursach, dzieciach, hokeju i wyprawach.

Sitemap i robots:

- https://klubpirania.pl/robots.txt
- https://klubpirania.pl/sitemap.xml (301 → wp-sitemap)
- https://klubpirania.pl/wp-sitemap.xml
- https://klubpirania.pl/wp-sitemap-posts-page-1.xml
- https://klubpirania.pl/wp-sitemap-posts-post-1.xml
- https://klubpirania.pl/wp-sitemap-taxonomies-category-1.xml
- https://klubpirania.pl/wp-sitemap-users-1.xml

## 3. Wygląd obecnej strony (z zrzutu strony głównej i CSS)

Motyw: **Septera** (Cryout Creations), układ landing page na stronie głównej, WordPress.

- Logo w nagłówku: pirania w masce i z rurką, cyjan (`#` zbliżony do błękitu klubowego), czarny kontur, biała obwódka jak naklejka. Napis **KLUB** cyjanowy, **PIRANIA** czarny. Plik: `cropped-Pirania-1.png`.
- Kolor akcentu w CSS motywu: `#24a7cf`. Tekst menu nad slajdem: `#ceb7e2` (lawendowy). Tło treści: prawie białe `#FFFDFF`. Ciemniejszy szary nagłówków/hover: `#495d6d`.
- Slajd hero: pełnoekranowe zdjęcie podwodne (ukwiał i błazenki), mocny cyjanowy filtr, biały wyśrodkowany nagłówek, przycisk w pigułce „WIĘCEJ”. To zdjęcie wygląda jak materiał stockowy bez podpisu — nie pobrano go do assetów.
- Menu wielkimi literami: Kursy nurkowe, Wyprawy nurkowe, Dla dzieci, Hokej podwodny, Wspierajmy, O nas, Kontakt, Ochrona dzieci, Szukaj. Ikony Facebook i Instagram w prawym górnym rogu.
- Podstrony są tekstowe: nagłówek H1, długi tekst, mało siatki. Stopka ma hasło „Do zobaczenia pod wodą!” oraz linię `©2023 KlubPirania.pl - Różni ludzie jedna pasja, naszą pasją jest nurkowanie!`.
- Zdjęcia klubowe (basen, dzieci w sprzęcie, hokej, portrety) są reportażowe, często z perspektywy kamery pod wodą. Osobno jest karuzela logotypów partnerów (NAUI, CMAS, DiveReif, PADI, SSI).
- Sekcja hokeja ma własny znak: ta sama pirania z kijem i napis „SEKCJA HOKEJOWA”.

Na nowej stronie warto wziąć błękit znaku, reportaż z basenu i hokeja oraz hasło klubu. Nie kopiować układu Septery (pełnoekranowy slajd z filtrem i karuzela logotypów jako główna kompozycja).

## 4. Co jest na stronie

### Nazwa, forma, hasła

- Pełna nazwa: **Akademicki Klub Płetwonurków „Pirania”**, skrót **AKP „Pirania”**.
- Marka w tytule strony: **Klub Pirania Wrocław**.
- Hasła publikowane: „Różni ludzie – jedna pasja. Naszą pasją jest nurkowanie!” oraz „Do zobaczenia pod wodą!”.
- Stowarzyszenie. Założenie: **1969**. Strona nazywa klub jednym z najstarszych klubów nurkowych w Polsce i pionierem nurkowania w Polsce.
- Rejestracje, które strona podaje: międzynarodowa federacja **CMAS** oraz **NAUI**; przynależność do **Komisji Działalności Podwodnej ZG PTTK**.
- Szkolenia: na stronie „O nas” i hubie kursów wymienione są **CMAS, NAUI, PADI oraz SSI**. Starszy blok na stronie głównej (treść strony w REST, ostatnia zmiana 2019-04-10) wymienia tylko CMAS i NAUI. Slajd strony głównej (odczytany w przeglądarce) mówi: „Szkolimy w systemie NAUI, CMAS, PADI oraz SSI”.
- Angielski dopisek na stronach kursów: „We also do english”.
- Oferty kursów mają klauzulę: „Powyższa oferta ma charakter informacyjny i nie stanowi oferty handlowej.”

### Historia podana wprost

- 1969 — założenie.
- Pod koniec lat 60. — udział w ekspedycji flory Wielkiego Stawu Karkonoskiego (strona badań).
- 2007 — badania bólu zęba u nurków oraz fitoplanktonu jeziora Niesłysz.
- Od 2010 — projekt „Bezpieczna zabawa nad wodą” (BZNW).
- 2012 — sekcja hokeja podwodnego (strona hokeja: luty 2012).
- Turnieje wymieniane w opisie klubu: „Aquabatle” Trzebnica, „Aquatak” Bełchatów, „Gorączka Sobotniej Nocy” Gdańsk.
- Organizacja turnieju Pirania CUP (biogram Marcina: 2014–2016). Osobna domena http://piraniacup.pl.
- Edycje 1–4 BZNW dofinansowane przez Gminę Wrocław. Edycja 2026 BZNW: „dofinansowana z Rządowego Programu Klub [MSiT]”.
- Hokej, 2026: dofinansowanie **17 000 PLN** na sekcję hokeja i sekcję nurkową dla dzieci i młodzieży, Program Klub 2026, link do https://www.gov.pl/web/sport.
- Dwa certyfikaty NGO: „Wymagania prawne dla organizacji pozarządowych” oraz „Wymagania finansowo-księgowe dla organizacji pozarządowych”. Wydawca certyfikatów nie jest nazwany na stronie.

### Kursy

Hub: „Szkolimy w systemie NAUI , KDP CMAS , PADI oraz SSI”.

Grupy ze strony „Dla kogo”:

- Początkujący: INTRO, SD NAUI, P1 CMAS.
- Zaawansowani: ASD NAUI, Rescue Diver, P2 CMAS, P3 CMAS, Master Scuba Diver NAUI oraz specjalizacje: nocne, nawigacja, nitrox, nurkowania głębokie (do 40 m), nurek eksplorator (do 30 m).
- Liderzy: DiveMaster NAUI, Asystent Instruktora NAUI. Terminarz 2026 dopisuje Program FIT NAUI 2026/2027 i Kurs Instruktora NAUI 2026/2027. Szczegółów programów liderów brak („wkrótce”).

Karty z ceną i programem:

| Szkolenie | Wiek na karcie | Program na karcie | Uprawnienia na karcie | Cena na karcie | Ostatnia zmiana karty |
| --- | --- | --- | --- | --- | --- |
| INTRO | dzieci od 10 lat, młodzież, dorośli | ok. 45 min omówienia i dopasowania sprzętu, 30–40 min nurkowania | „Satysfakcja, nowe doświadczenie” — bez certyfikatu | patrz rozbieżność cen | strona 2024-12-07; wpis menu ten sam dzień |
| Open Water Scuba Diver NAUI | min. 15 lat albo junior 10–14 | 8 teorii, 6 basenów, 6 nurkowań (Opole / Zimnik) | partnerstwo, bez nadzoru, do 18 m, nie głębiej niż na kursie i w podobnych warunkach | grupa 4–8: 2350 zł; 2 osoby Brucknera 2900 / Ślęza 3290; indywidualny ustalany | 2025-11-12 |
| P1 KDP CMAS | min. 14 lat | 8 teorii, 5 basenów, 6 nurkowań (Opole / Łagów / Lubikowo / Zimnik / Niesłysz — do ustalenia) | partnerstwo z co najmniej jedną pełnoletnią osobą o kwalifikacjach KDP/CMAS lub równorzędnych, do 20 m | jak NAUI na karcie: 2350 / 2900 / 3290 | 2026-01-07 |
| Advanced Scuba Diver NAUI | min. 15; junior 12–14; wymagany stopień podstawowy | 6 teorii, 6 nurkowań (Opole / Honoratka / Zimnik / j. Budzisławskie). Obowiązkowe: nawigacja, nocne lub ograniczona widoczność, głębokie. 3 nurkowania do wyboru z listy na stronie | „w warunkach przybliżonych do kursowych”. Opis szkoleń dopowiada 30 m — karta uprawnień tego limitu nie powtarza | 1850 zł, członkowie 1690 zł, przy dwóch uczestnikach | 2025-12-16 |
| P2 KDP CMAS | ukończone 16 lat plus P1, specjalizacje PNO, PNA, PE, 5 nurkowań stażowych po PE, zgoda opiekunów, orzeczenie lekarza | 9 teorii, 12 nurkowań | do 40 m w grupie równorzędnych lub wyższych kwalifikacji, co najmniej jedna osoba pełnoletnia | 2650 zł, członkowie 2250 zł | 2023-08-25 |
| Specjalizacje NAUI/CMAS | brak wieku na stronie | lista nazw, bez osobnych programów | certyfikat NAUI/CMAS | od 790 do 1560 zł; członkowie od 670 do 1360 zł | 2023-08-25 |

Lista specjalizacji: Płetwonurek nocny PNO, Płetwonurek nawigator PNA, Płetwonurek Eksplorator PE (do 30 m), Deep Diver (do 40 m), Rescue, suchy skafander, Nitrox, nurek archeolog, nurek wrakowy z zewnątrz, „i wiele innych”.

Strona opłat (zmiana **2026-08-26**) podaje inne kwoty stopnia podstawowego i INTRO oraz dopisuje OWD PADI obok NAUI i CMAS. Side Mount: 1850 zł plus certyfikacja. P3 CMAS: 2350 zł dla członków / 2750 zł. Master Scuba Diver NAUI: 2450 / 2850 zł. DiveMaster i FIT — bez kwoty.

Wymagania pływackie na kartach podstawowych: pływanie po powierzchni (kraul, bok, żabka, na plecach — wystarczy możliwość płynięcia), 10 minut utrzymania się na powierzchni, 15 m na jednym oddechu.

Warunki zdrowotne (intro i „Dla kogo”): sprawne serce i zdrowe płuca, drożne uszy i zatoki, brak chorób lub poważnych dolegliwości, brak uwarunkowań mogących spowodować utratę przytomności.

Studenci UWr: strona „Dla studentów” zaczyna się od „Obecnie oferta nieaktualna.” Dalej jest opis historycznego W-F (SD NAUI albo ASD NAUI, zapisy przez zapisy.uni.wroc.pl).

### Intro — rozbieżne wersje na żywej stronie

Wspólne: próbne nurkowanie z instruktorem w basenie lub w wodach otwartych o warunkach zbliżonych do basenowych. Uczestnik poznaje działanie sprzętu, podstawowe zasady i wybrane ćwiczenia ze stopnia podstawowego. Opłata za INTRO ma być wliczona w pełne szkolenie podstawowe, jeśli ktoś się na nie zdecyduje. Miejsca: ZS nr 14, al. Brucknera 10 (wjazd od ul. Toruńskiej) oraz Ślęza Centrum, ul. Błękitna 2. Rezerwacja z wyprzedzeniem. Sprzęt w cenie: butla, KRW, automat, balast; pełny strój przy wodach otwartych. Nie obejmuje dojazdów. Zabrać strój, czepek, klapki, żel.

| Źródło | Ostatnia zmiana | Czwartki | Dwie osoby | Indywidualnie | Godziny |
| --- | --- | --- | --- | --- | --- |
| `/intro-nurkowe-nurkowanie-na-probe/` (to ten adres jest w menu) | 2024-12-07 | 190 zł, ZS 14 | 200 zł | 290 zł | spotkanie 18.45, woda 19.45–20.30 |
| `/szkolenia/opis-szkolen/intro-nurkowe/` | 2024-12-07 | 190 zł | 200 zł | 290 zł | spotkanie 19.40, woda 20.30–21.15 |
| Wpis zima 2025/2026 | 2025-11-12 | 190 zł (wstęp, sprzęt, opiekun) | nie podano | nie podano | spotkanie 19.30, woda 20.30–21.15, podsumowanie 21.15 |
| `/szkolenia/oplaty/` oraz wpis „Najbliższe terminy… 2026” | 2026-08-26 | **250 zł** | **230 zł** (tylko strona opłat) | 290 zł | wpis: 19.30 / 20.30–21.15 |

Wpis z 26.08.2026 mówi o INTRO „w okresie jesienno-zimowym 2026/2027” w każdy czwartek oraz o „refresh” dla osób z uprawnieniami, też 250 zł, też dla dzieci 10+.

### Dzieci

Aktualna oferta (strona `/dla-dzieci/`, zmiana 2026-08-26): **BZNW**, „nowa odsłona”, dwa warianty.

- Misja podstawy (5+5), dla początkujących: 5 zajęć ABC (płetwy, maska, fajka, elementy ratownictwa, hokej, gry) i 5 zajęć w pełnym sprzęcie.
- Misje specjalne (3+7): 3 zajęcia ABC z misją ratowniczą i 7 specjalistycznych misji wybieranych z listy 10 (przygotowawcza, identyfikacja stworzeń, środowisko, „przestrzeń kosmiczna” / pływalność, nawigacja, nurkowanie „nocne”, bezpieczeństwo, poszukiwanie i wydobywanie, zdjęcia, wrak).

Dla kogo na tej stronie: dzieci **umiejące pływać, od 10 lat**. Minimum 4 osoby.

Miejsca i start zapisany na stronie:

- ZS nr 14, czwartki 19.45, 45 minut, grupy od **3 września 2026** (spotkanie 19.15 na stronie terminów).
- Ślęza Centrum, środy 19.45, 60 minut, od **2 września 2026**.

Na dzień audytu te daty startu już minęły. Strona nadal mówi „nowe grupy już od września”. Nie wiadomo, czy nabór trwa.

Ceny BZNW (zgodne na `/dla-dzieci/` i `/szkolenia/oplaty/`):

- Podstawowa, 10 zajęć: 1050 zł Brucknera, 1140 zł Ślęza (4–6 osób).
- Zaawansowana: 1180 zł Brucknera, 1220 zł Ślęza.
- Raty 2–3, „0% (bez dodatkowych opłat)”.
- Opcjonalnie pakiet Młodszego Płetwonurka, stopień brązowy CMAS, dla 10–12 lat: książka nurkowa, certyfikat i książeczka, koszulka, torba, dyplom. **Ceny pakietu na tej stronie nie ma.** Starsza strona BZNW Wrocław (2022) podawała 150 zł. To nie jest aktualny cennik.

Sprzęt w cenie: ABC oraz automat z butlą i KRW. Uczestnik: strój, ręcznik, klapki, czepek.

Inna strona, `/szkolenia/dla-dzieci-i-mlodziezy/` (2025-03-16), wymienia dodatkowo, bez cen i bez aktualnych terminów:

- INTRO od 9 lat (intro gdzie indziej: od 10).
- PMB brązowy do 2 m, od 9 lat.
- PMS srebrny do 6 m, od 10 lat.
- PMZ złoty do 12 m, od 12 lat.
- Junior Scuba Diver do 12 m, 10–14 lat.

Opis szkoleń: zajęcia BZNW dla dzieci **10–15 lat**. Wiek górny 15 lat nie pojawia się na stronie `/dla-dzieci/`.

Stare strony `/bznw-wroclaw/` (start 22 marca 2022, 680 zł, AWF) i `/bznw-olawa/` (Termy Jakuba, 650 zł, puste daty, rok 2022) są archiwalne.

### Hokej podwodny

Strona `/hokej/` (zmiana 2026-08-26).

Opis gry: mieszanka hokeja, pływania i freedivingu; krążek do bramki na wstrzymanym oddechu, na dnie. Dwie drużyny po 6 w wodzie i do 4 rezerwowych. Zmiany w dowolnym momencie. Brak bramkarzy i butli. Białe i czarne czepki oraz kijki. Sędziowie: 3 w wodzie i 1 na powierzchni. Krążek ok. 1,3 kg. Skróty na stronie: UWH = UnderWater Hokey (tak zapisane), HP = hokej podwodny.

Treningi „we Wrocławiu” (nagłówek), w tym Środa Śląska:

- poniedziałki 20:00, 1 h, Basen AWF, al. Paderewskiego 35
- wtorki 19:45, 2 h, Ślęza Centrum, ul. Błękitna 2
- czwartki 19:45 juniorzy i 20:30 wszyscy, ZS nr 14, al. Brucknera 10
- niedziele 14.00, juniorzy 2 h, Średzki Park Wodny, ul. Winogronowa 34, Środa Śląska — „Nowa grupa”

Kontakt sekcji: Marcin +48 505 861 372; „Snikers” +48 794 285 786; info@klubpirania.pl. Instagram http://instagram.com/uwh_piraniawroclaw. Facebook https://www.facebook.com/UWHPirania (w HTML jest też wariant `UWHpirania`).

Sezon na stronie: „przed nami 14 rok – sezon 2025/2026”. Strona była zmieniana 26.08.2026, więc to cytat, nie wniosek, że sezon nadal tak się nazywa.

Wydarzenia zapisane na stronie (nie weryfikowano poza stroną):

- zgrupowanie ogólnopolskie: „październik 2026 – COS Wałcz” — brak dnia; w dniu audytu październik 2026 jeszcze trwa, więc status jest niejednoznaczny
- 12 września 2026, Ostrzeszów — data minęła
- 7 listopada 2026, Olsztyn — data jest późniejsza niż dzień audytu; strona nie potwierdza, że turniej nadal obowiązuje

Skład opublikowany inicjałami (nie rozwijano). Role wprost: Artur S. kapitan i trener; Kuba K. Honzo trener; Marcin R., Robert P., Jarek P. trenerzy; Ania P. kadrowiczka Elite i trenerka; Alicja R., Dominika K., Marta S. kadrowiczki Elite; Michał W. kadrowicz Elite; Damian Z. „Bob” kadrowicz u24; Jan Sz. kadrowicz. Reszta listy to inicjały, część oznaczona jako junior. Pełnej listy nie powtarzam tu jako nazwisk.

Turniej 3×3: Pirania CUP, http://piraniacup.pl. Podstrona `/pirania-cup/` na klubpirania.pl jest pusta (ostatnia zmiana 2014).

Podstrony hokeja dla dzieci Wrocław i Oława są z 2018–2019 (ceny 180 zł / bilet 17,50 zł + składka 150 zł). To nie jest aktualny cennik.

Wpis o pokazie w Środzie Śląskiej (30 sierpnia, 14:00–16:00, tory 5–6, wstęp w cenie biletu) jest ogłoszeniem minionego pokazu. Grafika zapowiada też zajęcia w niedziele 14:00–16:00.

### Wyprawy

Jedyna pozycja w menu, `/wyprawy-nurkowe-2025/`, ma tytuł „Wyprawy nurkowe 2025”, a treść „PLAN WYJAZDÓW NURKOWYCH NA 2026” (zmiana 2026-08-26):

- Filipiny 16–30 kwietnia [Marcin] — data minęła
- 1–4 maja, Jezioro Budzisławskie [Przemek] — data minęła
- obóz 16–23 sierpnia, jezioro Piłakno [Przemek / Zenek] — data minęła
- „Jesień – w przygotowaniu. [Marcin]” — bez daty; w dniu audytu jest już jesień
- ExpressNur: „Najbliższe nurkowanie najprawdopodobniej zrobimy w marcu po feriach zimowych” — sformułowanie bez roku, w kontekście planu 2026 jest już nieaktualne jako zapowiedź

Kontakt wyjazdu: Przemek 660478939; Marcin 505861372, marcin.reif@gmail.com. Nazwisk przy imionach na tej stronie nie ma.

Osobne strony wyjazdów (Italia Nerano 1–10 lipca 2023, Chorwacja, Egipt, Gozo, Norwegia, Łagów 2017, Niesłysz 2018, Pluszne 2021, obóz Lubików 3–10 sierpnia 2025 za 3690 zł) są **archiwum**. Nie traktować ich cen ani terminów jako oferty.

ExpressNur w menu to archiwum kategorii `/category/expressnur/`, nie aktualny kalendarz.

### O nas, składki, instruktorzy

Członkostwo: każdy, kto lubi wodę, nurkowanie, hokej lub sporty wodne, w dowolnym wieku, po opłaceniu składki rocznej.

Stawki opisane jako **„na rok 2024/25 (od września do września)”** — strona nie podaje stawek 2025/26 ani 2026/27:

- 200 zł uczący się lub studiujący poniżej 26 lat (nowi i obecni)
- 250 zł hokeiści podwodni
- 300 zł osoby, które opłaciły składkę za poprzedni rok
- 320 zł nowi członkowie (na stronie bez „zł” przy 320)

Deklaracja: https://klubpirania.pl/wp-content/uploads/2025/03/2025-wniosek-czlonkowski.pdf (link z „O nas”; pliku nie analizowano).

Instruktorzy — tylko kwalifikacje zapisane na stronie:

- Marcin Reif — NAUI, DAN, kierownik szkolenia; na wpisie kadry także hokej podwodny
- Krzysztof Kędzia — CMAS, NAUI
- Marek Orzechowski — PADI, SSI
- Zenon Napierajczyk — CMAS
- Dariusz Ladra — CMAS
- Anna Olech — CMAS
- Marcin Łukaszewicz — NAUI
- Krzysztof Dołbizno — NAUI
- Robert Przysada — NAUI oraz instruktor pływania

DiveMasterzy:

- Krzysztof Soboń — DiveMaster NAUI
- Jolanta Franczak — DiveMaster NAUI
- Paweł Pitak — Dive Master PADI
- Adam Gocyk — DiveMaster NAUI

Biogram jest tylko przy Marcinie Reifie i Jolancie Franczak. Reszta to imię, nazwisko i skrót organizacji. Stopni instruktorskich (np. Instructor / Course Director) poza tymi skrótami strona nie podaje. Nie dopisywano ich.

Z biogramu Marcina (strona z 2023-02-07), tylko to, co tam jest: instruktor nurkowania NAUI od 2015, pierwszej pomocy DAN od 2017, drużyna hokeja od 2012, nurkuje od 1993 (młodszy płetwonurek KDP-CMAS), DiveMaster NAUI w 2010, prezes 2006–2015, potem członek zarządu i kierownik szkolenia, pomysłodawca BZNW od 2010, założyciel sekcji hokeja, od 2016 także dla dzieci i młodzieży, organizator Pirania CUP 2014–2016, koordynacja Programu Klub dla hokeja (2017, 2020, 2022), obóz Krzeczków 2019, obóz nad jeziorem Pluszne 2021, od 2020 firmy DiveReif.pl i Dobrynurek.pl. Wyjazdy wymienione jako doświadczenie organizacyjne: Chorwacja, Włochy, Malta, Egipt, Norwegia, Tajlandia, Malediwy.

Jolanta Franczak: pierwsze uprawnienia CMAS w 2003 nad jeziorem Głębokim; obecnie Dive Masterka NAUI; zajęcia dla dzieci; w klubie „już od 20 lat” (względem tekstu z 2023); hokej od 2012, drużyna „Pirania Ladies”; patent żeglarza jachtowego i sternika motorowodnego.

Zarząd i funkcje (strony kontakt):

- Prezes: Krzysztof Kędzia
- Vice-prezes: Jolanta Franczak, franczak.jolanta@gmail.com
- Kierownik szkolenia: Marcin Reif
- Sekretarz: Beata Kowalczyk
- Skarbnik: Iwona Maćkowiak
- Lekarz klubowy: prof. dr hab. Robert Śmigiel, robsmigiel@dilnet.wroc.pl
- Badania: dr n. med. Łukasz Fuławka, fulawka@poczta.onet.pl (na stronie kontakt wymieniony też jako drugi lekarz klubowy)
- Webmasterzy: Przemysław Jaworowski (www.jaworowski.pl), Marcin Reif

### Miejsca

Adres rejestrowy i do korespondencji oraz siedziba (sala i magazyn), teren Zespołu Szkół nr 14:

Akademicki Klub Płetwonurków „Pirania”  
al. Aleksandra Brücknera 10  
51-410 Wrocław

W opisach zajęć powtarza się „al. Brucknera 10” oraz literówka „Bruckenra”.

Baseny:

- ZS nr 14, al. Brucknera 10, Wrocław
- Centrum Ślęza, ul. Błękitna 2, Ślęza (przy Bielanach Wrocławskich)
- Pływalnia AWF, al. I. J. Paderewskiego 35, Wrocław
- Średzki Park Wodny, ul. Winogronowa 34, Środa Śląska (hokej juniorów)

Godziny z `/baseny/` (zmiana 2025-12-16) i `/o-nas/`:

- AWF, poniedziałek 20.00 — hokej
- Ślęza, wtorek 19.45 — hokej; środa 19.45 — BZNW podstawowy / zaawansowany
- ZS 14, czwartek 19.45 — BZNW podstawowy i hokej dla dzieci; 19.45 członkowie Piranii; 20.30 hokej zaawansowany / początkujący; 20.30 intro / kursy

Te czwartkowe 19.45 są zapisane przy dwóch różnych zajęciach naraz. Strona hokeja podaje czwartek 19.45 jako juniorów i 20.30 jako wszystkich. Intro w najnowszym wpisie: woda 20.30–21.15. Trzeba to potwierdzić u klubu.

Historyczne miejsca w archiwum, nie jako aktualne sale: Termy Jakuba w Oławie, ośrodki Łagów, Niesłysz/Krzeczków, Pluszne/Perkoz, Lubików, Piłakno, Budzisławskie, Honoratka, Zimnik, Opole.

Mapy Google na stronie kontaktu, adresu i basenów nie ma. Stara strona Niesłysza ma ślad „Wyświetl większą mapę”.

### Kontakt

- telefon: +48 505 861 372 (także zapisywany 505861372 i 505-861-372); przy intro i kursach dopisek tel/sms, a w wpisie z 26.08.2026 także WhatsApp
- e-mail klubu: info@klubpirania.pl
- Marcin: marcin.reif@klubpirania.pl oraz marcin.reif@gmail.com
- brak godzin biura
- Facebook klubu: https://www.facebook.com/KlubPirania
- Instagram klubu: https://www.instagram.com/klubpirania.pl/
- kronika (tylko na stronie 45-lecia z 2014): KRONIKA@klubpirania.pl — nie traktować jako skrzynki bieżącej bez potwierdzenia

Konto na stronie „Konto bankowe” (zmiana 2025-03-15):

37 2130 0004 2001 0436 7165 0001  
VOLKSWAGEN BANK direct

Inne numery kont pojawiają się przy starych zbiórkach i wyjeździe do Łagowa (konto osoby prywatnej). Nie są kontem klubu z bieżącej podstrony.

### Dane rejestrowe

- KRS 0000060801
- REGON 930229228
- NIP 8961004291
- forma: stowarzyszenie

### Badania

Trzy opisane wątki: ból zęba u nurków (2007, artykuł pod linkiem na stronie), fitoplankton jeziora Niesłysz (2007, dr inż. Dorota Richter; dr Jerzy Kassner wymieniony jako osoba, która zainicjowała działalność naukową klubu), Wielki Staw Karkonoski (koniec lat 60., czasopismo „Bąbel”).

### Wspierajmy

Hub nadal linkuje do Emilki, Arki i Zbigniewa. Treści Emilki i Zbigniewa były zmieniane ostatnio w marcu 2017. Arka to wpis ze stycznia 2010. Zbiórek nie uznawano za aktualne. Szczegóły konta zbiórki Emilki są w inwentarzu jako cytat archiwalny.

### Filmy na stronie głównej

W treści strony głównej (REST) są trzy filmy YouTube: `a6YRqKOvQ6w`, `hcn7PKsBbL4`, `7K6EOgBEZS0`. Strona `/filmy/` nie ma treści.

## 5. Pobrane pliki

Katalog: `research-assets/`. Pominięto zdjęcia rafy, ukwiału i błazenków ze slajdera: leżą w bibliotece WordPressa, ale wyglądają jak materiał stockowy bez autora. Pominięto logotypy PADI, SSI, NAUI, CMAS, DAN i DiveReif.

| Plik | Źródło | Co widać |
| --- | --- | --- |
| `logo-klub-pirania-cropped.png` | https://klubpirania.pl/wp-content/uploads/2024/10/cropped-Pirania-1.png | Znak klubu użyty w nagłówku. Wersja bez `cropped-` zwraca 404. |
| `logo-sekcja-hokejowa.jpg` | https://klubpirania.pl/wp-content/uploads/2024/12/Pirania-Hokejowa-1.jpg | Pirania z kijem, napis „KLUB PIRANIA / SEKCJA HOKEJOWA”. |
| `foto-bznw-grupa-2024-12.jpg` | https://klubpirania.pl/wp-content/uploads/2024/12/Razem-all-002.jpg | Ujęcie spod wody na torze: nurkowie i rurki piankowe. Na stronie dzieci. |
| `foto-bznw-sleza.jpg` | https://klubpirania.pl/wp-content/uploads/2021/11/BZNW-sleza.jpg | Dziecko w sprzęcie pod wodą na basenie. Alt na stronie: „Nurkowanie dzieci”. |
| `foto-bznw-olawa.jpg` | https://klubpirania.pl/wp-content/uploads/2026/09/Bznw-Olawa-edited.jpg | Dzieci na powierzchni basenu, w czepkach. Alt: „Nurkowanie dla dzieci”. |
| `foto-bznw-moment.jpg` | https://klubpirania.pl/wp-content/uploads/2026/09/GOPR1571_Moment-edited.jpg | Jedna osoba płynie przy dnie basenu w sprzęcie. |
| `foto-bznw-2025-013.jpg` | https://klubpirania.pl/wp-content/uploads/2026/08/1-BZNW-2025-013.jpg | Zajęcia pod wodą przy siatce na dnie. Ilustracja wpisu o terminach 2026. |
| `foto-bznw-2025-005.jpg` | https://klubpirania.pl/wp-content/uploads/2026/08/1-BZNW-2025-005.jpg | Dwie osoby układają puzzle na dnie basenu. Ten sam wpis. |
| `foto-intro-basen.jpeg` | https://klubpirania.pl/wp-content/uploads/2025/11/IMG_5622.jpeg | Kamizelki i automaty na brzegu basenu. Alt: „Nurkowanie INTRO”. Duży oryginał zmniejszono lokalnie do dłuższego boku 1600 px. |
| `foto-hokej-slider.jpg` | https://klubpirania.pl/wp-content/uploads/2022/06/Hokej-podwodny-Wroclaw-klub-pirania.jpg | Maska, kij, rękawica i worek z napisem Klub Pirania przy basenie. Slajd „Hokej podwodny…”. Zmniejszono lokalnie. |
| `foto-uwh-pokazowe.jpg` | https://klubpirania.pl/wp-content/uploads/2026/08/UWH-pokazowe.jpg | Grafika otwarcia sekcji w Środzie Śląskiej: pokaz 30.08, niedziele 14.00–16.00, Średzki Park Wodny. |
| `foto-uwh-w-wodzie.jpg` | https://klubpirania.pl/wp-content/uploads/2025/09/uwh-hokej-podwodny-pirania-wroclaw-006s.jpg | Zawodnicy w czepkach i z kijkami na powierzchni. |
| `foto-uwh-mp-2025.jpg` | https://klubpirania.pl/wp-content/uploads/2025/09/MP-2025-all.jpg | Zdjęcie grupowe na hali basenowej, różowe koszulki z piranią. Strona hokeja mówi, że część zdjęć jest od Fotokutkowska.pl — nie wiadomo, czy to właśnie to ujęcie. |
| `foto-instruktor-marcin-reif.jpg` | https://klubpirania.pl/wp-content/uploads/2023/02/My.jpg | Portret z biogramu; w kadrze jest też druga osoba, strona jej nie nazywa. |
| `foto-divemaster-jolanta-franczak.jpg` | https://klubpirania.pl/wp-content/uploads/2023/02/Jolanta-Franczak-DiveMaster-NAUI.jpg | Portret z biogramu Jolanty Franczak, nad wodą. |

## 6. Luki — do potwierdzenia przez klub

Nie uzupełniano ich domysłami.

1. Który cennik INTRO obowiązuje: 190 zł czy 250 zł w czwartek; 200 zł czy 230 zł przy dwóch osobach.
2. Który cennik stopnia podstawowego obowiązuje: 2350 / 2900 / 3290 z kart NAUI i CMAS czy 2550 / 3000 / 3390 ze strony opłat z 26.08.2026. Czy PADI i SSI są realnie wydawane, czy tylko wymienione.
3. Godziny intro w czwartek: 18.45–20.30, 19.40–21.15 czy 19.30–21.15.
4. Czy grupy BZNW, które miały start 2 i 3 września 2026, nadal trwają i czy nabór jest otwarty.
5. Wiek dzieci: 9, 10, czy 10–15 lat — trzy strony podają trzy warianty. Cena pakietu brązowego CMAS.
6. Programy i terminy: P3, Rescue, Master Scuba Diver, Side Mount, DiveMaster, FIT, kurs instruktora — są nazwy, czasem widełki cen, brak programu.
7. Składki członkowskie po sezonie 2024/25.
8. Czy deklaracja PDF z marca 2025 jest nadal właściwym formularzem.
9. Plan wyjazdów po 26.10.2026. Pozycja „jesień w przygotowaniu” nie ma daty ani miejsca.
10. Czy turniej 7.11.2026 w Olsztynie i zgrupowanie w Wałczu (październik 2026, bez dnia) nadal obowiązują.
11. Nakładanie się czwartku 19.45 (BZNW, hokej dzieci, członkowie, intro).
12. Biogramy i pełne stopnie instruktorskie poza skrótem federacji. Zdjęcia tylko dwóch osób.
13. Rozwinięcie inicjałów składu hokeja i osoby „Snikers”, jeśli mają być na nowej stronie.
14. Kim są „Przemek” i „Zenek” przy planie wyjazdów 2026.
15. Godziny biura, mapa dojazdu, parking — nieopublikowane.
16. Czy zbiórki Emilka / Arka / Zbigniew mają zostać. Treści są z 2010 i 2017, hub nadal do nich linkuje.
17. Status W-F dla studentów — strona sama mówi, że oferta jest nieaktualna.
18. Czy certyfikaty NGO mają być pokazane i kto je wydał.
19. Zgody na zdjęcia dzieci i na zdjęcie grupowe hokeja, jeśli autorem jest Fotokutkowska.pl.
20. Aktualność numeru konta Volkswagen Bank.
21. Teksty slajdów o „najbliższych” szkoleniach od września 2026 są na stronie głównej po tej dacie.

## 7. Proponowana architektura

To propozycja struktury nowej strony, nie tekst klubu.

- `/` — start
- `/kursy` — oferta i podział dla kogo
- `/kursy/intro`
- `/kursy/naui-open-water`
- `/kursy/cmas-p1`
- `/kursy/naui-advanced`
- `/kursy/cmas-p2`
- `/kursy/specjalizacje`
- `/kursy/terminy`
- `/kursy/oplaty`
- `/kursy/dzieci-i-mlodziez` — stopnie młodzieżowe wymienione na starej stronie
- `/kursy/studenci` — tylko jeśli klub potwierdzi, że oferta wraca; teraz jest wyłączona
- `/dla-dzieci`
- `/dla-dzieci/misja-podstawy`
- `/dla-dzieci/misje-specjalne`
- `/hokej`
- `/wyprawy` — dopiero z potwierdzonym planem; starych wyjazdów nie wstawiać jako aktualnych
- `/o-nas`
- `/o-nas/instruktorzy`
- `/o-nas/instruktorzy/marcin-reif`
- `/o-nas/instruktorzy/jolanta-franczak`
- `/o-nas/badania`
- `/baseny`
- `/kontakt`
- `/wspierajmy` — tylko po decyzji, które apele zostają
- `/polityka-ochrony-dzieci`
- `/polityka-cookies`

### Mapa przekierowań — strony stałe

Ścieżki `index.php/...` to te same treści. Przekierować je tam, gdzie idzie czysty adres, a nie na stronę główną.

| Stary adres | Nowy adres |
| --- | --- |
| `/` | `/` |
| `/szkolenia/` | `/kursy` |
| `/kurs-nurkowania-wroclaw-p1-owd/` | `/kursy` |
| `/szkolenia/opis-szkolen/` | `/kursy` |
| `/szkolenia/dla-kogo/` | `/kursy/dla-kogo` — sekcja na `/kursy`, osobny URL tylko jeśli zostanie |
| `/intro-nurkowe-nurkowanie-na-probe/` | `/kursy/intro` |
| `/szkolenia/opis-szkolen/intro-nurkowe/` | `/kursy/intro` |
| `/intro-nurkowe-czyli-nurkowanie-na-probe/` | `/kursy/intro` |
| `/szkolenia/opis-szkolen/stopien-podstawowy-naui/` | `/kursy/naui-open-water` |
| `/szkolenia/opis-szkolen/stopien-podstawowy-cmas/` | `/kursy/cmas-p1` |
| `/szkolenia/advanced-scuba-diver/` | `/kursy/naui-advanced` |
| `/szkolenia/stopien-p2-sredni-cmas/` | `/kursy/cmas-p2` |
| `/szkolenia/szkolenia-specjalistyczne/` | `/kursy/specjalizacje` |
| `/szkolenia/terminy/` | `/kursy/terminy` |
| `/szkolenia/oplaty/` | `/kursy/oplaty` |
| `/szkolenia/dla-dzieci-i-mlodziezy/` | `/kursy/dzieci-i-mlodziez` |
| `/szkolenia/w-f-dla-studentow-uwr/` | brak strony odpowiednika, dopóki oferta jest oznaczona jako nieaktualna |
| `/dla-dzieci/` | `/dla-dzieci` |
| `/proba/` | `/dla-dzieci` |
| `/nurkowanie-dzieci-podstawy/` | `/dla-dzieci/misja-podstawy` |
| `/nurkowanie-dzieci-zaawansowany/` | `/dla-dzieci/misje-specjalne` |
| `/nurkowanie-dla-dzieci/` | `/dla-dzieci` |
| `/hokej/` | `/hokej` |
| `/wyprawy-nurkowe-2025/` | `/wyprawy` tylko jako strona „zapytaj o wyjazd”, nie jako kalendarz 2026 |
| `/o-nas/` | `/o-nas` |
| `/pirania/` | `/o-nas` |
| `/instruktorzy/` | `/o-nas/instruktorzy` |
| `/kadra/` | `/o-nas/instruktorzy` |
| `/instruktor-nurkowania-wroclaw-marcin-reif-naui/` | `/o-nas/instruktorzy/marcin-reif` |
| `/divemasterka-naui-jolanta-franczak/` | `/o-nas/instruktorzy/jolanta-franczak` |
| `/badania/` | `/o-nas/badania` |
| `/kontakt/` | `/kontakt` |
| `/osoby-do-kontaktu/` | `/kontakt` |
| `/adres/` | `/kontakt` |
| `/dane-rejestrowe/` | `/kontakt` |
| `/konto-bankowe/` | `/kontakt` |
| `/baseny/` | `/baseny` |
| `/polityka-ochrony-dzieci/` | `/polityka-ochrony-dzieci` |
| `/polityka-plikow-cookies-eu/` | `/polityka-cookies` |
| `/wspierajmy/` | `/wspierajmy` albo brak, według decyzji klubu |

### Bez przekierowania na stronę główną

Te adresy nie mają odpowiednika w nowej strukturze. Zostawić 410 albo prostą informację „archiwum”, nie 301 na `/`.

Strony:

- `/bznw-wroclaw/`
- `/bznw-olawa/`
- `/hokej/hokej-dla-dzieci-wroclaw/`
- `/hokej/hokej-olawa/`
- `/45-lat-piranii/`
- `/filmy/` (pusta)
- `/logo/` (same logotypy partnerów)
- `/pirania-cup/` (pusta; turniej żyje na piraniacup.pl)
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
- `/wspierajmy/emilka/`
- `/wspierajmy/zbigniew/`
- `/index.php/2010/01/1-dla-arki-z-wroclawia-fundacja/`

Kategorie (archiwa wpisów), bez nowej strony:

`/category/baseny/`, `/category/imprezy/`, `/category/dotacje/`, `/category/spotkania-klubowe/`, `/category/wydarzenia/`, `/category/polecane/`, `/category/wazne/`, `/category/badania/`, `/category/kursy-nurkowe/`, `/category/filmy/`, `/category/expressnur/`, `/category/wyprawy/`, `/category/ciekawostki/`, `/category/relacje/`, `/category/konkursy/`, `/category/hokej-pod-woda-2/`, `/category/freediving-2/`, `/category/nurkowanie-2/`, `/category/nurek/`, `/category/hokej-podwodny/`.

Autorzy: `/author/admin/`, `/author/marcin-reif/` — brak strony odpowiednika.

### Wpisy (273) — brak strony odpowiednika

Nie przekierowywać ich na `/`. Dotyczy to też wpisów z 2024–2026 o konkretnych terminach kursów: to ogłoszenia, nie strony oferty. Oferta ma własne adresy powyżej.

| Adres | Data | Tytuł | Nowa strona |
| --- | --- | --- | --- |
| `/najblizsze-terminy-szkolen-nurkowych-oraz-zajec-nurkowych-dla-dzieci-na-2026/` | 2026-08-26 | Najbliższe terminy szkoleń nurkowych oraz zajęć nurkowych dla dzieci na 2026 :) | brak strony odpowiednika |
| `/hokej-podwodny-w-srodzie-slaskiej-dla-dzieci/` | 2026-08-26 | Hokej Podwodny w Środzie Śląskiej – dla dzieci :) | brak strony odpowiednika |
| `/pierwsze-terminy-szkolen-nurkowych-i-zajec-dla-dzieci-na-2026/` | 2025-12-16 | Pierwsze terminy szkoleń nurkowych i zajęć dla dzieci na 2026 :) | brak strony odpowiednika |
| `/zajecia-nurkowe-na-basenie-dla-poczatkujacych-i-dla-kazdego/` | 2025-11-12 | Zajęcia nurkowe na basenie dla początkujących i z uprawnieniami Zima 2025/2026 | brak strony odpowiednika |
| `/zajecia-nurkowe-dla-dzieci-misja-podstawy-4-wrzesnia-2025/` | 2025-08-29 | Zajęcia nurkowe dla dzieci – Misja Podstawy :) 4 września 2025 | brak strony odpowiednika |
| `/kurs-nurkowy-dla-poczatkujacych-4-wrzesnia-2025/` | 2025-08-29 | Kurs nurkowy dla początkujących 4 września 2025 | brak strony odpowiednika |
| `/oboz-nurkowy-dla-dzieci-i-mlodziezy-2-10-sierpnia-2025/` | 2025-03-16 | Obóz nurkowy dla dzieci i młodzieży 2-10 sierpnia 2025 | brak strony odpowiednika |
| `/kurs-nurkowy-na-stopien-podstawowy-dla-poczatkujacych/` | 2025-03-16 | Kurs nurkowy na stopień podstawowy dla początkujących: 20 marca 2025 | brak strony odpowiednika |
| `/startujemy-w-grantowo-pl/` | 2025-03-08 | Startujemy w Grantowo.pl | brak strony odpowiednika |
| `/zajecia-nurkowe-dla-dzieci-z-dofinansowaniem-msit-program-klub-jesien-2024/` | 2024-08-09 | Zajęcia nurkowe dla dzieci z dofinansowaniem MSiT Program Klub – jesień 2024 | brak strony odpowiednika |
| `/55-lecie-piranii-w-2024-roku-28-wrzesnia-rejs-po-odrze/` | 2024-06-13 | 55- lecie Piranii w 2024 roku 28 września – Rejs po Odrze. | brak strony odpowiednika |
| `/nurkowanie-dla-dzieci-na-basenie-grupa-podstawowa/` | 2024-03-04 | Nurkowanie dla dzieci na basenie – grupa podstawowa 2024. | brak strony odpowiednika |
| `/4529/` | 2023-08-01 | Program Klub dla sekcji hokeja podwodnego 2023 | brak strony odpowiednika |
| `/oboz-letni-jezioro-drawsko/` | 2023-02-15 | Obóz letni – Jezioro Drawsko | brak strony odpowiednika |
| `/rozpoczecie-sezonu-2023-majowka/` | 2023-02-15 | Rozpoczęcie sezonu nurkowe 2023 | brak strony odpowiednika |
| `/nurkowanie-dla-dzieci/` | 2023-02-08 | Nurkowanie dla dzieci | `/dla-dzieci` |
| `/wyprawy-nurkowe-2025/` | 2023-02-07 | Wyprawy nurkowe 2025 | `/wyprawy` (bez starego kalendarza jako oferty) |
| `/intro-nurkowe-nurkowanie-na-probe/` | 2023-02-07 | Intro nurkowe – nurkowanie na próbę | `/kursy/intro` |
| `/kadra/` | 2023-02-07 | Kadra nurkowa | `/o-nas/instruktorzy` |
| `/nurkowanie-dla-poczatkujacych-dla-zaawansowanych/` | 2023-02-01 | Dla Kogo nurkowanie :) | brak strony odpowiednika |
| `/kurs-nurkowania-wroclaw-p1-owd/` | 2023-02-01 | Kursy Nurkowe | `/kursy` |
| `/hokej-podwodny-wydarzenia/` | 2022-11-20 | Hokej Podwodny – Wydarzenia | brak strony odpowiednika |
| `/hokej-podwodny-treningi-2022-2023/` | 2022-11-20 | Hokej podwodny – treningi 2022/2023 | brak strony odpowiednika |
| `/program-klub-dla-sekcji-hokeja-podwodnego/` | 2022-08-15 | Program Klub dla sekcji hokeja podwodnego | brak strony odpowiednika |
| `/szkolenie-na-stopien-podstawowy-marzec-kwiecien-2022/` | 2022-03-02 | Szkolenie na stopień podstawowy Marzec – kwiecień 2022 :) | brak strony odpowiednika |
| `/pirania-junior-wygrywa-baltic-cup/` | 2022-03-02 | Pirania Junior wygrywa Junior Baltic CUP :) | brak strony odpowiednika |
| `/szkolenie-nurkowe-na-stopien-podstawowy/` | 2021-09-13 | Szkolenie nurkowe na stopień podstawowy :) | brak strony odpowiednika |
| `/zakonczenie-sezonu-2/` | 2021-09-13 | Zakończenie sezonu | brak strony odpowiednika |
| `/andrzejki-29-listopada/` | 2019-11-22 | Andrzejki 29 listopada | brak strony odpowiednika |
| `/spotkanie-z-seniorami-piranii/` | 2019-11-21 | Spotkanie z Seniorami Piranii | brak strony odpowiednika |
| `/zakonczenie-sezonu-i-sprzatanie-jeziora/` | 2019-10-09 | Zakończenie sezonu i sprzątanie jeziora | brak strony odpowiednika |
| `/curacao-last-minut/` | 2019-09-18 | Curacao last minut | brak strony odpowiednika |
| `/zajecia-nurkowe-dla-dzieci-bznw/` | 2019-09-12 | Zajęcia nurkowe dla dzieci BZNW | brak strony odpowiednika |
| `/basen-klubowy/` | 2019-09-04 | Basen Klubowy | brak strony odpowiednika |
| `/50-leci-piranii-7-wrzesnia/` | 2019-08-21 | 50 leci Piranii 7 września. | brak strony odpowiednika |
| `/aktualny-terminarz-szkolen-i-zajec-na-2019/` | 2019-02-08 | Aktualny terminarz szkoleń i zajęć na 2022/2023 | brak strony odpowiednika |
| `/walne-zgromadzenie-akp-pirania/` | 2018-12-12 | Walne Zgromadzenie AKP Pirania | brak strony odpowiednika |
| `/dla-ciebie-i-dla-partnera-pierwsza-pomoc-dan/` | 2018-12-03 | Dla Ciebie i dla partnera pierwsza pomoc DAN | brak strony odpowiednika |
| `/aktualnosci-zajecia-dla-dzieci-kursy-dla-poczatkujacych/` | 2018-09-07 | Zajęcia dla dzieci, kursy dla początkujących | brak strony odpowiednika |
| `/survivalowo-nurkowy-oboz-letni-2018/` | 2018-05-17 | Survivalowo-nurkowy obóz letni 2018 | brak strony odpowiednika |
| `/intro-nurkowe-czyli-nurkowanie-na-probe/` | 2018-02-18 | INTRO nurkowe czyli nurkowanie na próbę | `/kursy/intro` |
| `/zajecia-nurkowe-dla-dzieci/` | 2018-02-14 | Zajęcia nurkowe dla dzieci | brak strony odpowiednika |
| `/zajecia-basenowe-wroclaw/` | 2017-09-13 | Zajęcia basenowe Wrocław | brak strony odpowiednika |
| `/super-supetar/` | 2017-08-24 | Super Supetar | brak strony odpowiednika |
| `/nurkowanie-nowe-szkolenia/` | 2017-05-12 | Nurkowanie, nowe szkolenia Oława i Wrocław | brak strony odpowiednika |
| `/norwegia-ostatnie-3-miejsca/` | 2017-02-20 | Norwegia ostatnie 3 miejsca | brak strony odpowiednika |
| `/twoim-marzeniem-jest-nurkowac/` | 2017-02-07 | Twoim marzeniem jest nurkować? | brak strony odpowiednika |
| `/odezwa-do-klubowiczow/` | 2016-11-03 | Odezwa do Klubowiczów | brak strony odpowiednika |
| `/co_tym_razem_wylowimy/` | 2016-10-11 | Co tym razem wyłowimy ? | brak strony odpowiednika |
| `/twoim-marzeniem-jest-nauczyc-sie-nurkowac/` | 2016-10-07 | Twoim marzeniem jest nauczyć się nurkować? | brak strony odpowiednika |
| `/zaczynamy-p1-sd-bznw-i-uwh/` | 2016-10-05 | Zaczynamy P1, SD, BZNW i UWH | brak strony odpowiednika |
| `/zajecia-pozalekcyjne-dla-dzieci/` | 2016-09-14 | Zajęcia pozalekcyjne dla dzieci | brak strony odpowiednika |
| `/kurs-nurkowy-w-chorwacji/` | 2016-09-11 | Kurs nurkowy w Chorwacji | brak strony odpowiednika |
| `/jezioro-nieslysz-oboz-eko-nurkowy-2016/` | 2016-07-26 | Jezioro Niesłysz obóz EKO-nurkowy 2016 | brak strony odpowiednika |
| `/kurs-nurkowy-w-olawie/` | 2016-06-21 | Kurs nurkowy w Oławie | brak strony odpowiednika |
| `/nowe-kursy-nurkowe-na-lato-2016/` | 2016-06-13 | Nowe kursy nurkowe na lato 2016 | brak strony odpowiednika |
| `/expressnur-opole-piast/` | 2016-05-30 | ExpressNur Opole Piast | brak strony odpowiednika |
| `/expressnur-opole/` | 2016-05-23 | Expressnur Opole | brak strony odpowiednika |
| `/glosujemy-na-turniej-hokeja-podwodnego/` | 2016-05-17 | Głosujemy na turniej hokeja podwodnego | brak strony odpowiednika |
| `/nurkowanie-dla-dzieci-w-olawie/` | 2016-05-04 | Nurkowanie dla dzieci w Oławie | brak strony odpowiednika |
| `/norwegia-wyprawa-nurkowa/` | 2016-02-21 | NORWEGIA – wyprawa nurkowa. | brak strony odpowiednika |
| `/otwarty-list-nowego-prezesa-piranii/` | 2015-12-14 | Otwarty list nowego prezesa Piranii. | brak strony odpowiednika |
| `/zgromadzenie-generalne-piranii-12-grudnia-2015/` | 2015-12-14 | Zgromadzenie Generalne Piranii 12 grudnia 2015 | brak strony odpowiednika |
| `/zajecia-dla-dzieci-nurkowanie-plywanie-i-zabawa-w-basenie/` | 2015-09-30 | Zajęcia dla dzieci: nurkowanie, pływanie i zabawa w basenie. | brak strony odpowiednika |
| `/zakonczenie-sezonu-lagow-2015-i-sprzatanie-jeziora/` | 2015-09-23 | Zakończenie sezonu Łagów 2015 i sprzątanie jeziora | brak strony odpowiednika |
| `/expressnur-opole-5-6-wrzesien/` | 2015-08-31 | ExpressNur Opole 5-6 wrzesień | brak strony odpowiednika |
| `/podwodne-co/` | 2015-08-20 | Podwodne CO ??? | brak strony odpowiednika |
| `/nurkowanie-kurs-podstawowy/` | 2015-07-23 | Nurkowanie – kurs podstawowy :) | brak strony odpowiednika |
| `/oboz-nurkowy-jezioro-nieslysz-2015/` | 2015-06-08 | Obóz nurkowy – jezioro Niesłysz 2015 | brak strony odpowiednika |
| `/aktualnosci-w-pigulce/` | 2015-02-23 | Aktualności w pigułce ; ) | brak strony odpowiednika |
| `/zajecia-basenowe-2015/` | 2015-01-18 | Zajęcia basenowe 2015 | brak strony odpowiednika |
| `/podsumowanie-i-przeglad-2014-roku/` | 2015-01-03 | Podsumowanie i przegląd 2014 roku | brak strony odpowiednika |
| `/pirania-na-squashu/` | 2014-11-09 | Pirania na Squash’u | brak strony odpowiednika |
| `/freediving-mateusz-malina-spelnia-swoje-marzenia/` | 2014-10-27 | Freediving – Mateusz Malina spełnia swoje marzenia. | brak strony odpowiednika |
| `/lagow-expressnur/` | 2014-10-20 | Łagów – ExpressNur | brak strony odpowiednika |
| `/wf-z-pirania-dla-studentow-uwr/` | 2014-09-28 | WF- z Piranią dla studentów UWr. | brak strony odpowiednika |
| `/kurs-nurkowy-na-stopien-podstawowy/` | 2014-09-22 | Kurs nurkowy na stopień podstawowy | brak strony odpowiednika |
| `/pirania-cup-relacja-i-wyniki/` | 2014-09-17 | Pirania CUP :) | brak strony odpowiednika |
| `/turniej-hokeja-podwodnego-pirania-cup/` | 2014-09-09 | Turniej hokeja podwodnego Pirania CUP | brak strony odpowiednika |
| `/urodzinowy-piknik-piranii-6-wrzesien/` | 2014-08-26 | Urodzinowy Piknik Piranii 6 wrzesień | brak strony odpowiednika |
| `/expressnur-krzeszowek-23-08-2014/` | 2014-08-19 | ExpressNur Krzeszówek 23.08.2014 | brak strony odpowiednika |
| `/aquapark-wroclaw-warsztaty-nurkowe-z-pirania/` | 2014-08-07 | Aquapark Wrocław – warsztaty nurkowe z Piranią :) | brak strony odpowiednika |
| `/expressnur-19-06-2014/` | 2014-06-14 | ExpressNur 19.06.2014 | brak strony odpowiednika |
| `/1989/` | 2014-06-02 |  | brak strony odpowiednika |
| `/kurs-nurkowy-na-stopien-podstawowy-pletwonurka-cmas-naui/` | 2014-05-28 | Kurs nurkowy na stopień podstawowy płetwonurka CMAS/ NAUI | brak strony odpowiednika |
| `/specjalizacja-nitrox-szkolenie/` | 2014-05-15 | Specjalizacja NITROX – szkolenie | brak strony odpowiednika |
| `/certyfikaty-dla-piranii/` | 2014-03-29 | Certyfikaty dla Piranii. | brak strony odpowiednika |
| `/braz-dla-piranii-wroclaw/` | 2014-03-25 | Brąz dla Piranii Wrocław :) | brak strony odpowiednika |
| `/rozpoczecie-sezonu-nurkowego-2014/` | 2014-03-11 | Rozpoczęcie sezonu nurkowego 2014 | brak strony odpowiednika |
| `/spotkanie-nurkow-piranii/` | 2014-03-09 | Spotkanie nurków Piranii :) | brak strony odpowiednika |
| `/kurs-nurkowy/` | 2014-02-17 | Kurs nurkowy | brak strony odpowiednika |
| `/srebro-dla-hydranii/` | 2014-01-16 | Srebro dla “Hydranii” | brak strony odpowiednika |
| `/wszystkiego-najlepszego-w-nowym-roku/` | 2014-01-01 | Wszystkiego najlepszego w Nowym Roku :) | brak strony odpowiednika |
| `/obnizka-skladki-czlonkowskiej-oraz-darmowe-zajecia-z-nauki-plywania/` | 2013-12-16 | Obniżka składki członkowskiej oraz darmowe zajęcia z nauki pływania | brak strony odpowiednika |
| `/spotkanie-swiateczno-noworoczne/` | 2013-12-15 | Spotkanie Świąteczno Noworoczne | brak strony odpowiednika |
| `/zajecia-udoskonalajace-plywanie/` | 2013-11-07 | Zajęcia udoskonalające pływanie | brak strony odpowiednika |
| `/zakonczenie-sezonu-2013-lagow/` | 2013-10-23 | Zakończenie sezonu 2013 Łagów | brak strony odpowiednika |
| `/szkolenie-na-stopien-podstawowy-pletwonurka/` | 2013-09-23 | Szkolenie na stopień podstawowy płetwonurka | brak strony odpowiednika |
| `/pierwsze-zajecia-basenowe-20132014/` | 2013-09-17 | Pierwsze zajęcia basenowe 2013/2014 | brak strony odpowiednika |
| `/spotkanie-informacyjne-vii-edycji-bznw/` | 2013-09-08 | Spotkanie informacyjne VII edycji BZNW | brak strony odpowiednika |
| `/targi-zajec-pozalekcyjnych-07-09-2013/` | 2013-08-31 | Targi zajęć Pozalekcyjnych 07.09.2013 | brak strony odpowiednika |
| `/expressnur-zimnik-01-09-2013/` | 2013-08-29 | ExpressNur Zimnik 01.09.2013 | brak strony odpowiednika |
| `/spotkanie-klubowe-27-08-2013-expressnur_plan/` | 2013-08-20 | Spotkanie Klubowe 27.08.2013 / ExpressNur_plan | brak strony odpowiednika |
| `/spotkanie-klubowe-31-07-2013/` | 2013-07-26 | Spotkanie klubowe 31.07.2013 | brak strony odpowiednika |
| `/galeria-zdjec/` | 2013-07-20 | Galeria zdjęć :) | brak strony odpowiednika |
| `/oboz-nurkowy-nad-jeziorem-nieslysz-lipiec-2013/` | 2013-06-23 | Obóz nurkowy nad jeziorem Niesłysz – lipiec 2013 | brak strony odpowiednika |
| `/kurs-na-stopien-podstawowy-cmas-p1/` | 2013-05-28 | Kurs na stopień podstawowy CMAS P1 | brak strony odpowiednika |
| `/kurs-advanced-scuba-diver/` | 2013-05-19 | Kurs  Advanced Scuba Diver | brak strony odpowiednika |
| `/targi-ngo-z-pirania-26-05-2013/` | 2013-05-10 | Targi NGO z Piranią 26.05.2013 | brak strony odpowiednika |
| `/kurs-pierwszej-pomocy-przedmedycznej-doroslych-i-dzieci-efr/` | 2013-05-06 | Kurs Pierwszej Pomocy Przedmedycznej dorosłych i dzieci. EFR | brak strony odpowiednika |
| `/aktualnosci-kwiecien-maj-z-pirania/` | 2013-04-11 | Aktualności – kwiecień / maj z Piranią | brak strony odpowiednika |
| `/bezpieczna-zabawa-nad-woda-zapisy/` | 2013-03-11 | Bezpieczna zabawa nad wodą – zapisy | brak strony odpowiednika |
| `/kurs-nurkowania-marzec-maj-2013/` | 2013-02-15 | Kurs nurkowania marzec-maj 2013 | brak strony odpowiednika |
| `/wf-z-pirania/` | 2013-02-14 | WF- z Piranią | brak strony odpowiednika |
| `/stado-rybek/` | 2013-02-09 | Stado rybek ;) | brak strony odpowiednika |
| `/spotkanie-klubowe-21-02-2013/` | 2013-02-04 | Spotkanie klubowe 21.02.2013 | brak strony odpowiednika |
| `/zajecia-z-freedivingu/` | 2013-01-24 | Zajęcia z freedivingu | brak strony odpowiednika |
| `/podlodowe-czy-wiosenne-rozpoczecie-sezonu/` | 2013-01-20 | Podlodowe czy wiosenne rozpoczęcie sezonu? | brak strony odpowiednika |
| `/goraczka-sobotniej-nocy-turniej-hokeja-podwodnego/` | 2013-01-06 | Gorączka Sobotniej Nocy – turniej hokeja podwodnego | brak strony odpowiednika |
| `/spotkanie-klubowe-swiateczno-nowo-roczne/` | 2012-12-14 | Spotkanie klubowe – Świąteczno Nowo Roczne | brak strony odpowiednika |
| `/freediving-spotkanie-z-bartoszem-morawcem/` | 2012-12-05 | Freediving – spotkanie z Bartoszem Morawcem | brak strony odpowiednika |
| `/safari-nurkowe-wraki-i-rafy-polnocy-red-sea/` | 2012-12-02 | Safari nurkowe – wraki i rafy północy Red Sea | brak strony odpowiednika |
| `/safari-nurkowe-ostatnie-miejsca/` | 2012-10-20 | Safari nurkowe – ostatnie miejsca! | brak strony odpowiednika |
| `/hydra-vs-pirania-sparing-uwh/` | 2012-10-18 | Hydra vs Pirania (sparing UWH) | brak strony odpowiednika |
| `/expressnur-zimnik-21-10-2012/` | 2012-10-18 | ExpressNur – Zimnik 21.10.2012 | brak strony odpowiednika |
| `/1536/` | 2012-09-24 | Spotkanie informacyjne o jesiennych szkoleniach | brak strony odpowiednika |
| `/spotkanie-informacyjne-o-jesiennych-szkoleniach/` | 2012-09-23 | Spotkanie informacyjne o jesiennych szkoleniach | brak strony odpowiednika |
| `/expressnur-krzeszowek-krecimy-promo-cyjny-film/` | 2012-09-20 | ExpressNur Krzeszówek – kręcimy promo-cyjny film ;) | brak strony odpowiednika |
| `/bezpieczna-zabawa-nad-woda-5/` | 2012-09-12 | Bezpieczna Zabawa Nad Wodą 5 | brak strony odpowiednika |
| `/spotkanie-klubowe-21-08-2012/` | 2012-08-19 | Spotkanie klubowe 21.08.2012 | brak strony odpowiednika |
| `/redseafriends-pl-nowy-portal/` | 2012-08-08 | RedSeaFriends.pl – nowy portal | brak strony odpowiednika |
| `/spotkanie-klubowe-trening-hokeja-podwodnego/` | 2012-08-05 | Spotkanie klubowe + trening hokeja podwodnego | brak strony odpowiednika |
| `/spotkanie-klubowe-oraz-trening-hokeja-podwodnego-2-08-2012/` | 2012-07-31 | Spotkanie klubowe oraz trening hokeja podwodnego 2.08.2012 | brak strony odpowiednika |
| `/expressnur-krzeszowek-c-d-4-5-08-2012/` | 2012-07-31 | ExpressNur Krzeszówek c.d. 4-5.08.2012 | brak strony odpowiednika |
| `/expressnur-krzeszowek/` | 2012-07-24 | ExpressNur Krzeszówek | brak strony odpowiednika |
| `/spotkanie-klubowe-i-trening/` | 2012-07-24 | Spotkanie klubowe i trening | brak strony odpowiednika |
| `/pierwszy-w-polsce-turniej-hokeja-podwodnego/` | 2012-06-17 | Pierwszy w Polsce Turniej Hokeja Podwodnego | brak strony odpowiednika |
| `/bezpieczna-zabawa-nad-woda-4-podsumowanie/` | 2012-06-11 | Bezpieczna Zabawa Nad Wodą 4. Podsumowanie :) | brak strony odpowiednika |
| `/expressnur-zimnik-17-06-2012-niedziela/` | 2012-06-09 | ExpressNur Zimnik 17.06.2012 niedziela | brak strony odpowiednika |
| `/spotkanie-klubowe-29/` | 2012-05-29 | Spotkanie Klubowe | brak strony odpowiednika |
| `/festyn-rodzinny-oraz-targi-ngo/` | 2012-05-27 | Festyn Rodzinny oraz Targi NGO. | brak strony odpowiednika |
| `/dolnoslaskie-targi-organizacji-pozarzadowych-2012/` | 2012-05-14 | DOLNOŚLĄSKIE TARGI ORGANIZACJI POZARZĄDOWYCH 2012 | brak strony odpowiednika |
| `/spotkanie-klubowe-oraz-expressnur-do-krakowa/` | 2012-05-09 | Spotkanie klubowe oraz ExpressNur do Krakowa | brak strony odpowiednika |
| `/spotkanie-klubowe-oraz-zajecia-basenowe/` | 2012-04-04 | Spotkanie klubowe oraz zajęcia basenowe | brak strony odpowiednika |
| `/kurs-na-stopien-podstawowy-i-zaawansowany/` | 2012-02-22 | Kurs na stopień podstawowy i zaawansowany | brak strony odpowiednika |
| `/trwaja-zapisy-na-w-f/` | 2012-02-03 | Trwają zapisy na W-F | brak strony odpowiednika |
| `/rozpoczecie-sezonu-2012/` | 2012-01-24 | Rozpoczęcie sezonu 2012 | brak strony odpowiednika |
| `/kartka-noworoczna/` | 2011-12-29 | Kartka Noworoczna :) | brak strony odpowiednika |
| `/zyczenia-swiateczno-noworoczne/` | 2011-12-25 | Życzenia świąteczno-noworoczne :)) | brak strony odpowiednika |
| `/283-m-nowy-rekord-swiata-w-nurkowaniu-dla-polaka/` | 2011-12-09 | 283 m – Nowy rekord świata w nurkowaniu dla Polaka! | brak strony odpowiednika |
| `/konkurs-zagnij-mikolaja-i-pokaz-mu-gdzie-raki-zimuja/` | 2011-12-06 | Konkurs – Zagnij Mikołaja i pokaż mu gdzie raki zimują | brak strony odpowiednika |
| `/podwodny-swiat-marcina/` | 2011-11-16 | Podwodny świat Marcina :) | brak strony odpowiednika |
| `/nowy-akwen-nurkowy/` | 2011-11-07 | Nowy akwen nurkowy :) | brak strony odpowiednika |
| `/andrzejki-klubowe-26-11-2011/` | 2011-11-07 | Andrzejki klubowe 26.11.2011 | brak strony odpowiednika |
| `/hokej-pod-woda/` | 2011-11-03 | Hokej pod wodą | brak strony odpowiednika |
| `/intro-nurkowe-pierwsza-pomoc/` | 2011-10-18 | INTRO nurkowe, pierwsza pomoc …. | brak strony odpowiednika |
| `/top-pirania-models/` | 2011-10-08 | Top Pirania Models :) | brak strony odpowiednika |
| `/spotkanie-klubowe-oraz-kurs-na-adv-sd-naui/` | 2011-10-01 | Spotkanie Klubowe oraz Kurs na ADV SD NAUI | brak strony odpowiednika |
| `/zajecia-pozalekcyjne-dla-dzieci-i-mlodziezy/` | 2011-09-26 | Zajęcia pozalekcyjne dla dzieci i młodzieży | brak strony odpowiednika |
| `/aktywna-i-bezpieczna-zabawa-nad-woda/` | 2011-09-21 | Aktywna i bezpieczna zabawa nad wodą. | brak strony odpowiednika |
| `/spotkanie-klubowe-28/` | 2011-09-18 | Spotkanie Klubowe | brak strony odpowiednika |
| `/zajecia-dla-dzieci-mlodziezy/` | 2011-09-11 | Zajęcia dla dzieci młodzieży | brak strony odpowiednika |
| `/targi-zajec-pozalekcyjnych/` | 2011-09-08 | Targi zajęć pozalekcyjnych | brak strony odpowiednika |
| `/zajecia-basenowe-kurs-nurkowy/` | 2011-09-07 | Zajęcia basenowe / kurs nurkowy | brak strony odpowiednika |
| `/spotkanie-klubowe-27/` | 2011-09-02 | Spotkanie Klubowe | brak strony odpowiednika |
| `/bicie-rekordu-guinnessa-27-08-2011/` | 2011-08-29 | Bicie rekordu Guinnessa 27-08-2011 | brak strony odpowiednika |
| `/kurs-nurkowania-2/` | 2011-08-22 | Kurs nurkowania | brak strony odpowiednika |
| `/spotkanie-klubowe-26/` | 2011-08-20 | Spotkanie Klubowe | brak strony odpowiednika |
| `/expressnur-sierpien/` | 2011-08-06 | ExpressNur – sierpień | brak strony odpowiednika |
| `/spotkanie-klubowe-25/` | 2011-07-28 | Spotkanie Klubowe | brak strony odpowiednika |
| `/badania-naukowe/` | 2011-06-26 | Badania naukowe | brak strony odpowiednika |
| `/bezpieczna-zabawa-nad-woda-final-ii-edycji/` | 2011-06-24 | Bezpieczna zabawa nad wodą – finał II edycji | brak strony odpowiednika |
| `/spotkanie-klubowe-24/` | 2011-06-18 | Spotkanie klubowe | brak strony odpowiednika |
| `/bznw-zajecia-nurkowe/` | 2011-06-08 | BZNW – zajęcia nurkowe :) | brak strony odpowiednika |
| `/spotkanie-klubowe-23/` | 2011-06-05 | Spotkanie Klubowe | brak strony odpowiednika |
| `/freediving-rozwiewamy-mity/` | 2011-06-01 | Freediving – rozwiewamy mity | brak strony odpowiednika |
| `/bezpieczna-zabawa-nad-woda-2/` | 2011-05-25 | Bezpieczna zabawa nad wodą | brak strony odpowiednika |
| `/expressnur-2011/` | 2011-05-24 | ExpressNur 2011 | brak strony odpowiednika |
| `/zacisze-2011/` | 2011-05-16 | Zacisze 2011 | brak strony odpowiednika |
| `/wyjazdy-i-szkolenia-nurkowe-w-2011/` | 2011-05-11 | Wyjazdy i szkolenia nurkowe w 2011. | brak strony odpowiednika |
| `/spotkanie-klubowe-22/` | 2011-05-06 | Spotkanie Klubowe | brak strony odpowiednika |
| `/wesolych-swiat-wielkanocnych-2/` | 2011-04-23 | Wesołych Świąt Wielkanocnych:) | brak strony odpowiednika |
| `/expressnur-wiosenny/` | 2011-04-12 | ExpressNur wiosenny :) | brak strony odpowiednika |
| `/spotkanie-klubowe-21/` | 2011-04-11 | Spotkanie Klubowe | brak strony odpowiednika |
| `/apnea-festiwal-relacja/` | 2011-03-25 | Apnea Festiwal – relacja :) | brak strony odpowiednika |
| `/spotkanie-klubowe-20/` | 2011-03-25 | Spotkanie Klubowe | brak strony odpowiednika |
| `/apnea-festiwal/` | 2011-03-15 | Apnea Festiwal | brak strony odpowiednika |
| `/expressnur-zimink/` | 2011-03-15 | ExpressNur Zimink | brak strony odpowiednika |
| `/spotkanie-klubowe-19/` | 2011-03-10 | Spotkanie Klubowe | brak strony odpowiednika |
| `/kurs-nurkowania-spotkanie-organizacyjne-2/` | 2011-02-26 | Kurs nurkowania – spotkanie organizacyjne | brak strony odpowiednika |
| `/zalicz-w-f-na-studiach/` | 2011-02-17 | Zalicz W-F na studiach | brak strony odpowiednika |
| `/spotkanie-klubowe-18/` | 2011-02-14 | Spotkanie Klubowe | brak strony odpowiednika |
| `/rozpoczecie-sezonu-nurkowego-2011/` | 2011-02-06 | Rozpoczęcie sezonu nurkowego 2011 | brak strony odpowiednika |
| `/spotkanie-klubowe-17/` | 2011-02-05 | Spotkanie Klubowe | brak strony odpowiednika |
| `/bezpieczna-zabawa-nad-woda-ii/` | 2011-01-28 | Bezpieczna zabawa nad wodą II | brak strony odpowiednika |
| `/druga-edycja-bznw-w-2011/` | 2011-01-24 | Druga edycja BZNW w 2011 | brak strony odpowiednika |
| `/spotkanie-klubowe-16/` | 2011-01-23 | Spotkanie Klubowe | brak strony odpowiednika |
| `/plan-wypraw-nurkowych-w-2011/` | 2011-01-15 | Plan wypraw nurkowych w 2011 | brak strony odpowiednika |
| `/spotkanie-klubowe-15/` | 2011-01-07 | Spotkanie klubowe | brak strony odpowiednika |
| `/wigilia/` | 2010-12-19 | Wigilia | brak strony odpowiednika |
| `/spotkanie-klubowe-14/` | 2010-11-30 | Spotkanie Klubowe | brak strony odpowiednika |
| `/ferie-zimowe-2011/` | 2010-11-25 | Ferie zimowe 2011 | brak strony odpowiednika |
| `/galeria-egipt-i-bznw/` | 2010-11-18 | Galeria – Egipt i BZNW | brak strony odpowiednika |
| `/spotkanie-klubowe-12/` | 2010-11-16 | Spotkanie Klubowe | brak strony odpowiednika |
| `/ciekawostki-nurkowe/` | 2010-11-10 | “Retronurki” we Wrocławiu | brak strony odpowiednika |
| `/spotkanie-klubowe-13/` | 2010-11-01 | Spotkanie Klubowe | brak strony odpowiednika |
| `/expressnur-zimnik/` | 2010-10-29 | ExpressNur – Zimnik | brak strony odpowiednika |
| `/bezpieczna-zabawa-nad-woda/` | 2010-10-25 | Bezpieczna zabawa nad wodą | brak strony odpowiednika |
| `/spotkanie-klubowe-11/` | 2010-10-12 | Spotkanie Klubowe | brak strony odpowiednika |
| `/zakonczenie-sezonu-2010/` | 2010-10-06 | Zakończenie sezonu 2010 | brak strony odpowiednika |
| `/spotkanie-klubowe-05-10-2010/` | 2010-09-30 | Spotkanie klubowe 05.10.2010 | brak strony odpowiednika |
| `/expressnur-26-09-2010/` | 2010-09-23 | ExpressNur 26.09.2010 | brak strony odpowiednika |
| `/kurs-nurkowania/` | 2010-09-18 | Kurs nurkowania | brak strony odpowiednika |
| `/spotkanie-klubowe-10/` | 2010-09-17 | Spotkanie Klubowe | brak strony odpowiednika |
| `/egipt-z-pirania/` | 2010-09-12 | Pirania w Egipcie | brak strony odpowiednika |
| `/562/` | 2010-09-08 | Kurs Nurkowania 2010 spotkanie organizacyjne. | brak strony odpowiednika |
| `/spotkanie-organizacyjne-bezpieczna-zabawa-nad-woda/` | 2010-09-03 | Spotkanie organizacyjne – “Bezpieczna zabawa nad wodą” | brak strony odpowiednika |
| `/basen-dla-klubowiczow/` | 2010-08-28 | Basen dla klubowiczow | brak strony odpowiednika |
| `/bezpieczna-woda/` | 2010-08-26 | Bezpieczna woda :) | brak strony odpowiednika |
| `/kurs-nurkowania-jesien-2010/` | 2010-08-20 | Kurs nurkowania – jesień 2010 | brak strony odpowiednika |
| `/expressnur-zimnik-i-sproitz/` | 2010-08-19 | ExpressNur Zimnik i Sproitz | brak strony odpowiednika |
| `/zajecia-dla-dzieci-i-mlodziezy/` | 2010-08-09 | Zajęcia dla dzieci i młodzieży | brak strony odpowiednika |
| `/intro-to-tech-jesien-2010/` | 2010-08-07 | INTRO to TECH – jesień 2010 | brak strony odpowiednika |
| `/expressnur-j-nieslysz-30-07-01-08-2010/` | 2010-07-28 | ExpressNur – j.Niesłysz 30.07-01.08.2010 | brak strony odpowiednika |
| `/expressnur-krakow-i-jaworzno-23-25-07-2010/` | 2010-07-16 | ExpressNur – Kraków i Jaworzno 23-25.07.2010 | brak strony odpowiednika |
| `/kp-nemo-35/` | 2010-07-14 | KP “Nemo” 35 | brak strony odpowiednika |
| `/nurkowanie-w-krzeczkowie-2010/` | 2010-07-07 | Nurkowanie w Krzeczkowie 2010 | brak strony odpowiednika |
| `/oboz-nurkowy-1-10-lipca-2010/` | 2010-06-23 | Obóz nurkowy 1-10 lipca 2010 | brak strony odpowiednika |
| `/spotkanie-klubowe-9/` | 2010-06-14 | Spotkanie Klubowe | brak strony odpowiednika |
| `/naui-nitrox-diver/` | 2010-06-07 | NAUI NITROX Diver | brak strony odpowiednika |
| `/expressnur-06-06-2010/` | 2010-06-02 | ExpressNur 06.06.2010 | brak strony odpowiednika |
| `/instruktorzy-naui/` | 2010-05-30 | Instruktorzy NAUI | brak strony odpowiednika |
| `/spotkanie-klubowe-8/` | 2010-05-21 | Spotkanie Klubowe | brak strony odpowiednika |
| `/wakacje-nurkowe-nad-jeziorem-nieslysz/` | 2010-05-13 | Wakacje nurkowe nad jeziorem Niesłysz | brak strony odpowiednika |
| `/spotkanie-klubowe-7/` | 2010-05-07 | Spotkanie Klubowe | brak strony odpowiednika |
| `/lagow-rozpoczecie-sezonu-nurkowego-2010/` | 2010-05-06 | Łagów – rozpoczęcie sezonu nurkowego 2010 | brak strony odpowiednika |
| `/spotkajmy-sie-nad-odra/` | 2010-04-22 | Spotkajmy się nad Odrą | brak strony odpowiednika |
| `/spotkanie-klubowe-6/` | 2010-04-21 | Spotkanie Klubowe | brak strony odpowiednika |
| `/spotkanie-klubowe-5/` | 2010-04-10 | Spotkanie klubowe | brak strony odpowiednika |
| `/wesolych-swiat-wielkanocnych/` | 2010-04-02 | Wesołych Świąt Wielkanocnych | brak strony odpowiednika |
| `/szkolenie-nurkowe-2010/` | 2010-03-31 | Szkolenie nurkowe 2010 | brak strony odpowiednika |
| `/spotkanie-klubowe-4/` | 2010-03-15 | Spotkanie Klubowe | brak strony odpowiednika |
| `/vii-skorpenowy-splyw-lyna/` | 2010-03-09 | VII Skorpenowy Spływ Łyną | brak strony odpowiednika |
| `/spotkanie-klubowe-3/` | 2010-03-03 | Spotkanie Klubowe | brak strony odpowiednika |
| `/facebook/` | 2010-02-24 | Facebook | brak strony odpowiednika |
| `/spotkanie-klubowe-22-02-2010/` | 2010-02-18 | Spotkanie Klubowe 22.02.2010 | brak strony odpowiednika |
| `/nasza-klasa/` | 2010-02-10 | Nasza Klasa | brak strony odpowiednika |
| `/kurs-nurkowania-spotkanie-organizacyjne/` | 2010-02-07 | Kurs nurkowania – spotkanie organizacyjne | brak strony odpowiednika |
| `/spotkanie-klubowe-2/` | 2010-02-03 | Spotkanie klubowe | brak strony odpowiednika |
| `/1-dla-arki-z-wroclawia-fundacja/` | 2010-01-30 | 1 % dla ARKI z Wrocławia (fundacja) | brak strony odpowiednika |
| `/rozpoczecie-sezonu-2010-w-lagowie/` | 2010-01-27 | Rozpoczęcie sezonu 2010 w Łagowie | brak strony odpowiednika |
| `/spotkanie-klubowe/` | 2010-01-20 | Spotkanie Klubowe :) | brak strony odpowiednika |
| `/pirania-wita-w-nowym-roku-2010/` | 2010-01-10 | Pirania wita w Nowym Roku 2010! | brak strony odpowiednika |
| `/wigilia-z-pirania/` | 2009-12-18 | Wigilia z Piranią | brak strony odpowiednika |
| `/40-lat-minelo-jak-jeden-rejs/` | 2009-09-14 | 40 lat minęło jak jeden rejs ;) | brak strony odpowiednika |
| `/rejs-juz-tuz-tuz/` | 2009-08-24 | Rejs już tuż tuż :) | brak strony odpowiednika |
| `/40-ste-urodziny-piranii-piknik/` | 2009-07-22 | 40-ste urodziny Piranii – piknik | brak strony odpowiednika |
| `/snookerrkling8-spotkanie-klubowe/` | 2009-05-29 | Snoo(ker)(rkling)(8) – spotkanie klubowe | brak strony odpowiednika |
| `/spotkanie-z-boguslawem-ogrodnikiem/` | 2009-04-11 | Spotkanie z Bogusławem Ogrodnikiem | brak strony odpowiednika |
| `/prelekcja-dr-jaroslawa-krzyzaka-pt-medyczne-aspekty-bezpiecznego-nurkowania/` | 2009-03-12 | Prelekcja dr. Jarosława Krzyżaka pt. Medyczne aspekty bezpiecznego nurkowania | brak strony odpowiednika |
| `/craspedacusta-sowerbii-wanted/` | 2009-02-01 | Craspedacusta Sowerbii Wanted | brak strony odpowiednika |
| `/spotkanie-orgaznizacyjne-kurs-nurkowania/` | 2009-01-15 | Spotkanie orgaznizacyjne – kurs nurkowania | brak strony odpowiednika |
| `/kurs-nurkowania-p1-zapisy-rozpoczete/` | 2008-12-10 | Kurs nurkowania P1 – zapisy rozpoczęte | brak strony odpowiednika |
| `/andrzej-party-czyli-andrzejki/` | 2008-11-21 | Andrzej Party, czyli Andrzejki | brak strony odpowiednika |
| `/wroclaw-przyjazny-ngo/` | 2008-11-13 | Wrocław Przyjazny NGO | brak strony odpowiednika |
| `/147/` | 2008-11-07 | Wyjazd – kamieniołom Horka | brak strony odpowiednika |
| `/lagow-za-nami-czyli-zakonczenie-sezonu/` | 2008-10-24 | Łagów za nami, czyli zakończenie sezonu | brak strony odpowiednika |
| `/abc-czyli-maska-pletwy-i-shisha-czyli-wodna-fajka/` | 2008-10-03 | ABC, czyli maska, płetwy i shisha – czyli wodna fajka ;) | brak strony odpowiednika |
| `/basen-uwaga-zmiana-godziny/` | 2008-09-24 | Basen – UWAGA – zmiana godziny ! | brak strony odpowiednika |
| `/zakonczenie-sezonu/` | 2008-09-05 | Zakończenie sezonu | brak strony odpowiednika |
| `/dofinansowanie-dla-klubu/` | 2008-09-04 | Dofinansowanie dla Klubu | brak strony odpowiednika |
| `/rozpoczynamy-zajecia-basenowe/` | 2008-09-01 | Rozpoczynamy zajęcia basenowe | brak strony odpowiednika |
| `/wyklad-o-rekinach/` | 2008-06-01 | Wykład o REKINACH | brak strony odpowiednika |
Pełna lista pochodzi z `https://klubpirania.pl/wp-sitemap-posts-post-1.xml` (273 adresy, stan 26.10.2026).
