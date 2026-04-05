import FadeIn from '../components/FadeIn';

export default function Contact() {
  return (
    <section className="section-container"
      style={{ maxWidth: 920, margin: '0 auto', padding: '140px 24px 40px' }}>
      <FadeIn>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, color: 'rgba(255,255,255,0.25)',
          marginBottom: 8, letterSpacing: '0.08em',
        }}>04</p>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 600,
          color: '#fff', marginBottom: 48, letterSpacing: '-0.01em',
        }}>Get In Touch</h2>

        <div style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
          <p style={{
            fontSize: 15, lineHeight: 1.8,
            color: 'rgba(255,255,255,0.6)', marginBottom: 36,
          }}>
            I'm actively looking for new-grad and internship opportunities.
            Whether you have a role in mind, a question, or just want to say
            hi — my inbox is always open.
          </p>

          <a href="mailto:your.email@ufl.edu" className="btn-outline" style={{
            display: 'inline-block', padding: '14px 36px',
            fontSize: 14, fontWeight: 500, fontFamily: "'Sora', sans-serif",
            color: '#ddd', background: 'transparent',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 6, textDecoration: 'none',
            letterSpacing: '0.03em',
          }}>
            Say Hello →
          </a>

          <div style={{
            display: 'flex', justifyContent: 'center',
            gap: 24, marginTop: 44,
          }}>
            {[
              { label: 'GitHub', href: 'https://github.com/arcotas115' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
              { label: 'Twitter', href: 'https://twitter.com/yourusername' },
            ].map((s) => (
              <a key={s.label} href={s.href}
                target="_blank" rel="noopener noreferrer"
                className="social-link"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12, color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none', letterSpacing: '0.04em',
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}