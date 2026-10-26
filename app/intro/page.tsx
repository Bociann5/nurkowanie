import { Container } from "@/components/Container";
import { Note } from "@/components/Note";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { TextLink } from "@/components/TextLink";
import { intro } from "@/content/intro";
import { images } from "@/content/media";
import { club, pages, routes } from "@/content/site";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor(pages.intro);

export default function IntroPage() {
  return (
    <>
      <PageHero
        kicker="Intro"
        title="Nurkowanie na próbę"
        lede={intro.definition}
        image={images.intro}
        caption="Sprzęt na brzegu basenu. Na stronie klubu podpis: nurkowanie intro."
      />
      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg">{intro.during}</p>
            <p className="mt-4">{intro.credit}</p>
            <p className="mt-4">{intro.program}</p>
            <p className="mt-4">{intro.result}</p>
            <p className="mt-4">{intro.who}</p>
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-3xl">Gdzie</h2>
            <ul className="mt-4 border-b border-line">
              {intro.places.map((place) => (
                <li key={place} className="border-t border-line py-3">
                  {place}
                </li>
              ))}
            </ul>
            <p className="mt-4">{intro.reserve}</p>
            <h2 className="mt-10 text-3xl">Co jest w zajęciach</h2>
            <p className="mt-4">{intro.includes}</p>
            <p className="mt-4">{intro.excludes}</p>
          </div>
        </Container>
      </Section>

      <Section id="godziny" tone="foam">
        <Container className="grid gap-8 lg:grid-cols-12">
          <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)] lg:col-span-4">Godziny czwartku</h2>
          <div className="lg:col-span-8">
            <ol className="border-b border-line">
              {intro.hours.map((line, index) => (
                <li key={line} className="accent-row grid gap-3 border-t border-line py-4 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
                  <span className="font-display text-3xl font-bold text-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6">{intro.hoursNote}</p>
          </div>
        </Container>
      </Section>

      <Section id="cena">
        <Container className="grid gap-8 lg:grid-cols-12">
          <h2 className="text-[clamp(2.8rem,5vw,4.6rem)] lg:col-span-4">Cena</h2>
          <div className="grid gap-6 lg:col-span-8">
            <Note>
              <p>
                {intro.priceNote} {club.confirmByClub}
              </p>
            </Note>
            <p className="max-w-3xl">{intro.individual}</p>
            <p className="max-w-3xl">{intro.refresh}</p>
            <p className="max-w-3xl text-muted">{club.offerClause}</p>
            <p className="max-w-3xl">
              Zapisy:{" "}
              <a href={`mailto:${intro.signupEmail}`} className="border-b border-current">
                {intro.signupEmail}
              </a>
              ,{" "}
              <a href={club.phoneHref} className="border-b border-current">
                {club.phoneDisplay}
              </a>
              .
            </p>
            <p>
              <TextLink href={routes.szkolenia}>Pełne szkolenia</TextLink>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
