import { useState, useEffect, useRef } from 'react';

interface UseLazyLoadOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

<<<<<<< HEAD
/**
 * A hook for lazy loading components when they come into view
 * @param options Intersection observer options
 * @returns An object containing ref to attach to the element and isInView boolean
 */
=======
>>>>>>> feature/hero-section-updates
export function useLazyLoad({
  rootMargin = '200px',
  threshold = 0.01,
  triggerOnce = true,
}: UseLazyLoadOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
<<<<<<< HEAD
=======
    const currentRef = ref.current;
>>>>>>> feature/hero-section-updates
    if (isInView && triggerOnce) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
<<<<<<< HEAD
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
=======
          if (triggerOnce && currentRef) {
            observer.unobserve(currentRef);
>>>>>>> feature/hero-section-updates
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

<<<<<<< HEAD
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
=======
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
>>>>>>> feature/hero-section-updates
      }
    };
  }, [rootMargin, threshold, triggerOnce, isInView]);

  return { ref, isInView };
}

export default useLazyLoad;
