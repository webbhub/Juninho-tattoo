import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Artist from './components/Artist';
import Experience from './components/Experience';
import StylesList from './components/StylesList';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import ContactCTA from './components/ContactCTA';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Artist />
        <Experience />
        <StylesList />
        <Portfolio />
        <Reviews />
        <ContactCTA />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;