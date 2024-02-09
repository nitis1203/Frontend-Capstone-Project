import React, { useEffect, useRef } from 'react';
import Logo from "./assets/Logo.svg";

function Header(props) {
  const headerRef = useRef(null);
  const prevScrollPos = useRef(0);

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

  return (
    <header className="header" ref={headerRef}>
      <div className='logo'>
        <a href="/" onClick={() => window.location.reload()}>
          <img src={Logo} alt='Little Lemon logo'/>
        </a>
      </div>
      <nav>
        {props.children}
      </nav>
    </header>
  );
}

export default Header;
