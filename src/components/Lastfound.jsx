"use client";
import Button from "@/components/Butten";

export default function Lastfound({ data }) {
  return (
    <section>
      <details>
        <summary className="ml-[-2px] cursor-pointer py-2 px-5 text-sm relative before:rounded before:absolute before:inset-0 before:content-[''] before:border-2 before:border-state-2 before:-z-50 after:absolute after:inset-0 after:content-[''] after:-z-50 after:bg-state-2 after:w-full after:h-full hover:after:scale-y-[0.8] hover:after:scale-x-[0.95] after:transition after:duration-500 after:ease after:rounded">Dine seneste 5 søgninger</summary>
        <ul className="bg-state-1-light outline rounded outline-2 outline-state-2">
          {data.map((o, i) => {
            return (
              <li className="relative gap-5 z-0 flex justify-between items-center p-2" key={i}>
                <div className="text-left max-w-[18ch]">
                  <p className="truncate">Url: {o.searchUrl}</p>
                  <p>Dato: {o.date}</p>
                </div>
                <Button variant="primarySmall" path={`resultater/${o.id}`}>
                  Se data
                </Button>
              </li>
            );
          })}
        </ul>
      </details>
    </section>
  );
}
