import styles from './ImagePlaceholder.module.css'

export default function ImagePlaceholder({ label = 'Hình ảnh minh họa' }) {
  return (
    <div className={styles.placeholder}>
      <div className={styles.inner}>
        <svg className={styles.icon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="10" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
          <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 32l10-8 8 6 6-5 16 13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
        <span className={styles.label}>{label}</span>
        <span className={styles.hint}>Image Placeholder</span>
      </div>
    </div>
  )
}
