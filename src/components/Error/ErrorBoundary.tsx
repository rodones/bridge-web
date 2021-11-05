import React, { Component } from "react";
import ErrorView from "./ErrorView";

type ErrorBoundaryState =
  | {
      hasError: false;
      error: null;
    }
  | {
      hasError: true;
      error: Error;
    };

type ErrorBoundaryProps = React.PropsWithChildren<unknown>;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render(): React.ReactNode {
    const { hasError, error } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorView error={error as Error} /> : children;
  }
}
export default ErrorBoundary;
