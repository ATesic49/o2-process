import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import slika from "@/public/imgs/proizvodPlaceholder.jpg";

const proizvodi = [
	{
		broj: "01",
		naziv: "Procesna merna oprema",
		opis: "Instrumentacija i merna oprema za pouzdano praćenje i kontrolu industrijskih procesa.",
		slika: slika,

		href: "https://www.o2ps.rs/procesna-merna-oprema/",
	},
	{
		broj: "02",
		naziv: "Merenje protoka u delimično ispunjenim cevima i kanalima",
		opis: "Specijalizovana rešenja za merenje protoka u delimično ispunjenim cevima i otvorenim kanalima.",
		slika: slika,

		href: "https://www.o2ps.rs/merenje-protoka-na-delimicno-ispunjenim-cevima-i-otvorenim-kanalima/",
	},
	{
		broj: "03",
		naziv: "Data logeri",
		opis: "Uređaji za prikupljanje, beleženje i prenos podataka sa mernih sistema.",
		slika: slika,

		href: "https://www.o2ps.rs/data-logeri/",
	},
	{
		broj: "04",
		naziv: "Displeji i Flow kompjuteri",
		opis: "Uređaji za prikaz, obradu i praćenje mernih podataka u procesnim sistemima.",
		slika: slika,

		href: "https://www.o2ps.rs/displeji-i-flow-kompjuteri/",
	},
	{
		broj: "05",
		naziv: "Pumpe",
		opis: "Pumpna oprema za različite zahteve u industrijskim i infrastrukturnim sistemima.",
		slika: slika,

		href: "https://www.o2ps.rs/pumpe/",
	},
	{
		broj: "06",
		naziv: "Regulacioni ventili",
		opis: "Oprema za preciznu regulaciju protoka, pritiska i drugih procesnih parametara.",
		slika: slika,

		href: "https://www.o2ps.rs/regulacioni-ventili/",
	},
	{
		broj: "07",
		naziv: "Oprema za tretman otpadnih voda i viška mulja",
		opis: "Tehnološka oprema namenjena procesima prečišćavanja otpadnih voda i obrade mulja.",
		slika: slika,

		href: "https://www.o2ps.rs/oprema-za-tretman-otpadnih-voda-i-mulja/",
	},
	{
		broj: "08",
		naziv: "Kompaktne crpne stanice",
		opis: "Kompaktna rešenja za prikupljanje i prepumpavanje otpadnih i drugih voda.",
		slika: slika,

		href: "https://www.o2ps.rs/kompaktne-crpne-stanice/",
	},
];

export default function ProizvodiPage() {
	return (
		<main className="min-h-screen bg-blue text-blue-950">
			{/* HERO */}
			<section className="relative overflow-hidden bg-blue-950 px-6 py-24 text-white md:px-12 md:py-32 lg:px-20">
				{/* Dekorativni element */}
				<div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-white/10" />
				<div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/10" />

				<div className="relative mx-auto max-w-7xl">
					<div className="mb-8 flex items-center gap-3">
						<span className="h-px w-8 bg-green-400" />
						<span className="text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
							O2 Process Solutions / Proizvodi
						</span>
					</div>

					<h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
						Oprema za potrebe
						<span className="block text-green-300">savremene industrije.</span>
					</h1>

					<p className="mt-8 max-w-2xl text-base leading-relaxed text-blue-100/80 md:text-lg">
						Istražite naš proizvodni program namenjen merenju, regulaciji i
						unapređenju industrijskih i infrastrukturnih procesa.
					</p>

					<a
						href="#kategorije"
						className="mt-10 inline-flex items-center gap-5 bg-green px-7 py-4 font-semibold text-white transition-all duration-300 hover:gap-7 hover:brightness-110"
					>
						Pregled proizvoda
						<ArrowRight size={19} />
					</a>
				</div>
			</section>

			{/* UVODNI PASUS */}
			<section className="px-6 py-20 md:px-12 lg:px-20">
				<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-4">
						<span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
							Naš program
						</span>

						<h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
							Tehnologija u službi procesa.
						</h2>
					</div>

					<div className="lg:col-span-8">
						<p className="max-w-3xl text-lg leading-8 text-blue-950/70">
							O2 Process Solutions predstavlja širok asortiman industrijske
							opreme i tehnoloških rešenja namenjenih različitim procesnim
							zahtevima. Naš proizvodni program obuhvata merne instrumente,
							sisteme za prikupljanje podataka, pumpe, regulacione ventile i
							opremu za upravljanje vodama.
						</p>

						<p className="mt-5 max-w-3xl text-base leading-8 text-blue-950/60">
							Ovde možete dodati dodatni pasus o kompaniji, partnerima,
							proizvođačima koje zastupate, kvalitetu opreme i oblastima
							primene.
						</p>
					</div>
				</div>
			</section>

			{/* KATEGORIJE */}
			<section
				id="kategorije"
				className="scroll-mt-28 px-6 pb-28 md:px-12 lg:px-20"
			>
				<div className="mx-auto max-w-7xl">
					<div className="mb-12 flex flex-wrap items-end justify-between gap-5 border-b border-blue-950/15 pb-6">
						<div>
							<span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
								Istražite ponudu
							</span>

							<h2 className="mt-3 text-3xl font-semibold md:text-4xl">
								Kategorije proizvoda
							</h2>
						</div>

						<span className="text-sm text-blue-950/50">08 kategorija</span>
					</div>

					<div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
						{proizvodi.map((proizvod) => (
							<Link
								key={proizvod.broj}
								href={proizvod.href}
								className="group block"
							>
								{/* SLIKA */}
								<div className="relative aspect-[16/10] overflow-hidden bg-white">
									<Image
										src={proizvod.slika}
										alt={proizvod.naziv}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>

									<div className="absolute inset-0 bg-blue-950/0 transition-colors duration-300 group-hover:bg-blue-950/10" />

									{/* Broj kategorije */}
									<span className="absolute left-5 top-5 bg-blue-950 px-3 py-2 text-xs font-medium text-white">
										{proizvod.broj}
									</span>

									{/* Strelica */}
									<div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center bg-green text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
										<ArrowUpRight size={22} />
									</div>
								</div>

								{/* TEKST */}
								<div className="pt-6">
									<h3 className="max-w-xl text-xl font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-green-700 md:text-2xl">
										{proizvod.naziv}
									</h3>

									<p className="mt-3 max-w-xl text-sm leading-7 text-blue-950/65 md:text-base">
										{proizvod.opis}
									</p>

									<div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-700">
										Pogledajte proizvode
										<ArrowUpRight
											size={17}
											className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
										/>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* KONTAKT SEKCIJA */}
			<section className="bg-green px-6 py-20 text-white md:px-12 lg:px-20">
				<div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
					<div>
						<span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
							O2 Process Solutions
						</span>

						<h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
							Potrebna vam je pomoć pri izboru opreme?
						</h2>

						<p className="mt-4 max-w-xl leading-relaxed text-white/80">
							Kontaktirajte nas za dodatne informacije o proizvodima i dostupnim
							rešenjima.
						</p>
					</div>

					<Link
						href="/kontakt"
						className="inline-flex shrink-0 items-center gap-5 bg-white px-7 py-4 font-semibold text-blue-950 transition-colors duration-300 hover:bg-blue-50"
					>
						Kontaktirajte nas
						<ArrowUpRight size={20} />
					</Link>
				</div>
			</section>
		</main>
	);
}
