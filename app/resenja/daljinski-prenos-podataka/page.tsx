"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Construction } from "lucide-react";

export default function Page() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <main className="flex h-[calc(100dvh-80px)] w-full items-center justify-center overflow-hidden bg-blue-950 px-6 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <Construction
            size={48}
            strokeWidth={1.5}
            className="text-green-300"
          />
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
          O2 Process Solutions
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
          Stranica je u<span className="block text-green-300">izradi.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-blue-100/70">
          Trenutno radimo na pripremi sadržaja ove stranice. Uskoro će biti
          dostupno više informacija.
        </p>

        <Link
          href="/proizvodi"
          className="mt-10 inline-flex items-center gap-4 bg-green px-7 py-4 font-semibold text-blue-950 transition hover:brightness-110"
        >
          Nazad na proizvode
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </main>
  );
}
