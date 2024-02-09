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
        const userId = getUserId();
        const userBookings = JSON.parse(localStorage.getItem(userId)) || [];
        return userBookings.some(booking => booking.date === date && booking.time === time);
    };

    const addBooking = (date, time, email, name) => {
        const userId = getUserId();
        const userBookings = JSON.parse(localStorage.getItem(userId)) || [];
        userBookings.push({ date, time, email, name });
        localStorage.setItem(userId, JSON.stringify(userBookings));
    };

    const getUserId = () => {
        return 'user123';
    };

    const [timesState, dispatch] = useReducer(timesReducer, []);

    useEffect(() => {
        const initializeTimes = async () => {
            try {
                const today = new Date();
                const formattedDate = today.toISOString().split('T')[0];
                const availableTimes = await fetchAPI(formattedDate);
                dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
            } catch (error) {
                console.error('Error fetching available times:', error);
            }
        };

        initializeTimes();
    }, []);

    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
        email: '',
        name: ''
    });

    const [errors, setErrors] = useState({});

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        // Check if the selected date is within the valid range
        if (selectedDate < '2024-02-08' || selectedDate > '2024-02-29') {
            setFormData({ ...formData, date: '', error: 'Booking is only available from 2024-02-08 to 2024-02-29' });
        } else {
            setFormData({ ...formData, date: selectedDate, error: '' });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { date, time, email, name } = formData;

        /*const formData = {
            date: event.target.date.value,
            time: event.target.time.value,
            guests: event.target.guests.value,
            occasion: event.target.occasion.value
        };*/
        console.log('Form Data:', formData);

        if (isUserAlreadyBooked(date, time)) {
            alert('You have already booked for the same day and same time.');
        } else {
            addBooking(date, time, email, name);
            alert('Booking successful!');
            // Reset form fields after successful submission
            setFormData({
                date: '',
                time: '',
                guests: '',
                occasion: '',
                email: '',
                name: ''
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Perform validation for the input field
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'email':
                // Validate email format
                if (!/\S+@\S+\.\S+/.test(value)) {
                    error = 'Invalid email address';
                }
                break;
            // Add more validation rules for other fields as needed
            default:
                break;
        }
        setErrors({ ...errors, [name]: error });
    };

    return (
        <div className='form-outer-container'>
            <form className="form-container" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input className="form-input" type="text" id="name" name="name" onChange={handleInputChange} required value={formData.name} />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" type="email" id="email" name="email" onChange={handleInputChange} required value={formData.email} />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="res-date">Choose date</label>
                    <input className="form-input" type="date" id="res-date" name="date" onChange={handleDateChange} required value={formData.date} />
                    {formData.error && <span className="error-message">{formData.error}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="res-time">Choose time</label>
                    <select className="form-select" id="res-time" name="time" onChange={handleInputChange} required value={formData.time}>
                        <option value="">Select Time</option>
                        {timesState.map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="guests">Number of guests</label>
                    <input className="form-input" type="number" id="guests" name="guests" min="1" max="10" onChange={handleInputChange} required value={formData.guests} />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="occasion">Occasion</label>
                    <select className="form-select" id="occasion" name="occasion" onChange={handleInputChange} required value={formData.occasion}>
                        <option value="">Select Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>

                <button aria-label="On Click" className="form-submit" type="submit">Make a reservation</button>
            </form>
        </div>
    );
}

export default BookingForm;
