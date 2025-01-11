import React from 'react';
import styles from './SeatCard.module.css';

export const SeatCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.headerSection}>
                    <div className={styles.seatInfo}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/451d288fc60c8378364a12c7bdbf915d34d5494d7a24af73d4b13212b19cabfd?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb"
                            className={styles.seatIcon}
                            alt=""
                        />
                        <div className={styles.seatNumber}>
                            현재
                            <br />
                            <span className={styles.bold}>58번 좌석</span>
                            <br />
                            입니다
                        </div>
                    </div>
                    <div className={styles.brightnessControl}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c06a53697934c8295dd0c6de4c9bc1b0e29d18033d34d8131d60a2a375850b31?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb"
                            className={styles.brightnessIcon}
                            alt="밝기 조절"
                        />
                        <div className={styles.brightnessText}>밝기 조절</div>
                    </div>
                </div>
                <div className={styles.occupancyInfo}>
                    <div className={styles.currentOccupancy}>
                        <div className={styles.label}>이용중</div>
                        <div className={styles.value}>64</div>
                    </div>
                    <div className={styles.totalCapacity}>
                        <div className={styles.label}>정원</div>
                        <div className={styles.value}>100</div>
                    </div>
                </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.actions}>
                <div className={styles.actionButton}>데시벨 확인</div>
                <div className={styles.verticalDivider} />
                <div className={styles.actionButton}>좌석비움</div>
            </div>
        </div>
    );
};

export default SeatCard;