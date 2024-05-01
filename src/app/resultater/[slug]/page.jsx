"use client";
import { useState, useEffect } from "react";
import Heading from "@/components/Headings";
import { score } from "@/lib/CalcRating";
import AnimatedCircle from "@/components/AnimatedCircle";
import ViolationList from "@/components/ViolationList";
import Image from "next/image";

export default function GemtData({ params }) {
  const { slug } = params;
  const [newLocalStorage, setNewLocalStorage] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("PrevSearch")) {
      setNewLocalStorage(JSON.parse(localStorage.getItem("PrevSearch")));
    }
  }, []);

  const filterData = newLocalStorage.filter((gemt) => gemt.id === slug);

  const data = filterData[0];
  let totalCalc;
  if (data) {
    const total = score(data.data);
    const webScore = total[0];
    const major = total[1];
    const moderate = total[2];
    const minor = total[3];
    totalCalc = { major, moderate, minor, webScore };
  }

  return (
    <div>
      {data ? (
        <div>
          <div className="m-2 sm:m-6">
            <section className="mb-10 word">
              <Heading as="h2" customClass="text-xl w-full hyphens-auto my-4 text-center sm:text-left">
                {data.data.url}
              </Heading>
              <article className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
                <div className="flex flex-col w-auto place-content-center gap-y-2 sm:order-2">
                  <AnimatedCircle data={totalCalc.webScore} />
                  <Heading as="h3" customClass="w-auto text-md text-center">
                    Overall score
                  </Heading>
                </div>
                <div className="flex flex-col text-balance gap-y-4 px-0 sm:order-1">
                  <p className="text-sm">Nedenfor kan du se en raport over de tilgængelighedsproblemer vi har fundet. De er opdelt i 3 kategorier hvor kritiske fejl kan forårsage at brugeren ikke kan bruge hjemmesiden. Moderate fejl gør det ikke er optimalt for brugeren og de mindre fejl er et eller andet der ikke har nogen større påvirkning.</p>
                  <Image className="w-auto object-contain" src={data.data.screenshot.url} alt="Logo" width={data.data.screenshot.width} height={data.data.screenshot.height} />
                </div>
              </article>
            </section>

            <section className="flex flex-col gap-y-6 my-14 px-0">
              <Heading as="h2" customClass="!text-2xl">
                Komplet rapport
              </Heading>
              <details className="bg-state-3-light border-state-3 border-4 rounded border-solid open:transition-all group">
                <summary className={`${totalCalc.major.length < 1 ? "pointer-events-none" : "cursor-pointer"} flex place-items-center bg-state-3 justify-between text-lg px-2 after:origin-center hover:cursor-pointer sm:px-6 md:px-10 after:rotate-90 after:content-[url("/icons/arrow.svg")] after:content-[w-6 h-6] group-open:after:transition-all group-open:after:rotate-180`}>
                  <div>
                    <span>{totalCalc.major.length}</span> kritiske fejl
                  </div>
                </summary>
                <ul className="flex flex-col gap-y-8 p-6 my-3 mx-5 justify-between">
                  {totalCalc.major.map((d) => (
                    <ViolationList params={d.id} key={d.id} error={d.id} description={d.description} />
                  ))}
                </ul>
              </details>

              <details className="bg-state-2-light rounded border-state-2 align-center border-4 border-solid open:transition-all group">
                <summary className={`${totalCalc.moderate.length < 1 ? "pointer-events-none" : "cursor-pointer"} flex place-items-center bg-state-2 justify-between text-lg px-2 after:origin-center hover:cursor-pointer sm:px-6 md:px-10 after:content[primary-color] after:rotate-90 after:content-[url("/icons/arrow.svg")] after:content-[w-6 h-6] group-open:after:transition-all group-open:after:rotate-180`}>
                  <div>
                    <span>{totalCalc.moderate.length}</span> moderate fejl
                  </div>
                </summary>
                <ul className="flex flex-col gap-y-6 p-6 my-0 mx-0 sm:mx-5 sm:my-3">
                  {totalCalc.moderate.map((d) => (
                    <ViolationList params={d.id} key={d.id} error={d.id} description={d.description} />
                  ))}
                </ul>
              </details>

              <details className="bg-state-2-light border-state-1 rounded border-solid border-4 open:transition-all group">
                <summary className={`${totalCalc.minor.length < 1 ? "pointer-events-none" : "cursor-pointer"} flex place-items-center bg-state-1 justify-between text-lg px-2 after:origin-center hover:cursor-pointer sm:px-6 md:px-10 after:rotate-90 after:content-[url("/icons/arrow.svg")] after:content-[w-6 h-6] group-open:after:transition-all group-open:after:rotate-180`}>
                  <div>
                    <span>{totalCalc.minor.length}</span> mindre fejl
                  </div>
                </summary>
                <ul className="flex flex-col gap-y-6 p-6 my-3 mx-5">
                  {totalCalc.minor.map((d) => (
                    <ViolationList params={d.id} key={d.id} error={d.id} description={d.description} />
                  ))}
                </ul>
              </details>
            </section>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
