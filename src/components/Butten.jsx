import Link from "next/link";
const variants = {
  input: "bg-state-3 py-2 px-5 rounded-r text-lg hover:text-backgound-color-secondary transition",
  error: "bg-error-color py-2 px-5 rounded text-lg hover:text-state-3 transition",
  regl: "bg-state-3 py-2 px-5 rounded-r text-sm hover:text-backgound-color-secondary transition w-full flex text-center justify-center",
  listbtn: "bg-state-3 py-1 px-3 rounded text-md hover:text-backgound-color-secondary transition",
  primary: "py-2 px-5 text-lg relative before:absolute before:inset-0 before:content-[''] before:bg-state-1 before:scale-x-[0] hover:before:scale-x-[1] before:transition before:duration-500 before:ease-out before:origin-left before:-z-10 after:bg-state-2 after:-z-20 after:content-[''] after:absolute after:inset-0",
  secondary: "py-2 px-5 text-lg relative before:absolute before:inset-0 before:content-[''] before:bg-state-2 before:scale-x-[0] hover:before:scale-x-[1] before:transition before:duration-500 before:ease-out before:origin-left before:-z-10 after:bg-state-1 after:-z-20 after:content-[''] after:absolute after:inset-0",
  primaryRoundedR: "py-2 px-5 text-lg relative before:rounded-r before:absolute before:inset-0 before:content-[''] before:bg-state-1 before:scale-x-[0] hover:before:scale-x-[1] before:transition before:duration-500 before:ease-out before:origin-left before:-z-10 after:bg-state-2 after:-z-20 after:content-[''] after:absolute after:inset-0 after:rounded-r",
};

function Linkbutten({ children, variant, path }) {
  return (
    <Link className={variants[variant]} href={`/${path}`}>
      {children}
    </Link>
  );
}

export default Linkbutten;
