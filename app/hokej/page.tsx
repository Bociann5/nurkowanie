import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { Note } from "@/components/Note";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { ScheduleList } from "@/components/ScheduleList";
import { Section } from "@/components/Section";
import {
  hockey,
  hockeyInitials,
  hockeyRoles,
  hockeySchedule,
  thursdayOverlap,
} from "@/content/hockey";
import { images } from "@/content/media";
import { pages } from "@/content/site";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor(pages.hokej);

export default function HockeyPage() {
  return (
    <>
      <PageHero
        kicker="Sekcja od lutego 2012"
        title="Hokej podwodny"
        lede={hockey.lead}
        image={images.hockeyWater}
        caption={hockey.photoCredit}
      />
      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p>{hockey.since}</p>
            <p className="mt-4 text-muted">{hockey.seasonQuote}</p>
            <p className="mt-4">{hockey.who}</p>
            <p className="mt-4">{hockey.schoolSeason}</p>
            <p className="mt-4">{hockey.aims}</p>
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-3xl">Zasady ze strony klubu</h2>
            <ul className="mt-4 border-b border-line">
              {hockey.rules.map((rule) => (
                <li key={rule} className="border-t border-line py-3">
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section id="grafik" tone="foam">
        <Container className="grid gap-8 lg:grid-cols-12">
          <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)] lg:col-span-4">Grafik ze strony sekcji</h2>
          <div className="lg:col-span-8">
            <ScheduleList items={hockeySchedule} />
            <p className="mt-6">{thursdayOverlap}</p>
          </div>
        </Container>
      </Section>

      <Section id="wydarzenia">
        <Container className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)]">Co strona jeszcze podaje</h2>
            <p className="mt-6">{hockey.grant}</p>
            <p className="mt-3">
              <ExternalLink href={hockey.grantHref}>Program na gov.pl</ExternalLink>
            </p>
            <p className="mt-6">
              {hockey.cup}{" "}
              <ExternalLink href={hockey.cupHref}>piraniacup.pl</ExternalLink>
            </p>
            <div className="mt-6">
              <Note>
                <p>{hockey.november}</p>
              </Note>
            </div>
            <p className="mt-4">{hockey.otherDates}</p>
          </div>
          <figure className="max-w-52 lg:col-span-4">
            <Photo image={images.logoHockey} sizes="208px" />
          </figure>
        </Container>
      </Section>

      <Section id="sklad" tone="deep">
        <Container>
          <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)]">Skład opisany inicjałami</h2>
          <ul className="mt-8 border-b border-line-dark">
            {hockeyRoles.map((person) => (
              <li
                key={person.name}
                className="accent-row grid gap-1 border-t border-line-dark py-3 sm:grid-cols-[14rem_1fr]"
              >
                <span className="font-display text-xl font-semibold">{person.name}</span>
                <span className="text-mist">{person.role}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-mist">{hockeyInitials}</p>
          <figure className="mt-10 max-w-4xl">
            <Photo image={images.hockeyTeam} sizes="(min-width: 1024px) 70vw, 100vw" />
            <figcaption className="mt-3 text-sm text-mist">
              Zdjęcie grupowe na hali. {hockey.photoCredit}
            </figcaption>
          </figure>
        </Container>
      </Section>

      <Section id="kontakt-sekcji">
        <Container className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)]">Kontakt sekcji</h2>
            <ul className="mt-6 border-b border-line">
              {hockey.contacts.map((item) => (
                <li key={item.label} className="accent-row grid gap-1 border-t border-line py-4 sm:grid-cols-[8rem_1fr]">
                  <span className="font-display font-semibold tracking-wide text-deep">{item.label}</span>
                  <a href={item.href} className="border-b border-current">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              <ExternalLink href={hockey.instagram}>Instagram sekcji</ExternalLink>
              <ExternalLink href={hockey.facebook}>Facebook sekcji</ExternalLink>
            </p>
          </div>
          <figure className="lg:col-span-6">
            <Photo image={images.hockeyGear} sizes="(min-width: 1024px) 40vw, 100vw" />
            <figcaption className="mt-3 text-sm text-muted">
              Sprzęt i worek klubu przy basenie.
            </figcaption>
          </figure>
        </Container>
      </Section>
    </>
  );
}
