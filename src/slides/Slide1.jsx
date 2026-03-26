import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Slides.module.css'

export default function Slide1() {
  return (
    <div className={styles.titleLayout}>
      <div className={styles.titleText}>
        <div className={styles.eyebrow} style={{ color: 'var(--gold)' }}>
          Nhóm nghiên cứu · Kinh tế Chính trị
        </div>
        <h1 className={styles.mainTitle}>Biên giới mềm trong thời kỳ hội nhập kinh tế quốc tế</h1>
        <div className={styles.divider} style={{ background: 'var(--gold)' }} />
        <p className={styles.tagline}>Tự chủ hay phụ thuộc?</p>
        <ul className={styles.titlePoints}>
          <li className={styles.titlePoint}>
            <span className={styles.bullet} style={{ background: 'var(--gold)' }} />
            Toàn cầu hóa làm mờ ranh giới kinh tế quốc gia
          </li>
          <li className={styles.titlePoint}>
            <span className={styles.bullet} style={{ background: 'var(--gold)' }} />
            Phụ thuộc về vốn, công nghệ, thị trường
          </li>
          <li className={styles.titlePoint}>
            <span className={styles.bullet} style={{ background: 'var(--gold)' }} />
            Việt Nam: tự chủ hay phụ thuộc?
          </li>
        </ul>
      </div>
      <div className={styles.titleImage}>
        <ImagePlaceholder label="Bản đồ kinh tế thế giới" />
      </div>
    </div>
  )
}
