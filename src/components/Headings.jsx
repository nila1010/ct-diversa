function Heading({ children, as = "h1", style = "none", customClass = "" }) {
  const Tag = as;
  const textStyle = {
    none: "",
    italic: "italic",
  };

  const headingStyle = {
    h1: "font-bold text-xl",
    h2: "font-bold text-lg",
    h3: "font-bold text-md",
  };

  if (Tag === "h1") {
    const headingStyle = {};
  }

  return <Tag className={`${textStyle[style]} ${headingStyle[as]} ${customClass}`}>{children}</Tag>;
}

export default Heading;
