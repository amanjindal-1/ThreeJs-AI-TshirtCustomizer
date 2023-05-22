import { Home, Customizer } from './pages';
import CanvasModal from './canvas';

function App() {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <CanvasModal />
      <Customizer />
    </main>
  )
}

export default App
