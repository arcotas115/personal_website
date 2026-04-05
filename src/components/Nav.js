import { useState } from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
];

export default function Nav({ current }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 52px', height: 72,
        background: 'rgba(20,20,20,0.9)',
        backdropFilter: 'blur(20px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <Link to="/" style={{
          fontFamily: "'Crimson Pro', serif",
          fontSize: 26, fontWeight: 400, fontStyle: 'italic',
          color: '#e0e0e0', textDecoration: 'none', letterSpacing: '0.02em',
        }}>
          Abhi
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: 32 }}>
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link" style={{
              fontSize: 14, fontWeight: 400,
              letterSpacing: '0.05em', textTransform: 'uppercase',
              color: current === l.to ? '#f0f0f0' : 'rgba(255,255,255,0.4)',
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop resume */}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          className="resume-desktop resume-btn" style={{
            fontSize: 13, fontWeight: 500, letterSpacing: '0.04em',
            color: '#ddd', textDecoration: 'none',
            padding: '8px 20px', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 5,
          }}>
          Résumé ↗
        </a>

        {/* Hamburger button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none', border: 'none', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 5,
          }}
        >
          <span style={{
            width: 22, height: 2, background: '#ddd', borderRadius: 2,
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
          }} />
          <span style={{
            width: 22, height: 2, background: '#ddd', borderRadius: 2,
            transition: 'all 0.3s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            width: 22, height: 2, background: '#ddd', borderRadius: 2,
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile slide-out menu */}
      <div style={{
        position: 'fixed',
        top: 72, right: 0, bottom: 0,
        width: 260,
        background: 'rgba(20,20,20,0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderLeft: '1px solid rgba(255,255,255,0.04)',
        zIndex: 999,
        display: 'flex', flexDirection: 'column',
        padding: '40px 32px',
        gap: 24,
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      }}>
        {LINKS.map((l) => (
          <Link key={l.to} to={l.to}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: 16, fontWeight: 400,
              letterSpacing: '0.04em', textTransform: 'uppercase',
              color: current === l.to ? '#f0f0f0' : 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}>
            {l.label}
          </Link>
        ))}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          style={{
            fontSize: 14, fontWeight: 500, letterSpacing: '0.04em',
            color: '#ddd', textDecoration: 'none',
            padding: '10px 20px', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 5, textAlign: 'center', marginTop: 8,
          }}>
          Résumé ↗
        </a>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 998,
            background: 'rgba(0,0,0,0.4)',
          }}
        />
      )}
    </>
  );
}