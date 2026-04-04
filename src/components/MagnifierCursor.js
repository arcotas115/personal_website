import { useState, useEffect, useRef } from 'react';

export default function MagnifierCursor() {
  const outerRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const rendered = useRef({ x: -200, y: -200 });
  const raf = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // detect if over interactive element
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const tag = el.tagName.toLowerCase();
        const interactive = tag === 'a' || tag === 'button' ||
          el.closest('a') || el.closest('button') ||
          el.classList.contains('project-card') ||
          el.classList.contains('skill-pill');
        setHovering(interactive);
      }
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    const animate = () => {
      rendered.current.x += (pos.current.x - rendered.current.x) * 0.18;
      rendered.current.y += (pos.current.y - rendered.current.y) * 0.18;
      if (outerRef.current) {
        outerRef.current.style.transform =
          `translate(${rendered.current.x}px, ${rendered.current.y}px) scale(${hovering ? 1.5 : 1})`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(raf.current);
    };
  }, [visible, hovering]);

  const size = 40;

  return (
    <>
      {/* SVG filter for magnification distortion */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="magnify-lens">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
            <feColorMatrix
              type="matrix"
              values="1.15 0 0 0 0.02
                      0 1.15 0 0 0.02
                      0 0 1.15 0 0.02
                      0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          top: -(size / 2),
          left: -(size / 2),
          width: size,
          height: size,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease, width 0.3s ease, height 0.3s ease',
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow: `
            0 0 20px 2px rgba(255,255,255,0.03),
            inset 0 0 12px 1px rgba(255,255,255,0.04),
            0 0 0 1px rgba(255,255,255,0.04)
          `,
          backdropFilter: 'brightness(1.5) contrast(1.1) saturate(1.15)',
          WebkitBackdropFilter: 'brightness(1.5) contrast(1.1) saturate(1.15)',
          background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.08) 0%, transparent 60%)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
