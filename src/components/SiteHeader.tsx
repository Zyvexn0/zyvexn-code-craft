import { Link } from "@tanstack/react-router";
import { Code2 } from "lucide-react";

const links = [
  { to: "/", label: "Strona Główna" },
  { to: "/boty", label: "Boty" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Code2 className="h-5 w-5 text-accent" />
          <span className="text-lg">Zyvexn.</span>
        </Link>
        <nav className="flex items-center gap-1 rounded-full border border-border/60 bg-card/50 p-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeOptions={{ exact: true }}
              activeProps={{ className: "rounded-full px-4 py-1.5 text-sm bg-secondary text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
