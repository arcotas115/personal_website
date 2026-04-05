import { useState, useEffect, useRef } from 'react';

export default function MagnifierCursor() {
  const outerRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const rendered = useRef({ x: -200, y: -200 });
  const raf = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // hide on touch devices
    const touch = 'ontouchstart' in window || window.innerWidth <= 640;
    setIsMobile(touch);
    if (touch) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const interactive = el.tagName === 'A' || el.tagName === 'BUTTON' ||
          el.closest('a') || el.closest('button') ||
          el.closest('.project-card') || el.closest('.skill-pill');
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
          `translate(${rendered.current.x}px, ${rendered.current.y}px) scale(${hovering ? 1.6 : 1})`;
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

  if (isMobile) return null;

  return (
    <div
      ref={outerRef}
      style={{
        position: 'fixed',
        top: -20, left: -20,
        width: 40, height: 40,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        border: `1px solid rgba(255,255,255,${hovering ? 0.25 : 0.15})`,
        boxShadow: `0 0 15px 1px rgba(255,255,255,0.02), inset 0 0 10px rgba(255,255,255,0.03)`,
        backdropFilter: 'brightness(1.4) contrast(1.08)',
        WebkitBackdropFilter: 'brightness(1.4) contrast(1.08)',
        background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.06) 0%, transparent 60%)',
        willChange: 'transform',
      }}
    />
  );
}