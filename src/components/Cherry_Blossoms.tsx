import cherry_blossoms from '../assets/Cherry_Blossom.mp4'

function Cherry_Blossoms() {

  return (
    <div id='🌸' className='flowers'>
        <video autoPlay loop muted>
          <source src={cherry_blossoms} type='video/mp4' />
        </video>
        <div className='center-div'>
            <h1>
                <span style={{'--i': '9'} as React.CSSProperties} className='🌸-seed'>C</span>
                <span style={{'--i': '11'} as React.CSSProperties} className='🌸-seed'>h</span>
                <span style={{'--i': '2'} as React.CSSProperties} className='🌸-seed'>e</span>
                <span style={{'--i': '13'} as React.CSSProperties} className='🌸-seed'>r</span>
                <span style={{'--i': '3'} as React.CSSProperties} className='🌸-seed'>r</span>
                <span style={{'--i': '8'} as React.CSSProperties} className='🌸-seed'>y</span>
                <br />
                <span style={{'--i': '10'} as React.CSSProperties} className='🌸-seed'>B</span>
                <span style={{'--i': '12'} as React.CSSProperties} className='🌸-seed'>l</span>
                <span style={{'--i': '4'} as React.CSSProperties} className='🌸-seed'>o</span>
                <span style={{'--i': '5'} as React.CSSProperties} className='🌸-seed'>s</span>
                <span style={{'--i': '1'} as React.CSSProperties} className='🌸-seed'>s</span>
                <span style={{'--i': '7'} as React.CSSProperties} className='🌸-seed'>o</span>
                <span style={{'--i': '6'} as React.CSSProperties} className='🌸-seed'>m</span>
            </h1>
        </div>
    </div>
  )
}

export default Cherry_Blossoms