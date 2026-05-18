import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Zap, Users, Bitcoin, Smartphone, Banknote, CreditCard, Hash } from "lucide-react";
import { BotShowcase } from "@/components/BotShowcase";
import firepullCennik from "@/assets/firepull-cennik.png";
import firepullWeryfikacja from "@/assets/firepull-weryfikacja.png";
import firepullTicket from "@/assets/firepull-ticket.png";
import marysiaTicket from "@/assets/marysia-ticket.png";
import spiderRabat from "@/assets/spider-rabat.png";
import spiderWynik from "@/assets/spider-wynik.png";
import spiderOpinie from "@/assets/spider-opinie.png";
import spiderWystaw from "@/assets/spider-wystaw.png";
import spiderCennik from "@/assets/spider-cennik.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zyvexn. — Discord Bot Developer" },
      { name: "description", content: "3 lata bot devu na Discordzie. 15+ botów, 5+ serwerów, 4k+ obsłużonych użytkowników." },
    ],
  }),
  component: Index,
});

const payments = [
  { icon: Bitcoin, label: "LTC", desc: "Litecoin" },
  { icon: Smartphone, label: "BLIK", desc: "Płatność BLIK" },
  { icon: Banknote, label: "Przelew", desc: "Tradycyjny przelew" },
  { icon: CreditCard, label: "PSC", desc: "PaySafeCard" },
  { icon: Hash, label: "Kod BLIK", desc: "Doładowania" },
];

function Index() {
  return (
    <main>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden scroll-mt-16">
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
              <a
                href="#boty"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Zobacz Moje Boty <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              >
                <MessageCircle className="h-4 w-4" /> Skontaktuj się
              </a>
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
            <div className="absolute -inset-4 rounded-3xl opacity-30 blur-3xl" style={{ background: "var(--gradient-accent)" }} />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card p-8 font-mono text-sm shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-1.5 border-b border-border pb-3">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-accent/70" />
                <span className="h-3 w-3 rounded-full bg-[oklch(0.7_0.18_145)]/70" />
                <span className="ml-3 text-xs text-muted-foreground">~/zyvexn/bot.ts</span>
              </div>
              <pre className="mt-4 whitespace-pre-wrap text-xs leading-relaxed text-muted-foreground sm:text-sm">
{`import { Client } from "discord.js";

`}<span className="text-accent">const</span>{` bot = `}<span className="text-accent">new</span>{` Client({
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

      {/* BOTY */}
      <section id="boty" className="scroll-mt-16 border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <Zap className="h-4 w-4" /> Wyróżnione projekty
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Boty Discord zbudowane na skalę</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Produkcyjne boty obsługujące tysiące użytkowników z niezawodnością i wydajnością klasy korporacyjnej.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            <BotShowcase
              name="FirePull"
              textColor="oklch(0.72 0.18 45)"
              description="Zaawansowany system ticketów i weryfikacji zaprojektowany do usprawnienia procesów wsparcia z intuicyjnym sterowaniem i potężnymi funkcjami automatyzacji."
              features={[
                "Wielokanałowe zarządzanie ticketami z niestandardowymi kategoriami",
                "Automatyczne kierowanie ticketów i przypisywanie priorytetów",
                "System weryfikacji nowych członków",
                "Cennik produktów z aktualizacją na żywo",
                "Kontrola dostępu oparta na rolach dla zespołów wsparcia",
              ]}
              images={[
                { src: firepullCennik, alt: "FirePull cennik" },
                { src: firepullWeryfikacja, alt: "FirePull weryfikacja" },
                { src: firepullTicket, alt: "FirePull ticket" },
              ]}
            />

            <BotShowcase
              name="Marysia Client"
              textColor="oklch(0.72 0.18 145)"
              description="Wszechstronny bot klimatyczny stworzony do zarządzania serwerem o naturalnym klimacie i kompleksowym narzędziom i nieszablonowymi rozwiązaniami."
              features={[
                "Zaawansowany pakiet moderacyjny z funkcjami auto-mod",
                "Niestandardowy system ticketów dopasowany do brandu",
                "Automatyczna wiadomość powitalna i pożegnalna",
                "Statystyki serwera i śledzenie członków",
                "Integracja z zewnętrznymi API i webhookami",
              ]}
              images={[{ src: marysiaTicket, alt: "Marysia Client ticket" }]}
            />

            <BotShowcase
              name="Spider Shop Api"
              textColor="oklch(0.72 0.18 200)"
              description="Kompleksowe rozwiązanie e-commerce dla serwerów Discord z natywnym kasą, profesjonalnym panelem i śledzeniem zamówień. Losowania rabatów, opinie i pełna obsługa klienta."
              features={[
                "Katalog produktów z kategoriami i wyszukiwarką",
                "System losowania rabatów dla klientów",
                "Automatyczna realizacja zamówień i dostarczanie",
                "Historia zakupów klienta i panel zamówień",
                "Panel administratora do analityki sprzedaży",
                "System opinii z oceną gwiazdkową",
              ]}
              images={[
                { src: spiderCennik, alt: "Spider cennik" },
                { src: spiderRabat, alt: "Spider losowanie rabatu" },
                { src: spiderWynik, alt: "Spider wynik losowania" },
                { src: spiderOpinie, alt: "Spider opinie" },
                { src: spiderWystaw, alt: "Spider wystaw opinię" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="scroll-mt-16 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-accent">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Zbudujmy coś razem</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Potrzebujesz niestandardowego bota Discord dla swojego serwera? Skontaktuj się ze mną na Discordzie, aby omówić wymagania Twojego projektu.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Discord</p>
                <p className="text-lg font-semibold text-foreground">Zyvexn.</p>
              </div>
            </div>
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

          <div className="mt-20">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Metody płatności</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">Akceptowane formy płatności</h3>
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
          </div>

          <footer className="mt-20 border-t border-border pt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zyvexn. — 3 lata bot devu na Discordzie.
          </footer>
        </div>
      </section>
    </main>
  );
}
