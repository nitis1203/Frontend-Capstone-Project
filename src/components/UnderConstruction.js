import Warning from "../assets/Warning-sign.png"

function UnderConstruction() {
    return(
        <div className="construction-container">
            <div className="construction-image">
                <img src={Warning} alt="Warning Sign"/>
            </div>
            <div className="contruction-text">
                <h3>This page is under construction</h3>
                <h2>Sorry for the inconvenience</h2>
            </div>
        </div>
    );
}

export default UnderConstruction;