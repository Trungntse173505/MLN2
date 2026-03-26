import { usePresentation } from './hooks/usePresentation'
import SlideWrapper from './components/SlideWrapper'
import Controls from './components/Controls'
import ProgressBar from './components/ProgressBar'
import Header from './components/Header'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'
import Slide8 from './slides/Slide8'
import Slide9 from './slides/Slide9'
import Slide10 from './slides/Slide10'
import styles from './App.module.css'

const slideComponents = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10]

export default function App() {
  const pres = usePresentation()
  const SlideComponent = slideComponents[pres.current]

  return (
    <div className={styles.app}>
      <Header />
      <ProgressBar current={pres.current} total={pres.total} />
      <main className={styles.stage}>
        <SlideWrapper slideNumber={pres.current + 1} direction={pres.direction}>
          <SlideComponent />
        </SlideWrapper>
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
