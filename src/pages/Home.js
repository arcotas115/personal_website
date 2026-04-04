import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Donut from '../components/Donut';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center', gap: 40,
        maxWidth: 1100, padding: '0 24px', flexWrap: 'wrap',
        justifyContent: 'center', width: '100%',
      }}>
        {/* text block - pushed left */}
        <div style={{
          flex: '1 1 460px', maxWidth: 540,
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s cubic-bezier(.23,1,.32,1) 0.2s',
        }}>
          <p style={{
            fontFamily: "'Crimson Pro', serif", fontStyle: 'italic',
            fontSize: 18, color: 'rgba(255,255,255,0.3)',
            marginBottom: 16, letterSpacing: '0.02em',
          }}>
            Hi, my name is
          </p>
          <h1 style={{
            fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 700,
            color: '#ededed', lineHeight: 1.1,
            letterSpacing: '-0.02em', marginBottom: 12,
          }}>
            Abhignan.
          </h1>
          <h2 style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 300,
            color: 'rgba(255,255,255,0.38)', marginBottom: 24,
            letterSpacing: '0.01em',
          }}>
            MS Computer Science @ <span style={{ color: '#FA4616' }}>UF</span>
          </h2>
          <p style={{
            fontSize: 16, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.32)', maxWidth: 480, marginBottom: 40,
          }}>
            I build performant, elegant software — from full-stack web apps to
            ML pipelines. Currently seeking Summer 2026 internships and
            new-grad roles.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn-primary" style={{
              display: 'inline-block', padding: '14px 32px',
              fontSize: 14, fontWeight: 500, fontFamily: "'Sora', sans-serif",
              color: '#1a1a1a', background: '#d0d0d0',
              borderRadius: 8, textDecoration: 'none',
              letterSpacing: '0.03em',
            }}>
              View My Work
            </Link>
            <Link to="/contact" className="btn-outline" style={{
              display: 'inline-block', padding: '14px 32px',
              fontSize: 14, fontWeight: 500, fontFamily: "'Sora', sans-serif",
              color: '#d0d0d0', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 8, textDecoration: 'none',
              letterSpacing: '0.03em',
            }}>
              Get In Touch
            </Link>
          </div>
        </div>

        {/* donut - pushed right */}
        <div style={{
          flex: '0 0 auto',
          marginLeft: 'auto',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.2s ease 0.5s',
        }}>
          <Donut size={340} />
        </div>
      </div>

      {/* scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%',
        transform: 'translateX(-50%)',
        width: 24, height: 40, borderRadius: 12,
        border: '1.5px solid rgba(255,255,255,0.08)',
        display: 'flex', justifyContent: 'center', paddingTop: 6,
      }}>
        <div style={{
          width: 4, height: 4, borderRadius: '50%',
          background: 'rgba(255,255,255,0.25)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
}
