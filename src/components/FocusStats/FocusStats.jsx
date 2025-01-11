import React from 'react';

const FocusStats = ({ goalTime, noiseScore, sittingDuration }) => {
    return (
        <div>
            <p>목표 달성 시간: {goalTime}</p>
            <p>소음 점수: {noiseScore}</p>
            <p>앉은 시간: {sittingDuration}</p>
        </div>
    );
};

export default FocusStats;