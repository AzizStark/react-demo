import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Caught an error:", error);
        console.error("Error info:", info);
        // this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h3>Something went wrong.</h3>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;