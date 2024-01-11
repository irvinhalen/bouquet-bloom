import React from 'react';
import hyacinth from '../assets/Hyacinth.mp4'

function Hyacinth() {
    const vidRef = React.useRef<HTMLVideoElement>(null);
    const setPlayback = () => {
        if (vidRef.current !== null) {
            vidRef.current.playbackRate = 1.5;
        }
    }

    return (
        <div id='🪻' className='flowers'>
            <video onPlay={() => setPlayback()} autoPlay loop muted ref={vidRef}>
            <source src={hyacinth} type='video/mp4' />
            </video>
            <div className='center-div'>
                <h1>
                    <span style={{'--i': '1'} as React.CSSProperties}>H</span>
                    <span style={{'--i': '8'} as React.CSSProperties}>y</span>
                    <span style={{'--i': '3'} as React.CSSProperties}>a</span>
                    <span style={{'--i': '7'} as React.CSSProperties}>c</span>
                    <span style={{'--i': '5'} as React.CSSProperties}>i</span>
                    <span style={{'--i': '6'} as React.CSSProperties}>n</span>
                    <span style={{'--i': '4'} as React.CSSProperties}>t</span>
                    <span style={{'--i': '2'} as React.CSSProperties}>h</span>
                </h1>
            </div>
        </div>
    )
}

export default Hyacinth