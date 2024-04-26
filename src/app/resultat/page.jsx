import Image from "next/image";
import { score } from "@/lib/CalcRating";
import AnimatedCircle from "@/components/AnimatedCircle";
import ListError from "@/components/ListError";
import { dummyData } from "@/data/dummy";
export const revalidate = 1800;

export default async function Report({ searchParams }) {
  /*  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json(); */
  const data = dummyData;

  const total = score(data);
  const webScore = total[0];
  const majorError = total[1];
  const moderatError = total[2];
  const minorError = total[3];

  return (
    <section className="p-10">
      <article className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-0">
        <div>
          <h1 className="text-xl text-state-1">{data.url}</h1>
          <p className="text-sm max-w-prose">Nedenfor kan du se en raport over de tilgængelighedsprobler vi har fundet. De er opdelt i 3 kategorier hvor kritiske fejl kan forårsage at brugeren ikke kan bruge hjemmesiden. moderete fejl gør det ikke er optimalt for brugeren og de mindre fejl er et eller andet</p>
        </div>
        <AnimatedCircle data={webScore} />
        <div className="w-[70%] sm:w-[50%]">
          <Image src="/img/placeholder.png" width={data.screenshot.width} height={data.screenshot.height} alt="Billede af hjemmesiden der er blevet skannet" />
        </div>
      </article>
      <article className="grid gap-3 mt-10 w-full sm:w-[70vw]">
        <details className="bg-state-3-light outline outline-4 rounded-sm outline-state-3">
          <summary className="flex justify-between bg-state-3 p-2 sm:p-5 items-center">
            <h2 className="text-lg">{majorError.length} Kritiske fejl</h2>
            <Image src="/arrow.svg" alt="Pil der indikerer om tab er åben" width={49} height={49} />
          </summary>
          {majorError.map((one) => {
            return <ListError key={one.id} error={one} />;
          })}
        </details>
        <details className="bg-state-2-light outline outline-4 rounded-sm outline-state-2">
          <summary className="flex justify-between bg-state-2 p-2 sm:p-5 items-center">
            <h2 className="text-lg grow">{moderatError.length} Moderate fejl</h2>
            <Image src="/arrow.svg" alt="Pil der indikerer om tab er åben" width={49} height={49} />
          </summary>
          {moderatError.map((one) => {
            return <ListError key={one.id} error={one} />;
          })}
        </details>
        <details className="bg-state-1-light outline outline-4 rounded-sm outline-state-1">
          <summary className="flex justify-between bg-state-1 p-2 sm:p-5 items-center">
            <h2 className="text-lg">{minorError.length} Mindre fejl</h2>
            <Image src="/arrow.svg" alt="Pil der indikerer om tab er åben" width={49} height={49} />
          </summary>
          {minorError.map((one) => {
            return <ListError key={one.id} error={one} />;
          })}
        </details>
      </article>
    </section>
  );
}
