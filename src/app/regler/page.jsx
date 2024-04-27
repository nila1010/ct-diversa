import EnkelRegl from "@/components/EnkelRegl";
import { reglerData } from "@/data/reglerData";

function Regler() {
  return (
    <section className="p-5 sm:p-10">
      <h1 className="text-2xl">Regler</h1>
      <p className="text-sm max-w-prose">Denne side indeholder en tabel over Axes HTML 4.9 tilgængelighedsregler, designet til at guide webudviklere og designere i at opnå bedre digital tilgængelighed.</p>
      <article>
        <div className="mt-10 grid grid-cols-[1fr_1fr_1fr] gap-5 sm:grid-cols-[1fr_2fr_1fr_1fr] ps-2 pe-5">
          <h2 className="text-lg">Navn</h2>
          <h2 className="text-lg">Beskrivelse</h2>
          <h2 className="text-lg">Vigtighed</h2>
          <div></div>
        </div>
        {reglerData.map((regl, index) => {
          return <EnkelRegl key={regl.name} index={index} data={regl} />;
        })}
      </article>
    </section>
  );
}

export default Regler;
