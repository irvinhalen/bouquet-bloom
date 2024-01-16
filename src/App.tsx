import './App.css'
import Sunflower from './pages/Sunflower'
import Bouquet from './pages/Bouquet'
import Garden from './pages/Garden'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <div id='navigation-page'>
              <ul id='nav-list-page'>
                  <li><Link to={'/'}><button>🌻</button></Link></li>
                  <li><Link to={'bouquet'}><button>🦋</button></Link></li>
                  <li><Link to={'garden'}><button>🐝</button></Link></li>
              </ul>
          </div>
        <Routes>
          <Route path='/' element={<Sunflower />} />
          <Route path='/bouquet' element={<Bouquet />} />
          <Route path='/garden' element={<Garden />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
