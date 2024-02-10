import GreekSalad from "../assets/greek salad.jpg"
import Bruchetta from "../assets/bruchetta.svg"
import LemonDessert from "../assets/lemon dessert.jpg"
import { useNavigate } from 'react-router-dom';
import React from 'react';
import "./Menu.css"

function Menu() {

    const Navigate = useNavigate();

    const handleOnlineBookingClick = () => {
        Navigate('/warning-order');
    };

    return(
        <div className="menu" id="menu-section">
            <div className="menu-heading">
                <h1>This weeks specials!</h1>
                <button className="online-order" aria-label="On Click" onClick={handleOnlineBookingClick}>Online  Menu</button>
            </div>
            <div className="menu-container">
                <div className="menu-card">
                    <div className="menu-image">
                        <img src={GreekSalad} alt="Greek Salad"/>
                    </div>
                    <div className="menu-price">
                        <h3>Greek Salad</h3>
                        <h3>$12.99</h3>
                    </div>
                    <div className="menu-description">
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished ithcrunchy garlic and rosemary croutons.</p>
                    </div>
                    <div className="menu-order">
                        <h4>Order a delivery</h4>
                    </div>
                </div>
                <div className="menu-card">
                    <div className="menu-image">
                        <img src={Bruchetta} alt="Bruchetta"/>
                    </div>
                    <div className="menu-price">
                        <h3>Bruchetta</h3>
                        <h3>$5.99</h3>
                    </div>
                    <div className="menu-description">
                        <p>Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
                    </div>
                    <div className="menu-order">
                        <h4>Order a delivery</h4>
                    </div>
                </div>
                <div className="menu-card">
                    <div className="menu-image">
                        <img src={LemonDessert} alt="Lemon Dessert"/>
                    </div>
                    <div className="menu-price">
                        <h3>Lemon Dessert</h3>
                        <h3>$5.00</h3>
                    </div>
                    <div className="menu-description">
                        <p>This comes straigt from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined</p>
                    </div>
                    <div className="menu-order">
                        <h4>Order a delivery</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;