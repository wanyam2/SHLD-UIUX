import React from 'react';
import styles from '../../pages/SeatLayout/SeatLayout.module.css';

export const StudyRoom = ({ number, occupancy, isActive, onClick }) => {
    return (
        <div
            className={styles.studyRoomCard}
            onClick={onClick}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            onKeyPress={(e) => e.key === 'Enter' && onClick()}
        >
            <div className={isActive ? styles.studyRoomActive : styles.studyRoomInactive}>
                <div className={styles.studyRoomTitle}>스터디룸 {number}</div>
                <div className={styles.studyRoomCount}>{occupancy}/24</div>
            </div>
        </div>
    );
};