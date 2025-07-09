import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import ScrollReveal from '../common/ScrollReveal';
import RippleEffect from '../common/RippleEffect';

const RhizomaticIntro: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t, currentLanguage } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced rhizomatic network animation
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      connections: number[];
      opacity: number;
      pulsePhase: number;
    }> = [];

    const nodeCount = 30;
    const maxConnections = 3;

    // Initialize nodes with enhanced properties
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 5 + 3,
        connections: [],
        opacity: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      const nearbyNodes = nodes
        .map((otherNode, j) => ({
          index: j,
          distance: Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          ),
        }))
        .filter((item) => item.index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, maxConnections);

      node.connections = nearbyNodes.map((item) => item.index);
    });

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update node positions with enhanced movement
      nodes.forEach((node) => {
        node.x += node.vx + Math.sin(time + node.pulsePhase) * 0.5;
        node.y += node.vy + Math.cos(time + node.pulsePhase) * 0.5;

        // Bounce off edges with smooth transitions
        if (node.x <= 0 || node.x >= canvas.offsetWidth) {
          node.vx *= -0.8;
          node.x = Math.max(0, Math.min(canvas.offsetWidth, node.x));
        }
        if (node.y <= 0 || node.y >= canvas.offsetHeight) {
          node.vy *= -0.8;
          node.y = Math.max(0, Math.min(canvas.offsetHeight, node.y));
        }

        // Update opacity with pulsing effect
        node.opacity = 0.3 + Math.sin(time * 2 + node.pulsePhase) * 0.3;
      });

      // Draw enhanced connections
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
      ctx.lineWidth = 1.5;
      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex];
          const distance = Math.sqrt(
            Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2)
          );
          
          if (distance < 200) {
            const opacity = (200 - distance) / 200;
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.6})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();
          }
        });
      });

      // Draw enhanced nodes
      nodes.forEach((node) => {
        // Main node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${node.opacity})`;
        ctx.fill();
        
        // Glow effect
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 3
        );
        gradient.addColorStop(0, `rgba(16, 185, 129, ${node.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Enhanced Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full gpu-accelerated"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20 morphing-bg"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {t('hero-title', 'Rhizome Community Foundation', 'مؤسسة ريزوم المجتمعية')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
            >
              {t(
                'hero-subtitle',
                'Building resilient communities through a decentralized rhizome network for collective growth.',
                'نبني مجتمعات مرنة عبر شبكة جذمورية لامركزية من أجل نمو جماعي.'
              )}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <RippleEffect>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-enhanced px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-glow"
                >
                  {t('explore-projects', 'Explore Projects', 'استكشف المشاريع')}
                </motion.button>
              </RippleEffect>
              
              <RippleEffect>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-enhanced px-8 py-4 bg-white text-primary-600 font-semibold rounded-full border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300"
                >
                  {t('join-community', 'Join Community', 'انضم للمجتمع')}
                </motion.button>
              </RippleEffect>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 border-2 border-primary-600 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            className="w-2 h-4 bg-gradient-to-b from-primary-600 to-primary-400 rounded-full mt-2"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-100 to-transparent opacity-30 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RhizomaticIntro;