import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route, Link, NavLink } from "react-router-dom"
import BookingPage from './components/BookingPage';
import UnderConstruction from './components/UnderConstruction';

function App() {

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
    <div className="App">
      <Header>
        <NavLink to="/home" aria-label="On Click" className="nav-item" onClick={handleClick("home")}>Home</NavLink>
        <NavLink to="/menu" aria-label="On Click" className="nav-item" onClick={handleClick("menu")}>Menu</NavLink>
        <NavLink to="/about" aria-label="On Click" className="nav-item" onClick={handleClick("about")}>About</NavLink>
        <NavLink to="/bookingpage" aria-label="On Click" className="nav-item">Reservations</NavLink>
        <NavLink to="/warning-order" aria-label="On Click" className="nav-item">Order</NavLink>
        <NavLink to="/warning-login" aria-label="On Click" className="nav-item">Login</NavLink>
      </Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />}></Route>
        <Route path="/menu" element={<Main />}></Route>
        <Route path="/about" element={<Main />}></Route>
        <Route path="/bookingpage" element={<BookingPage />}></Route>
        <Route path="/warning-order" element={<UnderConstruction />}></Route>
        <Route path="/warning-login" element={<UnderConstruction />}></Route>
      </Routes>
      {/*<Footer>
        <Link to="/main" aria-label="On Click" className="nav-item" onClick={handleClick("home")}>Home</Link>
        <Link to="/main" aria-label="On Click" className="nav-item" onClick={handleClick("menu")}>Menu</Link>
        <Link to="/main" aria-label="On Click" className="nav-item" onClick={handleClick("about")}>About</Link>
        <Link to="/bookingpage" aria-label="On Click" className="nav-item">Reservations</Link>
        <Link to="/warning" aria-label="On Click" className="nav-item">Order Online</Link>
        <Link to="/warning" aria-label="On Click" className="nav-item">Login</Link>
      </Footer>*/}
    </div>
  );
}

export default App;
