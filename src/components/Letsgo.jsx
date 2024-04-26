/* function Letsgo({ children, as = "h2", size = "m" }) {
  const Whatever = type;
  return <Whatever>{children}</Whatever>;
}

export default Letsgo; */

//LetsGo typy=h1 size=M > Indhold

export default function Letsgo({ children }) {
  return <>{children}</>;
}
Letsgo.H1 = function Cool({ children }) {
  return <h1>{children}</h1>;
};
