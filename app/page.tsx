import Link from "next/link";
import { Note } from "@/components/Note";
import { Photo } from "@/components/Photo";
import { TextLink } from "@/components/TextLink";
import { images } from "@/content/media";
import { club, pages, routes } from "@/content/site";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor(pages.home);

const paths = [
  {
    href: `${routes.szkolenia}#poczatkujacy` as const,
    title: "Początkujący",
    lede: "Intro bez certyfikatu albo stopień podstawowy NAUI lub P1 CMAS.",
  },
  {
    href: routes.dlaDzieci,
    title: "Dzieci",
    lede: "BZNW dla dzieci, które umieją pływać. Wiek grupy potwierdza klub.",
  },
  {
    href: `${routes.szkolenia}#zaawansowani` as const,
    title: "Z uprawnieniami",
    lede: "Advanced NAUI, P2 CMAS i nazwane specjalizacje.",
  },
] as const;

const courses = [
  {
    href: routes.intro,
    title: "Intro",
    detail: "Próbne nurkowanie bez certyfikatu. Cenę czwartku potwierdza klub.",
  },
  {
    href: `${routes.szkolenia}#naui-open-water` as const,
    title: "NAUI Open Water",
    detail: "Od 15 lat, junior 10–14. Partnerstwo do 18 m.",
  },
  {
    href: `${routes.szkolenia}#cmas-p1` as const,
    title: "P1 KDP/CMAS",
    detail: "Od 14 lat. Partnerstwo do 20 m.",
  },
  {
    href: `${routes.szkolenia}#naui-advanced` as const,
    title: "NAUI Advanced",
    detail: "1850 zł, członkowie Piranii 1690 zł, przy dwóch uczestnikach.",
  },
  {
    href: `${routes.szkolenia}#cmas-p2` as const,
    title: "P2 KDP/CMAS",
    detail: "Do 40 m. 2650 zł, członkowie 2250 zł, przy minimum dwóch uczestników.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="bg-paper">
        <div className="grid lg:min-h-[calc(100svh-4.75rem)] lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <div className="hero-copy order-2 flex flex-col justify-center py-12 lg:order-1 lg:py-16">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-deep">
              Wrocław · od {club.founded}
            </p>
            <h1 className="mt-3 max-w-[14em] text-[clamp(3rem,4.5vw,4.35rem)] [text-wrap:wrap]">
              {club.tagline}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {club.legalName}. Stowarzyszenie i jeden z najstarszych klubów nurkowych w Polsce.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <TextLink href={routes.szkolenia} variant="solid">
                Szkolenia
              </TextLink>
              <TextLink href={routes.intro} variant="text">
                Intro nurkowe
              </TextLink>
            </div>
          </div>
          <figure className="relative order-1 min-h-[68vw] overflow-hidden sm:min-h-[22rem] lg:order-2 lg:min-h-full">
            <Photo
              image={images.hero}
              frame="fill"
              treatment="drift"
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-[center_32%]"
            />
            <figcaption className="absolute bottom-0 left-0 max-w-xs bg-navy px-4 py-2.5 text-sm leading-snug text-paper">
              Zajęcia w basenie, zdjęcie ze strony klubu.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="dla-kogo" className="scroll-mt-28 bg-foam">
        <div className="inset-x pt-16 md:pt-24">
          <h2 className="max-w-[8em] text-[clamp(3.2rem,6vw,5.4rem)]">Trzy drogi do wody</h2>
        </div>
        <ol className="mt-10 border-b border-line">
          {paths.map((path, index) => (
            <li key={path.href} className="accent-row border-t border-line">
              <Link href={path.href} className="inset-x grid grid-cols-[3.5rem_1fr] items-baseline gap-4 py-7 sm:grid-cols-[5rem_1fr_auto] sm:gap-6 sm:py-8">
                <span className="font-display text-4xl font-bold text-deep sm:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-[clamp(2rem,4vw,3.4rem)] leading-none font-bold">
                    {path.title}
                  </span>
                  <span className="mt-3 block max-w-xl text-muted">{path.lede}</span>
                </span>
                <span aria-hidden="true" className="hidden font-display text-3xl text-deep sm:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section id="szkolenia" className="scroll-mt-28 bg-paper">
        <div className="inset-x grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-deep">Oferta</p>
            <h2 className="mt-3 text-[clamp(2.8rem,5vw,4.4rem)]">Szkolenia</h2>
            <p className="mt-4 max-w-sm text-muted">
              Na hubie kursów: NAUI, KDP/CMAS, PADI oraz SSI. Starszy tekst klubu wymienia CMAS i
              NAUI.
            </p>
            <div className="mt-8">
              <TextLink href={routes.szkolenia}>Cała oferta</TextLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="hidden border-b border-line pb-2 font-display text-sm font-semibold uppercase tracking-[0.16em] text-deep md:grid md:grid-cols-[14rem_1fr]">
              <span>Kurs</span>
              <span>Ze strony klubu</span>
            </div>
            <ul className="border-b border-line">
              {courses.map((course) => (
                <li key={course.href} className="accent-row border-t border-line">
                  <Link
                    href={course.href}
                    className="grid gap-2 py-5 md:grid-cols-[14rem_1fr] md:items-baseline md:gap-8 md:py-6"
                  >
                    <span className="font-display text-3xl leading-none font-bold">{course.title}</span>
                    <span className="text-muted">{course.detail}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="klub" className="scroll-mt-28 bg-navy text-paper">
        <div className="grid lg:min-h-[34rem] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="inset-x flex flex-col justify-center py-16 lg:py-24 lg:pr-14">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-turquoise">
              Od {club.founded} roku
            </p>
            <h2 className="mt-3 max-w-[10em] text-[clamp(3rem,5.4vw,4.8rem)]">Klub, nie sam kurs</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              CMAS, NAUI i Komisja Działalności Podwodnej ZG PTTK. Od 2010 roku zajęcia dla dzieci,
              od lutego 2012 sekcja hokeja podwodnego.
            </p>
            <div className="mt-8">
              <TextLink href={routes.oNas} variant="onDark">
                Historia i ludzie
              </TextLink>
            </div>
          </div>
          <figure className="relative min-h-72 overflow-hidden lg:min-h-full">
            <Photo image={images.intro} frame="fill" sizes="(min-width: 1024px) 55vw, 100vw" />
          </figure>
        </div>
      </section>

      <section id="dzieci" className="scroll-mt-28 bg-paper">
        <div className="grid items-stretch lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <figure className="relative min-h-80 overflow-hidden lg:min-h-[36rem]">
            <Photo
              image={images.kidsSleza}
              frame="fill"
              treatment="settle"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-[center_30%]"
            />
            <figcaption className="absolute bottom-0 left-0 bg-navy px-4 py-2.5 text-sm text-paper">
              Nurkowanie dzieci, basen.
            </figcaption>
          </figure>
          <div className="inset-x flex flex-col justify-center py-16 lg:py-24">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-deep">
              Od 2010
            </p>
            <h2 className="mt-3 text-[clamp(3.2rem,6vw,5.6rem)]">Dla dzieci</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Bezpieczna Zabawa Nad Wodą: misja podstawy 5+5 i misje specjalne 3+7. Za 10 zajęć
              strona w 2026 roku podaje 1050–1220 zł, zależnie od wariantu i basenu.
            </p>
            <div className="mt-8">
              <TextLink href={routes.dlaDzieci}>Zajęcia BZNW</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section id="hokej" className="scroll-mt-28 bg-paper">
        <figure className="relative h-[52vw] max-h-[30rem] min-h-[14rem] overflow-hidden">
          <Photo
            image={images.hockeyWater}
            frame="fill"
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
        </figure>
        <div className="relative z-10 -mt-16 sm:-mt-24">
          <div className="inset-x bg-deep py-10 text-paper lg:max-w-3xl lg:py-14">
            <h2 className="text-[clamp(3rem,6vw,5.2rem)]">Hokej pod wodą</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              Krążek, kij i wstrzymany oddech. Grafik ze strony klubu: AWF, Ślęza, ZS nr 14 i
              Środa Śląska.
            </p>
            <p className="mt-4 max-w-xl text-mist">
              Na stronie klubu jest też data 7 listopada 2026, Olsztyn — jako informacja, nie jako
              zapis.
            </p>
            <div className="mt-8">
              <TextLink href={routes.hokej} variant="inverse">
                Sekcja hokeja
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      <section id="wyprawy" className="scroll-mt-28 grid bg-paper lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
        <div className="flex flex-col justify-end bg-deep px-0 text-paper">
          <div className="inset-x py-14 lg:py-20">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-turquoise">
              Archiwum
            </p>
            <h2 className="mt-3 text-[clamp(3.2rem,6vw,5.6rem)]">Wyprawy</h2>
          </div>
        </div>
        <div className="inset-x py-14 lg:py-20">
          <Note title="Brak potwierdzonego terminu po 26 października 2026">
            <p>
              Plan opublikowany na 2026 — Filipiny, Budzisławskie, Piłakno — ma daty, które już
              minęły. Nowy wyjazd potwierdza klub.
            </p>
          </Note>
          <div className="mt-8">
            <TextLink href={routes.wyprawy}>Archiwum wyjazdów</TextLink>
          </div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-28 border-t border-line bg-foam">
        <div className="inset-x grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-deep">
              Kontakt
            </h2>
            <p className="mt-4 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-none font-bold">
              <a href={club.phoneHref} className="border-b border-current">
                {club.phoneDisplay}
              </a>
            </p>
            <p className="mt-4 font-display text-2xl font-semibold tracking-wide">
              <a href={club.emailHref} className="border-b border-current">
                {club.email}
              </a>
            </p>
            <p className="mt-4 text-muted">
              {club.addressLines[0]}
              <br />
              {club.addressLines[1]}
            </p>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <TextLink href={routes.kontakt} variant="solid">
              Osoby i dane klubu
            </TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
