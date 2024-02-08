// BookingForm.js
import React, { useState } from 'react';

function BookingForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00']);

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleNumberOfGuestsChange = (e) => {
        setNumberOfGuests(e.target.value);
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend)
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleTimeChange} required>
                {availableTimes.map((availableTime, index) => (
                    <option key={index} value={availableTime}>{availableTime}</option>
                ))}
            </select>

            <label htmlFor="number-of-guests">Number of guests</label>
            <input type="number" id="number-of-guests" value={numberOfGuests} onChange={handleNumberOfGuestsChange} required />

            <label htmlFor="occasion">Occasion</label>
            <input type="text" id="occasion" value={occasion} onChange={handleOccasionChange} />

            <button type="submit">Submit reservation</button>
        </form>
    );
}

export default BookingForm;
