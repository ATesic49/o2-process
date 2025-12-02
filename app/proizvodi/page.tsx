import Link from "next/link";
export default function Home() {
	return (
		<div className="bg-blue-100 h-screen w-full fixed">
			<div className="justify-center flex">
				<h1 className="text-6xl font-bold mt-10">PROCESNA MERNA OPREMA</h1>
			</div>
			<div>
				<p className="justify-center flex mr-100 ml-100 mt-20">
					Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
					pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
					klijenata. Pomoću inovativnih rešenja i sofisticiranih procesnih
					merenja omogućavamo postizanje vrhunskih rezultata i očuvanje životne
					sredine.
				</p>
				<h2 className="justify-evenly flex ml-20 mr-200 mt-16 text-2xl font-medium">
					<link
						rel="stylesheet"
						href="/proizvodi/industrijska-merila-protoka"
					/>
					<a href="/proizvodi/industrijska-merila-protoka">
						Industrijski merila protoka
					</a>
				</h2>
				<div>
					<img
						src="/imgs/flowmeter.jpg"
						alt="flowmeter"
						className="w-48 h-auto justify-evenly flex ml-120 mt-4 text-2xl"
					/>
				</div>
				<h2 className="justify-end flex ml-20 mr-200 mt-16 text-2xl font-medium">
					<link
						rel="stylesheet"
						href="/proizvodi/merila-protoka-d"
					/>
					<a href="/proizvodi/merila-protoka-d">
						{" "}
						Merenje protoka na delimično ispunjenim cevima i kanalima
					</a>
				</h2>
				<link />
				<div>
					{" "}
					<img
						src="/imgs/partial-flowmeter.jpg"
						alt="flowmeter"
						className="w-48 h-auto justify-evenly flex ml-120 mt-4 text-2xl"
					/>
				</div>
			</div>
		</div>
	);
}
