import React from 'react';
import { useNavigate } from 'react-router-dom';
import food from "../assets/restauranfood.jpg"
import "./Hero.css"

function Hero() {
    const Navigate = useNavigate();

    const handleReserveClick = () => {
        Navigate('/bookingpage');
    };

    return(
        <div className="hero" id="home-section">
            <div className="left-container">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    We are family owned Mediterranian restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className="reserve-button" onClick={handleReserveClick}>Reserve a Table</button>
            </div>
            <div className="right-container">
                <img src={food} alt="Restaurant food"/>
            </div>
        </div>
    );
}

export default Hero;
