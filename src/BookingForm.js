// BookingForm.js
import React, { useReducer, useState, useEffect } from 'react';
import { fetchAPI } from './api';

function BookingForm({ availableTimes, setAvailableTimes, userId }) {
    const timesReducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return action.payload;
            default:
                return state;
        }
    };

    const isUserAlreadyBooked = (date, time) => {
        const userId = getUserId(); // Assume you have a way to get the user ID
        const userBookings = JSON.parse(localStorage.getItem(userId)) || [];
        return userBookings.some(booking => booking.date === date && booking.time === time);
    };

    // Function to add a new booking for the user
    const addBooking = (date, time) => {
        const userId = getUserId(); // Assume you have a way to get the user ID
        const userBookings = JSON.parse(localStorage.getItem(userId)) || [];
        userBookings.push({ date, time });
        localStorage.setItem(userId, JSON.stringify(userBookings));
    };

    // Function to get the user ID (You need to implement this)
    const getUserId = () => {
        // Implement logic to get the user ID
        // For testing purposes, you can use a random user ID or a static value
        return 'user123';
    };

    const updateTimes = async (selectedDate) => {
        const availableTimes = await fetchAPI(selectedDate);
        setAvailableTimes(availableTimes);
    };

    const initializeTimes = async () => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // Format today's date as YYYY-MM-DD
        const availableTimes = await fetchAPI(formattedDate);
        return availableTimes;
    };

    const [timesState, dispatch] = useReducer(timesReducer, []);

    useEffect(() => {
        initializeTimes().then(availableTimes => {
            dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
        }).catch(error => {
            console.error('Error fetching available times:', error);
        });
    }, []);

    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: ''
    });

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        updateTimes(selectedDate);
        setFormData({ ...formData, date: selectedDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { date, time } = formData;

        // Check if the user has already booked for the same day and time
        if (isUserAlreadyBooked(date, time)) {
            alert('You have already booked for the same day and same time.');
        } else {
            addBooking(date, time);
            alert('Booking successful!');
            // Reset form fields after successful booking
            setFormData({
                date: '',
                time: '',
                // Reset other form fields as needed
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTimeChange = (e) => {
        const selectedTime = e.target.value;
        setFormData({ ...formData, time: selectedTime });
    };

    return (
        <div className='form-outer-container'>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="res-date">Choose date</label>
                    <input className="form-input" type="date" id="res-date" name="date" onChange={handleDateChange} />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="res-time">Choose time</label>
                    <select className="form-select" id="res-time" name="time" onChange={handleTimeChange}>
                        {availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="guests">Number of guests</label>
                    <input className="form-input" type="number" id="guests" name="guests" min="1" max="10" onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="occasion">Occasion</label>
                    <select className="form-select" id="occasion" name="occasion" onChange={handleInputChange}>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>

                <button className="form-submit" type="submit">Make a reservation</button>
            </form>
        </div>
    );
}


export default BookingForm;
