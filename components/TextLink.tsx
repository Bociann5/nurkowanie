import Link from "next/link";
import type { ReactNode } from "react";
import type { AppHref } from "@/content/site";

const variants = {
  text: "inline-flex items-center gap-2 border-b border-current pb-0.5 font-display text-lg font-semibold tracking-wide text-deep",
  onDark:
    "inline-flex items-center gap-2 border-b border-current pb-0.5 font-display text-lg font-semibold tracking-wide text-paper",
  solid:
    "inline-flex min-h-11 items-center justify-center bg-navy px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-deep",
  inverse:
    "inline-flex min-h-11 items-center justify-center bg-paper px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-foam",
} as const;

export function TextLink({
  href,
  children,
  variant = "text",
  className = "",
}: {
  href: AppHref;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
