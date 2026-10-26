import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { club, pages } from "@/content/site";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(club.metadataBase),
  title: {
    default: pages.home.title,
    template: `%s — ${club.name}`,
  },
  description: pages.home.description,
  applicationName: club.name,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className={fontVariables}>
      <body>
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-3 focus:text-ink"
        >
          Przejdź do treści
        </a>
        <SiteHeader />
        <main id="tresc">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
