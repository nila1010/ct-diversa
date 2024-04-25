import Link from "next/link";
import Butten from "./Butten";

function EnkelRegl({ data, index }) {
  return (
    <div className={`${index % 2 === 0 ? "bg-backgound-color-secondary" : ""} grid grid-cols-[1fr_1fr_1fr] gap-5 sm:grid-cols-[1fr_2fr_1fr_1fr] mb-5 items-center`}>
      <h3 className="text-sm ps-2">{`${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`}</h3>
      <h3 className="text-sm ">{data.shortDesc}</h3>
      <h3 className="text-sm ">{data.impact}</h3>
      <div className="col-start-1 col-span-4 sm:col-start-4 sm:col-span-1">
        <Butten variant="regl">
          <Link href={`/regler/${data.name}`}>Læs mere om reglen</Link>
        </Butten>
      </div>
    </div>
  );
}

export default EnkelRegl;