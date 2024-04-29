"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Linknavigation from "./Linknavigation";
import "animate.css";

function Burger() {
  const [isOpen, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }
  return (
    <>
      {isOpen && (
        <ul onClick={closeMenu} className="absolute w-full top-[80%] right-0 justify-center text-xl text-center bg-backgound-color-secondary grid gap-2 pt-10 px-8 pb-12 rounded-b animate__bounceInDown animate__animated">
          <Linknavigation path="/#">Check site</Linknavigation>
          <Linknavigation path="/regler">Regler</Linknavigation>
        </ul>
      )}
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </>
  );
}

export default Burger;
