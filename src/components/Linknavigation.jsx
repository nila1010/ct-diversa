import Link from "next/link";

export default function LinkNavigation({ children, path }) {
  return (
    <li>
      <Link className="hover:text-underline" prefetch={false} href={path}>
        {children}
      </Link>
    </li>
  );
}
