import Butten from "./Butten";

export default function ListError({ error }) {
  return (
    <div className="flex justify-between flex-wrap items-center p-3 gap-5">
      <div className="flex-1 min-w-[220px]">
        <h3 className="text-lg">{`${error.id.charAt(0).toUpperCase()}${error.id.slice(1)}`}</h3>
        <p className="text-sm">{error.help}</p>
      </div>
      <Butten variant="listbtn" path={`regler/${error.id}`}>
        Læs mere
      </Butten>
    </div>
  );
}
