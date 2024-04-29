import React from 'react';
import Link from 'next/link';
import Butten from "@/components/Butten";
import styles from './Regler.module.css';
import { getImpactClassName } from '@/app/regler/page';

const TableRow = ({ item, index }) => (
    <tr className={index % 2 === 0 ? styles.tableRowEven : ''}>
        <td className={styles.dataCell}>{item.name}</td>
        <td className={`${styles.dataCell} ${styles.descColumn}`}>{item.shortDesc}</td>
        <td className={`${styles.dataCell} ${getImpactClassName(item.impact)}`}>{item.impact}</td>
       <td className={`${styles.dataCell} ${styles.lastColumn}`} style={{ position: 'relative', zIndex: 1 }}>
            <Butten variant="primary" href={`/regler/${item.name.replace(/\s+/g, '-').toLowerCase()}`}>Læs om fejlen</Butten>
        </td>
    </tr>
);

export default TableRow;
