const shells = {
  navy: "bg-navy text-paper",
  deep: "bg-deep text-paper",
  turquoise: "bg-turquoise text-navy",
} as const;

const accents = {
  navy: "bg-turquoise",
  deep: "bg-turquoise",
  turquoise: "bg-navy",
} as const;

const watermarks = {
  navy: "text-[#163e58]",
  deep: "text-[#3d8eb3]",
  turquoise: "text-[#0a5678]",
} as const;

export function ColorPanel({
  tone = "navy",
  mark,
  className = "",
}: {
  tone?: keyof typeof shells;
  mark: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex min-h-72 items-end overflow-hidden ${shells[tone]} ${className}`}
    >
      <div className={`absolute inset-y-0 left-0 w-2 ${accents[tone]}`} />
      <p className={`px-6 py-6 font-display text-[clamp(4rem,9vw,7.5rem)] leading-[0.84] font-bold ${watermarks[tone]}`}>
        {mark}
      </p>
    </div>
  );
}
