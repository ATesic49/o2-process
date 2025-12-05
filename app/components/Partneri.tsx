import React from "react";
import honeywell from "@/public/imgs/honeywell-logo.svg";
import badger from "@/public/imgs/Badger Meter Logo Horizontal_White_310x100.svg";
import scan from "@/public/imgs/31.jpg.webp";
import flowtronic from "@/public/imgs/flowTronic.svg";
import lacroix from "@/public/imgs/lacroix.webp";
import Image from "next/image";
import Link from "next/link";
const Partneri = () => {
	return (
		<div className="flex flex-col gap-8 w-full p-16 bg-gray-100">
			<h3 className=" font-semibold text-4xl text-gray-500 hover:underline underline-offset-8 cursor-pointer">
				Partneri
			</h3>
			<div className="grid w-full grid-cols-5 gap-4  justify-center p-8">
				<Link
					href={"https://www.honeywell.com/us/en"}
					className="w-full flex items-center justify-center h-full col-span-3"
				>
					<Image
						src={honeywell}
						alt="Honeywell"
						className="w-full bg-white p-4 h-full"
					></Image>
				</Link>
				<Link
					href={"https://www.badgermeter.com/"}
					className="w-full flex items-center justify-center h-full col-span-3 col-start-3 row-start-2"
				>
					<Image
						src={badger}
						alt="BadgerMeter"
						className="w-full p-4  bg-[#1D3F5C] h-full "
					></Image>
				</Link>
				<Link
					href={"https://www.badgermeter.com/"}
					className="w-full flex items-center justify-center h-full"
				>
					<Image
						src={scan}
						alt="S::can"
						className="w-full bg-white p-4 h-full"
					></Image>
				</Link>

				<Link
					href={"https://www.badgermeter.com/"}
					className="w-full flex items-center justify-center h-full"
				>
					<Image
						src={lacroix}
						alt="Lacroix"
						className="w-full bg-white object-contain p-4 h-full"
					></Image>
				</Link>
				<Link
					href={"https://www.flow-tronic.com/"}
					className="w-full flex items-center justify-center h-full col-span-2"
				>
					<Image
						src={flowtronic}
						alt="Flow-Tronic"
						className="w-full bg-[#4695D1] p-4 h-full "
					></Image>
				</Link>
			</div>
		</div>
	);
};

export default Partneri;
