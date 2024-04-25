import React from 'react';
import styles from './Regler.module.css';
import TableRow from './TableRow';
import { reglerData } from "@/data/reglerData";

const ReglerTable = () => (
    <div className={styles.griditem}>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.headerCell}>Navn på regel</th>
                    <th className={`${styles.headerCell} ${styles.descColumn}`}>Beskrivelse</th>
                    <th className={styles.headerCell}>Vigtighed</th>
                </tr>
            </thead>
            <tbody>
                {reglerData.map((item, index) => (
                    <TableRow key={item.name} item={item} index={index} />
                ))}
            </tbody>
        </table>
    </div>
);

export default ReglerTable;
