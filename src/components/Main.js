import React from 'react';
import Hero from './Hero';
import Menu from './Menu';
import TestiMonials from './Testimonials';
import About from './About';

function Main() {
  return (
    <div className='main'>
      <Hero />
      <Menu />
      <TestiMonials />
      <About />
    </div>
  );
}

export default Main;
