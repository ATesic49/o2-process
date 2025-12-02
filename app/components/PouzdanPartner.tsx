"use client";
import React, { useState } from "react";
import DashedBorderBox from "./DashedBorderBox";

const PouzdanPartner = ({
	index,
	color,
	setHoverState,
	tudjiState,
}: {
	index: string;
	color: string;
	setHoverState: React.Dispatch<React.SetStateAction<boolean>>;
	tudjiState: boolean;
}) => {
	return (
		<div
			className={`flex cursor-pointer flex-col  group gap-2 p-4 pr-8 mr-8 relative ${tudjiState ? "bg-gray-100" : color} duration-200 pl-8  ${index}`}
			onMouseEnter={() => setHoverState(true)}
			onMouseLeave={() => setHoverState(false)}
			onTouchStart={() => setHoverState(true)}
			onTouchEnd={() => setHoverState(false)}
		>
			<div
				className={`absolute strela ${tudjiState ? "bg-gray-100" : color} duration-200  h-full w-24 top-0 -right-12 ${index}`}
			></div>
			<div
				className={`absolute ${tudjiState ? "bg-gray-100" : color} duration-200 -z-10 h-full w-24 top-0 -left-8 `}
			></div>
			<h3 className="font-bold text-gray-950 text-lg group-hover:-translate-y-1 duration-100 ">
				Pouzdan partner
			</h3>
			<p className="text-xs text-gray-900 group-hover:-translate-y-1 duration-100">
				Sva rešenja su optimalno prilagođena konkretnim zahtevima klijenata
			</p>
		</div>
	);
};

export default PouzdanPartner;
