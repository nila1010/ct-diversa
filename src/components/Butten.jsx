const variants = {
  input: "bg-state-3 py-2 px-5 rounded-r text-lg hover:text-backgound-color-secondary transition",
  error: "bg-error-color py-2 px-5 rounded text-lg hover:text-state-3 transition",
  regl: "bg-state-3 py-2 px-5 rounded-r text-sm hover:text-backgound-color-secondary transition w-full",
};

function Butten({ children, variant }) {
  return <button className={variants[variant]}>{children}</button>;
}

export default Butten;
