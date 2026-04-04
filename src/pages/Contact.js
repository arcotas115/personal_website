import FadeIn from '../components/FadeIn';

export default function Contact() {
  return (
    <section style={{ maxWidth: 960, margin: '0 auto', padding: '140px 24px 120px' }}>
      <FadeIn>
        <p style={{
          fontFamily: "'Crimson Pro', serif", fontStyle: 'italic',
          fontSize: 14, color: 'rgba(255,255,255,0.15)',
          marginBottom: 8, letterSpacing: '0.1em',
        }}>04</p>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600,
          color: '#e0e0e0', marginBottom: 48, letterSpacing: '-0.01em',
        }}>Get In Touch</h2>

        <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }}>
          <p style={{
            fontSize: 15, lineHeight: 1.8,
            color: 'rgba(255,255,255,0.32)', marginBottom: 32,
          }}>
            I'm actively looking for new-grad and internship opportunities.
            Whether you have a role in mind, a question, or just want to say
            hi — my inbox is always open.
          </p>

          <a href="mailto:your.email@ufl.edu" className="btn-outline" style={{
            display: 'inline-block', padding: '16px 40px',
            fontSize: 15, fontWeight: 500, fontFamily: "'Sora', sans-serif",
            color: '#d0d0d0', background: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 8, textDecoration: 'none',
            letterSpacing: '0.03em',
          }}>
            Say Hello →
          </a>

          <div style={{
            display: 'flex', justifyContent: 'center',
            gap: 24, marginTop: 40,
          }}>
            {[
              { label: 'GitHub', href: 'https://github.com/yourusername' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
              { label: 'Twitter', href: 'https://twitter.com/yourusername' },
            ].map((s) => (
              <a key={s.label} href={s.href}
                target="_blank" rel="noopener noreferrer"
                className="social-link"
                style={{
                  fontSize: 13, color: 'rgba(255,255,255,0.22)',
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
