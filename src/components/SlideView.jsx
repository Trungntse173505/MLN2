import { useEffect, useState } from 'react'
import ImagePlaceholder from './ImagePlaceholder'
import styles from './SlideView.module.css'

const variantAccents = {
  positive: '#4caf7d',
  negative: '#c95c4c',
  dialectic: '#7c6fc9',
  solution: '#4c9ec9',
  default: 'var(--gold)',
}

export default function SlideView({ slide, direction }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 40)
    return () => clearTimeout(t)
  }, [slide.id])

  const accent = variantAccents[slide.variant] || variantAccents.default

  return (
    <div
      className={`${styles.slide} ${visible ? styles.in : styles.out}`}
      data-direction={direction}
    >
      {/* Background ornament */}
      <div className={styles.ornamentTopRight} style={{ '--accent': accent }} />
      <div className={styles.ornamentBottomLeft} style={{ '--accent': accent }} />

      <div className={styles.content}>
        {slide.isTitle ? (
          <TitleSlide slide={slide} accent={accent} />
        ) : (
          <ContentSlide slide={slide} accent={accent} />
        )}
      </div>
    </div>
  )
}

function TitleSlide({ slide, accent }) {
  return (
    <div className={styles.titleLayout}>
      <div className={styles.titleText}>
        <div className={styles.eyebrow} style={{ color: accent }}>
          Nhóm nghiên cứu · Kinh tế Chính trị
        </div>
        <h1 className={styles.mainTitle}>{slide.subtitle}</h1>
        <div className={styles.divider} style={{ background: accent }} />
        <p className={styles.tagline}>{slide.tagline}</p>
        <ul className={styles.titlePoints}>
          {slide.points.map((p, i) => (
            <li key={i} className={styles.titlePoint}>
              <span className={styles.bullet} style={{ background: accent }} />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.titleImage}>
        <ImagePlaceholder label="Bản đồ kinh tế thế giới" />
      </div>
    </div>
  )
}

function ContentSlide({ slide, accent }) {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.slideNumber} style={{ color: accent, borderColor: accent }}>
          {String(slide.id).padStart(2, '0')}
        </div>
        <div className={styles.headerText}>
          <span className={styles.sectionLabel} style={{ color: accent }}>
            {slide.label}
          </span>
          <h2 className={styles.slideTitle}>{slide.title}</h2>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.points}>
          {slide.points.map((point, i) => (
            <div
              key={i}
              className={styles.point}
              style={{ '--delay': `${i * 80}ms`, '--accent': accent }}
            >
              <span className={styles.pointBullet} style={{ background: accent }} />
              <span className={styles.pointText}>{point}</span>
            </div>
          ))}
        </div>

        <div className={styles.imageArea}>
          <ImagePlaceholder label={`Hình ảnh: ${slide.title}`} />
        </div>
      </div>
    </div>
  )
}
