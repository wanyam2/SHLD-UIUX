import React from 'react';
import styles from '../../pages/SeatLayout/SeatLayout.module.css';

export const Seat = ({ isSelected, onClick, seatNumber }) => {
    return (
        <div
            className={styles.seat}
            onClick={onClick}
            role="button"
            tabIndex={0}
            aria-label={`Seat ${seatNumber}`}
            aria-selected={isSelected}
            onKeyPress={(e) => e.key === 'Enter' && onClick()}
        >
            <div className={styles.seatBox} />
        </div>
    );
};