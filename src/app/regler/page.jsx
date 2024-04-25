import React from 'react';
import styles from './Regler.module.css';
import ReglerHeader from '@/components/ReglerHeader';
import ReglerTable from '@/components/ReglerTable';

export function getImpactClassName(impact) {
    let className = '';
    switch (impact) {
        case 'Kritisk':
            className = styles.impactCritical;
            break;
        case 'Seriøs':
            className = styles.impactCritical;
            break;
        case 'Moderere':
            className = styles.impactModerate;
            break;
        case 'Mindre':
            className = styles.impactMinor;
            break;
        default:
            className = '';
            break;
    }
    return className;
}

const Regler = () => (
    <div className={styles.gridContainer}>
        <ReglerHeader />
        <ReglerTable />
    </div>
);

export default Regler;
