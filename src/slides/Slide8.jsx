import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Slides.module.css'

export default function Slide8() {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}>
          08
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: 'var(--gold)' }}>
            Thực trạng
          </span>
          <h2 className={styles.slideTitle}>Thực trạng Việt Nam</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Tăng trưởng kinh tế và xuất khẩu mạnh mẽ</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Phụ thuộc cao vào vốn đầu tư trực tiếp nước ngoài (FDI)</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Giá trị gia tăng trong chuỗi sản xuất còn thấp</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label="Hình ảnh: Thực trạng Việt Nam" />
        </div>
      </div>
    </div>
  )
}
