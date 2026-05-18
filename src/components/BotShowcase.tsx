import { ExternalLink } from "lucide-react";

interface BotShowcaseProps {
  name: string;
  textColor: string;
  description: string;
  features: string[];
  images?: { src: string; alt: string }[];
}

export function BotShowcase({ name, textColor, description, features, images }: BotShowcaseProps) {
  return (
    <article className="rounded-3xl border border-border bg-card/60 p-6 shadow-[var(--shadow-card)] sm:p-8">
      {images && images.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div key={img.src} className="overflow-hidden rounded-xl border border-border bg-background/60">
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="flex h-48 items-center justify-center rounded-xl border border-dashed border-border bg-background/40"
          style={{ color: textColor }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest opacity-70">
            {name} — podgląd wkrótce
          </span>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-2xl font-bold" style={{ color: textColor }}>{name}</h3>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">{description}</p>

        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Główne funkcje</p>
        <ul className="mt-2 space-y-1.5">
          {features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-foreground/90">
              <span style={{ color: textColor }}>•</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export { ExternalLink };
