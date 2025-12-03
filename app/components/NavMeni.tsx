"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { typeListaMeni } from "./listeMenija";

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
	listaMenija,
}: {
	ime: string;
	otvoren: boolean;
	setOtvoren: React.Dispatch<React.SetStateAction<boolean>>;
	listaMenija: typeListaMeni[];
}) => {
	const [desnoState, setDesnoState] = useState(0);
	const [fade, setFade] = useState(false);

	useEffect(() => {
		setFade(true);
		const t = setTimeout(() => setFade(false), 200);
		return () => clearTimeout(t);
	}, [desnoState]);

	return (
		<AnimatePresence>
			{otvoren && (
				<motion.div
					className="absolute right-0 top-full h-[80vh] bg-blue-100 z-1000 grid grid-cols-7 auto-rows-[40px] content-start p-8 left-0 gap-4 gap-x-8"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
				>
					{listaMenija.map((element) => {
						const elNum = listaMenija.indexOf(element);
						if (elNum === 2) {
							return (
								<React.Fragment key={elNum}>
									<div
										style={{
											gridRow: `span ${Math.ceil(listaMenija.length / 2)}`,
										}}
										className="border-l-2 col-span-3 border-gray-400 w-full"
									>
										<motion.div
											className="w-full py-4 flex flex-col gap-8 p-12"
											animate={fade ? { opacity: 0 } : { opacity: 1 }}
										>
											{listaMenija[desnoState].desno}
										</motion.div>
									</div>
									<Kartica>
										<Link
											className="text-gray-600 text-left font-semibold text-base hover:underline underline-offset-2"
											onMouseEnter={() => setDesnoState(elNum)}
											href={`/${ime}/${element.ime.replaceAll(" ", "-").toLowerCase()}`}
										>
											{element.ime}
										</Link>
									</Kartica>
								</React.Fragment>
							);
						}
						return (
							<Kartica key={elNum}>
								<Link
									onMouseEnter={() => setDesnoState(elNum)}
									className="text-gray-600 font-semibold text-base hover:underline underline-offset-2"
									href={`/${ime}/${element.ime.replaceAll(" ", "-").toLowerCase()}`}
								>
									{element.ime}
								</Link>
							</Kartica>
						);
					})}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default NavMeni;
