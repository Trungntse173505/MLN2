import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoMark}>◆</span>
        <span className={styles.logoText}>Kinh tế Chính trị Quốc tế</span>
      </div>
      <div className={styles.title}>
        Biên giới mềm trong thời kỳ hội nhập kinh tế quốc tế
      </div>
      <div className={styles.hint}>
        <kbd>←</kbd><kbd>→</kbd><kbd>Space</kbd>
      </div>
    </header>
  )
}
