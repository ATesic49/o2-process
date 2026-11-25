import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Target,
  SlidersHorizontal,
  ShieldCheck,
  ChartNoAxesCombined,
  Check,
} from "lucide-react";
import slika from "@/public/imgs/proizvodPlaceholder.jpg";

const prednosti = [
  {
    naziv: "Visoka preciznost",
    opis: "Naši uređaji omogućavaju tačno merenje nivoa u različitim industrijskim okruženjima.",
    icon: Target,
  },
  {
    naziv: "Fleksibilnost",
    opis: "Pogodni su za primenu u širokom spektru industrija, uključujući energetiku, vodovod, hemijsku proizvodnju i druge.",
    icon: SlidersHorizontal,
  },
  {
    naziv: "Povećana sigurnost",
    opis: "Automatska upozorenja i alarmi omogućavaju brzo reagovanje na opasne promene nivoa.",
    icon: ShieldCheck,
  },
  {
    naziv: "Optimizacija procesa",
    opis: "Pomažu u kontroli i optimizaciji tokova materijala, čime doprinosimo smanjenju gubitaka i povećanju efikasnosti.",
    icon: ChartNoAxesCombined,
  },
];

const oblasti = [
  "Energetika",
  "Vodovodni sistemi",
  "Hemijska proizvodnja",
  "Proizvodni procesi",
  "Distribucija materijala",
  "Skladištenje tečnosti i čvrstih materijala",
];

export default function MerenjeNivoaPage() {
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
            <span className="text-green-700">Merenje nivoa</span>
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
                Merenje
                <span className="block text-green-700">nivoa</span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-blue-950/75">
                Merenje nivoa je ključno za efikasno upravljanje industrijskim
                procesima i obezbeđivanje optimalnih uslova za proizvodnju,
                distribuciju i skladištenje.
              </p>

              <p className="mt-5 leading-8 text-blue-950/65">
                Naši sistemi za merenje nivoa omogućavaju precizno praćenje
                nivoa tečnosti, čvrstih materijala i drugih supstanci, što je od
                suštinskog značaja za očuvanje sigurnosti, efikasnosti i
                kvaliteta proizvodnje.
              </p>

              <Link
                href="#prednosti"
                className="mt-10 inline-flex items-center gap-4 bg-green px-7 py-4 font-semibold text-blue-950 transition hover:brightness-110"
              >
                Saznajte više
                <ArrowUpRight size={19} />
              </Link>
            </div>

            {/* GLAVNA SLIKA */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={slika}
                alt="Oprema za merenje nivoa"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PREDNOSTI */}
      <section
        id="prednosti"
        className="scroll-mt-28 bg-blue-950 px-6 py-24 text-white md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
            Funkcionalne karakteristike
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Prednosti sistema za merenje nivoa.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-blue-100/75">
            Precizna merenja, pouzdan nadzor i efikasno upravljanje procesima
            predstavljaju osnovu savremenih industrijskih sistema.
          </p>

          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2">
            {prednosti.map((item) => {
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

      {/* OBLASTI PRIMENE */}
      <section className="bg-blue-50 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-green-700">
              Industrijska primena
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Rešenja za različite industrijske procese.
            </h2>

            <p className="mt-7 leading-8 text-blue-950/70">
              Sistemi za merenje nivoa koriste se u različitim industrijskim
              okruženjima, od proizvodnih i distributivnih sistema do
              skladištenja materijala.
            </p>

            <p className="mt-5 leading-8 text-blue-950/70">
              Pouzdano praćenje nivoa omogućava bolju kontrolu procesa,
              povećanje sigurnosti i efikasnije korišćenje raspoloživih resursa.
            </p>
          </div>

          <div className="border-t-2 border-green-600">
            {oblasti.map((oblast) => (
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
