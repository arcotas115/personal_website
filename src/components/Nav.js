import { Link } from 'react-router-dom';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
];

export default function Nav({ current }) {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: 64,
      background: 'rgba(26,26,26,0.85)',
      backdropFilter: 'blur(20px) saturate(1.3)',
      WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <Link to="/" style={{
        fontFamily: "'Crimson Pro', serif",
        fontSize: 24, fontWeight: 400, fontStyle: 'italic',
        color: '#d4d4d4', textDecoration: 'none', letterSpacing: '0.02em',
      }}>
        AA
      </Link>

      <div style={{ display: 'flex', gap: 32 }}>
        {LINKS.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="nav-link"
            style={{
              fontSize: 13, fontWeight: 400,
              letterSpacing: '0.05em', textTransform: 'uppercase',
              color: current === l.to ? '#e8e8e8' : 'rgba(255,255,255,0.3)',
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <a
        href="/resume.pdf" target="_blank" rel="noopener noreferrer"
        className="resume-btn"
        style={{
          fontSize: 13, fontWeight: 500, letterSpacing: '0.04em',
          color: '#d4d4d4', textDecoration: 'none',
          padding: '8px 20px', border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 6,
        }}
      >
        Résumé ↗
      </a>
    </nav>
  );
}
