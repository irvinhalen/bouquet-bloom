import './App.css'
import Sunflower from './pages/Sunflower'
import Bouquet from './pages/Bouquet'
import Garden from './pages/Garden'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [isPollinating, setIsPollinating] = useState(false);
  const butterflies = () => {
    let path:string = window.location.pathname;
    if(path){
      setIsPollinating(false);
      const flutter = document.createElement('style');
      flutter.setAttribute('id', 'flutter');
      flutter.innerHTML =
      `button[name='🪻'].pollinate::after {
        content: '🦋';
        position: absolute;
        left: 7%;
        transform: rotate(45deg);
        transition: opacity 1s;
      }
      
      button[name='🌸'].pollinate::after {
        content: '🦋';
        position: absolute;
        left: 0;
      }
      
      button[name='🌺'].pollinate::after {
        content: '🦋';
        position: absolute;
        left: 2%;
        transform: rotate(15deg);
      }
      
      button[name='🌷'].pollinate::after {
        content: '🦋';
        position: absolute;
        left: 7%;
        transform: rotate(30deg);
      }
      
      button[name='🌼'].pollinate::after {
        content: '🦋';
        position: absolute;
        left: 9%;
        transform: rotate(5deg);
      }`;
      if (path.toLowerCase() == '/bouquet') {
        if (isPollinating == true) {
          const flutter:any = document.getElementById('flutter');
          flutter.remove();
          setIsPollinating(false);
        } else {
          document.head.appendChild(flutter);
          setIsPollinating(true);
        }
      }
    }
  }

  const cocoon = () => {
    if (isPollinating === true) {
      const flutter:any = document.getElementById('flutter');
      flutter.remove();
      setIsPollinating(false);
    }
  }

  return (
    <div>
      <Router>
        <div id='navigation-page'>
              <ul id='nav-list-page'>
                  <li><Link to={'/'}><button onClick={cocoon}>🌻</button></Link></li>
                  <li><Link to={'bouquet'}><button onClick={butterflies}>🦋</button></Link></li>
                  <li><Link to={'garden'}><button onClick={cocoon}>🐝</button></Link></li>
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
