import React from 'react';
import styles from './Home.module.css';
import profile from '../../assets/images/avatar.jpg';
import seatChart from '../../assets/images/seat-chart.svg';
import homeIcon from '../../assets/images/home.svg';
import statsIcon from '../../assets/images/stats.svg';
import calendarIcon from '../../assets/images/calendar.svg';
import profileIcon from '../../assets/images/profile.svg';
import focusIcon from '../../assets/images/focus-chart.svg';
import recordIcon from '../../assets/images/record-chart.svg';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => (
    <div className={styles.profileSection}>
        <div className={styles.userInfo}>
            <div className={styles.greeting}>오늘도 열공하세요</div>
            <div className={styles.userName}>홍길동님!</div>
        </div>
        <div className={styles.avatarContainer}>
            <img src={profile} className={styles.avatarImage} alt="User profile" />
        </div>
    </div>
);

const StudyStats = () => {
    const stats = [
        { label: 'Seat', value: '56번' },
        { label: 'Time', value: '2h 46m' },
        { label: 'Goal', value: '10h 30m' }
    ];

    return (
        <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                    <div className={styles.statLabel}>{stat.label}</div>
                    <div className={styles.statValue}>{stat.value}</div>
                </div>
            ))}
        </div>
    );
};

const SeatSection = () => (
    <div className={styles.seatCard}>
        <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>좌석 선택</h2>
            <p className={styles.cardSubtitle}>원하시는 좌석을 선택해주세요</p>
        </div>
        <div className={styles.seatStatus}>
            <img src={seatChart} alt="Seat availability chart" className={styles.seatChart} />
            <div className={styles.percentage}>34%</div>
            <div className={styles.statusText}>여유로워요!</div>
        </div>
    </div>
);

const NoiseSection = () => (
    <div className={styles.noiseCard}>
        <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>소음 현황</h2>
            <p className={styles.cardSubtitle}>독서실 내 소음 점수에요!</p>
        </div>
        <div className={styles.noiseGraph}>
            {[...Array(11)].map((_, i) => (
                <div
                    key={i}
                    className={styles.noiseBar}
                    style={{ height: `${(i < 5 ? i * 20 : (10-i) * 20) + 20}px` }}
                    role="presentation"
                />
            ))}
        </div>
        <div className={styles.noiseStatus}>
            <div className={styles.noiseScore}>74점</div>
            <div className={styles.noiseText}>약간의 소음이 있어요</div>
        </div>
    </div>
);

const FocusScore = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.focusCard} onClick={() => navigate('/focus')}>
            <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>집중점수</h2>
                <p className={styles.cardSubtitle}>
                    그동안 얼마나 집중했는지
                    <br />
                    확인해보세요!
                </p>
            </div>
            <div className={styles.focusContent}>
                <img
                    src={focusIcon}
                    alt="Focus score chart"
                    className={styles.focusChart}
                />
                <div className={styles.focusScore}>96점</div>
            </div>
        </div>
    );
};

const StudyRecord = () => (
    <div className={styles.recordCard}>
        <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>내 기록</h2>
                <p className={styles.cardSubtitle}>
                    그동안의 소음 점수와 집중 점수를 확인해보세요
                </p>
            </div>
            <div className={styles.recordChart}>
                <img
                    src={recordIcon}
                    alt="Study record chart"
                    className={styles.chartImage}
                />
            </div>
        </div>
    </div>
);

const NavigationBar = () => {
    const navItems = [
        { icon: homeIcon, label: 'home', active: true },
        { icon: statsIcon, label: 'stats' },
        { icon: calendarIcon, label: 'calendar' },
        { icon: profileIcon, label: 'profile' }
    ];

    return (
        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className={`${styles.navItem} ${item.active ? styles.active : ''}`}
                        aria-label={item.label}
                        aria-current={item.active ? 'page' : undefined}
                    >
                        <img src={item.icon} alt="" className={styles.navIcon} />
                        {item.active && <span className={styles.navLabel}>{item.label}</span>}
                    </button>
                ))}
            </div>
        </nav>
    );
};

const Home = () => {
    return (
        <div className={styles.homeScreen}>
            <main className={styles.mainContent}>
                <UserProfile />
                <StudyStats />
                <section className={styles.infoCards}>
                    <SeatSection />
                    <NoiseSection />
                    <FocusScore />
                    <StudyRecord />
                </section>
            </main>
            <NavigationBar />
        </div>
    );
};

export default Home;
