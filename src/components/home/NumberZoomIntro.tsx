import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const NumberZoomIntro: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: 20,
      filter: 'blur(12px)',
      transition: { duration: 6, ease: [0.22, 1, 0.36, 1] }
    });

    const start = Date.now();
    const duration = 6000;

    const step = () => {
      const elapsed = Date.now() - start;
      const value = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(value);
      if (value < 100) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => setVisible(false), 1000);
      }
    };

    requestAnimationFrame(step);
  }, [controls]);

  const cutout = progress >= 70;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50 pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 6, ease: 'easeInOut' }}
        >
          {!cutout && (
            <motion.h1
              animate={controls}
              className="text-white font-extrabold leading-none"
              style={{ fontSize: '20vw' }}
            >
              {progress}
            </motion.h1>
          )}
          {cutout && (
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <mask id="number-mask">
                  <rect width="100%" height="100%" fill="white" />
                  <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="black"
                    style={{ fontSize: '20vw' }}
                    animate={controls}
                  >
                    {progress}
                  </motion.text>
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="black" mask="url(#number-mask)" />
            </svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NumberZoomIntro;
