"use client";
import React, { useState } from "react";
import styles from "./Regler.module.css";
import TableRow from "./TableRow";
import { reglerData } from "@/data/reglerData";

export default function ReglerTable() {
  const [activeButton, setActiveButton] = useState(null); 
  const [data, setData] = useState();

  const handleClick = (type) => {
    setData(type);
    setActiveButton(type);
  };

 
  const btnStyle = (type) => {
    const isActive = activeButton === type;
    return `py-2 px-5 text-ss relative before:rounded before:absolute before:inset-0 before:content-[''] before:border-2 before:border-state-2 before:-z-50 after:absolute after:inset-0 after:content-[''] after:-z-50 after:bg-state-2 after:w-full after:h-full ${isActive ? 'after:scale-y-[0.8] after:scale-x-[0.95]' : 'hover:after:scale-y-[0.8] hover:after:scale-x-[0.95]'} after:transition after:duration-500 after:ease after:rounded`;
  };

  return (
    <div className={styles.griditem}>
      <div className="flex">
        <button className={btnStyle(null)} onClick={() => handleClick(null)}>
          Se alle
        </button>
        <button className={`ml-1 ${btnStyle('Kritisk')}`} onClick={() => handleClick('Kritisk')}>
          Kritiske
        </button>
        <button className={`ml-1 ${btnStyle('Moderere')}`} onClick={() => handleClick('Moderere')}>
          Moderere
        </button>
        <button className={`ml-1 ${btnStyle('Mindre')}`} onClick={() => handleClick('Mindre')}>
          Mindre
        </button>
      </div>
      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th className={`${styles.headerCell} ${styles.descColumn}`}>Title</th>
            <th className={`${styles.headerCell} ${styles.descColumn}`}>Beskrivelse</th>
            <th className={`${styles.headerCell} ${styles.descColumn}`}>Vigtighed</th>
          </tr>
        </thead>
        <tbody className="max-sm:grid gap-5">
          {reglerData.filter(item => !data || item.impact === data).map((item, index) => (
            <TableRow key={item.name} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
