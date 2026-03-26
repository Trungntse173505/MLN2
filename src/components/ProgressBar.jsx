import styles from './ProgressBar.module.css'

export default function ProgressBar({ current, total }) {
  const pct = ((current + 1) / total) * 100
  return (
    <div className={styles.track}>
      <div className={styles.bar} style={{ width: `${pct}%` }} />
    </div>
  )
}
