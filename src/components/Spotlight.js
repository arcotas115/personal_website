import { useEffect, useRef } from 'react';

export default function Spotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (ref.current) {
        ref.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.03), transparent 40%)`;
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'background 0.15s ease',
      }}
    />
  );
}
