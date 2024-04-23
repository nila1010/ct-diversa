import React from 'react';
import styles from './Regler.module.css';
import simonData from './simon';

function getImpactClassName(impact) {
    let className = '';
    switch (impact) {
        case 'Critical':
            className = styles.impactCritical;
            break;
            case 'Serious':
            className = styles.impactCritical;
            break;
        case 'Moderate':
            className = styles.impactModerate;
            break;
        case 'Minor':
            className = styles.impactMinor;
            break;
        default:
            className = '';
            break;
    }
    return className;
}

export default function Regler() {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.textcol}>
                <h1 className='text-xl'>Regler</h1>
                <p className={styles.paragraph}>Denne side indeholder en tabel over Axe's HTML 4.9 tilgængelighedsregler, designet til at guide webudviklere og designere i at opnå bedre digital tilgængelighed.</p>
            </div>
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
{simonData.map((item, index) => (
  <tr key={item.slug} className={(index % 2 === 0) ? styles.tableRowEven : ''}>
    <td className={styles.dataCell}>{item.name}</td>
    <td className={`${styles.dataCell} ${styles.descColumn}`}>{item.shortDesc}</td>
    <td className={`${styles.dataCell} ${getImpactClassName(item.impact)}`}>{item.impact}</td>
    <td className={`${styles.dataCell} ${styles.lastColumn}`}>
      <a className={styles.link} href={`/rules/${item.slug}`}>Read more</a>
    </td>
  </tr>
))}


            </tbody>
                </table>
            </div>
        </div>
    );
}
