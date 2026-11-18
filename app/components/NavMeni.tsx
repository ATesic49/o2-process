"use client";

import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { typeListaMeni } from "./listeMenija";
import { listaMenija as listaMenij } from "./listeMenija";
import NavPreview from "./NavPreview";
const list = [
	"proizvodi",
	"rešenja",
	"servis",
	"inžinjering",
	"partneri",
	"industrije",
	"o nama",
	"kontakt",
];
function handleSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/đ/g, "dj")
		.replace(/š/g, "s")
		.replace(/č/g, "c")
		.replace(/ć/g, "c")
		.replace(/ž/g, "z")
		.trim()
		.replace(/\s+/g, "-");
}
const nasaLista: string[] = [];
nasaLista.push(list[0]);
nasaLista.push(list[1]);
nasaLista.push(list[3]);
nasaLista.push(list[5]);

const Kartica = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex col-span-2 justify-start w-full items-center text-left text-balance -py-1 my-2">
			{children}
		</div>
	);
};

const TextHandler = ({ chts }: { chts: string }) => {
	const [hover, setHover] = useState(false);

	if (!chts) return null;

	const isLong = chts.length > 30;
	const prikazaniTekst = isLong && !hover ? chts.slice(0, 30) + "..." : chts;

	return (
		<span
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{prikazaniTekst}
		</span>
	);
};

const NavMeni = ({
	otvoren,
	ime,
	setOtvoren,
	birac,
	setBirac,
}: {
	birac: number;
	setBirac: Dispatch<SetStateAction<number>>;
	ime: string;
	otvoren: boolean;
	setOtvoren: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [desnoState, setDesnoState] = useState(0);
	const [fade, setFade] = useState(false);
	const listaMenija = listaMenij[birac];

	useEffect(() => {
		setFade(true);
		const t = setTimeout(() => setFade(false), 200);
		return () => clearTimeout(t);
	}, [desnoState]);

	return (
		// <AnimatePresence>
		// 	{otvoren && (
		// 		<motion.div
		// 			className="absolute right-0 top-full h-screen bg-blue-100 z-1000 grid grid-cols-4  content-start p-8 left-0 gap-4 gap-x-8"
		// 			initial={{ opacity: 0, y: -20 }}
		// 			animate={{ opacity: 1, y: 0 }}
		// 			exit={{ opacity: 0, y: 20 }}
		// 		>
		// // 			{listaMenija.map((element) => {
		// // 				const elNum = listaMenija.indexOf(element);
		// // 				if (elNum === 2) {
		// // 					return (
		// // 						<React.Fragment key={elNum}>
		// // 							<div
		// // 								style={{
		// // 									gridRow: `span ${Math.ceil(listaMenija.length / 2)}`,
		// // 								}}
		// // 								className="border-l-2 col-span-3 border-gray-400 w-full"
		// // 							>
		// // 								<motion.div
		// // 									className="w-full py-4 flex flex-col gap-8 p-12"
		// // 									animate={fade ? { opacity: 0 } : { opacity: 1 }}
		// // 								>
		// // 									{listaMenija[desnoState].desno}
		// // 								</motion.div>
		// // 							</div>
		// // 							<Kartica>
		// // 								<Link
		// // 									className="text-gray-600  text-left font-semibold text-base hover:underline underline-offset-2"
		// // 									onMouseEnter={() => setDesnoState(elNum)}
		// // 									href={`/${ime}/${element.ime.replaceAll(" ", "-").toLowerCase()}`}
		// // 								>
		// // 									{element.ime}
		// // 								</Link>
		// // 							</Kartica>
		// // 						</React.Fragment>
		// // 					);
		// // 				}
		// // 				return (
		// // 					<Kartica key={elNum}>
		// // 						<Link
		// // 							onMouseEnter={() => setDesnoState(elNum)}
		// // 							className="text-gray-600 font-semibold text-base hover:underline underline-offset-2"
		// // 							href={`/${ime}/${element.ime.replaceAll(" ", "-").toLowerCase()}`}
		// // 						>
		// // 							{element.ime}
		// // 						</Link>
		// // 					</Kartica>
		// // 				);
		// // 			})}
		// 		</motion.div>
		// 	)}
		// </AnimatePresence>
		<AnimatePresence>
			{otvoren && (
				<motion.div className="absolute right-0 top-full h-screen bg-blue-100 z-1000 grid grid-cols-4  md:p-8 lg left-0 gap-4 gap-x-8 overflow-hidden">
					<div className="flex border-r border-blue-950 flex-col gap-4 h-auto items-start font-medium md:text-lg ">
						{list.map((li, i) => (
							<Link
								key={i}
								className={`${birac == i && "font-extrabold"} capitalize`}
								onMouseOver={() => setBirac(i)}
								href={`/${handleSlug(li.replaceAll(" ", "-"))}`}
							>
								{li}
							</Link>
						))}
					</div>{" "}
					{listaMenija.length > 1 ? (
						<>
							<div className="flex  flex-col gap-4 h-auto items-start justify-start ">
								<>
									{listaMenija.map((element, i) => {
										return (
											<Link
												onMouseOver={() => setDesnoState(i)}
												key={i}
												href={`/${handleSlug(list[birac].replaceAll(" ", "-"))}/${handleSlug(element.ime.replaceAll(" ", "-"))}`}
												className={desnoState == i ? "font-medium" : " "}
											>
												{element.ime}
											</Link>
										);
									})}
								</>
							</div>{" "}
							<div className="col-span-2  ">
								{listaMenija[desnoState]
									? listaMenija[desnoState].desno
									: "dasd"}
							</div>
						</>
					) : (
						// <div className="w-full flex flex-col items-center gap-4 col-span-3 relative">
						// 	<h3 className="w-full text-center text-4xl font-semibold">
						// 		Partneri
						// 	</h3>
						// 	<div className="pointer-events-none justify-center absolute gap-12 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-green-400/50 blur-[110px] -z-10" />
						// 	<p className="text-balance text-center mt-8 max-w-[30em]">
						// 		Ljudi koji nam pomazu da radimo ono sto volimo da radimo. Oni
						// 		koji znaju. Oni koji magiju cine stvarnom
						// 	</p>
						// 	<button className="border-blue-950 text-lg cursor-pointer px-4 py-2 font-medium opacity-85 rounded-md border-2 mt-12">
						// 		Klikni ovde
						// 	</button>
						// </div>
						<NavPreview birac={birac} />
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default NavMeni;
