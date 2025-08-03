import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => {
        if (c >= 100) {
          clearInterval(interval);
          document.body.classList.add('loaded');
          setDone(true);
          return 100;
        }
        return c + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  const scale = 1 + count / 50; // Zoom into the counter
  const opacity = 1 - count / 100; // Fade out loader

  return (
    <div className="rhizome-loader" style={{ opacity }}>
      <div className="counter" style={{ transform: `scale(${scale})` }}>{count}%</div>
    </div>
  );
};

export default LoadingScreen;
