import FadeIn from '../components/FadeIn';

const SKILLS = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Three.js'] },
  { category: 'Backend', items: ['Node.js', 'FastAPI', 'GraphQL', 'PostgreSQL', 'Redis'] },
  { category: 'ML / AI', items: ['PyTorch', 'TensorFlow', 'HuggingFace', 'LangChain'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'GCP', 'CI/CD', 'Kubernetes'] },
];

export default function About() {
  return (
    <section style={{ maxWidth: 960, margin: '0 auto', padding: '140px 24px 100px' }}>
      <FadeIn>
        <p style={s.label}>01</p>
        <h2 style={s.title}>About Me</h2>
        <div style={s.grid}>
          <div>
            <p style={s.body}>
              I'm a Master's student in Computer Science at the University of
              Florida with a passion for building software that is both
              technically rigorous and delightful to use. My interests span
              distributed systems, machine learning, and full-stack development.
            </p>
            <p style={{ ...s.body, marginTop: 16 }}>
              When I'm not coding, you'll find me [your hobbies — rock climbing,
              reading sci-fi, playing chess, contributing to open source, etc.].
            </p>
            <p style={{ ...s.body, marginTop: 16, color: 'rgba(255,255,255,0.18)', fontStyle: 'italic' }}>
              Replace this placeholder text with your own story.
            </p>
          </div>

          <div style={s.skillsCard}>
            {SKILLS.map((group, gi) => (
              <FadeIn key={group.category} delay={gi * 0.08}>
                <div style={{ marginBottom: gi < SKILLS.length - 1 ? 20 : 0 }}>
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
        </div>
      </FadeIn>
    </section>
  );
}

const s = {
  label: {
    fontFamily: "'Crimson Pro', serif", fontStyle: 'italic',
    fontSize: 14, color: 'rgba(255,255,255,0.15)',
    marginBottom: 8, letterSpacing: '0.1em',
  },
  title: {
    fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600,
    color: '#e0e0e0', marginBottom: 48, letterSpacing: '-0.01em',
  },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 },
  body: { fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.38)' },
  skillsCard: {
    background: 'rgba(255,255,255,0.025)',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: 12, padding: '28px 24px',
  },
  skillCat: {
    fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
  },
  pills: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  pill: {
    fontSize: 12, fontWeight: 400,
    padding: '5px 12px', borderRadius: 20,
    background: 'rgba(255,255,255,0.04)',
    color: 'rgba(255,255,255,0.42)',
    border: '1px solid rgba(255,255,255,0.05)',
  },
};
