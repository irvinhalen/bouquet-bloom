import React from 'react';
import daisy from '../assets/Daisy.mp4'

function Daisy() {
  const vidRef = React.useRef<HTMLVideoElement>(null);
  const setPlayback = () => {
      if (vidRef.current !== null) {
          vidRef.current.playbackRate = 2;
      }
  }

  return (
    <div id='🌼' className='flowers'>
        <video onPlay={() => setPlayback()} autoPlay loop muted ref={vidRef}>
          <source src={daisy} type='video/mp4' />
        </video>
        <div className='center-div'>
            <h1>
                <span style={{'--i': '5'} as React.CSSProperties}>D</span>
                <span style={{'--i': '2'} as React.CSSProperties}>a</span>
                <span style={{'--i': '3'} as React.CSSProperties}>i</span>
                <span style={{'--i': '4'} as React.CSSProperties}>s</span>
                <span style={{'--i': '1'} as React.CSSProperties}>y</span>
            </h1>
        </div>
    </div>
  )
}

export default Daisy