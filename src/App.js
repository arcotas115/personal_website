import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import MagnifierCursor from './components/MagnifierCursor';
import ParticleNetwork from './components/ParticleNetwork';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <div style={{ background: '#262626', minHeight: '100vh', overflowX: 'hidden' }}>
      <ParticleNetwork />
      <MagnifierCursor />
      <Nav current={location.pathname} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer style={{
          textAlign: 'center', padding: '32px 24px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.04em' }}>
            Designed & Built by <span style={{ color: '#c0c0c0' }}>Abhi</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
