import React from 'react';
import styles from './ScoreCard.module.css';

export const ScoreCard = ({ icon, label, value }) => {
    return (
        <div className={styles.scoreWrapper}>
            <img
                loading="lazy"
                src={icon}
                className={styles.scoreIcon}
                alt={`${label} indicator`}
            />
            <div className={styles.scoreLabel}>{label}</div>
            <div className={styles.scoreValue}>{value}</div>
        </div>
    );
};
