import React from "react";
import styles from "./Regler.module.css";

const ReglerHeader = () => (
  <div className={styles.textcol}>
    <h1 className="text-xl">Regler</h1>
    <p className={`${styles.paragraph} text-sm`}>Denne side indeholder en tabel over Axe's HTML 4.9 tilgængelighedsregler, designet til at guide webudviklere og designere i at opnå bedre digital tilgængelighed.</p>
  </div>
);

export default ReglerHeader;
