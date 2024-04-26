"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Linknavigation from "./Linknavigation";
import "animate.css";

function Burger() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {" "}
      {isOpen && (
        <ul className="absolute top-[70%] right-0 bg-backgound-color-secondary z-10 grid gap-2 p-5 animate__bounceInDown animate__animated">
          <Linknavigation path="/#">Check site</Linknavigation>
          <Linknavigation path="/regler">Regler</Linknavigation>
        </ul>
      )}
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </>
  );
}

export default Burger;
