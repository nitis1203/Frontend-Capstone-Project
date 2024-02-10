import React from 'react';
import Hero from './Hero';
import Menu from './Menu';
import TestiMonials from './Testimonials';
import About from './About';

function Main() {
  return (
    <main className='main'>
      <Hero />
      <Menu />
      <TestiMonials />
      <About />
    </main>
  );
}

export default Main;
