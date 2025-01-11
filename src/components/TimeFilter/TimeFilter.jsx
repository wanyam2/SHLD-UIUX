import React from 'react';
import styles from './TimeFilter.module.css';

export const TimeFilter = ({ active, children, onClick }) => {
    return (
        <button
            className={`${styles.filterButton} ${active ? styles.active : ''}`}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    );
};