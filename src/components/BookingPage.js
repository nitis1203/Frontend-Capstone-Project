// BookingPage.js
import React from 'react';
import BookingForm from './BookingForm';
import "./BookingPage.css"

function BookingPage() {

    return (
        <div className='form-page'>
            <h2>Make a Reservation</h2>
            <div>
                <BookingForm/>
            </div>
        </div>
    );
}

export default BookingPage;
