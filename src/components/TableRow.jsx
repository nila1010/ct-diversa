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
        <td className={`${styles.dataCell} ${styles.lastColumn}`}>
            <Link legacyBehavior href={`/regler/${item.name.replace(/\s+/g, '-').toLowerCase()}`}>
                <a><Butten variant="input">Læs mere om fejlen her</Butten></a>
            </Link>
        </td>
    </tr>
);

export default TableRow;
