import styles from './Slides.module.css'

export default function Slide6() {
  const accent = '#c95c4c'

  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: accent, borderColor: accent }}>
          06
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: accent }}>
            Tiêu cực
          </span>
          <h2 className={styles.slideTitle}>Tác động tiêu cực (Nguy cơ phụ thuộc)</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Áp lực cạnh tranh gay gắt</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Phụ thuộc vào thị trường nước ngoài</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Nguy cơ môi trường và giá trị thấp</span>
          </div>
          <div className={styles.point} style={{ '--delay': '240ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Bất bình đẳng xã hội</span>
          </div>
          <div className={styles.point} style={{ '--delay': '320ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Xói mòn bản sắc văn hóa</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <img 
            src="/photos/Screenshot 2026-03-26 152658.png" 
            alt="Tác động tiêu cực và nguy cơ phụ thuộc"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>
      </div>
    </div>
  )
}
