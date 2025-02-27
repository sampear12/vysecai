import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industry from './components/Industry';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      <AnimatedBackground />
      <Navbar className="fixed top-0 left-0 right-0 z-50" />
      
      <div className="snap-start h-screen">
        <Hero />
      </div>
      
      <div className="snap-start h-screen">
        <About />
      </div>
      
      <div className="snap-start h-screen">
        <Services />
      </div>
      
      <div className="snap-start h-screen">
        <Industry />
      </div>
      
      <div className="snap-start h-screen">
        <Contact />
      </div>
    </div>
  );
}

export default App;