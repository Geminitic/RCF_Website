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

    const animateCursor = () => {
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

      requestAnimationFrame(animateCursor);
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

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();
    addHoverListeners();

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

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();

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
