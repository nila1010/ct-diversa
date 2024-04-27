import Butten from "@/components/Butten";
import Popoverindex from "@/components/Popoverindex";
import Link from "next/link";

export default function Home() {
  return (
    <section className="grid place-content-center text-center gap-5 m-10">
      <h1 className="text-xl">Web tilgængeligheds validater</h1>
      <p className="max-w-[65ch] text-sm">Indsat hjemmesidens adresse og få en rapport på hvordan tilgængeligheden på dit website ser ud. Husk at skriv https:// efterfult af hjemmeside adressen</p>
      <form action="/resultat">
        <label htmlFor="form_url" className="flex flex-wrap px-10 justify-center gap-2 sm:gap-0">
          <p className="sr-only">Skriv din url her</p>
          <input className="rounded-l border-2 border-state-3 p-2 flex-0 w-full sm:flex-1" type="url" name="url" id="form_url" required placeholder="https://URL..." />
          <button className="ml-[-2px] py-2 px-5 text-lg relative before:rounded-r before:absolute before:inset-0 before:content-[''] before:border-2 before:border-state-3 before:-z-50 after:absolute after:inset-0 after:content-[''] after:-z-50 after:bg-state-3 after:w-full after:h-full hover:after:scale-y-[0.8] hover:after:scale-x-[0.9] after:transition after:duration-500 after:ease after:rounded-r">Analyser</button>
        </label>
      </form>
      <Popoverindex />
    </section>
  );
}
