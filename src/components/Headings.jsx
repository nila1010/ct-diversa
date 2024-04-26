function Heading({ children, as = "h1", size = "l" }) {
  const Tag = as;
  const variants = {
    l: "text-xl",
    m: "text-lg",
    s: "text-md",
  };

  return <Tag className={variants[size]}>{children}</Tag>;
}

export default Heading;

/* export default function Letsgo({ children }) {
  return <>{children}</>;
}
Letsgo.H1 = function Cool({ children }) {
  return <h1>{children}</h1>;
};
 */
