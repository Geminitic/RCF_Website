import React, { useEffect, useRef } from 'react';

interface HTMLElementWithCleanup extends HTMLElement {
  _cursorCleanup?: () => void;
}

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const followerX = useRef(0);
  const followerY = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const isMobile =
      window.matchMedia('(max-width: 768px)').matches ||
      'ontouchstart' in window;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    let rafId = 0;
    let running = true;

    const animateCursor = () => {
      if (!running) return;
      const dx = mouseX.current - cursorX.current;
      const dy = mouseY.current - cursorY.current;
      cursorX.current += dx * 0.3;
      cursorY.current += dy * 0.3;
      cursor.style.left = cursorX.current + 'px';
      cursor.style.top = cursorY.current + 'px';

      const fdx = mouseX.current - followerX.current;
      const fdy = mouseY.current - followerY.current;
      followerX.current += fdx * 0.15;
      followerY.current += fdy * 0.15;
      follower.style.left = followerX.current + 'px';
      follower.style.top = followerY.current + 'px';

      rafId = requestAnimationFrame(animateCursor);
    };

    const addHoverListeners = () => {
      const hoverElements: NodeListOf<HTMLElementWithCleanup> =
        document.querySelectorAll(
          'a, button, [role="button"], input, textarea, select, .hover-target'
        );

      hoverElements.forEach((el) => {
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

        el._cursorCleanup = () => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    };

    const observer = new MutationObserver(() => {
      const oldElements: NodeListOf<HTMLElementWithCleanup> =
        document.querySelectorAll('[data-cursor-listener]');
      oldElements.forEach((el) => {
        if (el._cursorCleanup) {
          el._cursorCleanup();
        }
      });

      setTimeout(addHoverListeners, 100);
    });

    const initialize = () => {
      document.addEventListener('mousemove', handleMouseMove);
      animateCursor();
      addHoverListeners();
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    };

    // Lightweight FPS check to avoid enabling on low-performance devices
    let measureId = 0;
    const measureDurationMs = 300;
    const minFps = 30;
    if (typeof performance !== 'undefined' && 'requestAnimationFrame' in window) {
      let frames = 0;
      const start = performance.now();
      const measure = () => {
        if (!running) return;
        frames += 1;
        const elapsed = performance.now() - start;
        if (elapsed < measureDurationMs) {
          measureId = requestAnimationFrame(measure);
        } else {
          const fps = (frames * 1000) / elapsed;
          if (fps >= minFps) {
            initialize();
          }
          // If fps is low, skip initializing the custom cursor entirely
        }
      };
      measureId = requestAnimationFrame(measure);
    } else {
      // Fallback: initialize normally when performance API unavailable
      initialize();
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      if (measureId) cancelAnimationFrame(measureId);

      const elements: NodeListOf<HTMLElementWithCleanup> =
        document.querySelectorAll(
          'a, button, [role="button"], input, textarea, select, .hover-target'
        );
      elements.forEach((el) => {
        if (el._cursorCleanup) {
          el._cursorCleanup();
        }
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
};

export default CustomCursor;
