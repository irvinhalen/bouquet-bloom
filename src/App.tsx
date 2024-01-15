import './App.css'
import Garden from './pages/Garden'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Bouquet from './pages/Bouquet'

function App() {

  return (
    <div id='💐'>
      <Router>
        <Routes>
          <Route path='/garden' element={<Garden />} />
          <Route path='/bouquet' element={<Bouquet />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
