import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Start with a small scale and grow dramatically as the counter increases
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(interval);
          document.body.classList.add('loaded');

          // Add a slight delay before completing the animation
          setTimeout(() => {
            setDone(true);
          }, 300);

          return 100;
        }

        // More aggressive early scaling that grows exponentially
        // Start scaling early (from 1.0) and reach a much larger value (10.0) before 100%
        // Use a curve that accelerates early and plateaus near the end
        const newScale = 1.0 + Math.pow(c / 70, 1.5) * 9;
        setScale(newScale);

        // Increase counter with variable speed - slower at start, faster in middle, slower at end
        let increment;
        if (c < 30) {
          increment = 1 + Math.floor(c / 15); // Slower at start
        } else if (c < 70) {
          increment = 2 + Math.floor((c - 30) / 10); // Faster in middle
        } else {
          increment = 1 + Math.floor((100 - c) / 15); // Slower at end
        }

        return Math.min(c + increment, 100);
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div className="rhizome-loader flex items-center justify-center bg-gradient-to-br from-teal-900 via-indigo-900 to-purple-900 fixed inset-0 z-50">
      <motion.div
        animate={{
          scale: scale,
          opacity: count < 100 ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        className="counter-container text-center"
      >
        <div className="text-white text-7xl md:text-9xl font-bold tracking-wider">
          {count}
          <span className="text-5xl md:text-7xl">%</span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
