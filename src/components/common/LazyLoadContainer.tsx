import React from 'react';
import { cn } from '../../utils/cn';
import useLazyLoad from '../../hooks/useLazyLoad';

interface LazyLoadContainerProps {
  children: React.ReactNode;
  className?: string;
  height?: string | number;
  width?: string | number;
  rootMargin?: string;
  threshold?: number;
  placeholderContent?: React.ReactNode;
  onVisible?: () => void;
}

/**
 * A container component that lazy loads its children when scrolled into view
 */
const LazyLoadContainer: React.FC<LazyLoadContainerProps> = ({
  children,
  className,
  height,
  width,
  rootMargin = '200px',
  threshold = 0.01,
  placeholderContent,
  onVisible,
}) => {
  const { ref, isInView } = useLazyLoad({
    rootMargin,
    threshold,
    triggerOnce: true,
  });

  // Call the onVisible callback when the component comes into view
  React.useEffect(() => {
    if (isInView && onVisible) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const containerStyle: React.CSSProperties = {
    height: height || 'auto',
    width: width || 'auto',
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn('relative overflow-hidden', className)}
      style={containerStyle}
    >
      {isInView ? (
        children
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-stone-100">
          {placeholderContent || (
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-8 h-8 border-4 border-t-primary-green border-opacity-50 rounded-full animate-spin"></div>
              <span className="text-sm text-stone-500">Loading content...</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LazyLoadContainer;
