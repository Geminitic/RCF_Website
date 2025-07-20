import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProbabilityCloudProps {
  to: string;
  children: React.ReactNode;
}

const ProbabilityCloud: React.FC<ProbabilityCloudProps> = ({ to, children }) => {
  return (
    <motion.div
      className="probability-cloud quantum-gradient"
      initial={{ filter: 'blur(8px)' }}
      whileHover={{ filter: 'blur(0px)', scale: 1.05 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        to={to}
        className="probability-cloud-content block px-6 py-3 text-white font-semibold flex items-center gap-2"
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default ProbabilityCloud;
