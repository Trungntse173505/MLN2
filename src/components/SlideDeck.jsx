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
      <div className="controls">
        <span className="progress" aria-live="polite">
          {progressText}
        </span>
        <button className="icon-btn" type="button" onClick={toggleFullscreen}>
          Fullscreen
        </button>
      </div>

      <section className="stage" aria-label="Presentation Slides">
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
                {slide.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="image-placeholder">Image Placeholder</div>
          </article>
        ))}
      </section>

      <div className="nav-hint">Arrow Left/Right or Space to navigate</div>
    </div>
  );
}
