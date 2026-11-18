import React from "react";
import honeywell from "@/public/imgs/honeywell-logo.svg";
import badger from "@/public/imgs/PartnerBadger.jpeg";
import scan from "@/public/imgs/PartnerScan.jpeg";
import flowtronic from "@/public/imgs/PartnerFlow.jpeg";
import lacroix from "@/public/imgs/PartnerLacroix.jpeg";
import Image from "next/image";
import Link from "next/link";
const Partneri = () => {
	return (
		<div className="flex flex-col gap-8 w-full p-16 bg-gray-100">
			<h3 className=" font-semibold mt-4 	 tracking-tight md:text-4xl text-4xl text-neutral-700 hover:underline underline-offset-8 cursor-pointer">
				Partneri
			</h3>
			<div className="grid w-full md:grid-cols-5 gap-4  justify-center p-8 md:bg-white">
				<Link
					href={"https://www.honeywell.com/us/en"}
					className="w-full flex items-center justify-center h-full bg-white"
				>
					<Image
						src={honeywell}
						alt="Honeywell"
						className="w-full bg-white p-4 "
					></Image>
				</Link>
				<Link
					href={"https://www.badgermeter.com/"}
					className="w-full flex items-center justify-center  col-start bg-white"
				>
					<Image
						src={badger}
						alt="BadgerMeter"
						className="w-full p-4  "
					></Image>
				</Link>
				<Link
					href={"https://www.badgermeter.com/"}
					className="w-full flex items-center justify-center bg-white"
				>
					<Image
						src={scan}
						alt="S::can"
						className="w-full  p-4 "
					></Image>
				</Link>

				<Link
					href={"https://www.badgermeter.com/"}
					className="w-full flex items-center justify-center bg-white"
				>
					<Image
						src={lacroix}
						alt="Lacroix"
						className="w-full bg-white object-contain p-4 "
					></Image>
				</Link>
				<Link
					href={"https://www.flow-tronic.com/"}
					className="w-full flex items-center justify-center bg-white"
				>
					<Image
						src={flowtronic}
						alt="Flow-Tronic"
						className="w-full p-4  "
					></Image>
				</Link>
			</div>
		</div>
	);
};

export default Partneri;
