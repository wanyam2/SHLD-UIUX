import React from 'react';
import styles from './SeverityOption.module.css';

export const SeverityOption = ({ level, isSelected, onClick }) => {
    return (
        <div className={styles.severityOption}>
            <div className={styles.optionWrapper}>
                <div className={`${styles.optionBox} ${isSelected ? styles.selected : ''}`}>
                    <div className={styles.indicator} />
                </div>
            </div>
            <div className={styles.label}>{level}</div>
        </div>
    );
};