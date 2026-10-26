import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { Note } from "@/components/Note";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { ScheduleList } from "@/components/ScheduleList";
import { Section } from "@/components/Section";
import {
  aboutStory,
  diveMasters,
  fees,
  instructors,
  jolantaBio,
  marcinBio,
  poolWeek,
  pools,
  research,
  timeline,
} from "@/content/about";
import { thursdayOverlap } from "@/content/hockey";
import { images } from "@/content/media";
import { club, pages } from "@/content/site";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor(pages.oNas);

export default function AboutPage() {
  return (
    <>
      <PageHero kicker={club.shortName} title="O nas" lede={club.tagline} />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="max-w-3xl space-y-4 lg:col-span-7">
            {aboutStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ol className="border-t border-line lg:col-span-5">
            {timeline.map((item) => (
              <li key={item.year} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                <p className="font-display text-2xl leading-none font-bold text-deep">{item.year}</p>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="skladki" tone="foam">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)]">Składki</h2>
            <p className="mt-4 font-semibold">{fees.heading}</p>
          </div>
          <div className="lg:col-span-8">
            <ul className="border-b border-line">
              {fees.items.map((item) => (
                <li key={item} className="border-t border-line py-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">{fees.who}</p>
            <div className="mt-6">
              <Note>
                <p>{fees.note}</p>
              </Note>
            </div>
            <p className="mt-6">
              <ExternalLink href={club.declarationPdf}>Deklaracja członkowska PDF</ExternalLink>
              . {fees.declaration}
            </p>
          </div>
        </Container>
      </Section>

      <Section id="instruktorzy">
        <Container>
          <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)]">Instruktorzy</h2>
          <p className="mt-4 max-w-3xl text-muted">
            Przy nazwisku jest tylko skrót federacji ze strony klubu. Biogram mają dwie osoby.
          </p>
          <ul className="mt-8 border-b border-line">
            {instructors.map((person) => (
              <li key={person.name} className="accent-row grid gap-1 border-t border-line py-4 sm:grid-cols-[16rem_1fr]">
                <span className="font-display text-xl font-semibold">{person.name}</span>
                <span>{person.detail}</span>
              </li>
            ))}
          </ul>

          <article id="marcin-reif" className="mt-16 grid scroll-mt-28 items-start gap-8 lg:grid-cols-12">
            <figure className="lg:col-span-4">
              <Photo image={images.marcin} frame="portrait" sizes="(min-width: 1024px) 28vw, 100vw" />
              <figcaption className="mt-3 text-sm text-muted">{images.marcin.alt}</figcaption>
            </figure>
            <div className="lg:col-span-8">
              <h3 className="text-[clamp(2rem,3vw,3.2rem)]">Marcin Reif</h3>
              <div className="mt-4 max-w-3xl space-y-4">
                {marcinBio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>

          <article id="jolanta-franczak" className="mt-16 grid scroll-mt-28 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:order-1">
              <h3 className="text-[clamp(2rem,3vw,3.2rem)]">Jolanta Franczak</h3>
              <div className="mt-4 max-w-3xl space-y-4">
                {jolantaBio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <figure className="lg:order-2 lg:col-span-5">
              <Photo image={images.jolanta} sizes="(min-width: 1024px) 36vw, 100vw" />
            </figure>
          </article>

          <h3 className="mt-16 text-3xl">DiveMasterzy</h3>
          <ul className="mt-4 border-b border-line">
            {diveMasters.map((person) => (
              <li key={person.name} className="accent-row grid gap-1 border-t border-line py-4 sm:grid-cols-[16rem_1fr]">
                <span className="font-display text-xl font-semibold">{person.name}</span>
                <span>{person.detail}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="baseny" tone="foam">
        <Container>
          <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)]">Baseny</h2>
          <ul className="mt-8 border-b border-line">
            {pools.map((pool) => (
              <li key={pool.name} className="accent-row grid gap-1 border-t border-line py-5 md:grid-cols-[16rem_1fr] md:items-baseline">
                <p className="font-display text-3xl leading-none font-bold">{pool.name}</p>
                <p className="text-muted">{pool.address}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl">{club.seat}</p>
          <h3 className="mt-10 text-3xl">Tydzień ze stron basenów i „O nas”</h3>
          <div className="mt-6 max-w-3xl">
            <ScheduleList items={poolWeek} />
          </div>
          <p className="mt-6 max-w-3xl">{thursdayOverlap}</p>
        </Container>
      </Section>

      <Section id="badania">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)]">Badania</h2>
            <p className="mt-4">
              Kontakt na stronie badań: {research.contact},{" "}
              <a href={`mailto:${research.email}`} className="border-b border-current">
                {research.email}
              </a>
              .
            </p>
          </div>
          <div className="space-y-8 lg:col-span-8">
            {research.items.map((item) => (
              <article key={item.title} className="border-t border-line pt-5">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-2">{item.text}</p>
                {"href" in item && item.href ? (
                  <p className="mt-2">
                    <ExternalLink href={item.href}>{item.hrefLabel}</ExternalLink>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
