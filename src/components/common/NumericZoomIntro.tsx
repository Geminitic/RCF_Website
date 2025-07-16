import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const NumericZoomIntro: React.FC = () => {
  const controls = useAnimation();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: [1, 3, 10],
        filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
        transition: { duration: 4, ease: "easeInOut" },
      });
      await controls.start({ opacity: 0, transition: { duration: 0.8 } });
      setHidden(true);
    };
    sequence();
  }, [controls]);

  if (hidden) return null;
  return (
    <motion.div className="numeric-zoom-overlay" initial={{ opacity: 1 }} animate={controls}>
      <motion.span className="number-mask text-[20vw] sm:text-[15vw]">
        2025
      </motion.span>
    </motion.div>
  );
};

export default NumericZoomIntro;
