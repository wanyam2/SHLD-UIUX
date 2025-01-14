import React from 'react';
import styles from './ReportPage.module.css';

export const WarningIndicator = ({ type }) => {
    const dotClass = `${styles.warningDot} ${
        type === 'light' ? styles.warningDotLight :
            type === 'medium' ? styles.warningDotMedium :
                styles.warningDotInactive
    }`;

    return <div className={dotClass} />;
};