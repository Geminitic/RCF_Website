import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const followerX = useRef(0);
  const followerY = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const canvas = canvasRef.current;

    if (!cursor || !follower || !canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      const wake = document.createElement('span');
      wake.className = 'cursor-wake';
      wake.style.left = `${e.clientX}px`;
      wake.style.top = `${e.clientY}px`;
      canvas.appendChild(wake);
      setTimeout(() => wake.remove(), 600);

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (el) {
        const bg = window.getComputedStyle(el).backgroundColor;
        const rgb = bg.match(/\d+/g);
        if (rgb && rgb.length >= 3) {
          const [r, g, b] = rgb.map(Number);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          cursor.style.backgroundColor = brightness > 128 ? '#064e3b' : '#ffffff';
        }
      }
    };

    const handleMouseDown = () => {
      cursor.classList.add('active');
      const ripple = document.createElement('span');
      ripple.className = 'cursor-ripple';
      ripple.style.left = `${mouseX.current}px`;
      ripple.style.top = `${mouseY.current}px`;
      canvas.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
        cursor.classList.remove('active');
      }, 600);
    };

    const animateCursor = () => {
      // Main cursor - faster follow
      const dx = mouseX.current - cursorX.current;
      const dy = mouseY.current - cursorY.current;
      cursorX.current += dx * 0.3;
      cursorY.current += dy * 0.3;
      cursor.style.left = cursorX.current + 'px';
      cursor.style.top = cursorY.current + 'px';

      // Follower - slower follow
      const fdx = mouseX.current - followerX.current;
      const fdy = mouseY.current - followerY.current;
      followerX.current += fdx * 0.15;
      followerY.current += fdy * 0.15;
      follower.style.left = followerX.current + 'px';
      follower.style.top = followerY.current + 'px';

      requestAnimationFrame(animateCursor);
    };

    // Add/remove hover classes on interactive elements
    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .hover-target');
      
      hoverElements.forEach(el => {
        const handleMouseEnter = () => {
          cursor.classList.add('hover');
          follower.classList.add('hover');
        };
        
        const handleMouseLeave = () => {
          cursor.classList.remove('hover');
          follower.classList.remove('hover');
        };

        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);

        // Store cleanup functions
        (el as any)._cursorCleanup = () => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    };

    // Initial setup
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    animateCursor();
    addHoverListeners();

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      // Clean up old listeners
      const oldElements = document.querySelectorAll('[data-cursor-listener]');
      oldElements.forEach(el => {
        if ((el as any)._cursorCleanup) {
          (el as any)._cursorCleanup();
        }
      });
      
      // Add new listeners with a small delay to ensure elements are ready
      setTimeout(addHoverListeners, 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      observer.disconnect();
      
      // Clean up all listeners
      const elements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .hover-target');
      elements.forEach(el => {
        if ((el as any)._cursorCleanup) {
          (el as any)._cursorCleanup();
        }
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
      <div ref={canvasRef} id="hypersonic-canvas" />
    </>
  );
};

export default CustomCursor;