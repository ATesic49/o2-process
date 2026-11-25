import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Check,
  Ruler,
  ShieldCheck,
  Layers3,
  Workflow,
  Settings2,
  Radio,
} from "lucide-react";
import slika from "@/public/imgs/proizvodPlaceholder.jpg";

const glavneKarakteristike = [
  {
    naslov: "Široka primena",
    opis: "Izrađujemo CPS kao glavne crpne stanice u manjim mestima, za delove naselja, industrijske zone i sva mesta gde otpadne vode ne mogu gravitaciono da otiču ka glavnim kolektorima.",
    icon: Workflow,
  },
  {
    naslov: "Prilagodljive dimenzije",
    opis: "Dimenzije CPS: visina do 10 m i prečnik od Ø300 do Ø3000, u zavisnosti od potreba projekta.",
    icon: Ruler,
  },
  {
    naslov: "Potpuna zaptivenost",
    opis: "Stanice poseduju ulazni i izlazni priključak, priključak za električne kablove i opciono ventilacioni otvor sa filterskom ispunom od aktivnog uglja.",
    icon: ShieldCheck,
  },
  {
    naslov: "Robusna konstrukcija",
    opis: "Zidovi su izvedeni u tri sloja, sa sendvič dizajnom od PEHD materijala, što obezbeđuje čvrstoću, elastičnost i dug vek trajanja.",
    icon: Layers3,
  },
];

const tehnickeStavke = [
  "Gornja ivica CPS je u nivou sa tlom i ne zauzima dodatni prostor.",
  "Zaštitna rešetka i poklopac izrađeni su od prohroma.",
  "Cevi, vođice, držači vođica, merdevine, sajle i/ili lanac za izvlačenje pumpi izrađeni su od prohroma.",
  "Cevi unutar crpne stanice opciono mogu biti od PEHD materijala.",
  "Prečnici na izlazu pumpi, cevovod i armature mogu biti u opsegu od DN32 do DN150.",
  "Donji deo CPS je konusnog oblika i sprečava nagomilavanje nečistoća na dnu stanice.",
  "Dno CPS je ojačano čeličnom pločom i poseduje priključke za povezivanje armature.",
];

const upravljanje = [
  "O2PS upravljački kabinet omogućava lako i pouzdano upravljanje radom pumpi.",
  "Crpne stanice projektovane su da budu autonomne i da rade kontinualno u automatskom režimu.",
  "Opciono je moguće obezbediti daljinski nadzor, upravljanje i izveštavanje.",
  "Za upravljanje se mogu koristiti regulatori nivoa (kruške) i kontinualna merila nivoa (hidrostatička ili ultrazvučna).",
  "Moguća je ON-OFF regulacija i/ili kontinualno održavanje nivoa.",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-blue-950">
      {/* UVOD */}
      <section className="px-6 pb-16 pt-16 md:px-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-12 flex flex-wrap items-center gap-2 text-sm text-blue-950/50">
            <Link href="/proizvodi" className="hover:text-green-700">
              Proizvodi
            </Link>
            <span>/</span>
            <span className="text-green-700">Kompaktne crpne stanice</span>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-green-600" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                  O2 Process Solutions
                </span>
              </div>

              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                Kompaktne
                <span className="block text-green-700">crpne stanice</span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-blue-950/75">
                Kompaktne crpne stanice kompanije O2 Process Solutions – O2 CPS
                predstavljaju vrhunski proizvod koji korisnicima obezbeđuje
                napredne funkcije i superiorne performanse.
              </p>

              <p className="mt-5 leading-8 text-blue-950/65">
                Izrađujemo CPS kao glavne crpne stanice u manjim mestima, za
                delove naselja, u industrijskim zonama i na svim mestima gde
                otpadne vode ne mogu da gravitiraju ka glavnim kanalizacionim
                kolektorima.
              </p>

              <p className="mt-5 leading-8 text-blue-950/65">
                Dimenzije CPS: visina do 10 m, prečnik od Ø300 do Ø3000.
              </p>

              <Link
                href="#karakteristike"
                className="mt-10 inline-flex items-center gap-5 bg-green px-7 py-4 font-semibold text-blue-950 transition-colors duration-300 hover:bg-green/90"
              >
                Saznajte više
                <ArrowUpRight size={20} />
              </Link>
            </div>

            <div className="relative aspect-square overflow-hidden">
              <Image
                src={slika}
                alt="Kompaktne crpne stanice"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GLAVNE KARAKTERISTIKE */}
      <section
        id="karakteristike"
        className="scroll-mt-28 bg-blue-950 px-6 py-24 text-white md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
            Ključne karakteristike
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Napredno rešenje za pouzdan rad i dug vek trajanja.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-blue-100/75">
            O2 CPS stanice projektovane su za zahtevne uslove rada, uz visok
            nivo zaptivenosti, otpornosti i tehničke prilagodljivosti.
          </p>

          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2">
            {glavneKarakteristike.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.naslov} className="bg-blue-950 p-8">
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className="mb-7 text-green-300"
                  />

                  <h3 className="text-xl font-semibold">{item.naslov}</h3>

                  <p className="mt-3 leading-7 text-blue-100/65">{item.opis}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEHNIČKE KARAKTERISTIKE */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-green-700">
                Konstrukcija i izrada
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Projektovane za zahtevne uslove eksploatacije.
              </h2>

              <p className="mt-7 leading-8 text-blue-950/70">
                Kompaktne crpne stanice izrađene su sa posebnim fokusom na
                trajnost, zaptivenost i jednostavno održavanje. Korišćeni
                materijali omogućavaju pouzdan rad i otpornost u različitim
                uslovima eksploatacije.
              </p>

              <p className="mt-5 leading-8 text-blue-950/70">
                PEHD sendvič konstrukcija, prohromski elementi i konusno
                oblikovan donji deo obezbeđuju visok kvalitet, funkcionalnost i
                dug radni vek sistema.
              </p>
            </div>

            <div className="border-t-2 border-green-600">
              {tehnickeStavke.map((stavka) => (
                <div
                  key={stavka}
                  className="flex items-start gap-5 border-b border-blue-950/10 py-5"
                >
                  <Check size={19} className="mt-1 shrink-0 text-green-700" />

                  <p className="flex-1 leading-7 text-blue-950/75">{stavka}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UPRAVLJANJE */}
      <section className="bg-blue-50 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-green-700">
                Upravljanje
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Automatizovan i pouzdan rad stanice.
              </h2>

              <p className="mt-7 leading-8 text-blue-950/70">
                O2PS upravljački kabinet omogućava jednostavno i pouzdano
                upravljanje radom pumpi, dok je čitav sistem projektovan za
                autonomni rad u automatskom režimu.
              </p>

              <p className="mt-5 leading-8 text-blue-950/70">
                Po potrebi je moguće obezbediti daljinski nadzor, upravljanje i
                izveštavanje, kao i povezivanje sa različitim tipovima merenja
                nivoa.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Settings2 size={28} className="shrink-0 text-green-700" />
                <h3 className="text-xl font-semibold">Upravljanje pumpama</h3>
              </div>

              <div className="border-t-2 border-green-600">
                {upravljanje.map((stavka) => (
                  <div
                    key={stavka}
                    className="flex items-start gap-5 border-b border-blue-950/10 py-5"
                  >
                    <Radio size={18} className="mt-1 shrink-0 text-green-700" />

                    <p className="flex-1 leading-7 text-blue-950/75">
                      {stavka}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT SEKCIJA */}
      <section className="bg-green px-6 py-20 text-blue-950 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-950">
              O2 Process Solutions
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Potrebna vam je pomoć
            </h2>

            <p className="mt-4 max-w-xl leading-relaxed text-blue-950">
              Kontaktirajte nas za dodatne informacije o proizvodima i dostupnim
              rešenjima.
            </p>
          </div>

          <Link
            href="/kontakt"
            className="inline-flex shrink-0 items-center gap-5 px-7 py-4 font-semibold text-blue-950 transition-colors duration-300 hover:bg-blue-50"
          >
            Kontaktirajte nas
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
