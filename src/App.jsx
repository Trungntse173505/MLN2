import SlideDeck from './components/SlideDeck';
import { slides } from './data/slides';

export default function App() {
  return <SlideDeck slides={slides} />;
}
