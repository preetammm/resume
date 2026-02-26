import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)'
      }}>
        <a href="https://github.com/bchiang7/v4" target="_blank" rel="noreferrer" style={{
          color: 'var(--text-secondary)',
          textDecoration: 'none',
          transition: 'color 0.2s ease'
        }}
          onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'}
          onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          Designed & Built with React by Preetam Prajapati
        </a>
      </footer>
    </div>
  );
}

export default App;
