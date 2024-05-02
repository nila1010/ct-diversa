"use client";
import { useState, useEffect } from "react";

function AnimatedCircle({ data }) {
  const [value, setValue] = useState(0);
  const divStyle = [{
    background: `conic-gradient(color-mix(in oklch, red, green calc(${value} * 1%)) ${value * 3.6}deg, var(--colors-brand-beige-00) 0deg)`,
    border: "solid 5px var(--colors-grey-20)"
  },
  {
    background: `color-mix(in oklch, red, lime calc(${value} * 1%))`,
  }];

  useEffect(() => {
    const counter = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < data) {
          return prevValue + 1;
        } else {
          clearInterval(counter);
          return prevValue;
        }
      });
    }, 20);

    return () => clearInterval(counter);
  }, []);

  return (
    <figure className="place-self-center aspect-square order-first sm:order-none grid place-items-center relative">
      <div style={divStyle[0]} className="w-[250px] aspect-square rounded-full lg:w-[350px]"></div>
      <div style={divStyle[1]} className="bg-state-3 w-[180px] aspect-square rounded-full absolute lg:w-[280px]"></div>
      <p className="absolute text-2xl">{value}%</p>
    </figure>
  );
}

export default AnimatedCircle;
