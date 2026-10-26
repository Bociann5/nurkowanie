# Klub Pirania Wrocław

Podgląd nowej strony Akademickiego Klubu Płetwonurków „Pirania”: lokalnie i jako statyczny eksport na GitHub Pages. Nie zastępuje WordPressa na klubpirania.pl i nie zmienia domeny ani DNS.

Treść pochodzi z audytu strony klubu z 26 października 2026 (`docs/content-audit.md`, `docs/content-inventory.md`). Tam, gdzie stare podstrony podają różne ceny albo wiek, strona nie wybiera jednej wersji — odsyła do telefonu i maila klubu.

## Uruchomienie

Wymagane: Node.js i pnpm.

```bash
pnpm install
pnpm dev
```

Podgląd: [http://localhost:3000](http://localhost:3000).

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm exec playwright test
```

GitHub Pages nie uruchamia serwera Next.js. Workflow `.github/workflows/pages.yml` buduje statyczny eksport i ustawia `BASE_PATH` na nazwę repozytorium. Lokalne `pnpm dev` i `pnpm build` bez tej zmiennej zostają w korzeniu strony.

```bash
BASE_PATH=/nurkowanie pnpm build
```

## Gdzie edytować treść

Komponenty nie trzymają faktów klubu. Teksty są w `content/`:

| Plik | Co w nim jest |
| --- | --- |
| `content/site.ts` | Nazwa, hasło, kontakt, menu, metadane stron |
| `content/courses.ts` | Szkolenia, specjalizacje, terminy |
| `content/intro.ts` | Intro nurkowe |
| `content/kids.ts` | BZNW, misje, cennik 2026 |
| `content/hockey.ts` | Hokej, grafik, skład inicjałami |
| `content/trips.ts` | Archiwum wyjazdów |
| `content/about.ts` | Historia, składki 2024/25, instruktorzy, baseny, badania |
| `content/media.ts` | Ścieżki i opisy zdjęć |

Zdjęcia użyte na stronie leżą w `public/zdjecia/`. Źródłowe pliki są w `research-assets/`. Nowe zdjęcie: skopiować do `public/zdjecia/` i dopisać w `content/media.ts`, potem użyć komponentu `Photo`.

Mapa starych adresów: `docs/redirect-map.md`. Przekierowania, które ta aplikacja naprawdę robi, są w `lib/redirects.ts`. W eksporcie na Pages te same konkretne adresy są stronami HTML w `out/` (`scripts/write-static-redirects.mjs`). Archiwum bloga nie jest przekierowane na `/`.

## Adresy

- `/` strona główna
- `/szkolenia`
- `/intro` — kanoniczne intro; długi adres `/intro-nurkowe-nurkowanie-na-probe` przekierowuje tutaj
- `/dla-dzieci`
- `/hokej`
- `/wyprawy`
- `/o-nas`
- `/kontakt`
