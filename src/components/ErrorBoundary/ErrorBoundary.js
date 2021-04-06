import React, { Component } from "react";
import SomethingWentWrong from "../../images/swr.png"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="text-center">
          <img src={SomethingWentWrong} alt="" />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
