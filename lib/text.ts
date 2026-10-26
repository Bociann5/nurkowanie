export function filled(value: string | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function definedFacts(
  pairs: readonly (readonly [string, string | undefined])[],
): { label: string; value: string }[] {
  const facts: { label: string; value: string }[] = [];

  for (const [label, value] of pairs) {
    if (filled(value)) {
      facts.push({ label, value });
    }
  }

  return facts;
}

export function mailtoHref(email: string): string | undefined {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return undefined;
  }

  return `mailto:${email}`;
}

export function telHref(phone: string): string | undefined {
  const compact = phone.replace(/[^\d+]/g, "");

  if (compact.replace(/\D/g, "").length < 6) {
    return undefined;
  }

  return `tel:${compact}`;
}
