import { club } from "@/content/site";

const rows = [
  { label: "Telefon", value: club.phoneDisplay, href: club.phoneHref },
  { label: "E-mail", value: club.email, href: club.emailHref },
  { label: "Adres", value: `${club.addressLines[0]}, ${club.addressLines[1]}` },
] as const;

export function ContactDetails({ tone = "light" }: { tone?: "light" | "dark" }) {
  const labelClass = tone === "dark" ? "text-mist" : "text-deep";
  const valueClass = tone === "dark" ? "text-paper" : "text-ink";
  const rule = tone === "dark" ? "border-line-dark" : "border-line";

  return (
    <dl className={`border-b ${rule}`}>
      {rows.map((row) => (
        <div key={row.label} className={`accent-row grid gap-1 border-t py-4 sm:grid-cols-[8rem_1fr] sm:gap-4 ${rule}`}>
          <dt className={`font-display text-sm font-semibold uppercase tracking-[0.14em] ${labelClass}`}>
            {row.label}
          </dt>
          <dd className={valueClass}>
            {"href" in row && row.href ? (
              <a href={row.href} className="border-b border-current">
                {row.value}
              </a>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
