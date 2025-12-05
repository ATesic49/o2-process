"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type UseHeroThresholdOptions = {
	heroId: string;
	navbarId?: string;
	onlyOnPath?: string; // npr. "/"
};

export function useHeroThreshold({
	heroId,
	navbarId = "navbar",
	onlyOnPath = "/",
}: UseHeroThresholdOptions) {
	const [isPastHero, setIsPastHero] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		// Ako nismo na propisanoj ruti, nemoj ni da aktiviraš logiku
		if (onlyOnPath && pathname !== onlyOnPath) {
			setIsPastHero(true);
			return;
		}

		const hero = document.getElementById(heroId);
		const navbar = document.getElementById(navbarId);

		if (!hero || !navbar) {
			// hero ne postoji na stranici – fail-safe
			setIsPastHero(false);
			return;
		}

		let frameId: number | null = null;

		const update = () => {
			const heroRect = hero.getBoundingClientRect();
			const navbarHeight = navbar.offsetHeight;

			// ✅ Uslov:
			// kada DONJA ivica hero-a bude <= visine navbara
			const nowPastHero = heroRect.bottom <= navbarHeight;

			setIsPastHero(nowPastHero);
			frameId = null;
		};

		const handleScroll = () => {
			// da ne računamo 1000x u milisekundi – debounce preko rAF
			if (frameId === null) {
				frameId = window.requestAnimationFrame(update);
			}
		};

		const handleResize = () => {
			// visina navbara se može promeniti na resize
			update();
		};

		// inicijalno stanje odmah kad se mountuje
		update();

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
			if (frameId !== null) {
				window.cancelAnimationFrame(frameId);
			}
		};
	}, [heroId, navbarId, onlyOnPath, pathname]);

	return isPastHero;
}
