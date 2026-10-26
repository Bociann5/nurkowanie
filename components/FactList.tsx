export function FactList({
  facts,
}: {
  facts: readonly { label: string; value: string }[];
}) {
  if (facts.length === 0) {
    return null;
  }

  return (
    <dl className="mt-8 border-b border-line">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="accent-row grid gap-1 border-t border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
        >
          <dt className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-deep">
            {fact.label}
          </dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
