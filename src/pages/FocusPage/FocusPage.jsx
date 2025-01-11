import React, { useState } from 'react';
import { ScoreCard } from '../../components/ScoreCard/ScoreCard.jsx';
import { TimeFilter } from '../../components/TimeFilter/TimeFilter.jsx';
import styles from './FocusPage.module.css';
import { useNavigate } from 'react-router-dom';

const scoreData = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e026fe788f1245749465f57c7903d913c1db13a1b33b3fc313a94b74f42f456b?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb", label: "소음점수", value: "97점" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f464b350b6d39668deab221f36621c4babe4523b113ebc255c841dbb704febc?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb", label: "앉은 시간", value: "7h 56m" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b2c572dc22fedd5d8667f6a357ff90606bfce1b4b2f47a522eadf35cdddb42f?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb", label: "목표 달성", value: "8h 30m" }
];

const FocusPage = () => {
    const navigate = useNavigate();

    // 기본값으로 Today 버튼이 활성화됨
    const [activeFilter, setActiveFilter] = useState('Today');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);  // 클릭된 필터만 활성화
    };

    return (
        <div className={styles.container}>
            <div className={styles.scoreBoard}>
                <header className={styles.header}>
                    <button
                        className={styles.backButton}
                        aria-label="Go back"
                        onClick={() => navigate('/')}  // 홈으로 이동
                    >
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/30d638b59fd35c837fe881aa4f359b4358949a3fe2a656049bb42db422cc3578?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb"
                            className={styles.backIcon}
                            alt="뒤로 가기"
                        />
                    </button>
                </header>

                <h1 className={styles.goalHeading}>
                    목표 달성까지 <br />
                    <span className={styles.highlightText}>1h 30m</span> 남았어요!
                </h1>

                <section className={styles.statsSection}>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4decda0716daa67fca80b335073cf59a87abe754f72bb3b1c2173b171cf6035d?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb"
                        className={styles.statsGraph}
                        alt="Focus statistics graph"
                    />
                    <div className={styles.scoreCards}>
                        {scoreData.map((score, index) => (
                            <ScoreCard
                                key={index}
                                icon={score.icon}
                                label={score.label}
                                value={score.value}
                            />
                        ))}
                    </div>
                </section>

                <section className={styles.timelineSection}>
                    <div className={styles.filterGroup}>
                        <TimeFilter
                            active={activeFilter === 'Today'}
                            onClick={() => handleFilterClick('Today')}
                        >
                            Today
                        </TimeFilter>
                        <TimeFilter
                            active={activeFilter === 'Week'}
                            onClick={() => handleFilterClick('Week')}
                        >
                            Week
                        </TimeFilter>
                        <TimeFilter
                            active={activeFilter === 'Month'}
                            onClick={() => handleFilterClick('Month')}
                        >
                            Month
                        </TimeFilter>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd90199110279025e4b7bd6e31acbe81362e9cceba4b9ee3ca6d45b5893d847?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb"
                        className={styles.timelineGraph}
                        alt="Timeline performance graph"
                    />
                </section>
            </div>
        </div>
    );
};

export default FocusPage;
