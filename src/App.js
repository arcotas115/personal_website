import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import MagnifierCursor from './components/MagnifierCursor';
import ParticleNetwork from './components/ParticleNetwork';
import Spotlight from './components/Spotlight';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <div style={{ background: '#141414', minHeight: '100vh', overflowX: 'hidden' }}>
      <ParticleNetwork />
      <Spotlight />
      <MagnifierCursor />
      <Nav current={location.pathname} />

      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer style={{
          textAlign: 'center', padding: '24px 24px 20px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.04em',
          }}>
            Built with React by{' '}
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>Abhi</span>
          </p>
        </footer>
      </div>
    </div>
  );
}