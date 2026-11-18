"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { listaMenija } from "./listeMenija";

const linkovi = [
	"proizvodi",
	"rešenja",
	"servis",
	"inžinjering",
	"partneri",
	"industrije",
	"o nama",
	"kontakt",
];

const kategorije = ["proizvodi", "rešenja", "inžinjering", "industrije"];

export default function MobileNav() {
	const pathname = usePathname();

	const [otvoren, setOtvoren] = useState(false);
	const [aktivna, setAktivna] = useState<number | null>(null);

	// Zatvori meni pri promeni stranice
	useEffect(() => {
		setOtvoren(false);
		setAktivna(null);
	}, [pathname]);

	// Zaključavanje skrolovanja
	useEffect(() => {
		if (!otvoren) return;

		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = previous;
		};
	}, [otvoren]);

	const zatvori = () => {
		setOtvoren(false);
		setAktivna(null);
	};

	const toggle = () => {
		if (otvoren) {
			zatvori();
		} else {
			setOtvoren(true);
		}
	};

	return (
		<header className="sticky top-0 z-50 bg-blue-50 text-blue-950 lg:hidden">
			{/* GORNJI NAVBAR */}
			<div className="relative z-20 flex h-16 items-center justify-between border-b border-blue-950/10 px-6">
				<Link
					href="/"
					onClick={zatvori}
					className="font-logo text-4xl font-bold"
				>
					O<span className="text-xl">2</span>
				</Link>

				{/* HAMBURGER */}
				<button
					type="button"
					onClick={toggle}
					aria-label={otvoren ? "Zatvori meni" : "Otvori meni"}
					aria-expanded={otvoren}
					aria-controls="mobile-menu"
					className="relative flex h-10 w-10 items-center justify-center"
				>
					<span
						className={`absolute h-0.5 w-7 bg-blue-950 transition-all duration-300 ${
							otvoren ? "rotate-45" : "-translate-y-2"
						}`}
					/>
					<span
						className={`absolute h-0.5 w-7 bg-blue-950 transition-opacity duration-200 ${
							otvoren ? "opacity-0" : "opacity-100"
						}`}
					/>
					<span
						className={`absolute h-0.5 w-7 bg-blue-950 transition-all duration-300 ${
							otvoren ? "-rotate-45" : "translate-y-2"
						}`}
					/>
				</button>
			</div>

			{/* MOBILNI MENI */}
			<AnimatePresence>
				{otvoren && (
					<motion.div
						id="mobile-menu"
						initial={{ opacity: 0, y: -15 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -15 }}
						transition={{ duration: 0.22 }}
						className="fixed inset-x-0 top-16 bottom-0 z-10 overflow-y-auto overscroll-contain bg-blue-50"
					>
						<div className="flex min-h-full flex-col px-6 py-8">
							<AnimatePresence
								mode="wait"
								initial={false}
							>
								{aktivna === null ? (
									// GLAVNI MENI
									<motion.div
										key="glavni"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -20 }}
										transition={{ duration: 0.18 }}
										className="flex flex-col"
									>
										<p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-950/40">
											Navigacija
										</p>

										{linkovi.map((link) => {
											const index = kategorije.indexOf(link);
											const imaPodmeni = index !== -1;

											return (
												<div
													key={link}
													className="border-b border-blue-950/10"
												>
													<div className="flex items-center justify-between gap-3">
														<Link
															href={`/${link.replaceAll(" ", "-")}`}
															onClick={zatvori}
															className="flex-1 py-4 text-2xl font-semibold capitalize"
														>
															{link}
														</Link>

														{imaPodmeni && (
															<button
																type="button"
																onClick={() => setAktivna(index)}
																aria-label={`Otvori podmeni: ${link}`}
																className="flex h-12 w-12 items-center justify-center text-2xl"
															>
																<span aria-hidden="true">→</span>
															</button>
														)}
													</div>
												</div>
											);
										})}
									</motion.div>
								) : (
									// PODMENI
									<motion.div
										key={`podmeni-${aktivna}`}
										initial={{ opacity: 0, x: 25 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 25 }}
										transition={{ duration: 0.18 }}
										className="flex flex-col"
									>
										<button
											type="button"
											onClick={() => setAktivna(null)}
											className="mb-8 flex items-center gap-3 text-sm font-semibold"
										>
											<span
												aria-hidden="true"
												className="text-xl"
											>
												←
											</span>
											Nazad
										</button>

										<Link
											href={`/${kategorije[aktivna].replaceAll(" ", "-")}`}
											onClick={zatvori}
											className="mb-6 text-3xl font-bold capitalize"
										>
											{kategorije[aktivna]}
										</Link>

										<div className="flex flex-col">
											{listaMenija[aktivna]?.map((item, i) => (
												<Link
													key={i}
													href={`/${kategorije[aktivna]}/${item.ime
														.replaceAll(" ", "-")
														.toLowerCase()}`}
													onClick={zatvori}
													className="border-b border-blue-950/10 py-4 text-lg font-medium text-blue-950/80"
												>
													{item.ime}
												</Link>
											))}
										</div>
									</motion.div>
								)}
							</AnimatePresence>

							{/* FOOTER */}
							<div className="mt-auto pt-12">
								<div className="border-t border-blue-950/20 pt-6">
									<p className="font-logo text-3xl font-bold">O2</p>
									<p className="mt-2 text-xs tracking-widest text-blue-950/50">
										PROCESS SOLUTIONS
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
