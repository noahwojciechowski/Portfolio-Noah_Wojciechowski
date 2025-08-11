import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Parcours from './components/Parcours';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider fade-hero-to-competences" />
        <Competences />
        <div className="section-divider fade-competences-to-projets" />
        <Projets />
        <div className="section-divider fade-projets-to-parcours" />
        <Parcours />
        <div className="section-divider fade-parcours-to-contact" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
