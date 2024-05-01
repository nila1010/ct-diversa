import styles from "@/components/Regler.module.css";
import ReglerHeader from "@/components/ReglerHeader";
import ReglerTable from "@/components/ReglerTable";

export function getImpactClassName(impact) {
  let className = "";
  switch (impact) {
    case "Kritisk":
      className = 'rounded w-40 bg-state-3-ultra-light outline outline-[2px] outline-state-3 pl-2 pr-2';
      break;
    case "Seriøs":
      className = 'rounded w-40 bg-state-3-ultra-light outline outline-[2px] outline-state-3 pl-2 pr-2';
      break;
    case "Moderere":
      className = 'rounded w-40 bg-state-2-light outline outline-[2px] outline-state-2 pl-2 pr-2';
      break;
    case "Mindre":
      className = 'rounded w-40 bg-state-1-ultra-light outline outline-[2px] outline-state-1 pl-2 pr-2';
      break;
    default:
      className = "#ccc";
      break;
  }
  return className;
}

export default function Regler() {
  return (
    <div className="m-10">
      <ReglerHeader />
      <ReglerTable />
    </div>
  );
}
