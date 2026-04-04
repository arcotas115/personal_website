import { useRef } from 'react';
import FadeIn from '../components/FadeIn';

const PROJECTS = [
  {
    title: 'Project Name',
    description: 'A brief description of what this project does, the problem it solves, and its impact.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Project Name',
    description: 'A brief description of what this project does, the problem it solves, and its impact.',
    tags: ['Python', 'PyTorch', 'AWS'],
    link: '#',
  },
  {
    title: 'Project Name',
    description: 'A brief description of what this project does, the problem it solves, and its impact.',
    tags: ['TypeScript', 'GraphQL', 'Docker'],
    link: '#',
  },
  {
    title: 'Project Name',
    description: 'A brief description of what this project does, the problem it solves, and its impact.',
    tags: ['C++', 'CUDA', 'OpenGL'],
    link: '#',
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <FadeIn delay={index * 0.1}>
      <div
        ref={cardRef}
        className="project-card"
        onMouseMove={handleMouseMove}
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: 12, padding: 28, minHeight: 200,
          display: 'flex', flexDirection: 'column', gap: 12,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5">
            <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="rgba(255,255,255,0.18)" strokeWidth="1.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#dcdcdc', letterSpacing: '-0.01em' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.32)', flex: 1 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
          {project.tags.map((t) => (
            <span key={t} style={{
              fontSize: 11, fontFamily: "'Crimson Pro', serif",
              fontStyle: 'italic', color: 'rgba(255,255,255,0.22)',
              letterSpacing: '0.02em',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section style={{ maxWidth: 960, margin: '0 auto', padding: '140px 24px 100px' }}>
      <FadeIn>
        <p style={{
          fontFamily: "'Crimson Pro', serif", fontStyle: 'italic',
          fontSize: 14, color: 'rgba(255,255,255,0.15)',
          marginBottom: 8, letterSpacing: '0.1em',
        }}>02</p>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600,
          color: '#e0e0e0', marginBottom: 48, letterSpacing: '-0.01em',
        }}>Projects</h2>
      </FadeIn>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
