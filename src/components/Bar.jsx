export default function Bar({ impact }) {
  const backgroundColor = getImpactColor(impact);

  return (
    <div className={`text-sm text-center ${backgroundColor} rounded w-40`}>
      <p>{impact}</p>
    </div>
  );
}

const getImpactColor = (impact) => {
  switch (impact) {
    case "Kritisk":
      return "bg-state-3-ultra-light outline outline-[2px] outline-state-3";
    case "Seriøs":
      return "bg-state-3-ultra-light outline outline-[2px] outline-state-3";
    case "Moderere":
      return "bg-state-2-light outline outline-[2px] outline-state-2";
    case "Mindre":
      return "bg-state-1-ultra-light outline outline-[2px] outline-state-1";
    default:
      return "#ccc";
  }
};
