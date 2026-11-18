"use client";
import React, { useState } from "react";
import Kartica from "./Kartica";
import PouzdanPartner from "./PouzdanPartner";

const NasaPonuda = () => {
	const [hoverState1, setHoverState1] = useState(false);
	const [hoverState2, setHoverState2] = useState(false);
	const [hoverState3, setHoverState3] = useState(false);

	return (
		<div className="bg-gray-100 py-16  flex flex-col px-8 gap-16">
			<div className="flex mx-auto flex-col gap-4">
				<h2 className=" mt-4 text-3xl  tracking-tight md:text-4x font-semibold  mx-auto  underline-offset-12 underline uppercase ">
					Naša ponuda sa vizijom.
				</h2>
				<p className="text-blue-950/70 mt-3">
					Mi smo pouzdani partneri koji primenom vrhunske tehnilogije,
					inovativnih rešenja...
				</p>
			</div>
			<div className="grid grid-cols-3 grid-rows-2 px-16 gap-x-16 gap-8 w-full h-full">
				{/* <div className="px-6 pb-28 md:px-12 lg:px-20"> */}
				<Kartica />
				<Kartica />
				<Kartica />
				<Kartica />
				<Kartica />
				<Kartica />
			</div>
			<div className="grid grid-cols-3 pl-8 ">
				<PouzdanPartner
					tudjiState={hoverState2 || hoverState3}
					setHoverState={setHoverState1}
					color="bg-blue-200"
					index="z-[3]"
				/>
				<PouzdanPartner
					tudjiState={hoverState1 || hoverState3}
					setHoverState={setHoverState2}
					color="bg-[#CDE2FE]"
					index="z-[2]"
				/>
				<PouzdanPartner
					tudjiState={hoverState1 || hoverState2}
					color="bg-blue-100"
					setHoverState={setHoverState3}
					index="z-[1]"
				/>
			</div>
		</div>
	);
};

export default NasaPonuda;
