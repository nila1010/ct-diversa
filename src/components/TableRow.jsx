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
        <td className={`${styles.dataCell} ${styles.lastColumn} py-2 px-5 text-sm relative z-0 cursor-pointer before:rounded before:absolute before:inset-0 before:content-[''] before:outline before:outline-state-3 before:-z-50 after:absolute after:inset-0 after:content-[''] after:-z-50 after:bg-state-3 hover:after:scale-y-[0.9] hover:after:scale-x-[0.95] after:transition after:duration-500 after:ease after:rounded`}>
            <Butten variant="" href={`/regler/${item.name.replace(/\s+/g, '-').toLowerCase()}`}>Læs om fejlen</Butten>
        </td>
    </tr>
);

export default TableRow;
