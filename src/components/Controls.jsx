import styles from './Controls.module.css'

export default function Controls({
  current,
  total,
  canPrev,
  canNext,
  goPrev,
  goNext,
  goTo,
  isFullscreen,
  toggleFullscreen,
}) {
  return (
    <div className={styles.controls}>
      {/* Slide dots */}
      <div className={styles.dots}>
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Center: progress + nav */}
      <div className={styles.center}>
        <button
          className={`${styles.navBtn} ${!canPrev ? styles.navBtnDisabled : ''}`}
          onClick={goPrev}
          disabled={!canPrev}
          aria-label="Slide trước"
        >
          <svg viewBox="0 0 20 20" fill="none">
            <path d="M12 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <span className={styles.progress}>
          <span className={styles.progressCurrent}>{String(current + 1).padStart(2, '0')}</span>
          <span className={styles.progressSep}>/</span>
          <span className={styles.progressTotal}>{String(total).padStart(2, '0')}</span>
        </span>

        <button
          className={`${styles.navBtn} ${!canNext ? styles.navBtnDisabled : ''}`}
          onClick={goNext}
          disabled={!canNext}
          aria-label="Slide tiếp theo"
        >
          <svg viewBox="0 0 20 20" fill="none">
            <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Right: fullscreen */}
      <div className={styles.right}>
        <button
          className={styles.iconBtn}
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'}
          title={isFullscreen ? 'Thoát toàn màn hình (F)' : 'Toàn màn hình (F)'}
        >
          {isFullscreen ? (
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M7 3v4H3M13 3v4h4M7 17v-4H3M13 17v-4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M3 7V3h4M13 3h4v4M17 13v4h-4M7 17H3v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
