import React from 'react'
import ErrorView from './ErrorView'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch(
    error,
    errorInfo,
  ) {
    console.log(error.message)
    // logError(error, error.message, errorInfo)
  }

  render() {
    const { error } = this.state
    const { children } = this.props
    if (error) {
      return <ErrorView />
    }

    return children
  }
}