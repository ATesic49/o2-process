import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import slika from "@/public/imgs/proizvodPlaceholder.jpg";

const page = () => {
  return <div>page</div>;
};

export default page;

<section className="bg-green px-6 py-20 text-blue-950 md:px-12 lg:px-20">
  <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
    <div>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-950">
        O2 Process Solutions
      </span>

      <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
        Potrebna vam je pomoć pri izboru opreme?
      </h2>

      <p className="mt-4 max-w-xl leading-relaxed text-blue-950">
        Kontaktirajte nas za dodatne informacije o proizvodima i dostupnim
        rešenjima.
      </p>
    </div>

    <Link
      href="/kontakt"
      className="inline-flex shrink-0 items-center gap-5 bg-white px-7 py-4 font-semibold text-blue-950 transition-colors duration-300 hover:bg-blue-50"
    >
      Kontaktirajte nas
      <ArrowUpRight size={20} />
    </Link>
  </div>
</section>;
