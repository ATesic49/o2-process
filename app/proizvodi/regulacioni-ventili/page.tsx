import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Gauge,
  SlidersHorizontal,
  FlaskConical,
  Droplets,
  Check,
} from "lucide-react";
import slika from "@/public/imgs/proizvodPlaceholder.jpg";

const primene = [
  {
    naziv: "Industrijski procesi",
    opis: "Kontrola protoka tečnosti, gasova i pare u industrijskim aplikacijama i procesnim pogonima.",
    icon: Gauge,
  },
  {
    naziv: "Precizna regulacija",
    opis: "Primena u sistemima u kojima je precizna kontrola protoka od ključnog značaja.",
    icon: SlidersHorizontal,
  },
  {
    naziv: "Doziranje i uzorkovanje",
    opis: "Pogodni za injektiranje aditiva i uzimanje uzoraka u istraživačkim i procesnim postrojenjima.",
    icon: FlaskConical,
  },
  {
    naziv: "Hidraulični sistemi",
    opis: "Rešenja za hidraulične sisteme sa niskim protokom i primene sa ograničenim prostorom za ugradnju.",
    icon: Droplets,
  },
];

const karakteristike = [
  "Kontrola protoka tečnosti, gasova i pare",
  "Kompaktna konstrukcija",
  "Primena u sistemima sa niskim protokom",
  "Precizno upravljanje procesnim parametrima",
  "Pogodnost za injektiranje aditiva i uzorkovanje",
  "Ugradnja u prostorno ograničenim uslovima",
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
            <span className="text-green-700">Regulacioni ventili</span>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-green-600" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                  Procesna merna oprema
                </span>
              </div>

              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                Regulacioni
                <span className="block text-green-700">ventili</span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-blue-950/75">
                Regulacioni ventili namenjeni su preciznoj kontroli tečnosti,
                gasova i pare u industrijskim aplikacijama, istraživačkim i
                procesnim pogonima.
              </p>

              <p className="mt-5 leading-8 text-blue-950/65">
                Zahvaljujući kompaktnoj konstrukciji, predstavljaju pogodno
                rešenje za injektiranje aditiva, uzimanje uzoraka i hidraulične
                sisteme sa niskim protokom, kao i za procese u kojima je
                precizna regulacija od posebnog značaja.
              </p>

              <Link
                href="#primena"
                className="mt-10 inline-flex items-center gap-4 bg-green px-7 py-4 font-semibold text-blue-950 transition hover:brightness-110"
              >
                Saznajte više
                <ArrowRight size={19} />
              </Link>
            </div>

            {/* GLAVNA SLIKA */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={slika}
                alt="Industrijski regulacioni ventili"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRIMENA */}
      <section
        id="primena"
        className="scroll-mt-28 bg-blue-950 px-6 py-24 text-white md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
            Oblasti primene
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Precizna kontrola u različitim industrijskim procesima.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-blue-100/75">
            Regulacioni ventili omogućavaju kontrolu protoka u sistemima sa
            različitim procesnim zahtevima, uključujući primene u kojima su
            preciznost i kompaktne dimenzije ključni faktori.
          </p>

          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2">
            {primene.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.naziv} className="bg-blue-950 p-8">
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className="mb-7 text-green-300"
                  />

                  <h3 className="text-xl font-semibold">{item.naziv}</h3>

                  <p className="mt-3 leading-7 text-blue-100/65">{item.opis}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KARAKTERISTIKE */}
      <section className="bg-blue-50 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-green-700">
              Funkcionalne karakteristike
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Kompaktna konstrukcija i precizna regulacija.
            </h2>

            <p className="mt-7 leading-8 text-blue-950/70">
              Kompaktna veličina regulacionih ventila omogućava njihovu primenu
              u sistemima gde su prostor, težina ili dimenzije opreme
              ograničavajući faktori.
            </p>

            <p className="mt-5 leading-8 text-blue-950/70">
              Posebno su pogodni za procese sa niskim protocima, kao i za
              aplikacije koje zahtevaju pažljivu i preciznu kontrolu procesnih
              fluida.
            </p>
          </div>

          <div className="border-t-2 border-green-600">
            {karakteristike.map((stavka) => (
              <div
                key={stavka}
                className="flex items-start gap-5 border-b border-blue-950/10 py-5"
              >
                <Check size={19} className="mt-1 shrink-0 text-green-700" />

                <p className="flex-1 font-medium leading-7">{stavka}</p>
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
