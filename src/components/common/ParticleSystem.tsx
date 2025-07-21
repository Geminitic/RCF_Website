import React, { useEffect, useRef, useCallback } from 'react';

interface ParticleSystemProps {
  trigger?: boolean;
  x?: number;
  y?: number;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ trigger, x = 0, y = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const createParticle = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;

    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${clientX + (Math.random() - 0.5) * 20}px`;
    particle.style.top = `${clientY + (Math.random() - 0.5) * 20}px`;
    
    containerRef.current.appendChild(particle);
    
    const timeoutId = setTimeout(() => {
      if (particle.parentNode) {
        particle.remove();
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (trigger && x && y) {
      const cleanupFunctions: (() => void)[] = [];
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const cleanup = createParticle(x, y);
          if (cleanup) cleanupFunctions.push(cleanup);
        }, i * 100);
      }
      
      return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
      };
    }
  }, [trigger, x, y, createParticle]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [createParticle]);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
};

export default ParticleSystem;
