"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import heroSlika from "@/public/imgs/hero.png";
import ResenjaPomeri from "./ResenjaPomeri";

const Hero = () => {
	const [lista, setLista] = useState([
		{ aktivno: true, puls: false },
		{ aktivno: false, puls: true },
		{ aktivno: false, puls: false },
	]);

	const [imgOffset, setImgOffset] = useState(0);
	const timerRef = useRef(false);
	const heroRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			if (!heroRef.current) return;

			const target = e.target as Node | null;
			if (!target || !heroRef.current.contains(target)) {
				// skrol nije krenuo iz hero sekcije -> pusti stranicu
				return;
			}

			const currentIndex = lista.findIndex((li) => li.aktivno === true);
			const lastIndex = lista.length - 1;
			let handled = false;

			// 1️⃣ Ako traje tajmer -> ZAUVEK BLOKIRAJ SCROLL (ni stranica, ni slider)
			if (timerRef.current) {
				e.preventDefault();
				e.stopPropagation();
				return;
			}

			// 2️⃣ Ako NE traje tajmer, tek tad gledamo da li radimo "step"
			if (e.deltaY > 0) {
				// skrol na dole
				if (currentIndex < lastIndex) {
					// postoji sledeći -> pomeri slider
					switch (currentIndex) {
						case 0:
							setLista([
								{ aktivno: false, puls: false },
								{ aktivno: true, puls: false },
								{ aktivno: false, puls: true },
							]);
							break;
						case 1:
							setLista([
								{ aktivno: false, puls: false },
								{ aktivno: false, puls: true },
								{ aktivno: true, puls: false },
							]);
							break;
					}
					setImgOffset((prev) => prev - 20);
					handled = true; // znači mi hendlujemo ovaj scroll
				}
				// ako je currentIndex === lastIndex -> handled ostaje false -> stranica slobodno skroluje
			}

			if (e.deltaY < 0) {
				// skrol na gore
				if (currentIndex > 0) {
					switch (currentIndex) {
						case 2:
							setLista([
								{ aktivno: false, puls: true },
								{ aktivno: true, puls: false },
								{ aktivno: false, puls: false },
							]);
							break;
						case 1:
							setLista([
								{ aktivno: true, puls: false },
								{ aktivno: false, puls: true },
								{ aktivno: false, puls: false },
							]);
							break;
					}
					setImgOffset((prev) => prev + 20);
					handled = true;
				}
				// ako je currentIndex === 0 -> handled false -> stranica može da skroluje na gore
			}

			// 3️⃣ Ako smo stvarno odradili "step", tek onda blokiramo scroll i palimo tajmer
			if (handled) {
				e.preventDefault();
				e.stopPropagation();

				timerRef.current = true;
				setTimeout(() => {
					timerRef.current = false;
				}, 400); // uskladi sa trajanjem animacije
			}
		};

		// VAŽNO: passive: false da bi preventDefault radio
		window.addEventListener("wheel", handleWheel, { passive: false });

		return () => {
			window.removeEventListener("wheel", handleWheel);
		};
	}, [lista]);

	return (
		<div
			ref={heroRef}
			className="relative w-full h-[90vh] min-h-[calc(120*4px)] overflow-hidden"
		>
			<div className="absolute inset-0 z-10 bg-black opacity-25" />
			<ResenjaPomeri lista={lista} />
			<Image
				style={{
					transform: `translateY(${imgOffset}px)`,
					transition: "transform 0.4s ease-out",
				}}
				src={heroSlika}
				alt=""
				className="absolute left-0 h-[calc(100%+40px)] object-top object-cover"
			/>
		</div>
	);
};

export default Hero;
