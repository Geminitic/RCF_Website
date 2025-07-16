import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const NumberZoomIntro: React.FC = () => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const run = async () => {
      await controls.start({
        scale: [1, 2, 15],
        filter: ['blur(0px)', 'blur(3px)', 'blur(8px)'],
        transition: { duration: 4, ease: 'easeInOut', times: [0, 0.7, 1] },
      });
      await controls.start({
        opacity: 0,
        transition: { duration: 0.8, ease: 'easeInOut' },
      });
      setVisible(false);
    };
    run();
  }, [controls]);

  if (!visible) return null;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-black z-50 overflow-hidden pointer-events-none"
      animate={controls}
    >
      <motion.h1
        className="font-bold leading-none"
        style={{
          fontSize: '35vw',
          color: 'transparent',
          WebkitTextStroke: '2px white',
          mixBlendMode: 'screen',
        }}
      >
        2025
      </motion.h1>
    </motion.div>
  );
};

export default NumberZoomIntro;
