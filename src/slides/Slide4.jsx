import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Slides.module.css'

export default function Slide4() {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}>
          04
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: 'var(--gold)' }}>
            Nội dung
          </span>
          <h2 className={styles.slideTitle}>Nội dung hội nhập</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Chuẩn bị điều kiện: thể chế, nhân lực</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Các mức độ hội nhập (FTA, liên minh kinh tế...)</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Việt Nam tham gia nhiều hiệp định thương mại</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label="Hình ảnh: Nội dung hội nhập" />
        </div>
      </div>
    </div>
  )
}
