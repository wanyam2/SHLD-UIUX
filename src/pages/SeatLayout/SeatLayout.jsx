import React, { useState } from 'react';
import styles from './SeatLayout.module.css';
import { StudyRoom } from '../../components/SeatCard/StudyRoom.jsx';
import { Seat } from '../../components/SeatCard/Seat.jsx';
import { TabItem } from '../../components/TabBarItem/TabItem.jsx';

const studyRooms = [
    { id: 1, number: 1, occupancy: 1 },
    { id: 2, number: 2, occupancy: 1 },
    { id: 3, number: 3, occupancy: 20 },
    { id: 4, number: 4, occupancy: 20 }
];

const tabItems = [
    { id: 'myspot', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/44c36902e774bfb404bf34794db5f0006191f72d2767c63825ff9c0b78bc54bd', label: '내 자리' },
    { id: 'seats', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9386c9aa52fb37f1b095cfcd7de942a371fdf4b395d688d6197a34eafb3ad8ba', label: '좌석' },
    { id: 'history', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e68ba32303e98e90d7e1cf5c7b1f5a8f5f6fbf276961c4496efd70f8288b5271', label: '기록' }
];

export const SeatLayout = () => {
    const [activeStudyRoom, setActiveStudyRoom] = useState(1);
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [activeTab, setActiveTab] = useState('seats');

    const handleStudyRoomClick = (roomId) => {
        setActiveStudyRoom(roomId);
        setSelectedSeat(null);  // Study room 클릭 시 선택된 좌석 초기화
    };

    const handleSeatClick = (seatNumber) => {
        setSelectedSeat(seatNumber);  // 좌석 클릭 시 선택된 좌석 저장
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleClosePopup = () => {
        setSelectedSeat(null);  // 팝업 닫기
    };

    // 좌석 정보를 담은 배열 (예시)
    const seatInfo = {
        1: { label: "A1", decibel: 55, occupied: false },
        2: { label: "A2", decibel: 60, occupied: true },
        3: { label: "A3", decibel: 50, occupied: false },
        4: { label: "A4", decibel: 62, occupied: true },
        // 다른 좌석들...
    };

    return (
        <div className={styles.seatLayout}>
            <div className={styles.navigationBar}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/54a999de5724c76f0a1c6b93c9fbf734833f85f177dbcf3004de717bd80874b5?placeholderIfAbsent=true&apiKey=3df4bc078e05426e832d47518235f8cb" alt="" className={styles.icon} loading="lazy" />
            </div>

            <div className={styles.studyRoomContainer}>
                <div className={styles.studyRoomScroll}>
                    {studyRooms.map((room) => (
                        <StudyRoom
                            key={room.id}
                            {...room}
                            isActive={room.id === activeStudyRoom}
                            onClick={() => handleStudyRoomClick(room.id)}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.seatMapContainer}>
                <div className={styles.seatMap}>
                    <div className={styles.seatLayout}>
                        {[...Array(7)].map((_, index) => (
                            <Seat
                                key={`left-${index}`}
                                seatNumber={index + 1}
                                isSelected={selectedSeat === index + 1}
                                onClick={() => handleSeatClick(index + 1)}
                            />
                        ))}
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.seatLayout}>
                        {[...Array(7)].map((_, index) => (
                            <Seat
                                key={`right-${index}`}
                                seatNumber={index + 8}
                                isSelected={selectedSeat === index + 8}
                                onClick={() => handleSeatClick(index + 8)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {selectedSeat && (
                <div className={styles.seatInfo}>
                    <h3>좌석 정보</h3>
                    <p>좌석: {seatInfo[selectedSeat]?.label}</p>
                    <p>데시벨: {seatInfo[selectedSeat]?.decibel} dB</p>
                    <p>상태: {seatInfo[selectedSeat]?.occupied ? "사용 중" : "비어 있음"}</p>
                    <button onClick={handleClosePopup}>닫기</button>
                </div>
            )}

            <div className={styles.tabBar}>
                {tabItems.map((item) => (
                    <TabItem
                        key={item.id}
                        {...item}
                        isActive={activeTab === item.id}
                        onClick={() => handleTabClick(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SeatLayout;
