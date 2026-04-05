import { useRef } from 'react';
import FadeIn from '../components/FadeIn';

const PROJECTS = [
  {
    title: 'Sector',
    subtitle: 'Decentralized P2P Messaging Platform',
    description: 'A decentralized messaging platform where communication happens directly between peers, with no central server. I designed and built the entire React/TypeScript frontend — server lists, channel views, message panels, and responsive layouts using Material UI. The Go backend handles authentication and real-time messaging over REST APIs. The project includes 60+ automated tests (Vitest and Cypress) and runs on AWS EC2 with a full CI/CD pipeline through GitHub Actions.',
    tags: ['React.js', 'TypeScript', 'Go', 'MUI', 'Cypress', 'AWS'],
    github: 'https://github.com/Sn00pyW00dst0ck/CEN5035-Project',
    live: null,
  },
  {
    title: 'PeerWire',
    subtitle: 'Distributed BitTorrent File Sharing System',
    description: 'A from-scratch implementation of the BitTorrent wire protocol in Java — covering TCP handshaking, bitfield exchange, piece selection, and the choking/unchoking algorithm. The system supports 50+ concurrent peer connections using multi-threaded architecture with non-blocking I/O and fine-grained locking for shared state. Deployed across 6 AWS EC2 instances using Docker, with validated file-transfer correctness under simulated network partitions.',
    tags: ['Java', 'TCP/IP', 'Sockets', 'Multithreading', 'Docker', 'AWS'],
    github: 'https://github.com/arcotas115',
    live: null,
  },
  {
    title: 'Argus',
    subtitle: 'Named Entity Recognition Chrome Extension',
    description: 'A Chrome extension that extracts text from any webpage, sends it to a Python Flask backend, and uses spaCy NER models to identify and classify named entities — people, organizations, locations, and dates. Results appear as inline color-coded annotations with a structured summary panel for browsing and filtering. Processes 10K+ tokens per page in under 2 seconds. Named after the hundred-eyed giant of Greek mythology.',
    tags: ['JavaScript', 'Python', 'Flask', 'spaCy', 'Chrome API'],
    github: 'https://github.com/arcotas115',
    live: null,
  },
  {
    title: 'TerraBench',
    subtitle: 'Geospatial Training Data for Multimodal LLMs',
    description: 'A research project at UF focused on building the training data pipeline for a LLaVA-style multimodal model that reasons over satellite imagery. Instead of CLIP, the architecture projects Google AlphaEarth satellite-derived embeddings into the language model\'s token space. My pipeline automates the conversion of raw raster data into vectorized polygons and generates 4,000+ structured QA pairs across 120 U.S. locations, reducing benchmark creation time from weeks to hours.',
    tags: ['Python', 'GPT-4o', 'GIS', 'LLaVA', 'AlphaEarth'],
    github: null,
    live: null,
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
      <div ref={cardRef} className="project-card" onMouseMove={handleMouseMove}
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderLeft: '3px solid rgba(255,255,255,0.08)',
          borderRadius: 12, padding: '28px 28px 24px',
          display: 'flex', flexDirection: 'column', gap: 12,
          minHeight: 220,
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
            <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <div style={{ display: 'flex', gap: 14 }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="social-link" style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 0 }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/>
                </svg>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="social-link" style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 0 }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em', marginBottom: 2 }}>
            {project.title}
          </h3>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.03em',
          }}>
            {project.subtitle}
          </p>
        </div>

        <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', flex: 1 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
          {project.tags.map((t) => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, fontWeight: 400,
              padding: '4px 10px', borderRadius: 4,
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.06)',
              letterSpacing: '0.03em',
            }}>{t}</span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section className="section-container"
      style={{ maxWidth: 920, margin: '0 auto', padding: '140px 24px 100px' }}>
      <FadeIn>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, color: 'rgba(255,255,255,0.25)',
          marginBottom: 8, letterSpacing: '0.08em',
        }}>02</p>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 600,
          color: '#fff', marginBottom: 16, letterSpacing: '-0.01em',
        }}>Projects</h2>
        <p style={{
          fontSize: 14, color: 'rgba(255,255,255,0.5)',
          marginBottom: 40, maxWidth: 500,
        }}>
          A selection of systems, tools, and research I've built from scratch.
        </p>
      </FadeIn>
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {PROJECTS.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
      </div>
    </section>
  );
}