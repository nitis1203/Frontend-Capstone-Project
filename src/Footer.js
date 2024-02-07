import Logo from "./assets/Logo-footer.png"

function Footer() {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={Logo} alt="Footer logo" />
            </div>
            <div className="doormat-navigation">
                <h3>Doormat Navigation</h3>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Menu</a>
                <a href="">Resevations</a>
                <a href="">Order Online</a>
                <a href="">Login</a>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <p>Little Lemon Restaurant<br/>1st Street<br/>Chicago</p>
                <p>+11234567890</p>
                <p>littlelemon@gmail.com</p>
            </div>
            <div className="social-media">
                <h3>Social Media Links</h3>
                <a href="">Instagram</a>
                <a href="">Facebook</a>
                <a href="">Youtube</a>
            </div>
        </div>
    );
}

export default Footer;