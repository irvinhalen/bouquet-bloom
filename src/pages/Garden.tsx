import hyacinth from '../assets/Hyacinth.jpg'
import KangaIru from '../assets/KangaIru.png'
import CaramelSmalls from '../assets/CaramelSmalls.png'
import pink_bg from '../assets/bg-pink.png'
import blue_bg from '../assets/bg-blue.png'
import JollyBee from '../assets/JollyBee.png'
import watering from '../assets/Water.jpg'

function Garden() {
  return (
    <div id='🪴'>
      <div id='🚿'>
          <img src={watering} alt='watering can' />
          <div className="custom-shape-divider-bottom-1705297075">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
              </svg>
          </div>
      </div>
      <div id='germinate'>
        <h1 className='fertilize'>Be <span>Jolly Bee</span> Beautiful</h1>
        <img src={JollyBee} />
        <h1 className='bloom'>Bloom!</h1>
      </div>
      <div id='🪻🌱'>
        <div className="custom-shape-divider-top-1705309324">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
        <img src={CaramelSmalls} alt='white tiger' id='CaramelSmalls' />
        <img src={KangaIru} alt='kangaroo' id='KangaIru' />
        <img src={pink_bg} alt='pink background for portrait' id='pink_bg' />
        <img src={blue_bg} alt='pink background for portrait' id='blue_bg' />
        <img src={hyacinth} alt='hyacinth' id='hyacinth-bg' />
      </div>
    </div>
  )
}

export default Garden