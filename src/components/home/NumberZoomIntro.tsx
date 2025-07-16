import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NumberZoomIntro: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 4.5, ease: 'easeInOut' }}
        >
          <motion.h1
            initial={{ scale: 1, filter: 'blur(0px)' }}
            animate={{ scale: 20, filter: 'blur(12px)' }}
            transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-extrabold leading-none"
            style={{ fontSize: '20vw' }}
          >
            2024
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NumberZoomIntro;
