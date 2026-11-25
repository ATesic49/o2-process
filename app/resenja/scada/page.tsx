import Link from "next/link";
import {
  Activity,
  Settings2,
  ChartNoAxesCombined,
  ShieldCheck,
  Monitor,
  Headset,
  Wrench,
  GraduationCap,
  ArrowUpRight,
  Check,
} from "lucide-react";

const funkcije = [
  {
    naslov: "Realno-vremenski nadzor",
    opis: "Pratite stanje vašeg sistema u realnom vremenu pomoću naprednih alata za vizualizaciju.",
    icon: Activity,
  },
  {
    naslov: "Automatizacija procesa",
    opis: "Poboljšajte efikasnost i smanjite ljudske greške kroz automatizaciju ključnih operacija.",
    icon: Settings2,
  },
  {
    naslov: "Analiza podataka",
    opis: "Prikupljajte i analizirajte podatke kako biste optimizovali performanse i identifikovali potencijalne probleme pre nego što postanu kritični.",
    icon: ChartNoAxesCombined,
  },
];

const prednosti = [
  {
    naslov: "Fleksibilnost",
    opis: "Naši sistemi se lako prilagođavaju specifičnim potrebama vašeg postrojenja.",
    icon: Settings2,
  },
  {
    naslov: "Pouzdanost",
    opis: "Koristimo najmodernije tehnologije kako bismo osigurali stalnu i pouzdanu operativnost vaših sistema.",
    icon: ShieldCheck,
  },
  {
    naslov: "Jednostavnost korišćenja",
    opis: "Intuitivni interfejsi omogućavaju jednostavno praćenje i upravljanje procesima.",
    icon: Monitor,
  },
  {
    naslov: "Podrška i servis",
    opis: "Naš tim stručnjaka je uvek tu da vam pruži podršku i obezbedi nesmetan rad vašeg SCADA sistema.",
    icon: Headset,
  },
];

const usluge = [
  {
    naslov: "Implementacija SCADA sistema",
    opis: "Kompletna usluga od analize i dizajna do instalacije i puštanja u rad.",
    icon: Settings2,
  },
  {
    naslov: "Održavanje i podrška",
    opis: "Redovno održavanje i brza podrška kako bi vaši sistemi radili bez problema.",
    icon: Wrench,
  },
  {
    naslov: "Obuka korisnika",
    opis: "Obuka vašeg osoblja za efikasno korišćenje i upravljanje SCADA sistemom.",
    icon: GraduationCap,
  },
];

export default function ScadaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-blue text-blue-950">
      {/* DEKORATIVNI KRUGOVI */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-green-700/15" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-green-700/15" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-10 md:px-10">
        {/* BREADCRUMB */}
        <nav className="mb-7 flex items-center gap-2 text-xs text-blue-950/50">
          <Link href="/resenja" className="hover:text-green-700">
            Rešenja
          </Link>
          <span>/</span>
          <span className="text-green-700">SCADA</span>
        </nav>

        {/* UVOD */}
        <section className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
            O2 Process Solutions
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            SCADA <span className="text-green-700">sistemi</span>
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-blue-950/75">
            U kompaniji <strong>O2 PROCESS SOLUTIONS</strong>, ponosni smo na
            naša SCADA (Supervisory Control and Data Acquisition) rešenja koja
            omogućavaju superioran nadzor i kontrolu industrijskih procesa. Naša
            SCADA rešenja su dizajnirana da pružaju visoku efikasnost,
            pouzdanost i fleksibilnost u upravljanju složenim sistemima.
          </p>
        </section>

        {/* ŠTA SU SCADA SISTEMI */}
        <section className="mb-12">
          <div className="mb-6 border-b border-blue-950/15 pb-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Šta su SCADA sistemi?
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-blue-950/70">
              SCADA sistemi su ključni za nadzor i upravljanje industrijskim
              procesima. Omogućavaju prikupljanje, obradu i analizu podataka u
              realnom vremenu, čime se olakšava donošenje informisanih odluka i
              optimizacija rada postrojenja.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {funkcije.map((funkcija) => {
              const Icon = funkcija.icon;

              return (
                <div
                  key={funkcija.naslov}
                  className="border border-blue-950/10 bg-white p-5"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.6}
                    className="mb-4 text-green-700"
                  />

                  <h3 className="text-lg font-semibold">{funkcija.naslov}</h3>

                  <p className="mt-2 text-sm leading-6 text-blue-950/65">
                    {funkcija.opis}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PREDNOSTI */}
        <section className="mb-12">
          <div className="mb-6 border-b border-blue-950/15 pb-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Prednosti naših SCADA rešenja
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {prednosti.map((prednost) => {
              const Icon = prednost.icon;

              return (
                <div key={prednost.naslov} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-green/10">
                    <Icon size={22} className="text-green-700" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{prednost.naslov}</h3>

                    <p className="mt-1 text-sm leading-6 text-blue-950/65">
                      {prednost.opis}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* USLUGE */}
        <section className="mb-12">
          <div className="mb-6 border-b border-blue-950/15 pb-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Naše usluge</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {usluge.map((usluga, index) => {
              const Icon = usluga.icon;

              return (
                <div
                  key={usluga.naslov}
                  className="group relative overflow-hidden border border-blue-950/10 bg-white p-5"
                >
                  <span className="absolute right-5 top-5 text-xs font-medium text-green-700/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon
                    size={25}
                    strokeWidth={1.6}
                    className="mb-5 text-green-700"
                  />

                  <h3 className="text-lg font-semibold">{usluga.naslov}</h3>

                  <p className="mt-2 text-sm leading-6 text-blue-950/65">
                    {usluga.opis}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* KONTAKT */}
        <section className="flex flex-col items-start justify-between gap-5 border-t border-blue-950/15 pt-7 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold">
              Potrebno vam je SCADA rešenje?
            </h2>

            <p className="mt-2 text-sm text-blue-950/65">
              Kontaktirajte nas za dodatne informacije o implementaciji i
              održavanju SCADA sistema.
            </p>
          </div>

          <Link
            href="/kontakt"
            className="inline-flex items-center gap-3 bg-green px-6 py-3 text-sm font-semibold text-blue-950 transition hover:brightness-110"
          >
            Kontaktirajte nas
            <ArrowUpRight size={18} />
          </Link>
        </section>
      </div>
    </main>
  );
}
