import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import slika from "@/public/imgs/proizvodPlaceholder.jpg";
const modeli = [
	{
		naziv: "LS10 i LS42",
		opis: "Pretraživanje curenja i nadzor pritiska u vodovodnim mrežama.",
		veza: "SMS, GPRS, 3G",
	},
	{
		naziv: "LS-FLOW",
		opis: "Merenje protoka i daljinsko očitavanje velikih potrošača.",
		veza: "GPRS, 3G",
	},
	{
		naziv: "LS-P",
		opis: "Nadzor pritiska uzvodno i nizvodno od regulacionih ventila.",
		veza: "SMS, GPRS, 3G",
	},
	{
		naziv: "LS-V",
		opis: "Upravljanje ventilima za regulaciju pritiska.",
		veza: "GPRS, 3G",
	},
];

const karakteristike = [
	"Konfiguracija putem SOFTOOLS-a",
	"Bluetooth i SMS dijagnostika",
	"4 digitalna ulaza (DI)",
	"2 opciona analogna ulaza (4–20 mA)",
	"Proračun dnevnog i noćnog protoka",
	"Alarmi pri dostizanju pragova",
	"Arhiviranje do 50.000 vrednosti",
	"Prenos podataka u SCADA sistem",
];

export default function BaterijskiDataLogeri() {
	return (
		<main className="bg-blue text-blue-950">
			<div className="mx-auto max-w-6xl px-5 py-10 md:px-10">
				{/* NASLOV */}
				<nav className="mb-5 text-xs text-blue-950/50">
					<Link href="/proizvodi">Proizvodi</Link>
					{" / "}
					<Link href="/proizvodi/data-logeri">Data logeri</Link>
					{" / Baterijski data logeri"}
				</nav>

				<h1 className="text-3xl font-bold md:text-4xl">
					Baterijski data logeri
				</h1>

				<p className="mt-3 max-w-4xl leading-7 text-blue-950/70">
					Baterijski data logeri namenjeni su automatskom prikupljanju i prenosu
					podataka iz vodovodnih mreža. Omogućavaju praćenje protoka, pritiska,
					potrošnje i upravljanje regulacionim ventilima.
				</p>

				{/* FOTOGRAFIJE */}
				<div className="mt-7 grid gap-3 md:grid-cols-3">
					<div className="relative aspect-[4/3] bg-white md:col-span-2">
						<Image
							src={slika}
							alt="Baterijski data logeri"
							fill
							className="object-contain p-4"
						/>
					</div>

					<div className="grid grid-cols-2 gap-3 md:grid-cols-1">
						<div className="relative min-h-32 bg-white">
							<Image
								src={slika}
								alt="Primena u vodovodnim mrežama"
								fill
								className="object-contain p-3"
							/>
						</div>

						<div className="relative min-h-32 bg-white">
							<Image
								src={slika}
								alt="Primena u kanalizacionim mrežama"
								fill
								className="object-contain p-3"
							/>
						</div>
					</div>
				</div>

				{/* MODELI */}
				<section className="mt-10">
					<h2 className="mb-5 text-2xl font-semibold">Modeli i primena</h2>

					<div className="grid gap-3 md:grid-cols-2">
						{modeli.map((model) => (
							<div
								key={model.naziv}
								className="border border-blue-950/10 bg-white p-5"
							>
								<h3 className="text-lg font-semibold text-green-700">
									{model.naziv}
								</h3>
								<p className="mt-2 text-sm leading-6 text-blue-950/70">
									{model.opis}
								</p>
								<p className="mt-3 text-xs text-blue-950/50">
									Komunikacija: {model.veza}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* KARAKTERISTIKE */}
				<section className="mt-10">
					<h2 className="mb-5 text-2xl font-semibold">
						Tehničke karakteristike
					</h2>

					<div className="grid gap-x-8 gap-y-3 md:grid-cols-2">
						{karakteristike.map((item) => (
							<div
								key={item}
								className="flex items-start gap-3"
							>
								<Check
									size={17}
									className="mt-1 shrink-0 text-green-700"
								/>
								<span className="text-sm leading-6 text-blue-950/75">
									{item}
								</span>
							</div>
						))}
					</div>
				</section>

				{/* KONTAKT */}
				<div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-blue-950/15 pt-6">
					<p className="font-medium">Potrebne su vam dodatne informacije?</p>

					<Link
						href="/kontakt"
						className="inline-flex items-center gap-2 bg-green px-5 py-3 text-sm font-semibold text-green-600  hover:underline underline-offset-4"
					>
						Kontaktirajte nas
						<ArrowUpRight size={17} />
					</Link>
				</div>
			</div>
		</main>
	);
}
