import { useEffect, useState } from 'react'
import styles from './SlideWrapper.module.css'

const variantAccents = {
  1: 'var(--gold)',
  2: 'var(--gold)',
  3: 'var(--gold)',
  4: 'var(--gold)',
  5: '#4caf7d',
  6: '#c95c4c',
  7: '#7c6fc9',
  8: 'var(--gold)',
  9: '#4c9ec9',
  10: 'var(--gold)',
}

export default function SlideWrapper({ children, slideNumber, direction }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 40)
    return () => clearTimeout(t)
  }, [slideNumber])

  const accent = variantAccents[slideNumber] || 'var(--gold)'

  return (
    <div
      className={`${styles.slide} ${visible ? styles.in : styles.out}`}
      data-direction={direction}
    >
      <div className={styles.ornamentTopRight} style={{ '--accent': accent }} />
      <div className={styles.ornamentBottomLeft} style={{ '--accent': accent }} />

      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
