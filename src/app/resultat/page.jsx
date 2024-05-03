import Image from "next/image";
import ViolationList from "@/components/ViolationList";
import AnimatedCircle from "@/components/AnimatedCircle";
import { score } from "@/lib/CalcRating";
import Heading from "@/components/Headings";
import Storage from "@/components/Storage";
// import dummyData from "@/data/dummy";

export const revalidate = 1800;

export default async function Resultat({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();

  // const data = dummyData;
  // console.log(data)

  const total = score(data);

  const webScore = total[0];

  const major = total[1];
  const moderate = total[2];
  const minor = total[3];

  return (
    <>
      <div className="m-2 sm:m-6">
        <section className="mb-10 word">
          <Heading as="h2" customClass="text-xl w-full hyphens-auto my-4 text-center sm:text-left">
            {data.url}
          </Heading>
          <article className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            <div className="flex flex-col w-auto place-content-center gap-y-2 sm:order-2">
              <AnimatedCircle data={webScore} />
              <Heading as="h3" customClass="w-auto text-md text-center">
                Overall score
              </Heading>
            </div>
            <Storage url={data.url} payload={data} />
            <div className="flex flex-col text-balance gap-y-4 px-0 sm:order-1">
              <p className="text-sm">Nedenfor kan du se en raport over de tilgængelighedsproblemer vi har fundet. De er opdelt i 3 kategorier hvor kritiske fejl kan forårsage at brugeren ikke kan bruge hjemmesiden. Moderate fejl gør det ikke er optimalt for brugeren og de mindre fejl er et eller andet der ikke har nogen større påvirkning.</p>
              <Image className="w-auto object-contain" src={data.screenshot.url} alt="Logo" width={data.screenshot.width} height={data.screenshot.height} />
            </div>
          </article>
        </section>

        <section className="flex flex-col gap-y-6 my-14 px-0">
          <Heading as="h2" customClass="!text-2xl">
            Komplet rapport
          </Heading>
          <details className="bg-state-3-ultra-light border-state-3 border-4 rounded border-solid open:transition-all group">
            <summary className={`${major.length < 1 ? "pointer-events-none" : "cursor-pointer"} flex place-items-center bg-state-3 justify-between text-lg px-2 after:origin-center hover:cursor-pointer sm:px-6 md:px-10 after:rotate-90 after:content-[url("/icons/arrow.svg")] after:content-[w-6 h-6] group-open:after:transition-all group-open:after:rotate-180 group-open:after:transform group-open:after:-translate-y-2 group-open:after:translate-x-2`}>
              <div>
                <span>{major.length}</span> kritiske fejl
              </div>
            </summary>
            <ul className="flex flex-col gap-y-8 p-6 my-3 mx-5 justify-between">
              {major.map((d) => (
                <ViolationList params={d.id} key={d.id} error={d.id} description={d.description} />
              ))}
            </ul>
          </details>

          <details className="bg-state-2-light rounded border-state-2 align-center border-4 border-solid open:transition-all group">
            <summary className={`${moderate.length < 1 ? "pointer-events-none" : "cursor-pointer"} flex place-items-center bg-state-2 justify-between text-lg px-2 after:origin-center hover:cursor-pointer sm:px-6 md:px-10 after:rotate-90 after:content-[url("/icons/arrow.svg")] after:content-[w-6 h-6] group-open:after:transition-all group-open:after:rotate-180 group-open:after:transform group-open:after:-translate-y-2 group-open:after:translate-x-2`}>
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

          <details className=" bg-state-1-ultra-light border-state-1 rounded border-solid border-4 open:transition-all group">
            <summary className={`${minor.length < 1 ? "pointer-events-none" : "cursor-pointer"} flex place-items-center bg-state-1 justify-between text-lg px-2 after:origin-center hover:cursor-pointer sm:px-6 md:px-10 after:rotate-90 after:content-[url("/icons/arrow.svg")] after:content-[w-6 h-6] group-open:after:transition-all group-open:after:rotate-180 group-open:after:transform group-open:after:-translate-y-2 group-open:after:translate-x-2`}>
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
