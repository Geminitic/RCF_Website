import React, { useState } from 'react';

interface QuantumRevealProps {
  children: React.ReactNode;
  className?: string;
}

const QuantumReveal: React.FC<QuantumRevealProps> = ({ children, className = '' }) => {
  const [revealed, setRevealed] = useState(false);

  const handleMouseMove = () => {
    if (!revealed && Math.random() < 0.1) {
      setRevealed(true);
      setTimeout(() => setRevealed(false), 2000);
    }
  };

  const handleClick = () => setRevealed((r) => !r);

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className={`${revealed ? 'quantum-revealed' : 'quantum-cloud'} ${className}`}
    >
      {children}
    </div>
  );
};

export default QuantumReveal;
