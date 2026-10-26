export function ScheduleList({
  items,
}: {
  items: readonly { when: string; detail: string }[];
}) {
  return (
    <ul className="border-b border-line">
      {items.map((item, index) => (
        <li
          key={`${item.when}-${index}`}
          className="accent-row grid gap-1 border-t border-line py-4 md:grid-cols-[14rem_1fr] md:items-baseline md:gap-8 md:py-5"
        >
          <span className="font-display text-xl font-semibold tracking-wide text-deep">{item.when}</span>
          <span>{item.detail}</span>
        </li>
      ))}
    </ul>
  );
}
