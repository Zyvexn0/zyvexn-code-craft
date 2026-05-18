import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/boty")({
  head: () => ({
    meta: [
      { title: "Boty — Zyvexn." },
      { name: "description", content: "Portfolio botów Discord stworzonych przez Zyvexn.: FirePull, Marysia Client, Spider Shop Api." },
    ],
  }),
  component: BotyPage,
});

function BotyPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          ⚡ Wyróżnione projekty
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Boty Discord zbudowane na skalę</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Produkcyjne boty obsługujące tysiące użytkowników z niezawodnością i wydajnością klasy korporacyjnej.
        </p>
      </div>

      <div className="mt-16 space-y-10">
        <BotShowcase
          name="FirePull"
          accentClass="text-[oklch(0.72_0.18_45)]"
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
          accentClass="text-[oklch(0.72_0.18_145)]"
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
          accentClass="text-[oklch(0.72_0.18_200)]"
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
    </main>
  );
}
