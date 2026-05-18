import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Zap } from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zyvexn. — Discord Bot Developer" },
      { name: "description", content: "3 lata bot devu na Discordzie. 15+ botów, 5+ serwerów, 4k+ obsłużonych użytkowników." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="text-accent">{"</>"}</span> Programista Botów Discord
            </div>
            <h1 className="mt-6 text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">Zyvexn.</h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Tworzę innowacyjne boty Discord, które transformują zarządzanie serwerem, automatyzują procesy i budują zaangażowanie społeczności. 3 lata w bot devie.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/boty"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Zobacz Moje Boty <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              >
                <MessageCircle className="h-4 w-4" /> Skontaktuj się
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                { v: "15+", l: "Wykonanych botów" },
                { v: "5+", l: "Aktywnych serwerów" },
                { v: "4k+", l: "Obsłużonych osób" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="text-3xl font-bold text-foreground">{s.v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-3xl"
              style={{ background: "var(--gradient-accent)" }}
            />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card p-8 font-mono text-sm shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-1.5 border-b border-border pb-3">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-accent/70" />
                <span className="h-3 w-3 rounded-full bg-[oklch(0.7_0.18_145)]/70" />
                <span className="ml-3 text-xs text-muted-foreground">~/zyvexn/bot.ts</span>
              </div>
              <pre className="mt-4 whitespace-pre-wrap text-xs leading-relaxed text-muted-foreground sm:text-sm">
{`import { Client } from "discord.js";

`}<span className="text-accent">{`const`}</span>{` bot = `}<span className="text-accent">{`new`}</span>{` Client({
  intents: [
    `}<span className="text-foreground">{`"Guilds"`}</span>{`,
    `}<span className="text-foreground">{`"GuildMessages"`}</span>{`,
  ],
});

bot.on(`}<span className="text-foreground">{`"ready"`}</span>{`, () => {
  console.log(`}<span className="text-[oklch(0.7_0.18_145)]">{`"⚡ Zyvexn online"`}</span>{`);
});

bot.login(process.env.TOKEN);`}
              </pre>
              <div className="absolute bottom-6 right-6 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                ● online
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Zap className="h-4 w-4" /> Co robię
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Boty Discord na każdą skalę</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tickety, weryfikacja, sklepy, systemy opinii, panele administracyjne — buduję wszystko od zera, pod konkretne wymagania serwera.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Systemy ticketów", d: "Wielokanałowe zarządzanie z kategoriami i automatyzacją." },
              { t: "Weryfikacja", d: "Bezpieczne wejście na serwer z kontrolą ról." },
              { t: "Sklepy & E-commerce", d: "Katalogi produktów, opinie, zamówienia i wypłaty." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-6 text-left">
                <h3 className="font-semibold text-foreground">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>

          <Link
            to="/boty"
            className="mt-12 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Zobacz portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
