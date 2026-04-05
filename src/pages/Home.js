import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Donut from '../components/Donut';
import Typewriter from '../components/Typewriter';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <div className="hero-layout" style={{
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center', gap: 20,
        maxWidth: 1200, padding: '0 52px', flexWrap: 'wrap',
        justifyContent: 'space-between', width: '100%',
      }}>
        <div className="hero-text" style={{
          flex: '1 1 440px', maxWidth: 560,
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s cubic-bezier(.23,1,.32,1) 0.2s',
          display: 'flex', flexDirection: 'column',
        }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14, fontWeight: 400,
            color: 'rgba(255,255,255,0.5)',
            marginBottom: 16, letterSpacing: '0.03em',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>{'// '}</span>
            Hi, my name is
          </p>

          <h1 style={{
            fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 700,
            color: '#ffffff', lineHeight: 1.05,
            letterSpacing: '-0.03em', marginBottom: 14,
          }}>
            Abhi<span style={{
              display: 'inline-block',
              width: 3, height: 'clamp(32px, 5vw, 58px)',
              background: 'rgba(255,255,255,0.5)',
              marginLeft: 6, verticalAlign: 'baseline',
              animation: 'blink 1s step-end infinite',
            }} />
          </h1>

          <h2 style={{
            fontSize: 'clamp(16px, 2.2vw, 22px)', fontWeight: 300,
            color: 'rgba(255,255,255,0.6)', marginBottom: 24,
            letterSpacing: '0.01em',
          }}>
            MS Computer Science @ <span style={{ color: '#FA4616', fontWeight: 400 }}>UF</span>
          </h2>

          <div style={{ minHeight: 52, marginBottom: 36 }}>
            <Typewriter
              text="I build performant, elegant software — from full-stack web apps to ML pipelines."
              speed={30}
              delay={1200}
              style={{
                fontSize: 15, lineHeight: 1.7,
                color: 'rgba(255,255,255,0.6)',
                fontFamily: "'Sora', sans-serif",
              }}
            />
          </div>

          <div className="hero-ctas" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn-primary" style={{
              display: 'inline-block', padding: '13px 30px',
              fontSize: 14, fontWeight: 500, fontFamily: "'Sora', sans-serif",
              color: '#141414', background: '#d4d4d4',
              borderRadius: 6, textDecoration: 'none',
              letterSpacing: '0.03em',
            }}>
              View My Work
            </Link>
            <Link to="/contact" className="btn-outline" style={{
              display: 'inline-block', padding: '13px 30px',
              fontSize: 14, fontWeight: 500, fontFamily: "'Sora', sans-serif",
              color: '#ddd', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 6, textDecoration: 'none',
              letterSpacing: '0.03em',
            }}>
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="hero-donut" style={{
          flex: '0 0 auto',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.5s ease 0.6s',
          marginRight: isMobile ? 0 : -30,
        }}>
          <Donut size={isMobile ? 260 : 380} />
        </div>
      </div>
    </section>
  );
}