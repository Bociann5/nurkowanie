import { Container } from "@/components/Container";
import { FactList } from "@/components/FactList";
import { Note } from "@/components/Note";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { ScheduleList } from "@/components/ScheduleList";
import { Section } from "@/components/Section";
import { kids, missionBase, missionSpecial, youthDegrees } from "@/content/kids";
import { thursdayOverlap } from "@/content/hockey";
import { images } from "@/content/media";
import { club, pages } from "@/content/site";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor(pages.dlaDzieci);

export default function KidsPage() {
  return (
    <>
      <PageHero
        kicker={kids.project}
        title="Dla dzieci"
        lede={kids.headline}
        image={images.kidsSleza}
        caption="Nurkowanie dzieci. Zdjęcie opublikowane na stronie klubu."
      />
      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg">{kids.since}</p>
            <p className="mt-4">{kids.who}</p>
            <div className="mt-6">
              <Note>
                <p>{kids.ageNote}</p>
              </Note>
            </div>
            <p className="mt-6">{kids.funding}</p>
          </div>
          <ul className="border-b border-line lg:col-span-5">
            {kids.goals.map((goal) => (
              <li key={goal} className="border-t border-line py-3">
                {goal}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="grafik" tone="foam">
        <Container className="grid gap-8 lg:grid-cols-12">
          <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)] lg:col-span-4">Grafik opublikowany na stronie</h2>
          <div className="lg:col-span-8">
            <ScheduleList items={kids.places} />
            <p className="mt-6">{kids.pastStarts}</p>
            <p className="mt-4">{thursdayOverlap}</p>
          </div>
        </Container>
      </Section>

      <Section id="cennik">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)]">Cennik 2026</h2>
            <p className="mt-4">{kids.pricesTitle}</p>
            <p className="mt-2 text-muted">{kids.pricesNote}</p>
          </div>
          <div className="lg:col-span-8">
            <FactList facts={kids.prices} />
            <p className="mt-6">{kids.package}</p>
            <p className="mt-4">{kids.gear}</p>
            <p className="mt-4 text-muted">{club.offerClause}</p>
            <p className="mt-6">
              Kontakt:{" "}
              <a href={club.phoneHref} className="border-b border-current">
                {club.phoneDisplay}
              </a>
              ,{" "}
              <a href={club.emailHref} className="border-b border-current">
                {club.email}
              </a>
              ,{" "}
              <a href={`mailto:${kids.contactEmail}`} className="border-b border-current">
                {kids.contactEmail}
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section id="misja-podstawy" tone="foam">
        <Container>
          <h2 className="max-w-[16ch] text-[clamp(2.4rem,4vw,3.8rem)]">{missionBase.title}</h2>
          <p className="mt-4 max-w-2xl">{missionBase.lede}</p>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-12">
            <figure className="lg:col-span-7">
              <Photo image={images.kidsPuzzle} sizes="(min-width: 1024px) 52vw, 100vw" />
              <figcaption className="mt-3 text-sm text-muted">Puzzle na dnie basenu.</figcaption>
            </figure>
            <div className="lg:col-span-5">
              <h3 className="text-2xl">Pierwsze 5 — pływanie i ABC</h3>
              <ul className="mt-3 border-b border-line">
                {missionBase.abc.map((item) => (
                  <li key={item} className="border-t border-line py-2">
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-2xl">Kolejne 5 — pełny sprzęt</h3>
              <ul className="mt-3 border-b border-line">
                {missionBase.gear.map((item) => (
                  <li key={item} className="border-t border-line py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="misje-specjalne">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-[clamp(2.4rem,4vw,3.6rem)]">{missionSpecial.title}</h2>
              <p className="mt-4">{missionSpecial.lede}</p>
              <h3 className="mt-8 text-2xl">Trzy zajęcia ABC</h3>
              <ul className="mt-3 border-b border-line">
                {missionSpecial.abc.map((item) => (
                  <li key={item} className="border-t border-line py-2">
                    {item}
                  </li>
                ))}
              </ul>
              <figure className="mt-8">
                <Photo image={images.kidsNet} sizes="(min-width: 1024px) 40vw, 100vw" />
                <figcaption className="mt-3 text-sm text-muted">
                  Zajęcia przy siatce na dnie. Zdjęcie przy wpisie o terminach 2026.
                </figcaption>
              </figure>
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-2xl">Lista misji</h3>
              <ol className="mt-4 border-b border-line">
                {missionSpecial.missions.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-3"
                  >
                    <span className="font-display text-2xl font-bold text-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="stopnie-mlodziezowe" tone="navy">
        <Container className="grid gap-8 lg:grid-cols-12">
          <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)] lg:col-span-4">Stopnie młodzieżowe</h2>
          <div className="lg:col-span-8">
            <p className="text-mist">{youthDegrees.note}</p>
            <ul className="mt-6 border-b border-line-dark">
              {youthDegrees.items.map((item) => (
                <li key={item} className="border-t border-line-dark py-3 text-paper">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
