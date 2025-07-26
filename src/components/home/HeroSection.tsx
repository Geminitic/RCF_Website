import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

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

    // Interactive rhizome network animation
    type Connection = { index: number; restLength: number };
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      connections: Connection[];
      opacity: number;
      pulsePhase: number;
      color: string;
    }> = [];

    const colors = [
      '#064e3b',
      '#065f46',
      '#047857',
      '#b91c1c',
      '#dc2626',
      '#ea580c',
      '#d97706',
    ];

    const initialNodes = 40;
    const nodeLimit = initialNodes * 2; // allow the user to add up to twice the starting count

    // Initialize nodes with more organic properties
    for (let i = 0; i < initialNodes; i++) {
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

    // Create organic connections with rest lengths
    nodes.forEach((node, i) => {
      const nearbyNodes = nodes
        .map((otherNode, j) => ({
          index: j,
          distance: Math.hypot(node.x - otherNode.x, node.y - otherNode.y),
        }))
        .filter((item) => item.index !== i && item.distance < 180)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, Math.floor(Math.random() * 4) + 2);

      node.connections = nearbyNodes.map((item) => ({
        index: item.index,
        restLength: item.distance,
      }));
    });

    // ensure symmetrical connections
    nodes.forEach((node, i) => {
      node.connections.forEach((conn) => {
        const other = nodes[conn.index];
        if (!other.connections.some((c) => c.index === i)) {
          other.connections.push({ index: i, restLength: conn.restLength });
        }
      });
    });

    let dragging: number | null = null;

    const getPos = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const findNode = (x: number, y: number) =>
      nodes.findIndex((n) => Math.hypot(n.x - x, n.y - y) < n.size * 3);

    const onMouseDown = (e: MouseEvent) => {
      const { x, y } = getPos(e);
      const idx = findNode(x, y);

      if (e.button === 0) {
        if (idx !== -1) {
          dragging = idx;
        } else if (nodes.length < nodeLimit) {
          const newNode = {
            x,
            y,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2,
            size: Math.random() * 5 + 2,
            connections: [] as Connection[],
            opacity: Math.random() * 0.6 + 0.2,
            pulsePhase: Math.random() * Math.PI * 2,
            color: colors[Math.floor(Math.random() * colors.length)],
          };
          nodes.push(newNode);
          const newIndex = nodes.length - 1;
          const neighbors = nodes
            .slice(0, newIndex)
            .map((other, j) => ({
              index: j,
              distance: Math.hypot(other.x - x, other.y - y),
            }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, Math.min(3, nodes.length - 1));
          neighbors.forEach(({ index, distance }) => {
            newNode.connections.push({ index, restLength: distance });
            nodes[index].connections.push({
              index: newIndex,
              restLength: distance,
            });
          });
        }
      } else if (e.button === 2 && idx !== -1) {
        nodes[idx].connections.forEach((conn) => {
          const other = nodes[conn.index];
          other.connections = other.connections.filter((c) => c.index !== idx);
        });
        nodes[idx].connections = [];
        e.preventDefault();
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (dragging !== null) {
        const { x, y } = getPos(e);
        const node = nodes[dragging];
        node.x = x;
        node.y = y;
        node.vx = 0;
        node.vy = 0;
      }
    };

    const onMouseUp = () => {
      dragging = null;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // spring forces between connected nodes
      nodes.forEach((node, i) => {
        node.connections.forEach((conn) => {
          const other = nodes[conn.index];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.hypot(dx, dy) || 0.0001;
          const diff = dist - conn.restLength;
          const force = diff * 0.02;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;

          node.vx -= fx;
          node.vy -= fy;
          other.vx += fx;
          other.vy += fy;

          if (dist > conn.restLength * 2.5) {
            node.connections = node.connections.filter(
              (c) => c.index !== conn.index
            );
            other.connections = other.connections.filter((c) => c.index !== i);
          }
        });
      });

      // Update positions and apply jitter
      nodes.forEach((node) => {
        node.vx *= 0.98;
        node.vy *= 0.98;
        node.vx +=
          (Math.random() - 0.5) * 0.05 +
          Math.sin(time + node.pulsePhase) * 0.01;
        node.vy +=
          (Math.random() - 0.5) * 0.05 +
          Math.cos(time * 0.8 + node.pulsePhase) * 0.01;

        node.x += node.vx;
        node.y += node.vy;

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
        node.connections.forEach((conn) => {
          const connectedNode = nodes[conn.index];
          const distance = Math.hypot(
            node.x - connectedNode.x,
            node.y - connectedNode.y
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
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-800 via-sky-800 to-indigo-900">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{
              fontFamily: '"Playfair Display", "Noto Sans Arabic", serif',
            }}
          >
            {t(
              'hero-title',
              'Rhizome Community Foundation',
              'مؤسسة ريزوم المجتمعية'
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            {t(
              'hero-subtitle',
              'Cultivating Community-Led Solutions.',
              'نزرع حلولاً تقودها المجتمعات.'
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/programs"
              className="group inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">
                {t('explore-programs', 'Discover Our Impact', 'اكتشف تأثيرنا')}
              </span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              {t('join-community', 'Join Our Network', 'انضم إلى شبكتنا')}
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
          className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
              ease: 'easeInOut',
            }}
            className="w-2 h-4 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
