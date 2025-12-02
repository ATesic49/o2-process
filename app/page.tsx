import Image from "next/image";
import Hero from "./components/Hero";
import NasaPonuda from "./components/NasaPonuda";

export default function Home() {
	return (
		<div className="">
			<Hero></Hero>
			<NasaPonuda />
		</div>
	);
}
