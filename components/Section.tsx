import type { ReactNode } from "react";

const tones = {
  paper: "bg-paper text-ink",
  foam: "bg-foam text-ink",
  navy: "bg-navy text-paper",
  deep: "bg-deep text-paper",
} as const;

export function Section({
  id,
  children,
  tone = "paper",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 py-16 md:py-24 ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}
