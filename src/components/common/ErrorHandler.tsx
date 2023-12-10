import React, { Component, ErrorInfo, ReactNode } from "react";
import { Box } from "@mui/material";

interface ErrorHandlerProps {
  children: ReactNode;
}

interface ErrorHandlerState {
  hasError: boolean;
}

class ErrorHandler extends Component<ErrorHandlerProps, ErrorHandlerState> {
  constructor(props: ErrorHandlerProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error:", { error });
    console.error("Error Info:", { errorInfo });
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Box>Something went wrong.</Box>;
    }
    return this.props.children;
  }
}

export default ErrorHandler;
