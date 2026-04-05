import { useRef } from 'react';
import FadeIn from '../components/FadeIn';

const EXPERIENCE = [
  {
    role: 'Incoming Software Engineer Intern',
    company: 'UF Information Technology',
    period: 'May — Aug 2026',
    bullets: [],
    tags: [],
  },
  {
    role: 'Teaching Assistant — Computer Networks',
    company: 'University of Florida (CNT4007)',
    period: 'Jan 2026 — Present',
    bullets: [
      'Evaluate and mentor 250+ students on networking concepts spanning the application, transport, and network layers — including TCP/UDP socket programming, P2P protocols, HTTP, DNS, and multi-threaded server architectures.',
    ],
    tags: ['TCP/UDP', 'Socket Programming', 'P2P', 'HTTP', 'DNS'],
  },
  {
    role: 'Graduate Research Assistant',
    company: 'University of Florida',
    period: 'Aug 2025 — Present',
    bullets: [
      'Reduced geospatial benchmark creation time from weeks to hours by developing an automated Python pipeline — processing raster data into vectorized polygons and generating 4,000+ structured QA pairs across 120 U.S. locations with GPT-4o API integration.',
      'Designed the training data pipeline for a multimodal LLM, enabling automated spatial reasoning over land cover maps across 37 question types and 11 capabilities — projecting satellite-derived embeddings into the language model token space.',
    ],
    tags: ['Python', 'GPT-4o', 'Multimodal LLMs', 'GIS', 'Computational Geometry'],
  },
  {
    role: 'Research Assistant',
    company: 'Mahindra University',
    period: 'Jan — Dec 2024',
    bullets: [
      'Led a team of 4 to build an end-to-end ML pipeline — data ingestion, feature engineering, XGBoost ensemble training, and evaluation — achieving 99% R² across 10,000+ configurations for aerodynamic prediction.',
      'Applied parallel search using Differential Evolution, improving target efficiency by 35% over manual baselines.',
    ],
    tags: ['Python', 'XGBoost', 'ML Pipeline', 'Differential Evolution'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Zemoso Technologies',
    period: 'Jun — Aug 2023',
    bullets: [
      'Architected 8+ RESTful API endpoints in Java and Spring Boot with Hibernate ORM, supporting full CRUD operations with pagination, filtering, and MySQL integration across the microservices architecture.',
      'Optimized backend performance by refactoring SQL queries and introducing connection pooling, reducing average API response latency by 15%.',
      'Established end-to-end authentication flow using Spring Security with JWT tokens and role-based access control.',
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'JWT', 'REST APIs'],
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
            }}>{exp.role}</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{exp.company}</p>
          </div>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, fontWeight: 400,
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.02em', whiteSpace: 'nowrap', paddingTop: 4,
          }}>{exp.period}</span>
        </div>

        {exp.bullets.length > 0 && (
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
        )}

        {exp.tags.length > 0 && (
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
              }}>{t}</span>
            ))}
          </div>
        )}
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

      {/* Education callout */}
      <FadeIn>
        <div style={{
          display: 'flex', gap: 28, marginBottom: 32, flexWrap: 'wrap',
        }}>
          {[
            { school: 'University of Florida', degree: 'M.S. CISE', gpa: '3.95', years: '2025–2027', note: 'Engineering Achievement Award' },
            { school: 'Mahindra University', degree: 'B.Tech CS', gpa: '—', years: '2021–2025', note: '' },
          ].map((edu) => (
            <div key={edu.school} style={{
              flex: '1 1 200px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 8, padding: '16px 18px',
            }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#efefef', marginBottom: 4 }}>{edu.school}</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
                {edu.degree} {edu.gpa !== '—' && `· GPA: ${edu.gpa}`} · {edu.years}
              </p>
              {edu.note && (
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 6, fontStyle: 'italic' }}>{edu.note}</p>
              )}
            </div>
          ))}
        </div>
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