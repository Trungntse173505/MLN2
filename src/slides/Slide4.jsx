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
            Tính tất yếu
          </span>
          <h2 className={styles.slideTitle}>Tính tất yếu của hội nhập đối với Việt Nam</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          <div className={styles.point} style={{ '--delay': '0ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Xu thế toàn cầu hóa kinh tế</span>
          </div>
          <div className={styles.point} style={{ '--delay': '80ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Nhu cầu phát triển kinh tế</span>
          </div>
          <div className={styles.point} style={{ '--delay': '160ms', '--accent': 'var(--gold)' }}>
            <span className={styles.pointBullet} style={{ background: 'var(--gold)' }} />
            <span className={styles.pointText}>Thúc đẩy công nghiệp hóa – hiện đại hóa</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" 
            alt="Biên giới mềm và hội nhập kinh tế toàn cầu"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>
      </div>
    </div>
  )
}
