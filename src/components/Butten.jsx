import Link from "next/link";
const variants = {
  input: "bg-state-3 py-2 px-5 rounded-r text-lg hover:text-backgound-color-secondary transition",
  error: "bg-error-color py-2 px-5 rounded text-lg hover:text-state-3 transition",
  regl: "bg-state-3 py-2 px-5 rounded-r text-sm hover:text-backgound-color-secondary transition w-full flex text-center justify-center",
  listbtn: "bg-state-3 py-1 px-3 rounded text-md hover:text-backgound-color-secondary transition",
};

function Linkbutten({ children, variant, path }) {
  return (
    <Link className={variants[variant]} href={`/${path}`}>
      {children}
    </Link>
  );
}

export default Linkbutten;
