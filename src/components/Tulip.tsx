import tulip from '../assets/Tulip.mp4'

function Tulip() {
  return (
    <div id='🌷' className='flowers'>
        <video autoPlay loop muted>
          <source src={tulip} type='video/mp4' />
        </video>
        <div className='center-div'>
            <h1>
                <span style={{'--i': '2'} as React.CSSProperties}>T</span>
                <span style={{'--i': '4'} as React.CSSProperties}>u</span>
                <span style={{'--i': '3'} as React.CSSProperties}>l</span>
                <span style={{'--i': '5'} as React.CSSProperties}>i</span>
                <span style={{'--i': '1'} as React.CSSProperties}>p</span>
            </h1>
        </div>
    </div>
  )
}

export default Tulip