<<<<<<< HEAD
import * as React from 'react';
=======
>>>>>>> feature/hero-section-updates
import { Component, ErrorInfo, ReactNode } from 'react';
import { Shield } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  name?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to an error reporting service
    console.error(`Error in ${this.props.name || 'component'}:`, error, errorInfo);
    
    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
=======
  static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: _error,
    };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo): void {
    console.error(
      `Error in ${this.props.name || 'component'}:`,
      _error,
      _errorInfo
    );

    if (this.props.onError) {
      this.props.onError(_error, _errorInfo);
>>>>>>> feature/hero-section-updates
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
<<<<<<< HEAD
      // You can render any custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
=======
      if (this.props.fallback) {
        return this.props.fallback;
      }

>>>>>>> feature/hero-section-updates
      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <Shield className="text-red-500 mr-2" size={24} />
            <h3 className="text-lg font-semibold text-red-700">
              Component Error
            </h3>
          </div>
          <p className="text-red-600 mb-3">
            Something went wrong loading this section.
          </p>
          <div className="text-xs bg-white p-3 rounded border border-red-100 overflow-auto max-h-32">
            <code className="text-red-800">
              {this.state.error?.toString() || 'Unknown error'}
            </code>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
