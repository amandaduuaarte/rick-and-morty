// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {Component, ErrorInfo, ReactNode} from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Aqui eu poderia fazer algum registro em alguma plataforma de monitoramento de error??
    console.error('Erro capturado:', error, errorInfo);
  }

  render(): any {
    if (this.state.hasError) {
      console.log('Erro capturado:', this.state.hasError);
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
