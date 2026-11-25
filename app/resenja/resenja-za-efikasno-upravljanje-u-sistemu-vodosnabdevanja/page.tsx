import Link from "next/link";
import {
  ArrowUpRight,
  Activity,
  Gauge,
  Droplets,
  Radio,
  Battery,
  ShieldCheck,
  Bluetooth,
  CheckCircle2,
} from "lucide-react";

const mogucnosti = [
  {
    naslov: "Nadzor protoka i pritiska",
    opis: "Praćenje parametara vodovodne mreže radi otkrivanja curenja.",
    icon: Gauge,
  },
  {
    naslov: "Daljinsko očitavanje",
    opis: "Očitavanje mrežnih brojila i upravljanje potrošnjom vode.",
    icon: Activity,
  },
  {
    naslov: "Regulacija pritiska",
    opis: "Kontrola ventila za regulaciju pritiska u vodovodnoj mreži.",
    icon: Droplets,
  },
];

const karakteristike = [
  "Vodonepropusnost IP68",
  "Baterijsko napajanje do 10 godina",
  "GSM / GPRS komunikacija",
  "Interna antena visokih performansi",
  "Mogućnost korišćenja eksterne antene",
  "Bluetooth konfiguracija i dijagnostika",
];

export default function VodosnabdevanjePage() {
  return (
    <main className="min-h-screen bg-blue text-blue-950">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-10">
        {/* BREADCRUMB */}
        <nav className="mb-7 flex flex-wrap items-center gap-2 text-xs text-blue-950/50">
          <Link href="/resenja" className="hover:text-green-700">
            Rešenja
          </Link>
          <span>/</span>
          <span className="text-green-700">Upravljanje vodosnabdevanjem</span>
        </nav>

        {/* UVOD */}
        <section className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
            O2 Process Solutions
          </p>

          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
            Rešenja za efikasno upravljanje u sistemu
            <span className="text-green-700"> vodosnabdevanja</span>
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-blue-950/70">
            Sistemi za prikupljanje podataka, monitoring i daljinsko upravljanje
            mrežama pitke vode. SOFREL LS data logeri omogućavaju efikasan
            nadzor, dijagnostiku i optimizaciju rada vodovodnih sistema.
          </p>
        </section>

        {/* MOGUĆNOSTI */}
        <section className="mb-10">
          <div className="mb-5 border-b border-blue-950/15 pb-4">
            <h2 className="text-2xl font-semibold">
              Sistem za prikupljanje podataka i monitoring
            </h2>
            <p className="mt-2 text-sm leading-6 text-blue-950/65">
              Data logeri LS za mreže pitke vode
            </p>
          </div>

          <p className="mb-6 max-w-4xl leading-7 text-blue-950/70">
            Inovativni i jednostavni za instalaciju, SOFREL LS logeri podataka
            pružaju efikasno rešenje za daljinsko upravljanje i dijagnostiku
            mreža za vodosnabdevanje.
          </p>

          <div className="grid gap-3 md:grid-cols-3">
            {mogucnosti.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.naslov}
                  className="border border-blue-950/10 bg-white p-5"
                >
                  <Icon
                    size={26}
                    strokeWidth={1.6}
                    className="mb-4 text-green-700"
                  />
                  <h3 className="text-lg font-semibold">{item.naslov}</h3>
                  <p className="mt-2 text-sm leading-6 text-blue-950/65">
                    {item.opis}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* UGRADNJA */}
        <section className="mb-10">
          <div className="mb-5 border-b border-blue-950/15 pb-4">
            <h2 className="text-2xl font-semibold">
              Projektovani za zahtevne uslove
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 flex items-center gap-3 text-lg font-semibold">
                <ShieldCheck className="text-green-700" size={23} />
                Ugradnja u zatvorene šahtove
              </h3>

              <p className="text-sm leading-7 text-blue-950/70">
                GSM/GPRS logeri podataka su specijalno dizajnirani za ugradnju u
                zatvorenim šahtovima, uključujući lokacije podložne plavljenju.
                Robusno kućište i pouzdani priključci obezbeđuju potpunu
                vodonepropusnost IP68.
              </p>

              <p className="mt-3 text-sm leading-7 text-blue-950/70">
                Prsten za pritezanje omogućava pristup SIM kartici i bateriji
                direktno na terenu.
              </p>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-3 text-lg font-semibold">
                <Battery className="text-green-700" size={23} />
                Dugotrajan autonoman rad
              </h3>

              <p className="text-sm leading-7 text-blue-950/70">
                Uređaji se napajaju litijumskom baterijom sa deklarisanim
                trajanjem do 10 godina. Njihova interna GSM antena visokih
                performansi posebno je prilagođena radu u zatvorenim šahtovima.
              </p>

              <p className="mt-3 text-sm leading-7 text-blue-950/70">
                Na lokacijama sa slabijim prijemom moguće je koristiti eksternu
                antenu.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-x-6 gap-y-3 border-t border-blue-950/10 pt-5 sm:grid-cols-2 lg:grid-cols-3">
            {karakteristike.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={17} className="shrink-0 text-green-700" />
                <span className="text-sm text-blue-950/75">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PRENOS PODATAKA */}
        <section className="mb-10">
          <div className="mb-5 border-b border-blue-950/15 pb-4">
            <h2 className="text-2xl font-semibold">
              Pouzdanost prenosa podataka
            </h2>
          </div>

          <div className="flex items-start gap-4">
            <Radio size={28} className="mt-1 shrink-0 text-green-700" />

            <div className="space-y-4 text-sm leading-7 text-blue-950/70">
              <p>
                Prijem GSM signala u podzemnim instalacijama, kao što su merne i
                prelivne šahte, može biti oslabljen i do 30 dB. Kompanija
                LACROIX Sofrel razvila je antene visokih performansi prilagođene
                ovim uslovima.
              </p>

              <p>
                SOFREL LS/LT logeri svakodnevno prenose arhivirane vrednosti i
                izveštaje na jednu ili dve PCWin2 SCADA centralne stanice,
                softver za nadzor, OPC servere ili LS veb servere. Operateri
                zatim mogu analizirati podatke i pripremati operativne
                izveštaje.
              </p>

              <p>
                U slučaju promene stanja digitalnog ulaza, prekoračenja
                definisanih vrednosti ili greške senzora, loger može automatski
                poslati alarm na mobilni telefon.
              </p>
            </div>
          </div>
        </section>

        {/* ODRŽAVANJE */}
        <section className="mb-10">
          <div className="mb-5 border-b border-blue-950/15 pb-4">
            <h2 className="text-2xl font-semibold">
              Jednostavna instalacija i održavanje
            </h2>
          </div>

          <div className="flex items-start gap-4">
            <Bluetooth size={28} className="mt-1 shrink-0 text-green-700" />

            <div className="space-y-4 text-sm leading-7 text-blue-950/70">
              <p>
                Lokalno održavanje aktivira se pomoću posebnog ključa. LED
                indikatori različitih boja omogućavaju proveru rada uređaja,
                prisustva SIM kartice, veze sa GSM mrežom i jačine prijema.
              </p>

              <p>
                Bluetooth veza omogućava tehničaru da konfiguriše uređaj bez
                ulaska u šaht. Moguće je izvršiti test GSM komunikacije,
                proveriti dostupne operatere i optimizovati položaj uređaja.
              </p>

              <p>
                Prikupljeni podaci mogu se pregledati i obrađivati na terenu
                putem Bluetooth veze.
              </p>
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
                Kontaktirajte nas za dodatne informacije o proizvodima i
                dostupnim rešenjima.
              </p>
            </div>

            <Link
              href="/kontakt"
              className="inline-flex shrink-0 items-center gap-5  px-7 py-4 font-semibold text-blue-950 transition-colors duration-300 hover:bg-blue-50"
            >
              Kontaktirajte nas
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
