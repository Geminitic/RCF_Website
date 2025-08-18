# Lazy Loading System

This directory contains utilities and components for implementing efficient lazy loading in the Rhizome Community Foundation website.

## Components

### LazyImage

A component that lazily loads images using the IntersectionObserver API. It only loads the image when it's near the viewport, which improves initial page load performance.

```tsx
import LazyImage from '../components/common/LazyImage';

// Usage
<LazyImage 
  src="/path/to/image.jpg" 
  alt="Description" 
  className="your-classes"
  placeholderSrc="/path/to/placeholder.svg" // Optional
  fallbackSrc="/path/to/fallback.jpg" // Optional
/>
```

### LazyLoadContainer

A container component that lazily loads any content when scrolled into view.

```tsx
import LazyLoadContainer from '../components/common/LazyLoadContainer';

// Usage
<LazyLoadContainer
  height="300px" // Optional
  rootMargin="200px" // Optional
  onVisible={() => console.log('Content is visible')} // Optional
>
  <YourHeavyComponent />
</LazyLoadContainer>
```

## Hooks

### useLazyLoad

A custom hook for implementing lazy loading with any component.

```tsx
import useLazyLoad from '../hooks/useLazyLoad';

function MyComponent() {
  const { ref, isInView } = useLazyLoad({
    rootMargin: '200px',
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <div ref={ref}>
      {isInView && <HeavyComponent />}
    </div>
  );
}
```

## Utilities

### lazyLoad.ts

Utility functions for lazy loading JavaScript modules:

1. `lazyImport`: Dynamic import wrapper for lazy loading dependencies
2. `viewportConditionalImport`: Loads a module only when a component is in view
3. `prefetchModule`: Prefetches a module when a user might need it soon (e.g., on hover)

```ts
import { lazyImport, viewportConditionalImport, prefetchModule } from '../utils/lazyLoad';

// Example: Lazy load a chart library only when needed
const ChartComponent = () => {
  const [chartLib, setChartLib] = useState(null);
  
  useEffect(() => {
    lazyImport(() => import('heavy-chart-library'))
      .then(lib => setChartLib(lib));
  }, []);
  
  // ...
}
```

## Best Practices

1. Use `LazyImage` for all images below the fold
2. Wrap heavy components in `LazyLoadContainer`
3. Use `useLazyLoad` for custom lazy loading implementations
4. Use `lazyLoad` utilities for third-party libraries and heavy JavaScript modules
5. Provide placeholder content for a better user experience

These tools will help reduce initial load time, improve performance metrics, and create a smoother user experience.
