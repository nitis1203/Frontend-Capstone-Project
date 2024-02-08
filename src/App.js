import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import BookingPage from './BookingPage';

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
        <Link to="/main" className="nav-item" onClick={handleClick("home")}>Home</Link>
        <Link to="/main" className="nav-item" onClick={handleClick("menu")}>Menu</Link>
        <Link to="/main" className="nav-item" onClick={handleClick("about")}>About</Link>
        <Link to="/bookingpage" className="nav-item">Reservations</Link>
        <Link to="" className="nav-item">Order Online</Link>
        <Link to="" className="nav-item">Login</Link>
      </Header>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/bookingpage" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
