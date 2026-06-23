import React from "react";
import { createDashboardResources } from "../resources/dashboardResources";

// 1. Define an interface for the component's state
interface ErrorBoundaryState {
  hasError: boolean;
  error: null;
  retryKey: number; // or string, depending on your use case
}

class ErrorBoundary extends React.Component<{children: any}, ErrorBoundaryState> {

  state:any = {
    hasError: false,
    error: null,
    retryKey: 0
  }

  static getDerivedStateFromError(error : Error) {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error->", error);
    console.error("errorInfo->", errorInfo.componentStack);
  }

  handleRetry = () => {
    this.setState((prev): Readonly<ErrorBoundaryState> => ({
      hasError: false,
      error: null,
      retryKey: prev.retryKey + 1
    }));
    createDashboardResources();
  }

  render(): React.ReactNode {
    const { hasError, error, retryKey } = this.state;
    const { children } = this.props;

    if(hasError) {
      return (
        <div className="border border-red-800 rounded p-2">
          <p className="text-red-300 text-lg font-semibold">{error?.message}</p>
          <button onClick={this.handleRetry} className="maw-w-20 p-2 rounded-lg bg-red-300">Retry</button>
        </div>
      )
    }

    return <div key={retryKey}>{children}</div>
  }


}

export default ErrorBoundary;