import styles from "./Regler.module.css";
import ReglerHeader from "@/components/ReglerHeader";
import ReglerTable from "@/components/ReglerTable";

export function getImpactClassName(impact) {
  let className = "";
  switch (impact) {
    case "Kritisk":
      className = styles.impactCritical;
      break;
    case "Seriøs":
      className = styles.impactCritical;
      break;
    case "Moderere":
      className = styles.impactModerate;
      break;
    case "Mindre":
      className = styles.impactMinor;
      break;
    default:
      className = "";
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
