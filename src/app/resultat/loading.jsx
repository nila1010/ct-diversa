import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading() {
  return (
    <section className="p-10">
      <article className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-0">
        <div>
          <h1 className="text-xl text-state-1">Søgning igang</h1>
          <p className="text-sm max-w-prose">Nedenfor kommer du til at se en raport over de tilgængelighedsproblemer vi har fundet. De er opdelt i 3 kategorier hvor kritiske fejl kan forårsage at brugeren ikke kan bruge hjemmesiden. Moderate fejl gør det ikke er optimalt for brugeren og de mindre fejl er et eller andet der ikke har nogen større påvirkning.</p>
        </div>
        <div className="place-self-center order-first sm:order-none grid place-items-center relative">
          <Skeleton height={250} width={250} circle={true} />
        </div>
        <div className="w-[70%] sm:w-[50%]">
          <Skeleton height={200} width={"100%"} />
        </div>
      </article>
      <article className="grid gap-3 mt-10 w-full sm:w-[70vw]">
        <Skeleton height={80} baseColor="oklch(72.07% 0.2317 44)" highlightColor="oklch(91.7% 0.18387 44.119)" />
        <Skeleton height={80} baseColor="oklch(81.48% 0.1931 95)" highlightColor="oklch(93.26% 0.1523 98)" duration={1.6} />
        <Skeleton height={80} baseColor="oklch(85.55% 0.1311 213)" highlightColor="oklch(92.09% 0.0739 211)" duration={1.7} />
      </article>
    </section>
  );
}

export default Loading;
