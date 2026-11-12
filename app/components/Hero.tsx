"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import heroSlika from "@/public/imgs/hero.png";
import ResenjaPomeri from "./ResenjaPomeri";

const Hero = () => {
	// const [lista, setLista] = useState([
	// 	{ aktivno: true, puls: false },
	// 	{ aktivno: false, puls: true },
	// 	{ aktivno: false, puls: false },
	// ]);

	const [imgOffset, setImgOffset] = useState(0);
	const timerRef = useRef(false);
	const heroRef = useRef<HTMLDivElement | null>(null);

	return (
		<div
			id="hero"
			ref={heroRef}
			className="relative w-full h-[90vh] min-h-[calc(120*4px)] overflow-hidden"
		>
			<div className="absolute inset-0 z-10 bg-black opacity-25" />
			<Image
				style={{
					transform: `translateY(${imgOffset}px)`,
					transition: "transform 0.4s ease-out",
				}}
				src={heroSlika}
				alt=""
				className="absolute left-0 h-[calc(100%+40px)] w-full object-top object-cover"
			/>
		</div>
	);
};

export default Hero;
