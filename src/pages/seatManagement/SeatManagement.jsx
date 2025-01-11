import React from 'react';
import { SeatCard } from '../../components/SeatCard/SeatCard.jsx';
import { ReportSection } from '../../components/ReportSection/ReportSection.jsx';
import { TabBarItem } from '../../components/TabBarItem/TabBarItem.jsx';
import styles from './SeatManagement.module.css';

const tabItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e165d9b90106d2c994ad6d79e7d6cb237da1ee6559cffb58fb831412f74fec85?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb', label: '내 자리' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/968d7443a6f2c0340a1f93747b2e4cf7a75084b7d15c0027eb067a59990beb82?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb', label: '좌석' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d97a3f27ad1b0faa47f91a6ec4918a55cb9a18f92e566b36f0b57e5368697532?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb', label: '기록' }
];

export const SeatManagement = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.settingsIcon}>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/69724a70a30b8667f7791879b427d745f5d6312f4776186fc79082cffb98aca5?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb"
                        className={styles.icon}
                        alt="설정"
                    />
                </div>
                <div className={styles.mainContent}>
                    <SeatCard />
                    <ReportSection />
                </div>
                <div className={styles.tabBar}>
                    {tabItems.map((item, index) => (
                        <TabBarItem
                            key={index}
                            icon={item.icon}
                            label={item.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeatManagement;