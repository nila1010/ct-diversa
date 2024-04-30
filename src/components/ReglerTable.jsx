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
  return (
    <div className={styles.griditem}>
      <button onClick={() => setData((o) => (o = null))}>Se alle</button>
      <button onClick={() => setData((o) => (o = "Kritisk"))}>Kritiske</button>
      <button onClick={() => setData((o) => (o = "Moderart"))}>Moderate</button>
      <button onClick={() => setData((o) => (o = "Mindre"))}>Mindre</button>
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
