import React from 'react';
import styles from '../../components/Report/ReportPage.module.css';
import { SeverityOption } from '../../components/Report/SeverityOption';
import App from "../../App.jsx";

const severityLevels = [
    { level: '주의', value: 'low' },
    { level: '경계', value: 'medium' },
    { level: '심각', value: 'high' }
];

export const ReportPage = () => {
    const [selectedSeverity, setSelectedSeverity] = React.useState(null);

    return (
        <div className={styles.wrapper}>
            <div className={styles.reportContainer}>
                <div className={styles.navigationBar}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/79f7a4389feb224f05cb5029af820536a413700671637dc96fa66ae588c80c64?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb" className={styles.backButton} alt="Back" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/de5d70b75f42b44ecfbc941474884f83d8f25a9f395b95746ce363d1305ed2c7?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb" className={styles.menuButton} alt="Menu" />
                </div>

                <h1 className={styles.title}>
                    14번 좌석<br />신고하시겠어요?
                </h1>

                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc6aec2f8952eb3f17f8b305ac2350a6b72421a09d0c4a5c1726aefac980ffd?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb" className={styles.profileImage} alt="Seat 14 Profile" />

                <div className={styles.warningSection}>
                    <h2 className={styles.warningTitle}>누적 경고 횟수</h2>
                    <div className={styles.warningIndicators}>
                        <div className={styles.indicatorLight} />
                        <div className={styles.indicatorMedium} />
                        <div className={styles.indicatorInactive} />
                    </div>
                </div>

                <div className={styles.severityOptions}>
                    {severityLevels.map((option) => (
                        <SeverityOption
                            key={option.value}
                            level={option.level}
                            isSelected={selectedSeverity === option.value}
                            onClick={() => setSelectedSeverity(option.value)}
                        />
                    ))}
                </div>

                <button className={styles.submitButton}>
                    <div className={styles.buttonContent}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3842ea767f12c5985d14d7fa5035af177ef20c163d51d803de160fd2cd92a4f6?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb" className={styles.buttonIcon} alt="" />
                        <span className={styles.buttonText}>신고하기</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ReportPage;