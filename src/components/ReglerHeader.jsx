import React from "react";
import styles from "./Regler.module.css";
import Heading from "./Headings";

const ReglerHeader = () => (
  <div className={styles.textcol}>
    <Heading as="h1">Regler</Heading>
    <p className={`${styles.paragraph} text-sm`}>Denne side indeholder en tabel over Axes HTML 4.9 tilgængelighedsregler, designet til at guide webudviklere og designere i at opnå bedre digital tilgængelighed.</p>
  </div>
);

export default ReglerHeader;
