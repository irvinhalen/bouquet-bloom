import Hyacinth from '../components/Hyacinth'
import Cherry_Blossoms from '../components/Cherry_Blossoms'
import Hibiscus from '../components/Hibiscus'
import Tulip from '../components/Tulip'
import Daisy from '../components/Daisy'
import { useState, useEffect } from "react"

function Bouquet() {
    const [isHyacinthVisible, setIsHyacinthVisible] = useState(false);
    const [isCherryBlossomVisible, setIsCherryBlossomVisible] = useState(false);
    const [isHibiscusVisible, setIsHibiscusVisible] = useState(false);
    const [isTulipVisible, setIsTulipVisible] = useState(false);
    const [isDaisyVisible, setIsDaisyVisible] = useState(false);

    addEventListener("wheel", (event) => {
      event.preventDefault();
      if(event.deltaY < 0){
        document.getElementById('💐')!.click();
        document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowUp'}));
      }else{
        document.getElementById('💐')!.click();
        document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
      }
    }, {passive: false});
  
    function scrollTheVine(flower_bud:any) {
      const flowerBud = document.getElementById(flower_bud) as HTMLElement;
      flowerBud.scrollIntoView({ behavior: 'smooth' });
    }
  
    const seedClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
  
      const button:HTMLButtonElement = event.currentTarget;
      scrollTheVine(button.name);
  
      if (!button.classList.contains('non-selected-buttons')) {
        const waterTheFlowers:any = document.getElementsByClassName(button.name + '-seed');
        for (const waterTheFlower of waterTheFlowers) {
          if (waterTheFlower.classList.contains(button.name + '-watered')) {
            waterTheFlower.classList.remove(button.name + '-watered');
            waterTheFlower.classList.add(button.name + '-wilt');
            waterTheFlower.style.animation = 'none';
            waterTheFlower.offsetHeight;
            waterTheFlower.style.animation = null;
          } else if (waterTheFlower.classList.contains(button.name + '-wilt')) {
            waterTheFlower.classList.remove(button.name + '-wilt');
            waterTheFlower.classList.add(button.name + '-watered');
            waterTheFlower.style.animation = 'none';
            waterTheFlower.offsetHeight;
            waterTheFlower.style.animation = null;
          } else {
            waterTheFlower.classList.add(button.name + '-watered');
          }
        }
      }
    }
  
    const options = {
      root: null,
      threshold: 1.0
    }
  
    const hyacinthCallback = (entries:any) => {
      const [ entry ] = entries;
      setIsHyacinthVisible(entry.isIntersecting);
    }
  
    const cherryBlossomCallback = (entries:any) => {
      const [ entry ] = entries;
      setIsCherryBlossomVisible(entry.isIntersecting);
    }
  
    const hibiscusCallback = (entries:any) => {
      const [ entry ] = entries;
      setIsHibiscusVisible(entry.isIntersecting);
    }
  
    const tulipCallback = (entries:any) => {
      const [ entry ] = entries;
      setIsTulipVisible(entry.isIntersecting);
    }
  
    const daisyCallback = (entries:any) => {
      const [ entry ] = entries;
      setIsDaisyVisible(entry.isIntersecting);
    }  
  
    useEffect(() => {
      const hyacinthDiv = document.getElementById('🪻');
      const observer = new IntersectionObserver(hyacinthCallback, options);
      if (hyacinthDiv) {
        observer.observe(hyacinthDiv);
      }
  
      return () => {
        if (hyacinthDiv) {
          observer.unobserve(hyacinthDiv);
        }
      }
    }, [options])
  
    useEffect(() => {
      const cherryBlossomDiv = document.getElementById('🌸');
      const observer = new IntersectionObserver(cherryBlossomCallback, options);
      if (cherryBlossomDiv) {
        observer.observe(cherryBlossomDiv);
      }
  
      return () => {
        if (cherryBlossomDiv) {
          observer.unobserve(cherryBlossomDiv);
        }
      }
    }, [options])
  
    useEffect(() => {
      const hibiscusDiv = document.getElementById('🌺');
      const observer = new IntersectionObserver(hibiscusCallback, options);
      if (hibiscusDiv) {
        observer.observe(hibiscusDiv);
      }
  
      return () => {
        if (hibiscusDiv) {
          observer.unobserve(hibiscusDiv);
        }
      }
    }, [options])
  
    useEffect(() => {
      const tulipDiv = document.getElementById('🌷');
      const observer = new IntersectionObserver(tulipCallback, options);
      if (tulipDiv) {
        observer.observe(tulipDiv);
      }
  
      return () => {
        if (tulipDiv) {
          observer.unobserve(tulipDiv);
        }
      }
    }, [options])
  
    useEffect(() => {
      const daisyDiv = document.getElementById('🌼');
      const observer = new IntersectionObserver(daisyCallback, options);
      if (daisyDiv) {
        observer.observe(daisyDiv);
      }
  
      return () => {
        if (daisyDiv) {
          observer.unobserve(daisyDiv);
        }
      }
    }, [options])
  return (
    <div id='💐'>
        <div id='navigation'>
            <ul id='nav-list'>
                <li><button id='🪻-button' onClick={seedClick} name='🪻' className={`pollinate bouquet-buttons ${isHyacinthVisible ? '':'non-selected-buttons'}`}>🪻</button></li>
                <li><button id= '🌸-button' onClick={seedClick} name='🌸' className={`pollinate bouquet-buttons ${isCherryBlossomVisible ? '':'non-selected-buttons'}`}>🌸</button></li>
                <li><button id='🌺-button' onClick={seedClick} name='🌺' className={`pollinate bouquet-buttons ${isHibiscusVisible ? '':'non-selected-buttons'}`}>🌺</button></li>
                <li><button id='🌷-button' onClick={seedClick} name='🌷' className={`pollinate bouquet-buttons ${isTulipVisible ? '':'non-selected-buttons'}`}>🌷</button></li>
                <li><button id='🌼-button' onClick={seedClick} name='🌼' className={`pollinate bouquet-buttons ${isDaisyVisible ? '':'non-selected-buttons'}`}>🌼</button></li>
            </ul>
        </div>
        <Hyacinth />
        <Cherry_Blossoms />
        <Hibiscus />
        <Tulip />
        <Daisy />
    </div>
  )
}

export default Bouquet