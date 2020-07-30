import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <p>
          Something went wrong, please open issue at{' '}
          <a href="https://github.com/nemmtor/love-matcher/issues">GitHub</a>
        </p>
      );
    }
    return children;
  }
}
