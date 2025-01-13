import React from 'react';
import styles from '../../pages/SeatLayout/SeatLayout.module.css';

export const TabItem = ({ icon, label, onClick, isActive }) => {
    return (
        <div
            className={styles.tabItem}
            onClick={onClick}
            role="tab"
            tabIndex={0}
            aria-selected={isActive}
            aria-label={label}
            onKeyPress={(e) => e.key === 'Enter' && onClick()}
        >
            <img
                src={icon}
                alt={`${label} icon`}
                className={styles.tabIcon}
                loading="lazy"
            />
            <div>{label}</div>
        </div>
    );
};