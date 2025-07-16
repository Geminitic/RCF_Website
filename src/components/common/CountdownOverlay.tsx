import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CountdownOverlay: React.FC = () => {
  const [count, setCount] = useState(3);

  // Decrease the count every second until it reaches -1
  useEffect(() => {
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  // Apply zoom and blur to the underlying page as the countdown progresses
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;

    const progress = 3 - count;
    const scale = count >= 0 ? 1 + progress * 0.7 : 1;
    const blur = Math.max(0, 4 - progress * 1.5);

    root.style.transform = `scale(${scale})`;
    root.style.filter = `blur(${blur}px)`;
  }, [count]);

  if (count < 0) {
    const root = document.getElementById('root');
    if (root) {
      root.style.transform = '';
      root.style.filter = '';
    }
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.svg
          key={count}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 + (3 - count) * 3 }}
          exit={{ opacity: 0, scale: 30 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: `blur(${Math.max(0, 2 - (3 - count) * 0.7)}px)` }}
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
