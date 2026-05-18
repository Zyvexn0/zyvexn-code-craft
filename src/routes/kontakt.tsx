import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Users, Bitcoin, Smartphone, Banknote, CreditCard, Hash } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Zyvexn." },
      { name: "description", content: "Skontaktuj się z Zyvexn. na Discordzie. Płatności: LTC, BLIK, przelew, PaySafeCard, Kod BLIK." },
    ],
  }),
  component: KontaktPage,
});

const payments = [
  { icon: Bitcoin, label: "LTC", desc: "Litecoin" },
  { icon: Smartphone, label: "BLIK", desc: "Płatność BLIK" },
  { icon: Banknote, label: "Przelew", desc: "Tradycyjny przelew" },
  { icon: CreditCard, label: "PSC", desc: "PaySafeCard" },
  { icon: Hash, label: "Kod BLIK", desc: "Doładowania" },
];

function KontaktPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center">
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-accent"
        >
          <MessageCircle className="h-6 w-6" />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Zbudujmy coś razem</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Potrzebujesz niestandardowego bota Discord dla swojego serwera? Skontaktuj się ze mną na Discordzie, aby omówić wymagania Twojego projektu.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <a
          href="https://discord.com/users/"
          className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Discord</p>
            <p className="text-lg font-semibold text-foreground">Zyvexn.</p>
          </div>
        </a>
        <a
          href="https://discord.gg/KRxqxkcW4R"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Serwer Discord</p>
            <p className="text-lg font-semibold text-foreground">ZyvexSpace</p>
          </div>
        </a>
      </div>

      <a
        href="https://discord.gg/KRxqxkcW4R"
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-glow)] transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" /> Napisz na Discordzie
      </a>

      <section className="mt-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Metody płatności</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Akceptowane formy płatności</h2>
          <p className="mt-3 text-muted-foreground">Wygodnie i bezpiecznie — wybierz to, co Ci odpowiada.</p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {payments.map((p) => (
            <div key={p.label} className="rounded-2xl border border-border bg-card p-5 text-center">
              <p.icon className="mx-auto h-6 w-6 text-accent" />
              <p className="mt-3 font-semibold text-foreground">{p.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 border-t border-border pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Zyvexn. — 3 lata bot devu na Discordzie.
      </footer>
    </main>
  );
}
