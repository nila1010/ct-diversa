import React from 'react';
import Link from 'next/link';
import Butten from "@/components/Butten";
import styles from './Regler.module.css';
import { getImpactClassName } from '@/app/regler/page';

const TableRow = ({ item, index }) => (
    <tr className={`max-sm:grid gap-1 ${index % 2 === 0 ? "bg-backgound-color-secondary" : ""} p-5`}>
        <td className=" pl-2 pr-10 relative max-sm:before:content-['Navn:'] before:font-bold before:underline-offset-4 before:underline before:text-md before:absolute before:inset-0 max-sm:pt-[30px] max-sm:pb-3">{item.name}</td>
        <td className=" pl-2 pr-10 relative max-w-[70ch] max-sm:before:content-['Beskrivelse:'] before:font-bold before:text-md before:absolute before:inset-0 max-sm:pt-[30px] max-sm:pb-3 before:underline-offset-4 before:underline">{item.shortDesc}</td>
        <td className={`relative max-sm:before:content-['Vigtighed:'] before:font-bold before:text-md before:absolute before:inset-0 max-sm:pt-[30px] max-sm:pb-3 before:underline-offset-4 before:underline`} ><span className={getImpactClassName(item.impact)}>{item.impact}</span></td>

        <td className={`${styles.dataCell} ${styles.lastColumn} flex z-10 py-20 px-5 text-sm relative before:absolute before:inset-0 before:content-[''] before:rounded before:bg-state-1 before:scale-x-[0] hover:before:scale-x-[1] before:transition before:duration-500 before:ease-out before:origin-left before:-z-10 after:bg-state-2 after:-z-20 after:content-[''] after:absolute after:inset-0 after:rounded`}>
            <Butten className="flex justify-center items-center w-full h-full" variant="" path={`regler/${item.name.replace(/\s+/g, '-').toLowerCase()}`}>Læs om fejlen</Butten>
        </td>
    </tr>
);

export default TableRow;
