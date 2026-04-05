import FadeIn from '../components/FadeIn';

const SKILLS = [
  { category: 'Languages', items: ['Java', 'Python', 'Go', 'JavaScript', 'TypeScript', 'C/C++', 'SQL', 'Bash'] },
  { category: 'Frontend', items: ['React.js', 'Angular', 'HTML/CSS', 'Material UI', 'Vite', 'Cypress'] },
  { category: 'Backend', items: ['Spring Boot', 'Node.js', 'Express.js', 'Flask', 'REST APIs', 'GraphQL', 'WebSockets'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Oracle'] },
  { category: 'DevOps & Cloud', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Linux'] },
  { category: 'Concepts', items: ['Distributed Systems', 'System Design', 'Microservices', 'Multithreading', 'OOP/OOD', 'TDD', 'Agile'] },
];

export default function About() {
  return (
    <section className="section-container"
      style={{ maxWidth: 920, margin: '0 auto', padding: '140px 24px 100px' }}>
      <FadeIn>
        <p style={s.label}>01</p>
        <h2 style={s.title}>About Me</h2>

        <div className="about-photo-grid" style={{
          display: 'grid', gridTemplateColumns: '220px 1fr',
          gap: 44, marginBottom: 56, alignItems: 'start',
        }}>
          <div>
            <div className="profile-photo" style={{
              width: '100%', maxWidth: 220, height: 270,
              borderRadius: 10,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto',
            }}>
              {/*
                Drop your photo in public/photo.jpg then replace this block with:
                <img src="/photo.jpg" alt="Abhignan Arcot" style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(30%) contrast(1.05)',
                }} />
              */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                  <circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 10-16 0" />
                </svg>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.05em' }}>YOUR PHOTO</span>
              </div>
            </div>
          </div>

          <div>
            <p style={s.body}>
              I’m a graduate student at the University of Florida, pursuing a Master’s in Computer Science.
              I’m drawn to complex, open-ended problems—the kind that require going deep, thinking carefully,
              and building from first principles. Whether it’s distributed systems, multimodal AI pipelines,
              or full-stack applications, I enjoy work that sits at the intersection of engineering rigor and real-world impact.
              
            </p>
            <p style={{ ...s.body, marginTop: 18 }}>
              Before UF, I completed my undergraduate degree at Mahindra University in Hyderabad,
              where I worked on machine learning research for aerodynamic prediction and gained industry 
              experience at Zemoso Technologies. That blend of research and engineering is where I do my 
              best work—each pushes me to be better at the other.
            </p>
            <p style={{ ...s.body, marginTop: 18 }}>
              Outside of work, I spend much of my time in the gym. I bring the same curiosity I have 
              for engineering into everything I do—whether it’s understanding a new training approach 
              or breaking down how something works under the hood.
            </p>
          </div>
        </div>

        <h3 style={{
          fontSize: 18, fontWeight: 600, color: '#f0f0f0',
          marginBottom: 24, letterSpacing: '-0.01em',
        }}>
          Skills & Technologies
        </h3>
        <div className="skills-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 20,
        }}>
          {SKILLS.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.06}>
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 10, padding: '18px 16px',
              }}>
                <h4 style={s.skillCat}>{group.category}</h4>
                <div style={s.pills}>
                  {group.items.map((item) => (
                    <span key={item} className="skill-pill" style={s.pill}>{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

const s = {
  label: { fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'rgba(255,255,255,0.25)', marginBottom: 8, letterSpacing: '0.08em' },
  title: { fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 600, color: '#fff', marginBottom: 48, letterSpacing: '-0.01em' },
  body: { fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)' },
  skillCat: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 10 },
  pills: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  pill: { fontSize: 12, fontWeight: 400, padding: '4px 11px', borderRadius: 4, background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.06)' },
};