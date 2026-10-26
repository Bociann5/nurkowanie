import type { ReactNode } from "react";

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="border-b border-current" rel="noopener noreferrer" target="_blank">
      {children}
      <span className="sr-only"> (otwiera się w nowej karcie)</span>
    </a>
  );
}
