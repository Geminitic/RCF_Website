import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const scale = 1.1 - 0.1 * (count / 100);
    document.body.style.transform = `scale(${scale})`;

    return () => {
      document.body.style.transform = '';
    };
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => {
        if (c >= 100) {
          clearInterval(interval);
          document.body.classList.add('loaded');
          document.body.style.transform = '';
          setDone(true);
          return 100;
        }
        return c + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div className="rhizome-loader">
      <div className="counter" style={{ transform: `scale(${1 + count / 100})` }}>{count}%</div>
    </div>
  );
};

export default LoadingScreen;
