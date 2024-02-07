import food from "./assets/restauranfood.jpg"

function Hero() {
    return(
        <div className="hero">
            <div className="left-container">
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>
                    We are family owned Mediterranian restaurant, focused on traditional recipes served witha modern twist.
                </p>
                <button className="reserve-button">Reserve a Table</button>
            </div>
            <div className="right-container">
                <img src={food} alt="Restaurant food"/>
            </div>
        </div>
    );
}

export default Hero;