import React from 'react';

function Nav() {

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

  return (
    <nav>
      <ul>
        <li><a href="#home" onClick={handleClick("home")}>Home</a></li>
        <li><a href="#menu" onClick={handleClick("menu")}>Menu</a></li>
        <li><a href="#about" onClick={handleClick("about")}>About</a></li>
        <li><a href="#menu" onClick={handleClick("menu")}>Reservations</a></li>
        <li><a href="#menu" onClick={handleClick("menu")}>Order Online</a></li>
        <li><a href="#menu" onClick={handleClick("menu")}>Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
