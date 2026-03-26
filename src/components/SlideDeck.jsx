import { useEffect, useMemo, useState } from 'react';

function clampIndex(index, total) {
  if (index < 0) {
    return 0;
  }

  if (index >= total) {
    return total - 1;
  }

  return index;
}

export default function SlideDeck({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;
  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

  const progressText = useMemo(
    () => `Slide ${currentIndex + 1}/${totalSlides}`,
    [currentIndex, totalSlides]
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        setCurrentIndex((prev) => clampIndex(prev + 1, totalSlides));
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setCurrentIndex((prev) => clampIndex(prev - 1, totalSlides));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [totalSlides]);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    const element = document.documentElement;
    if (element.requestFullscreen) {
      await element.requestFullscreen();
    }
  };

  return (
    <div className="presentation">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="controls">
        <div className="presentation-label">
          Biên giới mềm trong thời kỳ hội nhập kinh tế quốc tế
        </div>
        <div className="progress-wrap" aria-live="polite">
          <span className="progress-text">{progressText}</span>
          <div className="progress-track" role="progressbar" aria-valuemin={1} aria-valuemax={totalSlides} aria-valuenow={currentIndex + 1}>
            <span className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
        <button className="icon-btn" type="button" onClick={toggleFullscreen}>
          Fullscreen
        </button>
      </header>

      <section className="stage" aria-label="Presentation Slides">
        <aside className="outline" aria-label="Slide Outline">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`outline-item ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="outline-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="outline-title">{slide.title}</span>
            </button>
          ))}
        </aside>

        <div className="slide-window">
          {slides.map((slide, index) => (
            <article
              key={slide.title}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              aria-hidden={index !== currentIndex}
            >
              <div className="slide-content">
                <div className="slide-number">{`Slide ${index + 1}`}</div>
                <h1 className="slide-title">{slide.title}</h1>
                <ul className="bullet-list">
                  {slide.bullets.map((item, bulletIndex) => (
                    <li
                      key={item}
                      className="bullet-item"
                      style={{ animationDelay: `${120 + bulletIndex * 80}ms` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="image-placeholder">Image Placeholder</div>
            </article>
          ))}
        </div>
      </section>

      <div className="nav-hint">Arrow Left/Right or Space to navigate</div>
    </div>
  );
}
