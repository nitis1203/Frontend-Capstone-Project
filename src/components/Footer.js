import Logo from "../assets/Logo-footer.png"
import "./Footer.css"

function Footer(props) {

    return(
        <footer>
            <div className="footer-logo">
                <img src={Logo} alt="Footer logo" />
            </div>
            <div className="doormat-navigation">
                <h3>Doormat Navigation</h3>
                {props.children}
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <p>Little Lemon Restaurant<br/>1st Street<br/>Chicago</p>
                <p><br/>+11234567890</p>
                <p><br/>littlelemon@gmail.com</p>
            </div>
            <div className="social-media">
                <h3>Social Media Links</h3>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube</a>
            </div>
        </footer>
    );
}

export default Footer;