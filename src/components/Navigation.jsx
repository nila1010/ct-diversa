"use client";
import Image from "next/image";
import Linknavigation from "./Linknavigation";
import Link from "next/link";
import Burger from "./Burger";
import { useEffect, useState } from "react";

function Navigation() {
  const [width, setWidth] = useState(861);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="relative flex justify-between py-5 px-10 items-center bg-backgound-color-secondary">
      <Link href="/#">
        <div className="flex gap-5">
          <Image alt="Diverse logo" src="/logo/diversa_icon.svg" width={49} height={49} />
          <Image alt="Diverse logo" src="/logo/diversa.svg" width={160} height={37} />
        </div>
      </Link>
      {width > 860 ? (
        <ul className="flex gap-5 text-md">
          <Linknavigation path="/#">Check site</Linknavigation>
          <Linknavigation path="/regler">Regler</Linknavigation>
        </ul>
      ) : (
        <Burger />
      )}
    </nav>
  );
}

export default Navigation;
