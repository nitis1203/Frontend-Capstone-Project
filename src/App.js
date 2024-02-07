import React from 'react';
import Header from './Header';
import Main from './Main';
import Hero from './Hero';
import Menu from './Menu';
import TestiMonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Hero />
        <Menu />
        <TestiMonials />
        <About />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
