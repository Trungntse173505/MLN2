import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Slides.module.css'

export default function Slide7() {
  const accent = '#7c6fc9'

  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: accent, borderColor: accent }}>
          07
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: accent }}>
            Biện chứng
          </span>
          <h2 className={styles.slideTitle}>Quan hệ biện chứng</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Hội nhập ↔ Tự chủ: hai mặt của một vấn đề</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Không hội nhập → không phát triển được</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Hội nhập sâu → nguy cơ phụ thuộc gia tăng</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label="Hình ảnh: Quan hệ biện chứng" />
        </div>
      </div>
    </div>
  )
}
