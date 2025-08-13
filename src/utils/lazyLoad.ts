/**
 * Dynamic import wrapper for lazy loading heavy dependencies only when needed
 * @param importCallback - A function that returns a dynamic import
 * @returns A promise that resolves to the module
 */
export function lazyImport<T>(importCallback: () => Promise<T>): Promise<T> {
  return importCallback().catch((error) => {
    console.error('Error lazy loading module:', error);
    throw error;
  });
}

/**
 * Loads a module only when the component is in view
 * Use this with LazyLoadContainer and useEffect
 * @param importCallback - A function that returns a dynamic import
 * @param isInView - Boolean indicating if the component is in view
 * @returns The module or undefined if not in view
 */
export async function viewportConditionalImport<T>(
  importCallback: () => Promise<T>,
  isInView: boolean
): Promise<T | undefined> {
  if (!isInView) return undefined;
  
  try {
    return await importCallback();
  } catch (error) {
    console.error('Error loading module on viewport visibility:', error);
    throw error;
  }
}

/**
 * Prefetches a module but doesn't execute it
 * This can be used to load a module when the user hovers over a link
 * @param importCallback - A function that returns a dynamic import
 */
export function prefetchModule(importCallback: () => Promise<unknown>): void {
  // Using a timeout to avoid blocking the main thread
  setTimeout(() => {
    importCallback().catch((error) => {
      console.error('Error prefetching module:', error);
    });
  }, 0);
}

export default {
  lazyImport,
  viewportConditionalImport,
  prefetchModule,
};
