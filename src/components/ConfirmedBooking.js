import React, { useEffect } from 'react';
import SuccessImage from '../assets/success.png';
import ErrorImage from '../assets/Warning-sign.png';

function ConfirmBooking({ message, onClose }) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.confirm-content')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="confirm-overlay">
      <div className="confirm-box">
        <div className="confirm-content">
          {message === 'Booking successful!' ? (
            <img src={SuccessImage} alt="Success" />
          ) : (
            <img src={ErrorImage} alt="Already Booked" />
          )}
          <p>{message}</p>
          <button onClick={onClose}>Okay</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBooking;
