import Butten from "@/components/Butten";
export default function Home() {
  return (
    <section className="grid place-content-center text-center gap-5 m-10">
      <h1 className="text-xl">Web tilgængeligheds validater</h1>
      <p className="max-w-[65ch] text-sm">Indsat hjemmesidens adresse og få en rapport på hvordan tilgængeligheden på dit website ser ud. Husk at skriv "https://" efterfult af hjemmeside adressen</p>
      <form action="/resultat">
        <label htmlFor="form_url" className="flex flex-wrap px-10 justify-center gap-2 sm:gap-0">
          <p className="sr-only">Skriv din url her</p>
          <input className="rounded-l border-2 border-state-3 p-2 flex-0 w-full sm:flex-1" type="url" name="url" id="form_url" required placeholder="https://URL..." />
          <Butten variant="input">Analyser</Butten>
        </label>
      </form>
    </section>
  );
}
