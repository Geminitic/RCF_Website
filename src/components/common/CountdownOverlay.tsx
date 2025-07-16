import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CountdownOverlay: React.FC = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    const scale = count >= 0 ? 1 + (3 - count) * 0.05 : 1;
    root.style.transform = `scale(${scale})`;
    root.style.transition = 'transform 0.9s ease';
  }, [count]);

  if (count < 0) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.svg
          key={count}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 20 }}
          transition={{ duration: 1 }}
        >
          <defs>
            <mask id="num-mask">
              <rect width="100" height="100" fill="white" />
              <text
                x="50"
                y="50"
                dy=".35em"
                textAnchor="middle"
                fontSize="70"
                fontFamily="'Poppins', sans-serif"
                fontWeight="700"
                fill="black"
              >
                {count}
              </text>
            </mask>
          </defs>
          <rect
            width="100"
            height="100"
            fill="black"
            opacity="0.85"
            mask="url(#num-mask)"
          />
        </motion.svg>
      </AnimatePresence>
    </div>
  );
};

export default CountdownOverlay;
