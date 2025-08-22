import React, { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  id: string;
  x: number;
  y: number;
  timeoutId: NodeJS.Timeout;
}

interface ParticleSystemProps {
  trigger?: boolean;
  x?: number;
  y?: number;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({
  trigger,
  x = 0,
  y = 0,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const createParticle = useCallback((clientX: number, clientY: number) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newParticle: Particle = {
      id,
      x: clientX + (Math.random() - 0.5) * 20,
      y: clientY + (Math.random() - 0.5) * 20,
      timeoutId: setTimeout(() => {
        setParticles((prevParticles) =>
          prevParticles.filter((p) => p.id !== id)
        );
      }, 2000),
    };
    setParticles((prevParticles) => [...prevParticles, newParticle]);
  }, []);

  useEffect(() => {
    if (trigger && x && y) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          createParticle(x, y);
        }, i * 100);
      }
    }
  }, [trigger, x, y, createParticle]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      // Clear all timeouts when component unmounts
      particles.forEach((p) => clearTimeout(p.timeoutId));
    };
  }, [createParticle, particles]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
