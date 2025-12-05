import Image from "next/image";
import Hero from "./components/Hero";
import NasaPonuda from "./components/NasaPonuda";
import Partneri from "./components/Partneri";

export default function Home() {
	return (
		<div className="">
			<Hero></Hero>
			<NasaPonuda />
			<Partneri />
		</div>
	);
}
