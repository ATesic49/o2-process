import Link from "next/link";
import { ArrowUpRight, CircleCheck, ArrowRight, FileText } from "lucide-react";

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
		href: "resenja-za-efikasno-upravljanje-u-sistemu-vodosnabdevanja/",
	},
	{
		naziv: "Rešenja za efikasno upravljanje u kanalizacionim sistemima",
		href: "resenja-za-efikasno-upravljanje-u-kanalizacionim-sistemima/",
	},
	{
		naziv: "Profilisana merna suženja prilagođena zahtevu klijenata",
		href: "proizvodnja-profilisanih-mernih-suzenja-po-meri/",
	},
	{
		naziv: "Kompaktne crpne stanice po meri",
		href: "proizvodnja-kompaktnih-crpnih-stanica-po-meri/",
	},
	{
		naziv: "Honeywell rešenja",
		href: "honeywell-resenja/",
	},
	{
		naziv: "Daljinski prenos podataka",
		href: "daljinski-prenos-podataka/",
	},
	{
		naziv: "SCADA",
		href: "scada/",
	},
	{
		naziv: "Software za praćenje opreme u mreži",
		href: "software-za-pracenje-opreme-u-mrezi/",
	},
	{
		naziv: "Merenje količine materijala u silosima",
		href: "merenje-kolicine-materijala-u-silosima/",
	},
	{
		naziv: "Kontinualno merenje nivoa mulja u sedimentacionim bazenima",
		href: "kontinualno-merenje-nivoa-mulja-u-sedimentacionim-bazenima/",
	},
	{
		naziv: "Sistem za praćenje povratnog pranja filtera",
		href: "sistem-za-pracenje-povratnog-pranja-filtera/",
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
		<main className="min-h-screen h-full bg-blue text-blue-950 relative">
			<div
				className="pointer-events-none -z-10 fixed inset-0 opacity-40 "
				style={{
					backgroundImage: `
      linear-gradient(to right, #86efac 1px, transparent 1px),
      linear-gradient(to bottom, #86efac 1px, transparent 1px)
    `,
					backgroundSize: "40px 40px",
				}}
			/>
			<div className="mx-auto max-w-6xl px-5 py-10 md:px-10">
				{/* UVOD */}
				<div className="mb-10">
					<p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
						O2 Process Solutions
					</p>

					<h1 className="text-4xl font-bold tracking-tight md:text-5xl">
						Rešenja
					</h1>

					<p className="mt-4 max-w-3xl text-base leading-7 text-blue-950/70">
						Inovativna i pouzdana rešenja za optimizaciju industrijskih procesa,
						upravljanje sistemima, merenje i daljinski nadzor.
					</p>
				</div>

				{/* KATEGORIJE REŠENJA */}
				<section>
					<div className="mb-5 flex items-center justify-between border-b border-blue-950/15 pb-4">
						<h2 className="text-2xl font-semibold">Oblasti primene</h2>

						<span className="text-sm text-blue-950/50">07 rešenja</span>
					</div>

					<div className="grid gap-4">
						{resenja.map((resenje, index) => (
							<div
								key={resenje}
								className="group flex  items-center gap-5  transition-colors "
							>
								<CircleCheck className="text-green-600 w-4" />

								<h3 className="flex-1  text-lg text-blue-950/70 leading-snug">
									{resenje}
								</h3>
							</div>
						))}
					</div>
				</section>

				{/* MERENJE PROTOKA */}
				<section className="mt-12">
					<div className="mb-6 border-b border-blue-950/15 pb-4">
						<p className="mb-2 text-xs font-semibold uppercase tracking-widest text-green-700">
							Specijalizovana rešenja
						</p>

						<h2 className="text-2xl font-semibold md:text-3xl">
							Merenje protoka
						</h2>
					</div>

					<p className="max-w-4xl leading-7 text-blue-950/70">
						Merenje protoka u delimično ispunjenim cevima pomoću profilisanih
						mernih suženja Palmer-Bowlus, specijalno prilagođenih za svaku
						konkretnu primenu.
					</p>

					{/* DOKUMENTI */}
					<div className="mt-6 grid gap-3 md:grid-cols-2">
						{dokumenti.map((dokument) => (
							<a
								key={dokument.naziv}
								href={dokument.href}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-start gap-4 border border-blue-950/10 bg-white p-5 transition-colors hover:border-green-600"
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
										Pogledaj dokument
										<ArrowUpRight size={16} />
									</span>
								</div>
							</a>
						))}
					</div>

					<div className="mt-6 border-l-2 border-green-600 pl-5">
						<h3 className="text-lg font-semibold">
							Merenje protoka na rečnim tokovima i kanalima
						</h3>

						<p className="mt-2 text-sm leading-7 text-blue-950/65">
							Rešenja za merenje protoka na otvorenim vodotokovima i kanalima.
						</p>
					</div>
				</section>
				<section className="mt-12">
					<div className="mb-6 border-b border-blue-950/15 pb-4">
						<p className="mb-2 text-xs font-semibold uppercase tracking-widest text-green-700">
							O2 Process Solutions
						</p>

						<h2 className="text-2xl font-semibold md:text-3xl">Naša rešenja</h2>

						<p className="mt-2 text-sm text-blue-950/60">
							Istražite specijalizovana rešenja za industrijske i
							infrastrukturne sisteme.
						</p>
					</div>

					<div className="grid gap-3 md:grid-cols-2">
						{linkoviResenja.map((resenje, index) => (
							<a
								key={resenje.href}
								href={resenje.href}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-4 border border-blue-950/10 bg-white px-5 py-4 transition-all duration-200 hover:border-green-600 hover:shadow-sm"
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
							</a>
						))}
					</div>
				</section>
				{/* KONTAKT */}
				<section className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-blue-950/15 pt-7 md:flex-row md:items-center">
					<div>
						<h2 className="text-xl font-semibold">
							Potrebno vam je odgovarajuće rešenje?
						</h2>
						<p className="mt-2 text-sm text-blue-950/65">
							Kontaktirajte nas za više informacija o primeni naših rešenja.
						</p>
					</div>

					<Link
						href="/kontakt"
						className="inline-flex items-center gap-3 bg-green px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
					>
						Kontaktirajte nas
						<ArrowRight size={18} />
					</Link>
				</section>
			</div>
		</main>
	);
}
