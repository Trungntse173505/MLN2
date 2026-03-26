import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Slides.module.css'
import slide1Image from '../data/photos/slide 1.jpg'

export default function Slide1() {
  return (
    <div className={styles.titleLayout}>
      <div className={styles.titleText}>
        <div className={styles.eyebrow} style={{ color: 'var(--gold)' }}>
          Kinh tế chính trị Mác - Lênin
        </div>
        <h1 className={styles.mainTitle}>Biên giới mềm trong thời kỳ hội nhập kinh tế quốc tế</h1>
        <div className={styles.divider} style={{ background: 'var(--gold)' }} />
        <ul className={styles.titlePoints}>
          <li className={styles.titlePoint}>
            <span className={styles.bullet} style={{ background: 'var(--gold)' }} />
            Toàn cầu hóa làm mờ ranh giới kinh tế quốc gia
          </li>
          <li className={styles.titlePoint}>
            <span className={styles.bullet} style={{ background: 'var(--gold)' }} />
            <div>
              Các quốc gia phụ thuộc lẫn nhau về:
              <ul style={{ marginTop: '8px', marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.7 }} />
                  Vốn
                </li>
                <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.7 }} />
                  Công nghệ
                </li>
                <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.7 }} />
                  Thị trường
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--gold)', marginBottom: '8px', fontWeight: 500 }}>
            → Câu hỏi đặt ra:
          </div>
          <div style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            Việt Nam đang tự chủ hay phụ thuộc?
          </div>
        </div>
      </div>
      <div className={styles.titleImage}>
        <ImagePlaceholder label="Bản đồ kinh tế thế giới" src={slide1Image} />
      </div>
    </div>
  )
}
