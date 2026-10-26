import Link from "next/link";
import { ContactDetails } from "@/components/ContactDetails";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { Wordmark } from "@/components/Wordmark";
import { club, nav, routes } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy text-paper">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -bottom-4 font-display text-[26vw] leading-none font-bold text-[#0d3148] select-none"
      >
        {club.founded}
      </p>
      <Container className="relative py-16 md:py-24">
        <p className="max-w-xl font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.9] font-bold">
          {club.farewell}
        </p>
        <p className="mt-4 max-w-lg text-mist">{club.tagline}</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark tone="dark" />
            <p className="mt-4 max-w-xs text-mist">
              {club.legalName}. {club.form}, od {club.founded} roku.
            </p>
          </div>
          <nav aria-label="Stopka" className="lg:col-span-4">
            <ul className="border-y border-line-dark">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line-dark py-2 last:border-b-0">
                  <Link href={item.href} className="link-draw font-display text-lg font-semibold tracking-wide text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-2">
                <Link href={routes.intro} className="link-draw font-display text-lg font-semibold tracking-wide text-paper">
                  Intro nurkowe
                </Link>
              </li>
            </ul>
          </nav>
          <div className="lg:col-span-4">
            <p className="font-display text-3xl leading-none font-bold">Kontakt</p>
            <div className="mt-4">
              <ContactDetails tone="dark" />
            </div>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-paper">
              <ExternalLink href={club.facebook}>Facebook</ExternalLink>
              <ExternalLink href={club.instagram}>Instagram</ExternalLink>
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line-dark pt-6 text-sm text-mist sm:flex-row sm:items-end sm:justify-between">
          <p>
            © 2026 {club.legalName}. CMAS, NAUI, Komisja Działalności Podwodnej ZG PTTK.
          </p>
          <Link href={`${routes.kontakt}#dane-rejestrowe`} className="link-draw text-paper">
            Dane rejestrowe i konto
          </Link>
        </div>
      </Container>
    </footer>
  );
}
