import { ExternalLink } from "lucide-react";

interface BotShowcaseProps {
  name: string;
  accentClass: string;
  description: string;
  features: string[];
  images: { src: string; alt: string }[];
  ctaLabel?: string;
}

export function BotShowcase({ name, accentClass, description, features, images }: BotShowcaseProps) {
  return (
    <article className="rounded-3xl border border-border bg-card/60 p-6 shadow-[var(--shadow-card)] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img) => (
          <div
            key={img.src}
            className="overflow-hidden rounded-xl border border-border bg-background/60"
          >
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className={`text-2xl font-bold ${accentClass}`}>{name}</h3>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">{description}</p>

        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Główne funkcje
        </p>
        <ul className="mt-2 space-y-1.5">
          {features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-foreground/90">
              <span className={accentClass}>•</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <a
          href="https://discord.gg/KRxqxkcW4R"
          target="_blank"
          rel="noreferrer"
          className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 ${accentClass.replace("text-", "bg-")}`}
        >
          Zapytaj o Bota <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
