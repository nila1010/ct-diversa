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
        <ul onClick={closeMenu} className="absolute top-[65%] right-0 bg-backgound-color-secondary z-10 grid gap-2 pt-10 px-8 pb-4 text-md rounded-b animate__bounceInDown animate__animated">
          <Linknavigation path="/#">Check site</Linknavigation>
          <Linknavigation path="/regler">Regler</Linknavigation>
        </ul>
      )}
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </>
  );
}

export default Burger;
