import Logo from "./assets/Logo-footer.png"

function Footer() {

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
    };

    return(
        <footer>
            <div className="footer-logo">
                <img src={Logo} alt="Footer logo" />
            </div>
            <div className="doormat-navigation">
                <h3>Doormat Navigation</h3>
                <a href="#home" onClick={handleClick("home")}>Home</a>
                <a href="#about" onClick={handleClick("about")}>About</a>
                <a href="#menu" onClick={handleClick("menu")}>Menu</a>
                <a href="#home" onClick={handleClick("home")}>Resevations</a>
                <a href="#home" onClick={handleClick("home")}>Order Online</a>
                <a href="#home" onClick={handleClick("home")}>Login</a>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <p>Little Lemon Restaurant<br/>1st Street<br/>Chicago</p>
                <p><br/>+11234567890</p>
                <p><br/>littlelemon@gmail.com</p>
            </div>
            <div className="social-media">
                <h3>Social Media Links</h3>
                <a href="">Instagram</a>
                <a href="">Facebook</a>
                <a href="">Youtube</a>
            </div>
        </footer>
    );
}

export default Footer;