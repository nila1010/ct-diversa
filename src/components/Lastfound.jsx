import Button from "@/components/Butten";

export default function Lastfound({ data }) {
  return (
    <section>
      <details>
        <summary className="ml-[-2px] py-2 px-5 text-lg relative before:rounded before:absolute before:inset-0 before:content-[''] before:border-2 before:border-state-2 before:-z-50 after:absolute after:inset-0 after:content-[''] after:-z-50 after:bg-state-2 after:w-full after:h-full hover:after:scale-y-[0.8] hover:after:scale-x-[0.9] after:transition after:duration-500 after:ease after:rounded">Dine seneste 5 søgninger</summary>
        <ul className="bg-state-1-light">
          {data.map((o) => {
            return (
              <li className="flex justify-between items-center p-2" key={o.searchUrl}>
                <div className="text-left max-w-[18ch]">
                  <p className="truncate">Url: {o.searchUrl}</p>
                  <p>Dato: {o.date}</p>
                </div>
                <Button>Se data</Button>
              </li>
            );
          })}
        </ul>
      </details>
    </section>
  );
}
