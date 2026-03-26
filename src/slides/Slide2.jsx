import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Slides.module.css'

export default function Slide2() {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}>
          02
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: 'var(--gold)' }}>
            Khái niệm
          </span>
          <h2 className={styles.slideTitle}>Khái niệm "Biên giới mềm"</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Không còn giới hạn bởi lãnh thổ địa lý</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Phụ thuộc vào năng lực cạnh tranh và công nghệ</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Gắn với chuỗi giá trị toàn cầu</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label="Hình ảnh: Khái niệm &quot;Biên giới mềm&quot;" />
        </div>
      </div>
    </div>
  )
}
