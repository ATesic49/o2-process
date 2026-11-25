import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Factory,
  Building2,
  House,
  ShieldCheck,
  Leaf,
  Cpu,
  BadgeCheck,
  Wrench,
  Headset,
  Check,
} from "lucide-react";
import slika from "@/public/imgs/proizvodPlaceholder.jpg";

const samoa = [
  {
    naziv: "Industrijska primena",
    opis: "Visoka pouzdanost i dug vek trajanja.",
    icon: Factory,
  },
  {
    naziv: "Komercijalna primena",
    opis: "Efikasnost i ekonomičnost.",
    icon: Building2,
  },
  {
    naziv: "Kućna upotreba",
    opis: "Lakoća korišćenja i održavanja.",
    icon: House,
  },
];

const pentair = [
  {
    naziv: "Prilagođena rešenja",
    opis: "Rešenja za građevinarstvo, poljoprivredu i domaćinstva.",
    icon: ShieldCheck,
  },
  {
    naziv: "Ekološka prihvatljivost",
    opis: "Očuvanje resursa i smanjenje troškova energije.",
    icon: Leaf,
  },
  {
    naziv: "Visoka tehnologija",
    opis: "Savremeni dizajn i napredna tehnička rešenja.",
    icon: Cpu,
  },
];

const prednosti = [
  {
    naziv: "Kvalitet",
    opis: "Svi naši proizvodi prolaze rigorozne testove kvaliteta.",
    icon: BadgeCheck,
  },
  {
    naziv: "Pouzdanost",
    opis: "Garantujemo pouzdanost i dug vek trajanja.",
    icon: Wrench,
  },
  {
    naziv: "Podrška",
    opis: "Naš tim stručnjaka je uvek dostupan za konsultacije i podršku.",
    icon: Headset,
  },
];

export default function PumpePage() {
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
            <span className="text-green-700">Pumpe</span>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-green-600" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                  Industrijska oprema
                </span>
              </div>

              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                Naša ponuda
                <span className="block text-green-700">pumpi</span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-blue-950/75">
                Kao distributer za brendove <strong>Samoa</strong> i{" "}
                <strong>Pentair Jung</strong>, ponosni smo što možemo da vam
                ponudimo širok spektar visokokvalitetnih pumpi koje
                zadovoljavaju različite potrebe i industrije.
              </p>

              <p className="mt-5 leading-8 text-blue-950/65">
                Naša ponuda obuhvata pumpna rešenja namenjena industrijskoj,
                komercijalnoj i kućnoj primeni, uz fokus na kvalitet, pouzdanost
                i dugotrajan rad.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Samoa", "Pentair Jung"].map((brend) => (
                  <span
                    key={brend}
                    className="border border-blue-950/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                  >
                    {brend}
                  </span>
                ))}
              </div>
            </div>

            {/* GLAVNA SLIKA */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={slika}
                alt="Industrijske pumpe Samoa i Pentair Jung"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRENDOVI */}
      <section
        id="brendovi"
        className="scroll-mt-28 bg-blue-950 px-6 py-24 text-white md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
            Naši brendovi
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Pouzdana pumpna rešenja za različite potrebe.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-blue-100/75">
            U saradnji sa brendovima Samoa i Pentair Jung nudimo rešenja za
            širok spektar primena, od industrijskih postrojenja do komercijalnih
            i kućnih sistema.
          </p>

          {/* SAMOA */}
          <div className="mt-16">
            <div className="mb-8">
              <h3 className="text-3xl font-semibold">Samoa</h3>

              <p className="mt-4 max-w-3xl leading-8 text-blue-100/70">
                Samoa je poznat po inovativnim rešenjima i kvalitetnim pumpama
                koje se koriste širom sveta.
              </p>
            </div>

            <div className="grid gap-px bg-white/15 md:grid-cols-3">
              {samoa.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.naziv} className="bg-blue-950 p-8">
                    <Icon
                      size={30}
                      strokeWidth={1.5}
                      className="mb-7 text-green-300"
                    />

                    <h4 className="text-xl font-semibold">{item.naziv}</h4>

                    <p className="mt-3 leading-7 text-blue-100/65">
                      {item.opis}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PENTAIR JUNG */}
          <div className="mt-16">
            <div className="mb-8">
              <h3 className="text-3xl font-semibold">Pentair Jung</h3>

              <p className="mt-4 max-w-3xl leading-8 text-blue-100/70">
                Pentair Jung pumpe su sinonim za izdržljivost i efikasnost, uz
                savremena tehnička rešenja prilagođena različitim zahtevima
                korisnika.
              </p>
            </div>

            <div className="grid gap-px bg-white/15 md:grid-cols-3">
              {pentair.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.naziv} className="bg-blue-950 p-8">
                    <Icon
                      size={30}
                      strokeWidth={1.5}
                      className="mb-7 text-green-300"
                    />

                    <h4 className="text-xl font-semibold">{item.naziv}</h4>

                    <p className="mt-3 leading-7 text-blue-100/65">
                      {item.opis}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PREDNOSTI */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-700">
              O2 Process Solutions
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Zašto izabrati naše pumpe?
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-blue-950/70">
              Kvalitetna oprema, pouzdan rad i stručna podrška predstavljaju
              osnovu naše ponude.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {prednosti.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.naziv}
                  className="border-t-2 border-green-600 pt-7"
                >
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className="mb-6 text-green-700"
                  />

                  <h3 className="text-xl font-semibold">{item.naziv}</h3>

                  <p className="mt-4 leading-8 text-blue-950/70">{item.opis}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ZAVRŠNA SEKCIJA */}
      <section className="bg-blue-50 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-green-700">
              Naša ponuda
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Pravo pumpno rešenje za vašu primenu.
            </h2>

            <p className="mt-7 leading-8 text-blue-950/70">
              Bilo da su vam potrebne pumpe za industrijsku, komercijalnu ili
              kućnu primenu, naš tim vam može pomoći pri izboru odgovarajućeg
              rešenja.
            </p>
          </div>

          <div className="border-t-2 border-green-600">
            {[
              "Industrijska primena",
              "Komercijalni sistemi",
              "Kućna upotreba",
              "Građevinarstvo",
              "Poljoprivreda",
            ].map((oblast) => (
              <div
                key={oblast}
                className="flex items-center gap-5 border-b border-blue-950/10 py-5"
              >
                <Check size={19} className="shrink-0 text-green-700" />

                <p className="flex-1 font-medium">{oblast}</p>
              </div>
            ))}
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
