"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import heroSlika from "@/public/imgs/hero.png";
import ResenjaPomeri from "./ResenjaPomeri";
import { ArrowRight } from "lucide-react";
import link from "next/navigation";
import Link from "next/link";

const Hero = () => {
	const [imgOffset, setImgOffset] = useState(0);
	const timerRef = useRef(false);
	const heroRef = useRef<HTMLDivElement | null>(null);

	return (
		// <div
		// 	id="hero"
		// 	ref={heroRef}
		// 	className="relative w-full h-[90vh]  overflow-hidden flex items-end justify-start"
		// >
		// 	<div className="flex flex-col gap-8 text-lg bg-transparent  z-10 px-8 py-16">
		// 		<h1 className="font-semibold text-neutral-100 w-[20em] text-balance  text-4xl bg-transparent  ">
		// 			O2 Process Solutions - kompanija sa vijizom
		// 		</h1>
		// 		<button className="rounded border-2  from-green-500 cursor-pointer to-green-600 text-xl text-white w-min px-8 py-2 ">
		// 			Akcija
		// 		</button>
		// 	</div>
		// 	<div className="absolute inset-0 z-2 bg-black opacity-25" />
		// 	<Image
		// 		style={{
		// 			transform: `translateY(${imgOffset}px)`,
		// 			transition: "transform 0.4s ease-out",
		// 		}}
		// 		src={heroSlika}
		// 		alt=""
		// 		className="absolute left-0 h-[calc(100%+40px)] w-full object-top object-cover"
		// 	/>
		// </div>
		<div
			id="hero"
			ref={heroRef}
			className="relative overflow-hidden  px-6 py-24 text-white md:px-12 md:py-32 lg:px-20"
		>
			{/* Dekorativni element */}
			<Image
				// style={{
				// 	transform: `translateY(${imgOffset}px)`,
				// 	transition: "transform 0.4s ease-out",
				// }}

				src={heroSlika}
				alt=""
				className="absolute left-0 top-0 rotate-y-180 -z-10 w-full object-top object-cover"
			/>
			<div className="pointer-events-none absolute top-0 left-0  bg-blue-950 w-full h-full  border opacity-30  border-white/10 " />

			<div className="relative mx-auto max-w-7xl">
				<div className="mb-8 flex items-center gap-3">
					<span className="h-px w-8 bg-green-400" />
					<span className="text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
						O2 Process Solutions
					</span>
				</div>

				<h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
					Inovativna rešenja prilagođena
					<span className="block text-green-300">potrebama korisnika</span>
				</h1>

				<p className="mt-8 max-w-2xl text-base leading-relaxed text-blue-100/80 md:text-lg">
					Vrhunska oprema, ulsuge i rešenja koja ostavljaju{" "}
					<Link
						href={"/proizvodi"}
						className="text-green-300 hover:underline underline-offset-4"
					>
						{" "}
						savremene proizvode.
					</Link>
				</p>

				<a
					href="#kategorije"
					className="mt-10 inline-flex items-center gap-5 bg-green px-7 py-4 font-semibold text-white transition-all duration-300 hover:gap-7 hover:brightness-110"
				>
					Pregled proizvoda
					<ArrowRight size={19} />
				</a>
			</div>
		</div>
	);
};

export default Hero;
