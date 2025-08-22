import { useState, useEffect, useRef } from 'react';

interface UseLazyLoadOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * A hook for lazy loading components when they come into view
 * @param options Intersection observer options
 * @returns An object containing ref to attach to the element and isInView boolean
 */
export function useLazyLoad({
  rootMargin = '200px',
  threshold = 0.01,
  triggerOnce = true,
}: UseLazyLoadOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (isInView && triggerOnce) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          if (triggerOnce && currentRef) {
            observer.unobserve(currentRef);
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin, threshold, triggerOnce, isInView]);

  return { ref, isInView };
}

export default useLazyLoad;
