import { reglerData } from "@/data/reglerData";
import Link from "next/link";

function Regler() {
  return (
    <div>
      <h1>Her er en liste over regler</h1>
      {reglerData.map((regl) => {
        return (
          <Link key={regl.name} href={`/regler/${regl.name}`}>
            <h2>{regl.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default Regler;
