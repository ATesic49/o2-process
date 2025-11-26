"use client";
import React from "react";
import DashedBorderBox from "./DashedBorderBox";
import PojenacniElement from "./PojenacniElement";
import { Alike } from "next/font/google";

const ResenjaPomeri = ({
	lista,
}: {
	lista: { aktivno: boolean; puls: boolean }[];
}) => {
	return (
		<div className="absolute flex gap-4 flex-col top-16 right-8 ">
			<PojenacniElement
				tekst={
					<>
						<h2 className="text-lg font-bold uppercase text-blue-300">
							Vrhunska oprema
						</h2>{" "}
						<p className="text-gray-100 text-base opacity-95">
							usluge i rešenja, koja povećavaju nivo sigurnosti, pouzdanosti i
							efikasnosti.
						</p>
					</>
				}
				aktivno={lista[0].aktivno}
				puls={lista[0].puls}
			/>
			<PojenacniElement
				tekst={
					<>
						<h2 className="text-lg font-bold uppercase text-blue-300">
							Rešenja po meri
						</h2>{" "}
						<p className="text-gray-100  text-base opacity-95">
							prilagodjena losim uslovima i tako to...
						</p>
					</>
				}
				aktivno={lista[1].aktivno}
				puls={lista[1].puls}
			/>
			<PojenacniElement
				aktivno={lista[2].aktivno}
				puls={lista[2].puls}
				tekst={
					<>
						{" "}
						<h2 className="text-lg font-bold uppercase text-blue-300">
							Inovacije
						</h2>{" "}
						<p className="text-gray-100   text-base opacity-95">
							koje svakodnevnom poslu daju srećan kraj...
						</p>
					</>
				}
			/>
		</div>
	);
};

export default ResenjaPomeri;
