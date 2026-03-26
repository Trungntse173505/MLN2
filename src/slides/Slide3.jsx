import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Slides.module.css'
import slide3Image from '../data/photos/slide 3.jpg'

export default function Slide3() {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}>
          03
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: 'var(--gold)' }}>
            Lý luận
          </span>
          <h2 className={styles.slideTitle}>Lý luận hội nhập</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '1rem', color: 'var(--gold)', marginBottom: '12px', fontWeight: 600 }}>
              Hội nhập kinh tế quốc tế là:
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.6, fontStyle: 'italic', paddingLeft: '16px', borderLeft: '2px solid var(--gold)' }}>
              → Quá trình gắn kết nền kinh tế quốc gia với nền kinh tế thế giới trên cơ sở lợi ích chung
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <div style={{ fontSize: '1rem', color: 'var(--gold)', marginBottom: '12px', fontWeight: 600 }}>
              Tính tất yếu:
            </div>
            <div className={styles.point} style={{ '--delay': '0ms', '--accent': 'var(--gold)' }}>
              <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
              <span className={styles.pointText}>Do toàn cầu hóa</span>
            </div>
            <div className={styles.point} style={{ '--delay': '80ms', '--accent': 'var(--gold)' }}>
              <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
              <span className={styles.pointText}>Do phân công lao động quốc tế</span>
            </div>
            <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontSize: '0.95rem', color: 'var(--gold)', fontWeight: 500 }}>
                → Là phương thức phát triển phổ biến của các quốc gia
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label="Hình ảnh: Lý luận hội nhập" src={slide3Image} />
        </div>
      </div>
    </div>
  )
}
