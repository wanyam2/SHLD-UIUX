import React, { createContext, useState, useContext } from 'react';

const SeatContext = createContext(null);

export const SeatProvider = ({ children }) => {
    const [seats, setSeats] = useState([]);

    const updateSeatStatus = (seatId, status) => {
        setSeats(prevSeats => prevSeats.map(seat => seat.id === seatId ? { ...seat, status } : seat));
    };

    return (
        <SeatContext.Provider value={{ seats, updateSeatStatus }}>
            {children}
        </SeatContext.Provider>
    );
};

export const useSeat = () => useContext(SeatContext);