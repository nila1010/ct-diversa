import React from 'react';
import Link from 'next/link';
import Butten from "@/components/Butten";
import styles from './Regler.module.css';
import { getImpactClassName } from '@/app/regler/page';

const TableRow = ({ item, index }) => (
    <tr className={`max-sm:grid gap-1 ${index % 2 === 0 ? "bg-backgound-color-secondary" : ""} p-5`}>
        <td className="relative max-sm:before:content-['Navn:'] before:font-bold before:underline-offset-4 before:underline before:text-md before:absolute before:inset-0 max-sm:pt-[30px] max-sm:pb-3">{item.name}</td>
        <td className="relative max-w-[40ch] max-sm:before:content-['Beskrivelse:'] before:font-bold before:text-md before:absolute before:inset-0 max-sm:pt-[30px] max-sm:pb-3 before:underline-offset-4 before:underline">{item.shortDesc}</td>
        <td className={`relative max-sm:before:content-['Vigtighed:'] before:font-bold before:text-md before:absolute before:inset-0 max-sm:pt-[30px] max-sm:pb-3 before:underline-offset-4 before:underline`} ><span className={getImpactClassName(item.impact)}>{item.impact}</span></td>

        <td className={`${styles.dataCell} ${styles.lastColumn} py-2 px-5 text-sm relative z-0 cursor-pointer before:rounded before:absolute before:inset-0 before:content-[''] before:outline before:outline-state-3 before:-z-50 after:absolute after:inset-0 after:content-[''] after:-z-50 after:bg-state-3 hover:after:scale-y-[0.9] hover:after:scale-x-[0.95] after:transition after:duration-500 after:ease after:rounded`}>
            <Butten variant="" path={`regler/${item.name.replace(/\s+/g, '-').toLowerCase()}`}>Læs om fejlen</Butten>
        </td>
    </tr>
);

export default TableRow;
