import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { TextLink } from "@/components/TextLink";

export const metadata: Metadata = {
  title: "Nie znaleziono strony",
  description: "Nie znaleziono strony — Klub Pirania Wrocław",
};

export default function NotFound() {
  return (
    <>
      <PageHero title="Nie ma takiej strony" lede="Ten adres nie prowadzi do żadnej podstrony." />
      <Section>
        <Container>
          <TextLink href="/" variant="solid">
            Strona główna
          </TextLink>
        </Container>
      </Section>
    </>
  );
}
