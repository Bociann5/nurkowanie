import { Container } from "@/components/Container";
import { DesktopNav, MobileNav } from "@/components/MobileNav";
import { Wordmark } from "@/components/Wordmark";
import { nav } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="h-1.5 bg-turquoise" aria-hidden="true" />
      <Container className="flex items-center justify-between gap-6 py-2">
        <Wordmark priority />
        <DesktopNav items={nav} />
        <MobileNav items={nav} />
      </Container>
    </header>
  );
}
