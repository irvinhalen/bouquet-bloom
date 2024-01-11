import cherry_blossoms from '../assets/Cherry_Blossom.mp4'

function Cherry_Blossoms() {
  
  return (
    <div id='🌸' className='flowers'>
        <video autoPlay loop muted>
          <source src={cherry_blossoms} type='video/mp4' />
        </video>
        <div className='center-div'>
            <h1>
                <span style={{'--i': '9'} as React.CSSProperties}>C</span>
                <span style={{'--i': '11'} as React.CSSProperties}>h</span>
                <span style={{'--i': '2'} as React.CSSProperties}>e</span>
                <span style={{'--i': '13'} as React.CSSProperties}>r</span>
                <span style={{'--i': '3'} as React.CSSProperties}>r</span>
                <span style={{'--i': '8'} as React.CSSProperties}>y</span>
                <br />
                <span style={{'--i': '10'} as React.CSSProperties}>B</span>
                <span style={{'--i': '12'} as React.CSSProperties}>l</span>
                <span style={{'--i': '4'} as React.CSSProperties}>o</span>
                <span style={{'--i': '5'} as React.CSSProperties}>s</span>
                <span style={{'--i': '1'} as React.CSSProperties}>s</span>
                <span style={{'--i': '7'} as React.CSSProperties}>o</span>
                <span style={{'--i': '6'} as React.CSSProperties}>m</span>
            </h1>
        </div>
    </div>
  )
}

export default Cherry_Blossoms