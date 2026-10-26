import { ContactDetails } from "@/components/ContactDetails";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { board, ngoNote } from "@/content/about";
import { club, pages } from "@/content/site";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor(pages.kontakt);

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Kontakt"
        title="Zadzwoń albo napisz"
        lede="Godzin biura i mapy dojazdu strona klubu nie podaje."
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[clamp(2.8rem,5vw,4.4rem)] leading-none font-bold">
              <a href={club.phoneHref}>{club.phoneDisplay}</a>
            </p>
            <p className="mt-4 font-display text-2xl font-semibold tracking-wide">
              <a href={club.emailHref} className="border-b border-current">
                {club.email}
              </a>
            </p>
            <div className="mt-8">
              <ContactDetails />
            </div>
            <p className="mt-4 text-muted">{club.seat}</p>
            <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              <ExternalLink href={club.facebook}>Facebook</ExternalLink>
              <ExternalLink href={club.instagram}>Instagram</ExternalLink>
            </p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl">Osoby ze strony kontaktu</h2>
            <ul className="mt-4 border-b border-line">
              {board.map((person) => (
                <li
                  key={`${person.role}-${person.name}`}
                  className="accent-row grid gap-1 border-t border-line py-4 sm:grid-cols-[14rem_1fr]"
                >
                  <span>
                    <span className="block font-display text-sm font-semibold uppercase tracking-[0.12em] text-deep">
                      {person.role}
                    </span>
                    <span className="mt-1 block font-semibold">{person.name}</span>
                  </span>
                  <span>{person.contact}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section id="dane-rejestrowe" tone="foam">
        <Container className="grid gap-8 lg:grid-cols-12">
          <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)] lg:col-span-4">Dane rejestrowe</h2>
          <div className="lg:col-span-8">
            <p>{club.legalName}</p>
            <p>
              {club.addressLines[0]}, {club.addressLines[1]}
            </p>
            <dl className="mt-6 border-b border-line">
              <div className="grid gap-1 border-t border-line py-3 sm:grid-cols-[8rem_1fr]">
                <dt className="font-display font-semibold tracking-wide text-deep">KRS</dt>
                <dd>{club.krs}</dd>
              </div>
              <div className="grid gap-1 border-t border-line py-3 sm:grid-cols-[8rem_1fr]">
                <dt className="font-display font-semibold tracking-wide text-deep">REGON</dt>
                <dd>{club.regon}</dd>
              </div>
              <div className="grid gap-1 border-t border-line py-3 sm:grid-cols-[8rem_1fr]">
                <dt className="font-display font-semibold tracking-wide text-deep">NIP</dt>
                <dd>{club.nip}</dd>
              </div>
              <div className="grid gap-1 border-t border-line py-3 sm:grid-cols-[8rem_1fr]">
                <dt className="font-display font-semibold tracking-wide text-deep">Forma</dt>
                <dd>{club.form}</dd>
              </div>
            </dl>
            <p className="mt-6 text-muted">{ngoNote}</p>
          </div>
        </Container>
      </Section>

      <Section id="konto">
        <Container className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="text-[clamp(2.6rem,4.5vw,4.2rem)] lg:col-span-4">Konto bankowe</h2>
          <div className="lg:col-span-8">
            <p className="text-muted">
              Numer opublikowany na stronie „Konto bankowe”, zmiana 15 marca 2025.
            </p>
            <p className="mt-6 font-display text-3xl leading-tight font-bold break-words sm:text-4xl">
              {club.bankAccount}
            </p>
            <p className="mt-3">{club.bankName}</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
