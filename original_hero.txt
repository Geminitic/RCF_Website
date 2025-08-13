import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/hero-buttons.css';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t, currentLanguage } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced rhizome network animation with darker colors
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      connections: number[];
      opacity: number;
      pulsePhase: number;
      color: string;
    }> = [];

    // Use Rhizome Syria colors
    const colors = [
      '#6B46C1', // rs-primary-purple
      '#0EA5E9', // rs-primary-blue
      '#fb923c', // rs-primary-orange
      '#EF4444', // rs-primary-red
      '#F59E0B', // rs-primary-yellow
      '#0D9488', // rs-teal
      '#1E3A8A', // rs-deep-blue
    ];
    const nodeCount = 40;

    // Initialize nodes with more organic properties
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 5 + 2,
        connections: [],
        opacity: Math.random() * 0.6 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Create more organic connections
    nodes.forEach((node, _i) => {
      const nearbyNodes = nodes
        .map((otherNode, j) => ({
          index: j,
          distance: Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) +
              Math.pow(node.y - otherNode.y, 2)
          ),
        }))
        .filter((item) => item.index !== _i && item.distance < 180)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, Math.floor(Math.random() * 4) + 2);

      node.connections = nearbyNodes.map((item) => item.index);
    });

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update nodes with more organic movement
      nodes.forEach((node) => {
        node.x += node.vx + Math.sin(time + node.pulsePhase) * 0.5;
        node.y += node.vy + Math.cos(time * 0.8 + node.pulsePhase) * 0.5;

        if (node.x <= 0 || node.x >= canvas.width) {
          node.vx *= -0.9;
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y <= 0 || node.y >= canvas.height) {
          node.vy *= -0.9;
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }

        node.opacity = 0.2 + Math.sin(time * 1.5 + node.pulsePhase) * 0.3;
      });

      // Draw connections with varied thickness and opacity
      nodes.forEach((node) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex];
          const distance = Math.sqrt(
            Math.pow(node.x - connectedNode.x, 2) +
              Math.pow(node.y - connectedNode.y, 2)
          );

          if (distance < 200) {
            const opacity = (200 - distance) / 200;
            const lineWidth = 0.5 + (1 - distance / 200) * 1.5;

            const gradient = ctx.createLinearGradient(
              node.x,
              node.y,
              connectedNode.x,
              connectedNode.y
            );
            gradient.addColorStop(
              0,
              node.color +
                Math.floor(opacity * 70)
                  .toString(16)
                  .padStart(2, '0')
            );
            gradient.addColorStop(
              1,
              connectedNode.color +
                Math.floor(opacity * 70)
                  .toString(16)
                  .padStart(2, '0')
            );

            ctx.strokeStyle = gradient;
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);

            const midX = (node.x + connectedNode.x) / 2;
            const midY =
              (node.y + connectedNode.y) / 2 + (Math.random() - 0.5) * 20;

            ctx.quadraticCurveTo(midX, midY, connectedNode.x, connectedNode.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes with enhanced visual effects
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle =
          node.color +
          Math.floor(node.opacity * 255)
            .toString(16)
            .padStart(2, '0');
        ctx.fill();

        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.size * 3
        );
        gradient.addColorStop(0, node.color + '40');
        gradient.addColorStop(1, node.color + '00');

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0a3d] via-[#0c1f3d] to-[#000a20]">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
        >
          {/* Compact Logo + Title Row (or stacked on small screens) */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-col items-center gap-2 mb-10 text-center"
          >
            <motion.div
              animate={{ filter: ["drop-shadow(0 0 85px rgba(107,70,193,0.3))", "drop-shadow(0 0 85px rgba(14,165,233,0.3))", "drop-shadow(0 0 85px rgba(251,146,60,0.3))", "drop-shadow(0 0 85px rgba(107,70,193,0.3))"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/20250710_0555_Rhizome Logo Design_remix_01jzt2tem6e8zse9br715pa28n (2).png"
                alt="Rhizome Community Foundation Logo"
                className="h-[40rem] w-[40rem] sm:h-[45rem] sm:w-[45rem] md:h-[50rem] md:w-[50rem] xl:h-[60rem] xl:w-[60rem] 2xl:h-[70rem] 2xl:w-[70rem] object-contain transition-all duration-500"
                draggable={false}
                style={{ 
                  background: 'transparent', 
                  maxWidth: '100vw', 
                  maxHeight: '95vh',
                  objectFit: 'contain',
                  padding: '0',
                  margin: '0 auto'
                }}
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-bold tracking-tight leading-[1.02] animated-gradient-text drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
              style={{
                fontFamily: 'var(--hero-heading-font)',
                fontSize: 'clamp(2.5rem, 4.75vw, 4.75rem)',
                letterSpacing: '-0.04em',
                marginTop: '-2rem',
              }}
            >
              {t('hero-title', 'Community Foundation', 'المؤسسة المجتمعية')}
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto font-light"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}
          >
            {t(
              'hero-subtitle',
              'Cultivating Community-Led Solutions for Sustainable Growth.',
              'نزرع حلولاً مستدامة تقودها المجتمعات.'
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link to="/programs">
              <Button
                variant="primary"
                className="px-10 py-5 text-lg md:text-xl rounded-2xl shadow-lg hover:shadow-2xl"
                rightIcon={
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                }
              >
                {t('explore-programs', 'Discover Our Impact', 'اكتشف تأثيرنا')}
              </Button>
            </Link>
            <Link to="/join">
              <Button
                variant="secondary"
                className="px-10 py-5 text-lg md:text-xl rounded-2xl"
              >
                {t('join-community', 'Join Our Network', 'انضم إلى شبكتنا')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-12 border-2 border-[var(--rs-primary-purple)] rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
              ease: 'easeInOut',
            }}
            className="w-2 h-4 bg-[var(--rs-primary-purple)] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
