"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavMeni from "./NavMeni";
import { listaMenija } from "./listeMenija";
import { usePathname } from "next/navigation";
import { useHeroThreshold } from "./useHeroTreshold";
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
const nasaLista: string[] = [];
nasaLista.push(list[0]);
nasaLista.push(list[1]);
nasaLista.push(list[3]);
nasaLista.push(list[5]);

const NavBar = () => {
	const isPastHero = useHeroThreshold({
		heroId: "hero", // ID u Hero sekciji
		navbarId: "navbar", // ID na ovom divu ispod
		onlyOnPath: "/", // radi samo na home strani
	});

	const pathname = usePathname();
	const [otvoren, setOtvoren] = useState(false);
	useEffect(() => {
		setOtvoren(false);
	}, [pathname]);
	const [birac, setBirac] = useState(0);

	return (
		<div
			id="navbar"
			className={`flex overflow- gap-8 justify-end item-center  text-blue-950 sticky top-0 py-8 ${otvoren ? "bg-blue-100" : "bg-blue-50"} duration-100 px-8 z-40 shadow`}
		>
			<NavMeni
				ime={nasaLista[birac]}
				listaMenija={listaMenija[birac]}
				otvoren={otvoren}
				setOtvoren={setOtvoren}
			></NavMeni>
			<>
				<Link
					href={"/"}
					className={`text-9xl absolute font-bold  left-8 font-logo ${otvoren || isPastHero ? "scale-50 bottom-1/2 translate-y-1/2" : "scale-100 bottom-2 translate-y-1/2 "} duration-200`}
				>
					O<span className="text-6xl absolute -bottom-2">2</span>
				</Link>
				<div
					className={` overflow-hidden translate-y-full left-0 w-full h-32 absolute bottom-0 ${isPastHero && "fixed"}`}
				>
					<div
						className={`z-0 ${otvoren || isPastHero ? "opacity-0" : "opacity-100"} duration-50  text-blue-50 text-9xl absolute font-bold bottom-2 -translate-y-1/2 left-8 font-logo drop-shadow-lg`}
					>
						<Link href={"/"}>
							O <span className="text-6xl absolute -bottom-2">2</span>
						</Link>
					</div>
				</div>
			</>

			{list.map((li) => {
				if (nasaLista.includes(li)) {
					const nadjiBirac = nasaLista.indexOf(li);
					return (
						<Link
							key={li}
							className="capitalize text-sm flex gap-1  font-semibold text-blue-950 items-center-safe "
							href={`/${li.replaceAll(" ", "-")}`}
						>
							{li}
							<svg
								onClick={(e) => {
									setBirac(nadjiBirac);

									if (nadjiBirac === birac) {
										setOtvoren(!otvoren);
									} else if (otvoren) {
										setOtvoren(false);
										setTimeout(() => setOtvoren(true), 200);
									}
									if (!otvoren) {
										setOtvoren(true);
									}

									e.preventDefault();
								}}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className={`size-4 translate-y-px ${otvoren && nadjiBirac == birac ? "rotate-180" : ""} duration-200`}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</Link>
					);
				}

				return (
					<Link
						key={li}
						className="capitalize text-sm font-semibold text-blue-950"
						href={`/${li.replaceAll(" ", "-")}`}
					>
						{li}
					</Link>
				);
			})}
		</div>
	);
};

export default NavBar;
