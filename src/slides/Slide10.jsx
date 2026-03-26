import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Slides.module.css'
import slide10Image from '../data/photos/slide 10.jpeg'

export default function Slide10() {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}>
          10
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: 'var(--gold)' }}>
            Kết luận
          </span>
          <h2 className={styles.slideTitle}>Kết luận</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Hội nhập kinh tế quốc tế là xu thế tất yếu</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Mang lại vừa cơ hội vừa thách thức cho Việt Nam</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Hội nhập để nâng cao tự chủ, không đánh mất bản sắc</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label="Hình ảnh: Kết luận" src={slide10Image} />
        </div>
      </div>
    </div>
  )
}
