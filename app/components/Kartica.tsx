import Image from "next/image";
import React from "react";
import slika from "@/public/imgs/uslugaCev.jpg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const Kartica = () => {
	return (
		<div className="grid grid-cols-1 gap-x-8 gap-y-14 ">
			<Link
				href={"/"}
				className="group block"
			>
				{/* SLIKA */}
				<div className="relative aspect-[16/10] overflow-hidden bg-white">
					<Image
						src={slika}
						alt={""}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover transition-transform duration-700 group-hover:scale-105"
					/>

					<div className="absolute inset-0 bg-blue-950/0 transition-colors duration-300 group-hover:bg-blue-950/10" />

					{/* Broj kategorije */}
					<span className="absolute left-5 top-5 bg-blue-950 px-3 py-2 text-xs font-medium text-white">
						3
					</span>

					{/* Strelica */}
					<div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center bg-green text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
						<ArrowUpRight size={22} />
					</div>
				</div>

				{/* TEKST */}
				<div className="pt-6">
					<h3 className="max-w-xl text-xl font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-green-700 md:text-2xl">
						NASA PONUDA
					</h3>

					<p className="mt-3 max-w-xl text-sm leading-7 text-blue-950/65 md:text-base">
						opis
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
		</div>
	);
};

export default Kartica;
