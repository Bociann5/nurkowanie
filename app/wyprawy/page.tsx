import { ColorPanel } from "@/components/ColorPanel";
import { Container } from "@/components/Container";
import { Note } from "@/components/Note";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { pastPlan2026, pastTrips, trips } from "@/content/trips";
import { pages } from "@/content/site";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor(pages.wyprawy);

export default function TripsPage() {
  return (
    <>
      <PageHero kicker="Wyprawy" title="Gdzie klub już był" lede={trips.lead} />
      <Section>
        <Container className="grid items-stretch gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Note title="Po 26 października 2026">
              <p>{trips.upcoming}</p>
            </Note>
            <p className="mt-6">{trips.express}</p>
            <h2 className="mt-10 text-3xl">Plan 2026 — daty minęły</h2>
            <ul className="mt-4 border-b border-line">
              {pastPlan2026.map((item) => (
                <li key={item} className="border-t border-line py-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">{trips.contactNote}</p>
          </div>
          <ColorPanel tone="deep" mark="Archiwum" className="min-h-80 lg:col-span-5" />
        </Container>
      </Section>

      <Section id="archiwum" tone="foam">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)]">Wcześniejsze wyjazdy</h2>
            <p className="mt-4 text-muted">Archiwum. Starych cen nie podajemy jako oferty.</p>
          </div>
          <ul className="border-b border-line lg:col-span-8">
            {pastTrips.map((item) => (
              <li key={item} className="border-t border-line py-3 font-display text-2xl font-semibold leading-tight">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="kontakt-wyjazdu">
        <Container className="grid gap-8 lg:grid-cols-12">
          <h2 className="text-[clamp(2.4rem,4vw,3.6rem)] lg:col-span-5">Kogo strona podaje przy wyjazdach</h2>
          <ul className="border-b border-line lg:col-span-7">
            {trips.contacts.map((item) => (
              <li key={item.label} className="accent-row grid gap-1 border-t border-line py-4 sm:grid-cols-[10rem_1fr]">
                <span className="font-display font-semibold tracking-wide text-deep">{item.label}</span>
                <a href={item.href} className="border-b border-current">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
