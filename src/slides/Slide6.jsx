import ImagePlaceholder from '../components/ImagePlaceholder'
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
          <h2 className={styles.slideTitle}>Tác động tiêu cực</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Phụ thuộc vào thị trường nước ngoài</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Phụ thuộc vào công nghệ nhập khẩu</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Doanh nghiệp nội địa yếu thế trong cạnh tranh</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label="Hình ảnh: Tác động tiêu cực" />
        </div>
      </div>
    </div>
  )
}
