import { useState, useEffect, useCallback } from 'react'
import { slides } from '../data/slides'

export function usePresentation() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('forward')
  const [isFullscreen, setIsFullscreen] = useState(false)

  const total = slides.length

  const goNext = useCallback(() => {
    if (current < total - 1) {
      setDirection('forward')
      setCurrent(c => c + 1)
    }
  }, [current, total])

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection('backward')
      setCurrent(c => c - 1)
    }
  }, [current])

  const goTo = useCallback((index) => {
    setDirection(index > current ? 'forward' : 'backward')
    setCurrent(index)
  }, [current])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev, toggleFullscreen])

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  return {
    current,
    total,
    slide: slides[current],
    direction,
    isFullscreen,
    goNext,
    goPrev,
    goTo,
    toggleFullscreen,
    canNext: current < total - 1,
    canPrev: current > 0,
  }
}
