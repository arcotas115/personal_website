import { useState, useEffect } from 'react';

export default function Typewriter({ text, speed = 40, delay = 800, style }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [started, displayed, text, speed]);

  return (
    <span style={style}>
      {displayed}
      <span style={{
        borderRight: '2px solid',
        animation: 'typewriter-cursor 1s step-end infinite',
        marginLeft: 2,
        opacity: displayed.length >= text.length ? 1 : 0.8,
      }}>&nbsp;</span>
    </span>
  );
}
