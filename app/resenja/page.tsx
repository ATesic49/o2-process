import Link from "next/link";
import { ArrowUpRight, CircleCheck, FileText } from "lucide-react";

const resenja = [
  "Unapređenje proizvodnih procesa primenom najnovijih tehnologija",
  "Upravljanje procesima",
  "Postrojenja za tretman pitkih i otpadnih voda",
  "Daljinski prenos podataka",
  "Vizuelizacija",
  "Merenje protoka na otvorenim kanalima i delimično ispunjenim cevima",
  "Baterijska napajanja uređaja i logovanje podataka",
];

const linkoviResenja = [
  {
    naziv: "Rešenja za efikasno upravljanje u sistemu vodosnabdevanja",
    href: "/resenja/resenja-za-efikasno-upravljanje-u-sistemu-vodosnabdevanja/",
  },
  {
    naziv: "Rešenja za efikasno upravljanje u kanalizacionim sistemima",
    href: "/resenja/resenja-za-efikasno-upravljanje-u-kanalizacionim-sistemima/",
  },
  {
    naziv: "Profilisana merna suženja prilagođena zahtevu klijenata",
    href: "/resenja/proizvodnja-profilisanih-mernih-suzenja-po-meri/",
  },
  {
    naziv: "Kompaktne crpne stanice po meri",
    href: "/resenja/proizvodnja-kompaktnih-crpnih-stanica-po-meri/",
  },
  { naziv: "Honeywell rešenja", href: "/resenja/honeywell-resenja/" },
  {
    naziv: "Daljinski prenos podataka",
    href: "/resenja/daljinski-prenos-podataka/",
  },
  { naziv: "SCADA", href: "/resenja/scada/" },
  {
    naziv: "Software za praćenje opreme u mreži",
    href: "/resenja/software-za-pracenje-opreme-u-mrezi/",
  },
  {
    naziv: "Merenje količine materijala u silosima",
    href: "/resenja/merenje-kolicine-materijala-u-silosima/",
  },
  {
    naziv: "Kontinualno merenje nivoa mulja u sedimentacionim bazenima",
    href: "/resenja/kontinualno-merenje-nivoa-mulja-u-sedimentacionim-bazenima/",
  },
  {
    naziv: "Sistem za praćenje povratnog pranja filtera",
    href: "/resenja/sistem-za-pracenje-povratnog-pranja-filtera/",
  },
];

const dokumenti = [
  {
    naziv: "Palmer-Bowlus suženja za ovoidne cevovode",
    opis: "Merna suženja namenjena ugradnji u ovoidne cevovode.",
    href: "/MERENJE PROTOKA NA DELIMIČNO ISPUNJENOM OVOIDNOM CEVOVODU—“EGGSHAPE PIPE“.pdf",
  },
  {
    naziv: "Palmer-Bowlus suženja za različite aplikacije",
    opis: "Merna suženja prilagođena različitim aplikacijama i cevovodima.",
    href: "/MERENJE PROTOKA NA DELIMIČNO ISPUNJENOM CEVOVODU.pdf",
  },
];

export default function ResenjaPage() {
  return (
    <main className="min-h-screen bg-blue text-blue-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
        {/* UVOD – originalni svetli dizajn */}
        <div className="mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
            O2 Process Solutions
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Rešenja
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-950/70 md:text-lg">
            Inovativna i pouzdana rešenja za optimizaciju industrijskih procesa,
            upravljanje sistemima, merenje i daljinski nadzor.
          </p>
        </div>

        {/* KATEGORIJE REŠENJA */}
        <section>
          <div className="mb-8 flex items-center justify-between border-b border-blue-950/15 pb-5">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Oblasti primene
            </h2>
            <span className="text-sm text-blue-950/50">07 rešenja</span>
          </div>
          <div className="grid gap-5">
            {resenja.map((resenje) => (
              <div key={resenje} className="flex items-start gap-5">
                <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                <h3 className="flex-1 text-lg leading-snug text-blue-950/70">
                  {resenje}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* MERENJE PROTOKA */}
        <section className="mt-20">
          <div className="mb-7 border-b border-blue-950/15 pb-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-700">
              Specijalizovana rešenja
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Merenje protoka
            </h2>
          </div>
          <p className="max-w-4xl leading-8 text-blue-950/70">
            Merenje protoka u delimično ispunjenim cevima pomoću profilisanih
            mernih suženja Palmer-Bowlus, specijalno prilagođenih za svaku
            konkretnu primenu.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {dokumenti.map((dokument) => (
              <a
                key={dokument.naziv}
                href={dokument.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 border border-blue-950/10 bg-white p-6 transition-colors hover:border-green-600"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-green/10 text-green-700">
                  <FileText size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{dokument.naziv}</h3>
                  <p className="mt-2 text-sm leading-6 text-blue-950/60">
                    {dokument.opis}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-green-700">
                    Pogledaj dokument <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-7 border-l-2 border-green-600 pl-5">
            <h3 className="text-lg font-semibold">
              Merenje protoka na rečnim tokovima i kanalima
            </h3>
            <p className="mt-2 text-sm leading-7 text-blue-950/65">
              Rešenja za merenje protoka na otvorenim vodotokovima i kanalima.
            </p>
          </div>
        </section>

        {/* NAŠA REŠENJA */}
        <section className="mt-20">
          <div className="mb-8 border-b border-blue-950/15 pb-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-700">
              O2 Process Solutions
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">Naša rešenja</h2>
            <p className="mt-3 text-sm leading-7 text-blue-950/60">
              Istražite specijalizovana rešenja za industrijske i
              infrastrukturne sisteme.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {linkoviResenja.map((resenje, index) => (
              <Link
                key={resenje.href}
                href={resenje.href}
                className="group flex items-center gap-4 border border-blue-950/10 bg-white px-6 py-5 transition-all duration-200 hover:border-green-600 hover:shadow-sm"
              >
                <span className="text-xs font-semibold text-green-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="flex-1 text-sm font-semibold leading-6 md:text-base">
                  {resenje.naziv}
                </h3>
                <ArrowUpRight
                  size={19}
                  className="shrink-0 text-green-700 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* KONTAKT SEKCIJA – preko cele širine, kao na Proizvodima */}
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
