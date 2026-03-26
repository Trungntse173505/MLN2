import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Slides.module.css'
import slide2Image from '../data/photos/slide 2.png'

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
            <div>
              <div className={styles.pointText}>Được quyết định bởi:</div>
              <ul style={{ marginTop: '8px', marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.7 }} />
                  <span className={styles.pointText} style={{ fontSize: '0.95rem' }}>Năng lực cạnh tranh</span>
                </li>
                <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.7 }} />
                  <span className={styles.pointText} style={{ fontSize: '0.95rem' }}>Trình độ công nghệ</span>
                </li>
                <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.7 }} />
                  <span className={styles.pointText} style={{ fontSize: '0.95rem' }}>Vị trí trong chuỗi giá trị toàn cầu</span>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{ fontSize: '0.95rem', color: 'var(--gold)', marginBottom: '6px', fontWeight: 500 }}>
              → Quốc gia mạnh → kiểm soát "biên giới mềm"
            </div>
          </div>
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label="Hình ảnh: Khái niệm &quot;Biên giới mềm&quot;" src={slide2Image} />
        </div>
      </div>
    </div>
  )
}
