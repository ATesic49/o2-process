import Image from "next/image";
import React from "react";
import slika from "@/public/imgs/uslugaCev.jpg";
const Kartica = () => {
	return (
		<div className="rounded-xs shadow-lg relative w-full overflow-hidden cursor-pointer ">
			<Image
				className="w-full object-cover z-20 brightness-90"
				alt=""
				src={slika}
			></Image>
			<div className="absolute  bottom-0 h-12 -rotate-2  bg-blue-900 w-[calc(120%)] "></div>{" "}
			<div className="bg-blue-900 text-blue-100  text-base font-semibold  absolute w-full bottom-0 py-2 text-center z-20">
				Merno regulaciona oprema
			</div>
		</div>
	);
};

export default Kartica;
