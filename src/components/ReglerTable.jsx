"use client";
import React from "react";
import styles from "./Regler.module.css";
import TableRow from "./TableRow";
import { reglerData } from "@/data/reglerData";
import { useState } from "react";

export default function ReglerTable() {
  let allRules = reglerData;
  const [data, setData] = useState();

  if (data) {
    allRules = reglerData.filter((one) => one.impact === data);
  }

  const btnStyle = "ml-[-2px] py-2 px-5 text-lg relative before:rounded before:absolute before:inset-0 before:content-[''] before:border-2 before:border-state-2 before:-z-50 after:absolute after:inset-0 after:content-[''] after:-z-50 after:bg-state-2 after:w-full after:h-full hover:after:scale-y-[0.8] hover:after:scale-x-[0.9] after:transition after:duration-500 after:ease after:rounded";

  return (
    <div className={styles.griditem}>
      <button className={`${btnStyle}`} onClick={() => setData((o) => (o = null))}>
        Se alle
      </button>
      <button className={`${btnStyle}`} onClick={() => setData((o) => (o = "Kritisk"))}>
        Kritiske
      </button>
      <button className={`${btnStyle}`} onClick={() => setData((o) => (o = "Moderart"))}>
        Moderate
      </button>
      <button className={`${btnStyle}`} onClick={() => setData((o) => (o = "Mindre"))}>
        Mindre
      </button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={`${styles.headerCell} ${styles.descColumn}`}>Title</th>
            <th className={`${styles.headerCell} ${styles.descColumn}`}>Beskrivelse</th>
            <th className={`${styles.headerCell} ${styles.descColumn}`}>Vigtighed</th>
          </tr>
        </thead>
        <tbody className="max-sm:grid gap-5">
          {allRules.map((item, index) => (
            <TableRow key={item.name} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
