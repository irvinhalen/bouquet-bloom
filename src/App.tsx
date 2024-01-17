import './App.css'
import Sunflower from './pages/Sunflower'
import Bouquet from './pages/Bouquet'
import Garden from './pages/Garden'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [isPollinating, setIsPollinating] = useState(false);
  const butterflies = () => {
    setIsPollinating(true);
    const url_path:string = window.location.pathname;
    if (url_path.toLowerCase() == '/bouquet') {
      if (isPollinating === true) {
        setIsPollinating(false);
      } else {
        setIsPollinating(true);
      }
    }
  }

  return (
    <div>
      <Router>
        <div id='navigation-page'>
              <ul id='nav-list-page'>
                  <li><Link to={'/'}><button>🌻</button></Link></li>
                  <li><Link to={'bouquet'}><button onClick={butterflies}>🦋</button></Link></li>
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
