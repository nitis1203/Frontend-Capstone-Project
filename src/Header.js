import React from 'react';
import Nav from './Nav';
import Logo from "./assets/Logo.svg"

function Header() {
  return (
    <header>
        <div className='logo'>
            <img src={Logo} alt='little Lemon logo'/>
        </div>
        <Nav />
    </header>
  );
}

export default Header;
