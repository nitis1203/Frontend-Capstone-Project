import React, { useEffect, useRef, useState } from 'react';
import Logo from "../assets/Logo.svg";
import hamburger from "../assets/🦆 icon _hamburger menu.svg"
import close from "../assets/cross-close.svg"
import './Header.css'

function Header(props) {
  const headerRef = useRef(null);
  const prevScrollPos = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos.current > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header" ref={headerRef}>
      <nav>
        <div className='logo'>
          <a href="/" onClick={() => window.location.reload()}>
            <img src={Logo} alt='Little Lemon logo'/>
          </a>
        </div>
        <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <img src={close} alt="Close Icon" className='close-icon'/>
          ) : (
            <img src={hamburger} alt="Hamburger Icon" />
          )}
        </div>
        <ul className={menuOpen ? "open" : ""}>
        {React.Children.map(props.children, child => {
            return (
              <li onClick={closeMenu}>
                {child}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
