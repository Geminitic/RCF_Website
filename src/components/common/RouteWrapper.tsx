import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-emerald-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-t-primary-green border-opacity-50 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading page...</p>
    </div>
  </div>
);

interface RouteWrapperProps {
  element: React.ReactNode;
  name: string;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ element, name }) => {
  return (
    <ErrorBoundary name={name}>
      <Suspense fallback={<PageLoader />}>{element}</Suspense>
    </ErrorBoundary>
  );
};

export default RouteWrapper;
