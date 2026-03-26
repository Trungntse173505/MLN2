import styles from './Slides.module.css'

export default function Slide5() {
  const accent = '#4caf7d'

  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: accent, borderColor: accent }}>
          05
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: accent }}>
            Tích cực
          </span>
          <h2 className={styles.slideTitle}>Tác động tích cực của hội nhập</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Mở rộng thị trường</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Thu hút vốn và công nghệ</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Chuyển dịch cơ cấu kinh tế</span>
          </div>
          <div className={styles.point} style={{ '--delay': '240ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Nâng cao chất lượng nhân lực và vị thế quốc gia</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <img 
            src="/photos/Screenshot 2026-03-26 152650.png" 
            alt="Tác động tích cực của hội nhập kinh tế"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>
      </div>
    </div>
  )
}
