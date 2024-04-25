import Image from "next/image";
import Link from "next/link";
import { dummyData } from "@/data/dummy";
import { score } from "@/lib/CalcRating";
import AnimatedCircle from "@/components/AnimatedCircle";
/* export const revalidate = 1800; */

export default async function Report() {
  /*  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json(); */
  const data = dummyData;

  //find længe på de 3 arrays
  const violations = data.violations;
  const lenghtVio = violations.length;
  // For at få alle fejle ud så mapper vi violations

  //lav samlet score
  const total = score(data);
  const webScore = total[0];
  const majorError = total[1];
  const moderatError = total[2];
  const minorError = total[3];

  return (
    <section className="p-10">
      <article className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-0">
        <div>
          <h1 className="text-xl text-state-1">{dummyData.url}</h1>
          <p className="text-sm max-w-prose">Nedenfor kan du se en raport over de tilgængelighedsprobler vi har fundet. De er opdelt i 3 kategorier hvor kritiske fejl kan forårsage at brugeren ikke kan bruge hjemmesiden. moderete fejl gør det ikke er optimalt for brugeren og de mindre fejl er et eller andet</p>
        </div>
        <AnimatedCircle data={webScore} />
        <div className="w-[70%] sm:w-[50%]">
          <Image src="/img/placeholder.png" width={dummyData.screenshot.width} height={dummyData.screenshot.height} alt="Billede af hjemmesiden der er blevet skannet" />
        </div>
      </article>
      <article>
        <details>
          <summary>{majorError.length} Kritiske fejl</summary>
          <div></div>
        </details>
        <details>
          <summary>{moderatError.length} Moderate fejl</summary>
          {moderatError.map((error, i) => {
            return <p key={i}>{error.id}</p>;
          })}
        </details>
        <details>
          <summary>{minorError.length} Mindre fejl</summary>
          <p>her er noget andet</p>
        </details>
      </article>
    </section>
  );
}
