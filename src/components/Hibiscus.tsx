import React from 'react';
import hibiscus from '../assets/Hibiscus.mp4'

function Hibiscus() {
  const vidRef = React.useRef<HTMLVideoElement>(null);
  const setPlayback = () => {
      if (vidRef.current !== null) {
          vidRef.current.playbackRate = 5;
      }
  }

  return (
    <div id='🌺' className='flowers'>
        <video onPlay={() => setPlayback()} autoPlay loop muted ref={vidRef}>
          <source src={hibiscus} type='video/mp4' />
        </video>
        <div className='center-div'>
            <h1>
                <span style={{'--i': '7'} as React.CSSProperties} className='🌺-seed'>H</span>
                <span style={{'--i': '8'} as React.CSSProperties} className='🌺-seed'>i</span>
                <span style={{'--i': '6'} as React.CSSProperties} className='🌺-seed'>b</span>
                <span style={{'--i': '4'} as React.CSSProperties} className='🌺-seed'>i</span>
                <span style={{'--i': '5'} as React.CSSProperties} className='🌺-seed'>s</span>
                <span style={{'--i': '2'} as React.CSSProperties} className='🌺-seed'>c</span>
                <span style={{'--i': '3'} as React.CSSProperties} className='🌺-seed'>u</span>
                <span style={{'--i': '1'} as React.CSSProperties} className='🌺-seed'>s</span>
            </h1>
        </div>
    </div>
  )
}

export default Hibiscus