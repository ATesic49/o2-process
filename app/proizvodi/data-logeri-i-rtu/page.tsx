import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	ArrowUpRight,
	Check,
	Activity,
	Radio,
	Battery,
	Droplets,
	Gauge,
	Waves,
	ShieldCheck,
} from "lucide-react";
import slika from "@/public/imgs/proizvodPlaceholder.jpg";
const slike = [
	{
		src: "https://www.o2ps.rs/wp-content/uploads/2018/08/schema_compatibilites_instrum_ep-1.png",
		alt: "Data logeri za vodovodne mreže",
	},
	{
		src: "https://www.o2ps.rs/wp-content/uploads/2018/08/schema_compatibilites_instrum_eaux_usees-1.png",
		alt: "Data logeri za kanalizacione sisteme",
	},
];

const karakteristike = [
	{
		naziv: "Merenje nivoa",
		opis: "Kontinuirano praćenje nivoa vode u mreži.",
		icon: Waves,
	},
	{
		naziv: "Merenje protoka",
		opis: "Praćenje i proračun protoka u sistemu.",
		icon: Activity,
	},
	{
		naziv: "Praćenje pritiska",
		opis: "Nadzor pritiska u vodovodnim mrežama.",
		icon: Gauge,
	},
	{
		naziv: "Detekcija prelivanja",
		opis: "Praćenje pojave i trajanja prelivanja.",
		icon: Droplets,
	},
	{
		naziv: "Daljinski prenos",
		opis: "Slanje prikupljenih podataka centralnom sistemu.",
		icon: Radio,
	},
	{
		naziv: "Autonomni rad",
		opis: "Baterijsko napajanje za dugotrajan rad.",
		icon: Battery,
	},
];

const funkcije = [
	"Samonadgledanje i kontinuirana dijagnostika",
	"Nadzor kanalizacionih sistema",
	"Detekcija i evidentiranje prelivanja",
	"Automatsko određivanje intervala merenja",
	"Merenje nivoa i proračun protoka",
	"Prilagođavanje intervala uzorkovanja",
	"Beleženje podataka i detekcija alarma",
	"Integracija analognih i digitalnih merenja",
];

const modeli = [
	{
		ime: "LT-LS",
		opis: "Data logeri za nadzor vodovodnih, kanalizacionih i atmosferskih sistema.",
		href: "#lt-ls",
	},
	{
		ime: "LT-US",
		opis: "Uređaji za praćenje nivoa, protoka i prelivanja u kanalizacionim sistemima.",
		href: "#lt-us",
	},
	{
		ime: "Baterijski data logeri",
		opis: "Pregled modela LS10, LS42, LS-FLOW, LS-P i LS-V.",
		href: "https://www.o2ps.rs/baterijski-data-loggeri/",
	},
];

export default function DataLogeriPage() {
	return (
		<main className="min-h-screen bg-blue-50 text-blue-950">
			{/* UVOD */}
			<section className="px-6 pb-16 pt-16 md:px-12 lg:px-12 lg:pt-16">
				<div className="mx-auto max-w-7xl">
					<nav className="mb-12 flex flex-wrap items-center gap-2 text-sm text-blue-950/50">
						<Link
							href="/proizvodi"
							className="hover:text-green-700"
						>
							Proizvodi
						</Link>
						<span>/</span>
						<span className="text-green-700">Data logeri i RTU</span>
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
								Data logeri
								<span className="block text-green-700">i RTU</span>
							</h1>

							<p className="mt-8 text-lg leading-8 text-blue-950/75">
								Uređaji za automatsko prikupljanje i beleženje podataka o nivou,
								protoku, pritisku i regulaciji ventila u vodovodnim i
								kanalizacionim mrežama.
							</p>

							<p className="mt-5 leading-8 text-blue-950/65">
								Prikupljeni podaci mogu se prenositi u centralizovani sistem
								putem podržanih komunikacionih tehnologija. Baterijsko napajanje
								omogućava dugotrajan autonoman rad i primenu na teško dostupnim
								lokacijama.
							</p>

							<div className="mt-10 flex flex-wrap gap-3">
								{["IP68", "GSM / GPRS", "Baterijski rad"].map((item) => (
									<span
										key={item}
										className="border border-blue-950/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider"
									>
										{item}
									</span>
								))}
							</div>

							<Link
								href="#modeli"
								className="mt-10 inline-flex items-center gap-4 bg-green px-7 py-4 font-semibold text-green-600 transition hover:brightness-110"
							>
								Pogledajte modele
								<ArrowRight size={19} />
							</Link>
						</div>

						{/* GLAVNA SLIKA */}
						<div className="relative aspect-square overflow-hidden  ">
							<Image
								src={slika}
								alt={slike[0].alt}
								fill
								unoptimized
								priority
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-contain p-4"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* GALERIJA */}
			<section className="px-6 py-16 md:px-12 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<div className="mb-8 flex items-center justify-between gap-5">
						<div>
							<span className="text-xs font-semibold uppercase tracking-widest text-green-700">
								Oprema i primena
							</span>
							<h2 className="mt-3 text-3xl font-semibold">Pregled sistema</h2>
						</div>
						<span className="text-sm text-blue-950/50">01 / 02</span>
					</div>

					<div className="grid gap-5 md:grid-cols-2">
						{slike.map((slika, index) => (
							<div
								key={slika.src}
								className="overflow-hidden bg-white"
							>
								<div className="relative aspect-[4/3]">
									<Image
										src={slika.src}
										alt={slika.alt}
										fill
										unoptimized
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-contain p-4"
									/>
								</div>
								<p className="border-t border-blue-950/10 p-5 text-sm font-medium">
									{index === 0
										? "Instrumentacija vodovodnih mreža"
										: "Instrumentacija kanalizacionih mreža"}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FUNKCIONALNOSTI */}
			<section className="bg-blue-950 px-6 py-24 text-white md:px-12 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
						Funkcionalne karakteristike
					</span>

					<h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
						Kontrola procesa zasnovana na pouzdanim podacima.
					</h2>

					<p className="mt-6 max-w-3xl leading-8 text-blue-100/75">
						U kombinaciji sa odgovarajućim senzorima, data logeri omogućavaju
						merenje različitih parametara i kontinuiran nadzor sistema.
					</p>

					<div className="mt-14 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
						{karakteristike.map((item) => {
							const Icon = item.icon;

							return (
								<div
									key={item.naziv}
									className="bg-blue-950 p-8"
								>
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

			{/* DETALJI */}
			<section className="px-6 py-24 md:px-12 lg:px-20">
				<div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
					<div>
						<span className="text-xs font-semibold uppercase tracking-widest text-green-700">
							Nadzor i upravljanje
						</span>

						<h2 className="mt-4 text-3xl font-semibold md:text-4xl">
							Funkcije sistema
						</h2>

						<p className="mt-7 leading-8 text-blue-950/70">
							Data logeri namenjeni su nadgledanju sistema vodosnabdevanja,
							kanalizacionih kolektora i mreža za odvođenje atmosferskih voda.
						</p>

						<p className="mt-5 leading-8 text-blue-950/70">
							Mogu se povezati sa ultrazvučnim ili hidrostatskim sondama za
							merenje nivoa, kao i sa drugim kompatibilnim uređajima preko
							analognih 4–20 mA i digitalnih ulaza.
						</p>
					</div>

					<div className="border-t-2 border-green-600">
						{funkcije.map((funkcija, index) => (
							<div
								key={funkcija}
								className="flex items-start gap-5 border-b border-blue-950/10 py-4"
							>
								<span className="pt-1 text-xs text-green-700">
									{String(index + 1).padStart(2, "0")}
								</span>
								<p className="flex-1 font-medium">{funkcija}</p>
								<Check
									size={18}
									className="shrink-0 text-green-700"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* POJEDINAČNI TIPOVI */}
			<section className="bg-white px-6 py-24 md:px-12 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<div className="mb-14">
						<span className="text-xs font-semibold uppercase tracking-widest text-green-700">
							Tipovi uređaja
						</span>
						<h2 className="mt-4 text-3xl font-semibold md:text-4xl">
							Specijalizovana rešenja
						</h2>
					</div>

					<div className="grid gap-10 lg:grid-cols-2">
						<article
							id="lt-ls"
							className="scroll-mt-28"
						>
							<div className="mb-6 inline-flex items-center gap-3 text-green-700">
								<ShieldCheck size={24} />
								<span className="text-xs font-semibold tracking-widest">
									01 / VODOVODNI SISTEMI
								</span>
							</div>

							<h3 className="text-3xl font-semibold">LT-LS data logeri</h3>

							<p className="mt-5 leading-8 text-blue-950/70">
								LT-LS uređaji namenjeni su nadzoru sistema za pitku vodu, kao i
								kanalizacionih i atmosferskih mreža.
							</p>

							<p className="mt-4 leading-8 text-blue-950/70">
								Odlikuju ih IP68 zaštita, autonomno baterijsko napajanje i
								komunikacioni modem. Predviđeni su i za ugradnju u vlažne
								šahtove i podzemne instalacije.
							</p>
						</article>

						<article
							id="lt-us"
							className="scroll-mt-28"
						>
							<div className="mb-6 inline-flex items-center gap-3 text-green-700">
								<Waves size={24} />
								<span className="text-xs font-semibold tracking-widest">
									02 / KANALIZACIONI SISTEMI
								</span>
							</div>

							<h3 className="text-3xl font-semibold">LT-US data logeri</h3>

							<p className="mt-5 leading-8 text-blue-950/70">
								LT-US uređaji omogućavaju kontinuirano praćenje nivoa, proračun
								protoka i detekciju prelivanja u kanalizacionim sistemima.
							</p>

							<p className="mt-4 leading-8 text-blue-950/70">
								Uz kompatibilne ultrazvučne ili hidrostatske sonde pogodni su za
								nadzor kolektora i kanalizacionih cevi. Omogućavaju dijagnostiku
								i evidentiranje alarmnih događaja.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* LINKOVI KA MODELIMA */}
			<section
				id="modeli"
				className="scroll-mt-28 px-6 py-24 md:px-12 lg:px-20"
			>
				<div className="mx-auto max-w-7xl">
					<div className="mb-12 flex flex-wrap items-end justify-between gap-6">
						<div>
							<span className="text-xs font-semibold uppercase tracking-widest text-green-700">
								Katalog
							</span>
							<h2 className="mt-4 text-3xl font-semibold md:text-4xl">
								Istražite proizvode
							</h2>
						</div>
					</div>

					<div className="grid gap-5 md:grid-cols-3">
						{modeli.map((model, index) => (
							<Link
								key={model.ime}
								href={model.href}
								className="group flex min-h-64 flex-col justify-between border border-blue-950/10 bg-white p-7 transition-all duration-300 hover:border-green-600 hover:shadow-lg"
							>
								<div>
									<div className="mb-8 flex items-center justify-between">
										<span className="text-xs font-medium text-green-700">
											{String(index + 1).padStart(2, "0")}
										</span>
										<ArrowUpRight
											size={23}
											className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
										/>
									</div>

									<h3 className="text-xl font-semibold">{model.ime}</h3>

									<p className="mt-4 leading-7 text-blue-950/65">
										{model.opis}
									</p>
								</div>

								<span className="mt-8 text-sm font-semibold text-green-700">
									Saznajte više
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* KONTAKT */}
			<section className="bg-green px-6 py-20 text-white md:px-12 lg:px-20">
				<div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
					<div>
						<h2 className="text-3xl font-semibold md:text-4xl">
							Potrebna vam je pomoć pri izboru opreme?
						</h2>
						<p className="mt-4 max-w-2xl text-white/80">
							Kontaktirajte O2 Process Solutions za dodatne informacije o
							proizvodima i mogućnostima primene.
						</p>
					</div>

					<Link
						href="/kontakt"
						className="inline-flex shrink-0 items-center gap-4 bg-white px-7 py-4 font-semibold text-blue-950 transition hover:bg-blue-50"
					>
						Kontakt
						<ArrowUpRight size={20} />
					</Link>
				</div>
			</section>
		</main>
	);
}
