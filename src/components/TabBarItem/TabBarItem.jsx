import React from 'react';
import styles from './TabBarItem.module.css';

export const TabBarItem = ({ icon, label }) => {
    return (
        <div className={styles.tabItem}>
            <img
                loading="lazy"
                src={icon}
                className={styles.icon}
                alt=""
            />
            <div>{label}</div>
        </div>
    );
};

export default TabBarItem;