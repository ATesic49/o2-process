import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";

const sekcije = [
	{
		naslov: "Proizvodi",
		opis: "Istražite naš asortiman merne, procesne i automatizacione opreme za različite industrijske primene.",
		href: "/proizvodi",
	},
	{
		naslov: "Rešenja",
		opis: "Inovativna rešenja za optimizaciju industrijskih procesa, upravljanje sistemima, merenje i daljinski nadzor.",
		href: "/resenja",
	},
	{
		naslov: "Servis",
		opis: "Tehnička podrška, održavanje i servis industrijske opreme za pouzdan i dugotrajan rad.",
		href: "/servis",
	},
	{
		naslov: "Inžinjering",
		opis: "Projektovanje i implementacija tehničkih rešenja prilagođenih specifičnim zahtevima vašeg postrojenja.",
		href: "/inzinjering",
	},
	{
		naslov: "Partneri",
		opis: "Sarađujemo sa vodećim proizvođačima industrijske opreme i tehnologija kako bismo našim klijentima pružili kvalitetna rešenja.",
		href: "/partneri",
	},
	{
		naslov: "Industrije",
		opis: "Naša oprema i rešenja nalaze primenu u različitim industrijskim i infrastrukturnim sistemima.",
		href: "/industrije",
	},
	{
		naslov: "O nama",
		opis: "Upoznajte kompaniju O2 Process Solutions, naš pristup radu i posvećenost kvalitetu i inovacijama.",
		href: "/o-nama",
	},
	{
		naslov: "Kontakt",
		opis: "Kontaktirajte naš tim za informacije o proizvodima, tehničku podršku i saradnju.",
		href: "/kontakt",
	},
];

export default function NavPreview({ birac }: { birac: number }) {
	const sekcija = sekcije[birac];

	if (!sekcija) return null;

	return (
		<div className=" max-h-full flex-col justify-center gap-6 px-8 py-8 col-span-3  grid grid-cols-2 overflow-hidden">
			<div>
				<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-700">
					O2 Process Solutions
				</p>

				<h2 className="text-3xl font-bold text-blue-950">{sekcija.naslov}</h2>

				<p className="mt-4 max-w-md text-sm leading-7 text-blue-950/70">
					{sekcija.opis}
				</p>
				<Link
					href={sekcija.href}
					className="group inline-flex w-fit items-center gap-3 bg-green  py-3 text-sm font-semibold mt-28 transition hover:brightness-110"
				>
					Pogledaj {sekcija.naslov.toLowerCase()}
					<ArrowUpRight
						size={18}
						className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
					/>
				</Link>
			</div>

			{/* PROSTOR ZA SLIKU ILI DEKORACIJU */}
			<div className="flex h-48 w-full items-center justify-center border border-dashed border-blue-950/20 bg-white/30">
				<ImageIcon
					size={36}
					className="text-blue-950/25"
				/>
			</div>
		</div>
	);
}
