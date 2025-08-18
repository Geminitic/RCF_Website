import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======

>>>>>>> feature/hero-section-updates
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { currentLanguage } = useLanguage();

  // Animated background (canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
<<<<<<< HEAD
    let animationFrame: number;
=======
    let animationFrameId: number;
>>>>>>> feature/hero-section-updates

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
<<<<<<< HEAD
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Simple animated gradient background (placeholder)
=======
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
>>>>>>> feature/hero-section-updates
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#1a0a3d');
      grad.addColorStop(0.5, '#0c1f3d');
      grad.addColorStop(1, '#000a20');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
<<<<<<< HEAD
      animationFrame = requestAnimationFrame(animate);
    }
=======
      animationFrameId = requestAnimationFrame(animate);
    };
>>>>>>> feature/hero-section-updates
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Layout: logo and heading visually detached, logo moves right on Arabic, heading always centered
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0a3d] via-[#0c1f3d] to-[#000a20]">
<<<<<<< HEAD
      {/* Animated Background */}
=======
>>>>>>> feature/hero-section-updates
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
<<<<<<< HEAD
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
        {/* Logo: only logo moves right on Arabic, text stays centered */}
=======
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
>>>>>>> feature/hero-section-updates
        <div
          className="flex justify-center w-full"
          style={{
            marginLeft: currentLanguage.code === 'ar' ? '32rem' : '0',
<<<<<<< HEAD
            marginRight: currentLanguage.code === 'ar' ? '0' : '0',
=======
>>>>>>> feature/hero-section-updates
            transition: 'margin 0.5s',
          }}
        >
          <img
            src="/20250710_0555_Rhizome Logo Design_remix_01jzt2tem6e8zse9br715pa28n (2).png"
            alt="Rhizome Community Foundation Logo"
            className="h-[20rem] w-[20rem] sm:h-[25rem] sm:w-[25rem] md:h-[30rem] md:w-[30rem] xl:h-[35rem] xl:w-[35rem] 2xl:h-[40rem] 2xl:w-[40rem] object-contain mx-auto block"
            draggable={false}
            style={{
              background: 'transparent',
              maxWidth: '100vw',
              maxHeight: '95vh',
              objectFit: 'contain',
              padding: 0,
              filter: 'drop-shadow(0 0 55px rgba(107,70,193,0.25))',
            }}
          />
        </div>
<<<<<<< HEAD
        {/* Heading: always centered, one line in Arabic */}
        <div className="w-full flex justify-center mt-4">
          <h1
            className={`text-white text-4xl md:text-5xl font-bold text-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
            style={{ whiteSpace: currentLanguage.code === 'ar' ? 'nowrap' : 'normal' }}
=======
        <div className="w-full flex justify-center mt-4">
          <h1
            className={`text-white text-4xl md:text-5xl font-bold text-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
            style={{
              whiteSpace: currentLanguage.code === 'ar' ? 'nowrap' : 'normal',
            }}
>>>>>>> feature/hero-section-updates
          >
            {currentLanguage.code === 'ar'
              ? 'مؤسسة رايزوم المجتمعية'
              : 'Rhizome Community Foundation'}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
