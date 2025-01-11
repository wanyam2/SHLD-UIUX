import React from 'react';
import styles from './ReportSection.module.css';

export const ReportSection = () => {
    return (
        <div className={styles.reportContainer}>
            <div className={styles.noiseAlert}>소음으로 불편하신가요?</div>
            <button className={styles.reportButton}>
                <div className={styles.buttonContent}>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/69869d38ba8610d3e0c578df97a70b0c58dfa7ef1d185958a0f90d0bcd6d3ab5?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb"
                        className={styles.reportIcon}
                        alt=""
                    />
                    <div className={styles.reportText}>신고하기</div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b77b5647e32ffbcb024450cd2bfe3d6fb052793ecdf533c0cf8ead410586a02f?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb"
                    className={styles.arrowIcon}
                    alt=""
                />
            </button>
        </div>
    );
};

export default ReportSection;