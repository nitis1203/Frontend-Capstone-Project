import Chef from "../assets/restaurant chef B.jpg"
import Food from "../assets/Mario and Adrian A.jpg"

function About() {
    return(
        <div className="about" id="about-section">
            <div className="about-left-container">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials</p>
            </div>
            <div className="about-right-container">
                <img src={Chef} alt="Restaurant Chef with food" id="item-1"/>
                <img src={Food} alt="Restaurant Chefs" id="item-2"/>
            </div>
        </div>
    );
}

export default About;