// BookingForm.js
import React, { useReducer, useState } from 'react';

function BookingForm({ setAvailableTimes }) {
    const timesReducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return action.payload;
            default:
                return state;
        }
    };

    const updateTimes = (selectedDate) => {
        const updatedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
        setAvailableTimes(updatedTimes); // Update availableTimes using the provided setter function
    };

    const initializeTimes = () => {
        return ['17:00', '18:00', '19:00', '20:00', '21:00'];
    };

    const [timesState, dispatch] = useReducer(timesReducer, initializeTimes());
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
        // Perform actions with form data, for example:
        console.log(formData); // Log form data to console
        // Reset form data if needed
        setFormData({
            date: '',
            time: '',
            guests: '',
            occasion: ''
        });
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
                        {timesState.map(time => (
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
