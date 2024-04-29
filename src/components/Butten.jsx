import Link from "next/link";
const variants = {
  input: "bg-state-3 py-2 px-5 rounded-r text-lg hover:text-backgound-color-secondary transition",
  error: "bg-error-color py-2 px-5 rounded text-lg hover:text-state-3 transition",
  regl: "bg-state-3 py-2 px-5 rounded-r text-sm hover:text-backgound-color-secondary transition w-full flex text-center justify-center",
  listbtn: "bg-state-3 py-1 px-3 rounded text-md hover:text-backgound-color-secondary transition",
  primary: "py-2 px-5 text-lg relative before:rounded before:absolute before:inset-0 before:content-[''] before:outline before:outline-state-3 before:-z-50 after:absolute after:inset-0 after:content-[''] after:-z-50 after:bg-state-3 after:w-full after:h-full hover:after:scale-y-[0.9] hover:after:scale-x-[0.95] after:transition after:duration-500 after:ease after:rounded",
  primaryRoundedR: "py-2 px-5 text-sm relative before:rounded-r before:absolute before:inset-0 before:content-[''] before:outline before:outline-2 before:outline-state-3 before:-z-50 after:absolute after:inset-0 after:content-[''] after:-z-50 after:bg-state-3 after:w-full after:h-full hover:after:scale-y-[0.9] hover:after:scale-x-[0.95] after:transition after:duration-500 after:ease after:rounded-r",
};

function Linkbutten({ children, variant, path }) {
  return (
    <Link className={variants[variant]} href={`/${path}`}>
      {children}
    </Link>
  );
}

export default Linkbutten;
