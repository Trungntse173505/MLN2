import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Slides.module.css'
import slide9Image from '../data/photos/slide 9.jpg'

export default function Slide9() {
  const accent = '#4c9ec9'

  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: accent, borderColor: accent }}>
          09
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: accent }}>
            Giải pháp
          </span>
          <h2 className={styles.slideTitle}>Giải pháp</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Hoàn thiện thể chế và môi trường pháp lý</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Nâng cao năng lực cạnh tranh của doanh nghiệp</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Làm chủ công nghệ và đổi mới sáng tạo</span>
          </div>
          <div className={styles.point} style={{ '--delay': '240ms', '--accent': accent }}>
            <span className={styles.pointBullet} style={{ background: accent }} />
            <span className={styles.pointText}>Đa dạng hóa thị trường và đối tác chiến lược</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label="Hình ảnh: Giải pháp" src={slide9Image} />
        </div>
      </div>
    </div>
  )
}
