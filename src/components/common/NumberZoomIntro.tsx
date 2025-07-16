import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const NumberZoomIntro: React.FC = () => {
  const controls = useAnimation();
  const [done, setDone] = useState(false);

  useEffect(() => {
    controls
      .start({
        scale: 30,
        filter: ['blur(0px)', 'blur(6px)'],
        transition: { duration: 6, ease: 'easeInOut' }
      })
      .then(() => setDone(true));
  }, [controls]);

  if (done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0], transition: { duration: 0.8, delay: 5.8 } }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-none bg-black"
    >
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="number-mask">
            <rect width="100" height="100" fill="white" />
            <motion.text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="'Poppins', sans-serif"
              fontWeight="700"
              fontSize="60"
              fill="black"
              initial={{ scale: 1 }}
              animate={controls}
            >
              2024
            </motion.text>
          </mask>
        </defs>
        <rect width="100" height="100" fill="black" mask="url(#number-mask)" />
      </svg>
    </motion.div>
  );
};

export default NumberZoomIntro;
