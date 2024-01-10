import { Fragment } from 'react'
import './App.css'
import hyacinth from './assets/Hyacinth.mp4'
import cherry_blossoms from './assets/Cherry_Blossom.mp4'
import hibiscus from './assets/Hibiscus.mp4'
import tulip from './assets/tulip.mp4'
import daisy from './assets/Daisy.mp4'

function App() {

  return (
    <Fragment>
      <div id='🪻'>
        <video autoPlay loop muted>
          <source src={hyacinth} type='video/mp4' />
        </video>
      </div>
      <div id='🌸'>
        <video autoPlay loop muted>
          <source src={cherry_blossoms} type='video/mp4' />
        </video>
      </div>
      <div id='🌺'>
        <video autoPlay loop muted>
          <source src={hibiscus} type='video/mp4' />
        </video>
      </div>
      <div id='🌷'>
        <video autoPlay loop muted>
          <source src={tulip} type='video/mp4' />
        </video>
      </div>
      <div id='🌼'>
        <video autoPlay loop muted>
          <source src={daisy} type='video/mp4' />
        </video>
      </div>
    </Fragment>
  )
}

export default App
