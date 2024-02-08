// BookingPage.js
import React, { useState } from 'react';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';
import { submitAPI } from './api';

function BookingPage() {
    const [availableTimes, setAvailableTimes] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00'
    ]);

    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const submitForm = async (formData) => {
        try {
            const isSubmitted = await submitAPI(formData);
            if (isSubmitted) {
                setBookingConfirmed(true);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error submission
        }
    };

    return (
        <div className='form-page'>
            <h2>Make a Reservation</h2>
            <div>
                {bookingConfirmed ? (
                    <ConfirmedBooking />
                ) : (
                    <BookingForm submitForm={submitForm} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
                )}
            </div>
        </div>
    );
}

export default BookingPage;
