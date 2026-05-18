import { Code2 } from "lucide-react";

const links = [
  { href: "#home", label: "Strona Główna" },
  { href: "#boty", label: "Boty" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <Code2 className="h-5 w-5 text-accent" />
          <span className="text-lg">Zyvexn.</span>
        </a>
        <nav className="flex items-center gap-1 rounded-full border border-border/60 bg-card/50 p-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
