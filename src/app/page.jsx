"use client";
import Heading from "@/components/Headings";
import Lastfound from "@/components/Lastfound";
import Popoverindex from "@/components/Popoverindex";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  let prev = [];
  if (typeof window !== "undefined") {
    prev = JSON.parse(localStorage.getItem("Prev Search"));
  }
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
        let updatedItems = [].concat(prevItems);

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
    <section className="grid place-content-center text-center m-10">
      <Heading as="h1" customClass="mb-2">
        Web tilgængeligheds validater
      </Heading>
      <p className="max-w-[65ch] text-sm mb-10">Indsat hjemmesidens adresse og få en rapport på hvordan tilgængeligheden på dit website ser ud. Husk at skriv https:// efterfulgt af hjemmeside adressen</p>
      <form action="/resultat" className="mb-5">
        <label htmlFor="form_url" className="flex flex-wrap px-10 justify-center gap-2 sm:gap-0">
          <p className="sr-only">Skriv din url her</p>
          <input ref={inputValue} className="rounded-l border-2 border-state-2 p-2 flex-0 w-full sm:flex-1" type="url" name="url" id="form_url" required placeholder="https://URL..." />
          <button onClick={AddData} className="py-2 px-5 text-lg relative before:rounded-r before:absolute before:inset-0 before:content-[''] before:bg-state-1 before:scale-x-[0] hover:before:scale-x-[1] before:transition before:duration-500 before:ease-out before:origin-left before:-z-10 after:bg-state-2 after:-z-20 after:content-[''] after:absolute after:inset-0 after:rounded-r">
            Analyser
          </button>
        </label>
      </form>
      <div className="flex justify-center gap-x-10 gap-y-5 items-start flex-wrap">
        <Popoverindex />

        {prev.length > 0 && <Lastfound data={items} />}
      </div>
    </section>
  );
}
