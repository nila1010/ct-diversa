import Image from "next/image";
import ViolationList from "@/components/ViolationList";
import AnimatedCircle from "@/components/AnimatedCircle";
import {dummyData} from '@/data/dummy'
import { score } from "@/lib/CalcRating";

export const revalidate = 1800;

export default async function Resultat({ searchParams }) {

  const params = new URLSearchParams(searchParams);
  // const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  // const data = await response.json();
  const data = dummyData;
  // console.log(data)

  const total = score(data);

  const webScore = total[0];

  const major = total[1];
  const moderate = total[2];
  const minor = total[3]; 

  return (
    <>
      <div className="m-2 sm:m-10">
        <section className="my-10 sm:my-0 sm:mb-10">
          <article className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            <div className="flex flex-col w-auto place-content-center gap-y-2 sm:order-2">
              <AnimatedCircle data={webScore}/>
              <h3 className="w-auto text-md text-center">Overall score</h3>
            </div>
            <div className="flex flex-col text-pretty gap-y-4 px-0 sm:order-1">
              <h2 className="text-xl w-full hyphens-auto break-words">{data.url}</h2>
              <p className="text-sm">Nedenfor kan du se en raport over de tilgængelighedsprobler vi har fundet. De er opdelt i 3 kategorier hvor kritiske fejl kan forårsage at brugeren ikke kan bruge hjemmesiden. Moderate fejl gør det ikke er optimalt for brugeren og de mindre fejl er et eller andet</p>
              <Image className="w-auto object-contain" src="/dummyImg.svg" alt="Logo" width={data.screenshot.width} height={data.screenshot.height} />
            </div>
          </article>
        </section>

        <section className="flex flex-col gap-y-6 my-14 px-0">
          <h3 className="text-xl">Fuld raport </h3>
            <details className="bg-state-3-light border-state-3 border-4 rounded border-solid open:transition-all transform group">
              <summary className={`${major.length < 1 ? 'pointer-events-none' : 'cursor-pointer'} flex place-items-center bg-state-3 justify-between text-lg px-2 hover:cursor-pointer sm:px-6 md:px-10 after:text-2xl after:rotate-90 after:content-[url("/icons/arrow.svg")] after:content-[w-6 h-6] group-open:after:transition-all group-open:after:rotate-180`}>
                <div>
                  <span>{major.length}</span> kritiske fejl
                </div>
              </summary>
              <ul className="flex flex-col gap-y-8 p-6 my-3 mx-5 justify-between">
                {major.map((m) => (
                  <ViolationList params={m.id} key={m.id} error={m.id} description={m.description} />
                ))}
              </ul>
            </details>

            <details className="bg-state-2-light rounded border-state-2 align-center border-4 border-solid open:transition-all transform group">
              <summary className={`${moderate.length < 1 ? 'pointer-events-none' : 'cursor-pointer'} flex place-items-center bg-state-2 justify-between text-lg px-2 hover:cursor-pointer sm:px-6 md:px-10 after:text-2xl after:rotate-90 after:content-[url("/icons/arrow.svg")] after:content-[w-6 h-6] group-open:after:transition-all group-open:after:rotate-180`}>
                 <div>
                  <span>{moderate.length}</span> moderate fejl
                </div>
              </summary>
              <ul className="flex flex-col gap-y-6 p-6 my-0 mx-0 sm:mx-5 sm:my-3">
                {moderate.map((d) => (
                  <ViolationList params={d.id} key={d.id} error={d.id} description={d.description} />
                ))}
              </ul>
            </details>

            <details className="bg-state-1-light border-state-1 rounded border-solid border-4 open:transition-all group">
              <summary className={`${minor.length < 1 ? 'pointer-events-none' : 'cursor-pointer'} flex place-items-center bg-state-1 justify-between text-lg px-2 hover:cursor-pointer sm:px-6 md:px-10 after:text-2xl after:rotate-90 after:content-[url("/icons/arrow.svg")] after:content-[w-6 h-6] group-open:after:transition-all group-open:after:rotate-180`}>
                <div>
                  <span>{minor.length}</span> mindre fejl
                </div>
              </summary>
              <ul className="flex flex-col gap-y-6 p-6 my-3 mx-5">
                {minor.map((d) => (
                  <ViolationList params={d.id} key={d.id} error={d.id} description={d.description} />
                ))}
              </ul>
            </details>
        </section>
      </div>
    </>
  );
}
