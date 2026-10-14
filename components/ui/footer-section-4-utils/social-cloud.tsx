export interface SocialLink {
  label: string;
  href: string;
}

// Fill in the hrefs once the accounts exist. Entries without an href are not shown.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "WhatsApp", href: "" },
  { label: "Instagram", href: "" },
  { label: "LinkedIn", href: "" },
  { label: "Facebook", href: "" },
  { label: "X", href: "" },
  { label: "YouTube", href: "" },
];

export function SocialCloud({
  links = SOCIAL_LINKS,
  className = "",
}: {
  links?: SocialLink[];
  className?: string;
}) {
  const live = links.filter((l) => l.href);
  if (!live.length) return null;

  return (
    <ul className={`flex flex-wrap ${className}`}>
      {live.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-ink-2/25 px-3 py-1.5 text-sm font-semibold transition-colors hover:border-ink-2 hover:bg-ink-2 hover:text-lime"
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
