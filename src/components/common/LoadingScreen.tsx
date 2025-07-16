import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [count, setCount] = useState(3);
  const [scale, setScale] = useState(1);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount(c => {
        if (c <= 1) {
          clearInterval(countdown);
          document.body.classList.add('loaded');
          setDone(true);
          return 0;
        }
        return c - 1;
      });
    }, 1000);

    const zoom = setInterval(() => {
      setScale(s => s + 0.05);
    }, 50);

    return () => {
      clearInterval(countdown);
      clearInterval(zoom);
    };
  }, []);

  if (done) return null;

  return (
    <div className="rhizome-loader">
      <div className="count-number" style={{ transform: `scale(${scale})` }}>
        {count}
      </div>
    </div>
  );
};

export default LoadingScreen;
