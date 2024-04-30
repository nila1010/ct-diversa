"use client";
import Lastfound from "@/components/Lastfound";
import Popoverindex from "@/components/Popoverindex";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const prev = JSON.parse(localStorage.getItem("Prev Search"));
  const [items, setItems] = useState(prev);
  const inputValue = useRef();

  function AddData() {
    if (inputValue.current.value.includes("https://")) {
      const newDate = new Date();
      const newSearch = {
        searchUrl: inputValue.current.value,
        data: "Det arbejder vi på",
        date: `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`,
      };

      setItems((prevItems) => {
        let updatedItems = [...prevItems];

        if (updatedItems.length === 4) {
          updatedItems.shift();
        }

        updatedItems.push(newSearch);
        return updatedItems;
      });
    }
  }

  useEffect(() => {
    localStorage.setItem("Prev Search", JSON.stringify(items));
  }, [items]);
  return (
    <section className="grid place-content-center text-center gap-5 m-10">
      <h1 className="text-xl">Web tilgængeligheds validater</h1>
      <p className="max-w-[65ch] text-sm">Indsat hjemmesidens adresse og få en rapport på hvordan tilgængeligheden på dit website ser ud. Husk at skriv https:// efterfult af hjemmeside adressen</p>
      <form action="/resultat">
        <label htmlFor="form_url" className="flex flex-wrap px-10 justify-center gap-2 sm:gap-0">
          <p className="sr-only">Skriv din url her</p>
          <input ref={inputValue} className="rounded-l border-2 border-state-3 p-2 flex-0 w-full sm:flex-1" type="url" name="url" id="form_url" required placeholder="https://URL..." />
          <button onClick={AddData} className="ml-[-2px] py-2 px-5 text-lg relative before:rounded-r before:absolute before:inset-0 before:content-[''] before:border-2 before:border-state-3 before:-z-50 after:absolute after:inset-0 after:content-[''] after:-z-50 after:bg-state-3 after:w-full after:h-full hover:after:scale-y-[0.8] hover:after:scale-x-[0.9] after:transition after:duration-500 after:ease after:rounded-r">
            Analyser
          </button>
        </label>
      </form>
      <div className="flex justify-center gap-x-10 gap-y-5 items-start flex-wrap">
        <Popoverindex />
        {prev > 0 && <Lastfound data={items} />}
      </div>
    </section>
  );
}
