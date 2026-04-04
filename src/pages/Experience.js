import FadeIn from '../components/FadeIn';

const EXPERIENCE = [
  {
    role: 'Software Engineering Intern',
    company: 'Company Name',
    period: 'May 2025 — Aug 2025',
    bullets: [
      'Describe what you built, the scale, and the tech used.',
      'Quantify impact wherever possible (e.g. reduced latency by 40%).',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'University of Florida — Dept. of CISE',
    period: 'Jan 2025 — Present',
    bullets: [
      'Describe your research area and contributions.',
      'Mention publications, tools built, or datasets created.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'University of Florida',
    period: 'Aug 2024 — Dec 2024',
    bullets: [
      'Course name and your responsibilities.',
      'Any curriculum improvements or tools you created.',
    ],
  },
];

export default function Experience() {
  return (
    <section style={{ maxWidth: 960, margin: '0 auto', padding: '140px 24px 100px' }}>
      <FadeIn>
        <p style={{
          fontFamily: "'Crimson Pro', serif", fontStyle: 'italic',
          fontSize: 14, color: 'rgba(255,255,255,0.15)',
          marginBottom: 8, letterSpacing: '0.1em',
        }}>03</p>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600,
          color: '#e0e0e0', marginBottom: 48, letterSpacing: '-0.01em',
        }}>Experience</h2>
      </FadeIn>

      <div style={{
        display: 'flex', flexDirection: 'column',
        borderLeft: '1px solid rgba(255,255,255,0.06)',
        marginLeft: 8,
      }}>
        {EXPERIENCE.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.12}>
            <div style={{ position: 'relative', paddingLeft: 36, paddingBottom: 48 }}>
              <div style={{
                position: 'absolute', left: -5, top: 6,
                width: 9, height: 9, borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid #1a1a1a',
                boxShadow: '0 0 0 2px rgba(255,255,255,0.06)',
              }} />

              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', marginBottom: 12,
                flexWrap: 'wrap', gap: 8,
              }}>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#dcdcdc', letterSpacing: '-0.01em' }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.28)', marginTop: 2 }}>
                    {exp.company}
                  </p>
                </div>
                <span style={{
                  fontSize: 12, fontFamily: "'Crimson Pro', serif",
                  fontStyle: 'italic', color: 'rgba(255,255,255,0.18)',
                  letterSpacing: '0.02em', whiteSpace: 'nowrap',
                }}>
                  {exp.period}
                </span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{
                    fontSize: 14, lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.32)', paddingLeft: 16,
                  }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
