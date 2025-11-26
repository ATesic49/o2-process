import Link from "next/link";
import React from "react";

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
const NavBar = () => {
	return (
		<div className="flex overflow- gap-8 justify-end item-center  text-blue-950 sticky top-0 py-8 bg-blue-50 px-8 z-40 shadow">
			<h1 className="text-9xl absolute font-bold bottom-2 translate-y-1/2 left-8 font-logo">
				O
			</h1>
			<div className="z-50 overflow-hidden translate-y-full left-0 w-full h-32 absolute bottom-0">
				<div className="z-30 text-blue-50 text-9xl absolute font-bold bottom-2 -translate-y-1/2 left-8 font-logo">
					O <span className="text-6xl absolute -bottom-2">2</span>
				</div>
			</div>

			{list.map((li) => (
				<Link
					key={li}
					className="capitalize text-sm font-semibold text-blue-950"
					href={`/${li.replaceAll(" ", "-")}`}
				>
					{li}
				</Link>
			))}
		</div>
	);
};

export default NavBar;
