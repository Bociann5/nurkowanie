import type { ReactNode } from "react";

export function Note({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="max-w-3xl border-t-2 border-turquoise pt-4 text-ink">
      {title ? (
        <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-deep">{title}</p>
      ) : null}
      <div className={title ? "mt-3" : undefined}>{children}</div>
    </aside>
  );
}
