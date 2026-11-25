import Link from "next/link";

import { JSX } from "react";

export type typeListaMeni = {
  ime: string;

  desno: JSX.Element;
};

export const listaMenija = [
  [
    {
      ime: "Procesna Merna Oprema",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline underline-offset-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline underline-offset-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "Merenje Nivoa",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">Merenje Nivoa</h3>

          <p className="text-gray-500 text-sm">
            Merenje nivoa je ključno za efikasno upravljanje industrijskim
            procesima i obezbeđivanje optimalnih uslova za proizvodnju,
            distribuciju i skladištenje.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Naši sistemi za merenje nivoa omogućavaju precizno praćenje nivoa
            tečnosti, čvrstih materijala i drugih supstanci, što je od
            suštinskog značaja za očuvanje sigurnosti, efikasnosti i kvaliteta
            proizvodnje
          </p>
        </div>
      ),
    },

    {
      ime: "Data Logeri i RTU",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Data Logeri i RTU
          </h3>

          <p className="text-gray-500 text-sm">
            Uređaji za automatsko sakupljanje brojnih podatka o vrednostima
            nivoa, protoka, regulaciji ventila i merenjima pritiska u mreži.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Ovi uređaji šalju prikupljene podatke putem SMS-a, GPRS-a ili 3G-a
            jednom ili više puta dnevno, na centralizovani sistem. Napajan
            pomoću litijumske baterije, ovaj proizvod poseduje autonomiju od
            nekoliko godina.
          </p>

          <Link
            className="text-sm text-blue-950 underline underline-offset-2"
            href={"/proizvodi/baterijski-data-loggeri/"}
          >
            Baterijski Data Logeri
          </Link>
        </div>
      ),
    },

    {
      ime: "Displeji i Flow Kompjuteri",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Displeji i Flow Kompjuteri
          </h3>

          <p className="text-gray-500 text-sm">Fali tekst.</p>
        </div>
      ),
    },

    {
      ime: "Regulacioni Ventili",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Regulacioni Ventili
          </h3>

          <p className="text-gray-500 text-sm">
            Regulacioni ventili su pogodni za kontrolu tečnosti, gasova ili
            pare, u industrijskim aplikacijama, istraživačkim i procesnim
            pogonima.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Njihova kompaktna veličina čini ih idealnim izborima za injektiranje
            aditiva, uzimanje uzoraka, hidraulične sisteme sa niskim protokom
            ili tamo gde je precizna kontrola važan faktor ili fizička
            ograničenja ograničavajući težinu ili veličinu ventila.
          </p>

          <Link
            className="text-sm text-blue-950 underline underline-offset-2"
            href={"/proizvodi/industrijski-regulacioni-ventili"}
          >
            Industrijski Regulacioni Ventili
          </Link>

          <Link
            className="underline"
            href={
              "/proizvodi/ventili-za-regulaciju-pritiska-sa-dva-stepena-regulacije"
            }
          >
            Ventili za regulaciju pritiska sa dva stepena regulacije
          </Link>

          <Link
            className="underline"
            href={
              "/proizvodi/ventili-za-regulaciju-pritiska-sa-motornim-pogonom"
            }
          >
            Ventili za regulaciju pritiska sa motornim pogonom
          </Link>
        </div>
      ),
    },

    {
      ime: "Oprema za Tretman Otpadnih Voda i Mulja",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Oprema za Tretman Otpadnih Voda i Mulja
          </h3>

          <p className="text-gray-500 text-sm">Fali tekst.</p>
        </div>
      ),
    },

    {
      ime: "Pumpe",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Naša ponuda pumpi
          </h3>

          <p className="text-gray-500 text-sm">
            Kao distributer za brendove <b>Samoa</b> i <b>Pentair Jung</b>,
            ponosni smo što možemo da vam ponudimo širok spektar visoko
            kvalitetnih pumpi koje zadovoljavaju različite potrebe i industrije.
          </p>

          <div className="text-gray-500 text-xs flex flex-col gap-2 ">
            <p className="text-sm font-semibold mb-2">
              Zašto izabrati naše pumpe?{" "}
            </p>
            <p>
              <b>Kvalitet:</b> Svi naši proizvodi prolaze rigorozne testove
              kvaliteta.
            </p>{" "}
            <p>
              <b>Pouzdanost:</b> Garantujemo pouzdanost i dug vek trajanja.
            </p>{" "}
            <p>
              <b>Podrška:</b> Naš tim stručnjaka je uvek dostupan za
              konsultacije i podršku.
            </p>
          </div>
        </div>
      ),
    },

    {
      ime: "Kompaktne Crpne Stanice",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Kompaktne Crpne Stanice
          </h3>

          <p className="text-gray-500 text-sm">
            Kompaktne Crpne Stanice kompanije O2 process Solutions – O2 CPS
            predstavljaju vrhunski proizvod koji korisnicima obezbeđuje napredne
            funkcije i superiorne performance.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Izrađujemo CPS: kao glavne crpne stanice u manjim mestima, za delove
            naselja, u industrijskim zonama i svim onim mestima gde otpadne vode
            ne mogu da gravitiraju ka glavnim kanalizacionim kolektorima.
          </p>
        </div>
      ),
    },
  ],

  [
    {
      ime: "Rešenja za efikasno upravljanje u sistemu vodosnabdevanja",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "Rešenja za efikasno upravljanje u kanalizacionim sistemima",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "Profilisana merna suženja prilagođena zahtevu klijenata",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "Kompaktne crpne stanice po meri",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "Honeywell rešenja",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "Daljinski prenos podataka",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "SCADA",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "Software za praćenje opreme u mreži",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "Merenje količine materijala u silosima",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "Kontinualno merenje nivoa mulja u sedimentacionim bazenima",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "Sistem za praćenje povratnog pranja filtera",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },
  ],

  [],

  [
    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Data Logeri i RTU
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            SAMO OBICAN DATA
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },
  ],

  [],

  [
    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Data Logeri i RTU
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            Procesna merna oprema
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },

    {
      ime: "placeholder",

      desno: (
        <div className="flex flex-col gap-4 ">
          <h3 className="text-gray-700 text-xl font-semibold">
            SAMO OBICAN DATA
          </h3>

          <p className="text-gray-500 text-sm">
            Mi smo pouzdan partner, koji primenom vrhunske tehnologije, povećava
            pouzdanost, produktivnost i profitabilnost proizvodnih procesa naših
            klijenata.
          </p>

          <p className="-mt-4 text-gray-500 text-sm">
            Pomoću inovativnih rešenja i sofisticiranih procesnih merenja
            omogućavamo postizanje vrhunskih rezultata i očuvanje životne
            sredine.
          </p>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/industrijski-meraci-protoka"}
          >
            Industrijski meraci protoka
          </Link>

          <Link
            className="text-sm text-blue-950 underline-2"
            href={"/proizvodi/merenje-protoka"}
          >
            Merenje protoka na delimično ispunjenim cevima i kanalima
          </Link>
        </div>
      ),
    },
  ],

  [],

  [],
];
