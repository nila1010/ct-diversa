import Image from "next/image";
import ListItem from "@/components/ListItem";
import AnimatedCircle from "@/components/AnimatedCircle";
import { score } from "@/lib/CalcRating";

export const revalidate = 1800;

export default async function Resultat({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();

  const violations = data.violations;
  const critical = violations.filter((one) => one.impact === "critical");
  const serious = violations.filter((one) => one.impact === "serious");
  const major = critical.concat(serious);
  const moderate = violations.filter((one) => one.impact === "moderate");
  const minor = violations.filter((one) => one.impact === "minor");

  const total = score(data);
  const webScore = total[0];

  return (
    <>
      <div className="m-10">
        <section className="mb-10">
          <article className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            <figure className="flex flex-col w-auto place-content-center gap-y-2 md:order-2">
              <AnimatedCircle data={webScore} />
              <h2 className="w-auto text-md text-center">Overall score</h2>
            </figure>
            <figure className="flex flex-col gap-y-2 md:order-1">
              <h1 className="text-xl">{data.url}</h1>
              <p className="text-pretty">Nedenfor kan du se en raport over de tilgængelighedsprobler vi har fundet. De er opdelt i 3 kategorier hvor kritiske fejl kan forårsage at brugeren ikke kan bruge hjemmesiden. moderete fejl gør det ikke er optimalt for brugeren og de mindre fejl er et eller andet</p>
              <Image className="w-auto object-contain" src={data.screenshot.url} alt="Logo" width={data.screenshot.width} height={data.screenshot.height} />
            </figure>
          </article>
        </section>

        <section className="flex flex-col gap-y-6 my-14 px-0">
          <h3 className="text-xl">Fuld raport </h3>
          {major.length != 0 && (
            <details className="bg-state-3-light">
              <summary className='flex gap-3 justify-between text-lg p-6 border-solid border-4 rounded border-state-3 after:content-[">"]'>
                <div>
                  <span>{major.length}</span> kritiske fejl
                </div>
              </summary>
              <ul className="flex flex-col gap-y-8 p-6 my-3 mx-5">
                {major.map((d) => (
                  <ListItem key={d.id} error={d.id} description={d.description} />
                ))}
              </ul>
            </details>
          )}
          {moderate.length != 0 && (
            <details className="bg-state-2-light">
              <summary className='flex gap-3 justify-between text-lg p-6 border-solid border-4 rounded border-state-2 after:content-[">"]'>
                <div>
                  <span>{moderate.length}</span> moderate fejl
                </div>
              </summary>
              <ul className="flex flex-col gap-y-6 p-6 my-3 mx-5">
                {moderate.map((d) => (
                  <ListItem key={d.id} error={d.id} description={d.description} />
                ))}
              </ul>
            </details>
          )}
          {minor.length != 0 && (
            <details className="bg-state-1-light">
              <summary className='flex gap-3 justify-between text-lg p-6 border-solid border-4 rounded border-state-1 after:content-[">"]'>
                <div>
                  <span>{minor.length}</span> mindre fejl
                </div>
              </summary>
              <ul className="flex flex-col gap-y-6 p-6 my-3 mx-5">
                {minor.map((d) => (
                  <ListItem key={d.id} error={d.id} description={d.description} />
                ))}
              </ul>
            </details>
          )}
        </section>
      </div>
    </>
  );
}
