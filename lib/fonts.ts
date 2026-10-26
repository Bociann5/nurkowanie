import { Barlow_Condensed, Source_Serif_4 } from "next/font/google";

/**
 * Display: Barlow Condensed — a sports-poster gothic with Polish diacritics.
 * Body: Source Serif 4 — a text face for long course copy.
 *
 * `fallback` is what the browser uses if a font file fails after download.
 * If `next build` cannot download the fonts at all, remove these loaders and
 * use the system stacks: Arial Narrow for display, Palatino / Georgia for text.
 */
const display = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-barlow",
  fallback: ["Arial Narrow", "Franklin Gothic Medium", "sans-serif"],
});

const text = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source",
  fallback: ["Iowan Old Style", "Palatino", "Palatino Linotype", "Georgia", "serif"],
});

export const fontVariables = `${display.variable} ${text.variable}`;
