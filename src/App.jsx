import { usePresentation } from './hooks/usePresentation'
import SlideView from './components/SlideView'
import Controls from './components/Controls'
import ProgressBar from './components/ProgressBar'
import Header from './components/Header'
import styles from './App.module.css'

export default function App() {
  const pres = usePresentation()

  return (
    <div className={styles.app}>
      <Header />
      <ProgressBar current={pres.current} total={pres.total} />
      <main className={styles.stage}>
        <SlideView slide={pres.slide} direction={pres.direction} />
      </main>
      <Controls
        current={pres.current}
        total={pres.total}
        canPrev={pres.canPrev}
        canNext={pres.canNext}
        goPrev={pres.goPrev}
        goNext={pres.goNext}
        goTo={pres.goTo}
        isFullscreen={pres.isFullscreen}
        toggleFullscreen={pres.toggleFullscreen}
      />
    </div>
  )
}
