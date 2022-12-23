import React, {useRef, useEffect} from 'react'
import {mount} from 'marketing/MarketingApp'
import ErrorBoundary from './ErrorBoundary'

const MarketingApp = () => {
  const ref = useRef(null)
  useEffect(() => {
    mount(ref.current)
  })
  return (
    <ErrorBoundary>
      <div ref={ref} />
    </ErrorBoundary>
  )
}

export default MarketingApp