import { useRef } from 'react';
import FadeIn from '../components/FadeIn';

const EXPERIENCE = [
  {
    role: 'Software Engineering Intern',
    company: 'Company Name',
    period: 'May — Aug 2025',
    bullets: [
      'Describe what you built, the scale, and the tech used.',
      'Quantify impact wherever possible (e.g. reduced latency by 40%).',
    ],
    tags: ['React', 'Go', 'AWS', 'PostgreSQL'],
  },
  {
    role: 'Research Assistant',
    company: 'University of Florida — CISE',
    period: 'Jan 2025 — Present',
    bullets: [
      'Describe your research area and contributions.',
      'Mention publications, tools built, or datasets created.',
    ],
    tags: ['Python', 'PyTorch', 'CUDA'],
  },
  {
    role: 'Teaching Assistant',
    company: 'University of Florida',
    period: 'Aug — Dec 2024',
    bullets: [
      'Course name and your responsibilities.',
      'Any curriculum improvements or tools you created.',
    ],
    tags: ['Java', 'Data Structures', 'Algorithms'],
  },
];

function ExpCard({ exp, index }) {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <FadeIn delay={index * 0.1}>
      <div ref={cardRef} className="project-card" onMouseMove={handleMouseMove}
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderLeft: '3px solid rgba(255,255,255,0.08)',
          borderRadius: 12, padding: '26px 28px',
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: 8,
        }}>
          <div>
            <h3 style={{
              fontSize: 17, fontWeight: 600, color: '#fff',
              letterSpacing: '-0.01em', marginBottom: 3,
            }}>
              {exp.role}
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
              {exp.company}
            </p>
          </div>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, fontWeight: 400,
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.02em', whiteSpace: 'nowrap', paddingTop: 4,
          }}>
            {exp.period}
          </span>
        </div>

        <ul style={{
          listStyle: 'none', display: 'flex',
          flexDirection: 'column', gap: 6, marginTop: 4,
        }}>
          {exp.bullets.map((b, j) => (
            <li key={j} style={{
              fontSize: 14, lineHeight: 1.75,
              color: 'rgba(255,255,255,0.6)',
              paddingLeft: 14, position: 'relative',
            }}>
              <span style={{
                position: 'absolute', left: 0, top: 10,
                width: 4, height: 4, borderRadius: '50%',
                background: 'rgba(255,255,255,0.25)',
              }} />
              {b}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
          {exp.tags.map((t) => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, fontWeight: 400,
              padding: '3px 10px', borderRadius: 4,
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.06)',
              letterSpacing: '0.03em',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Experience() {
  return (
    <section className="section-container"
      style={{ maxWidth: 920, margin: '0 auto', padding: '140px 24px 100px' }}>
      <FadeIn>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, color: 'rgba(255,255,255,0.25)',
          marginBottom: 8, letterSpacing: '0.08em',
        }}>03</p>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 600,
          color: '#fff', marginBottom: 16, letterSpacing: '-0.01em',
        }}>Experience</h2>
        <p style={{
          fontSize: 14, color: 'rgba(255,255,255,0.5)',
          marginBottom: 40, maxWidth: 500,
        }}>
          Where I've worked and what I've built.
        </p>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {EXPERIENCE.map((exp, i) => <ExpCard key={i} exp={exp} index={i} />)}
      </div>

      <FadeIn delay={0.3}>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="btn-outline" style={{
              display: 'inline-block', padding: '12px 28px',
              fontSize: 13, fontWeight: 500, fontFamily: "'Sora', sans-serif",
              color: '#ddd', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 6, textDecoration: 'none',
              letterSpacing: '0.03em',
            }}>
            View Full Résumé →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}