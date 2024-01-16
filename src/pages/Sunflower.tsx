import React from 'react';
import sunflower from '../assets/ButterflyBee.mp4'

function Sunflower() {
    const vidRef = React.useRef<HTMLVideoElement>(null);
    const setPlayback = () => {
        if (vidRef.current !== null) {
            vidRef.current.playbackRate = 0.35;
        }
    }

  return (
    <div id='🌻'>
        <video onPlay={() => setPlayback()} autoPlay loop muted ref={vidRef}>
            <source src={sunflower} type='video/mp4' />
        </video>
    </div>
  )
}

export default Sunflower