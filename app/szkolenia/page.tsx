import { Container } from "@/components/Container";
import { FactList } from "@/components/FactList";
import { Note } from "@/components/Note";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { TextLink } from "@/components/TextLink";
import {
  audiences,
  basicPriceNote,
  courses,
  healthRequirements,
  namedOnly,
  scheduleNote,
  specializations,
  studentsNote,
  swimRequirements,
  trainingBrands,
} from "@/content/courses";
import { club, pages, routes } from "@/content/site";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor(pages.szkolenia);

export default function SzkoleniaPage() {
  return (
    <>
      <PageHero
        kicker="Szkolenia"
        title="Od pierwszego oddechu pod wodą"
        lede={trainingBrands.hub}
      />
      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p>{trainingBrands.older}</p>
            <p className="mt-4">
              {trainingBrands.english} {trainingBrands.englishFollow}{" "}
              <a href={club.emailHref} className="border-b border-current">
                {club.email}
              </a>
              , marcin.reif@klubpirania.pl, {club.phoneDisplay}.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <TextLink href={routes.intro}>Intro nurkowe — bez certyfikatu</TextLink>
          </div>
        </Container>
      </Section>

      <Section id="dla-kogo" tone="foam">
        <Container>
          <h2 className="max-w-[12ch] text-[clamp(2.8rem,5vw,4.6rem)]">Dla kogo</h2>
          <ol className="mt-8 border-b border-line">
            {audiences.map((group, index) => (
              <li key={group.id} id={group.id} className="scroll-mt-28 border-t border-line">
                <div className="accent-row grid gap-3 py-7 md:grid-cols-[4.5rem_14rem_1fr] md:gap-6 md:py-8">
                  <span className="font-display text-4xl font-bold text-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-4xl">{group.title}</h3>
                  <div>
                    <p className="text-muted">{group.lead}</p>
                    <p className="mt-3">{group.offer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="oplaty">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)] lg:col-span-5">Ceny, które da się powtórzyć</h2>
            <div className="lg:col-span-7">
              <Note title="Stopień podstawowy">
                <p>
                  {basicPriceNote} {club.confirmByClub}
                </p>
              </Note>
              <p className="mt-6 max-w-3xl text-muted">{club.offerClause}</p>
            </div>
          </div>
          <div className="mt-12 border-b border-line">
            {courses.map((course) => (
              <article key={course.id} id={course.id} className="scroll-mt-28 border-t border-line">
                <div className="accent-row py-8">
                  <h3 className="text-[clamp(2rem,3vw,3.2rem)]">{course.title}</h3>
                  <p className="mt-4 max-w-3xl text-lg">{course.lede}</p>
                </div>
                <FactList facts={course.facts} />
                {"choiceDives" in course ? (
                  <div className="mt-6 max-w-3xl pb-8">
                    <h4 className="font-display text-2xl font-bold">Trzy nurkowania do wyboru</h4>
                    <ul className="mt-3 border-b border-line">
                      {course.choiceDives.map((dive) => (
                        <li key={dive} className="border-t border-line py-2">
                          {dive}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl">Wymagania pływackie stopnia podstawowego</h3>
              <ul className="mt-4 border-b border-line">
                {swimRequirements.map((item) => (
                  <li key={item} className="border-t border-line py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-3xl">Zdrowie</h3>
              <ul className="mt-4 border-b border-line">
                {healthRequirements.map((item) => (
                  <li key={item} className="border-t border-line py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="specjalizacje" tone="foam">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)]">Specjalizacje</h2>
            <p className="mt-4">Nazwy bez osobnych programów. System na stronie: NAUI / CMAS.</p>
          </div>
          <div className="lg:col-span-8">
            <ul className="border-b border-line">
              {specializations.names.map((name) => (
                <li key={name} className="border-t border-line py-3 font-display text-2xl font-semibold">
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-6">{specializations.price}</p>
            <p className="mt-4">{specializations.rhythm}</p>
            <p className="mt-4">{specializations.includes}</p>
          </div>
        </Container>
      </Section>

      <Section id="liderzy">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)]">Tylko nazwy</h2>
            <p className="mt-4 max-w-md">
              Te szkolenia strona wymienia. Osobnego programu tu nie powtarzamy, bo go nie
              opublikowano. Szczegóły potwierdza klub.
            </p>
          </div>
          <ul className="border-b border-line lg:col-span-7">
            {namedOnly.map((name) => (
              <li key={name} className="border-t border-line py-3 font-display text-2xl font-semibold">
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="terminy" tone="navy">
        <Container className="grid gap-8 lg:grid-cols-12">
          <h2 className="text-[clamp(2.8rem,5vw,4.6rem)] lg:col-span-4">Terminy</h2>
          <div className="lg:col-span-8">
            <p className="text-lg text-mist">{scheduleNote}</p>
            <p className="mt-6 text-mist">{studentsNote}</p>
            <p className="mt-8 text-paper">
              Zapisy:{" "}
              <a href={club.emailHref} className="border-b border-current">
                {club.email}
              </a>
              , marcin.reif@klubpirania.pl,{" "}
              <a href={club.phoneHref} className="border-b border-current">
                {club.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
