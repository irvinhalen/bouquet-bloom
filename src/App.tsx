import './App.css'
import Hyacinth from './components/Hyacinth'
import Cherry_Blossoms from './components/Cherry_Blossoms'
import Hibiscus from './components/Hibiscus'
import Tulip from './components/Tulip'
import Daisy from './components/Daisy'
import { useState, useEffect } from 'react'

function App() {
  const [isHyacinthVisible, setIsHyacinthVisible] = useState(false);
  const [isCherryBlossomVisible, setIsCherryBlossomVisible] = useState(false);
  const [isHibiscusVisible, setIsHibiscusVisible] = useState(false);
  const [isTulipVisible, setIsTulipVisible] = useState(false);
  const [isDaisyVisible, setIsDaisyVisible] = useState(false);
  function scrollTheVine(flower_bud:any) {
    const topContent = document.getElementById(flower_bud) as HTMLElement;
    topContent.scrollIntoView({ behavior: 'smooth' });
  }

  const seedClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button:HTMLButtonElement = event.currentTarget;
    scrollTheVine(button.name);
  }

  const options = {
    root: null,
    threshold: 1.0
  }

  const hyacinthDiv = document.getElementById('🪻');
  const callbackFunction1 = (entries:any) => {
    const [ entry ] = entries;
    setIsHyacinthVisible(entry.isIntersecting)
  }

  const cherryBlossomDiv = document.getElementById('🌸');
  const callbackFunction2 = (entries:any) => {
    const [ entry ] = entries;
    setIsCherryBlossomVisible(entry.isIntersecting)
  }

  const hibiscusDiv = document.getElementById('🌺');
  const callbackFunction3 = (entries:any) => {
    const [ entry ] = entries;
    setIsHibiscusVisible(entry.isIntersecting)
  }

  const tulipDiv = document.getElementById('🌷');
  const callbackFunction4 = (entries:any) => {
    const [ entry ] = entries;
    setIsTulipVisible(entry.isIntersecting)
  }

  const daisyDiv = document.getElementById('🌼');
  const callbackFunction5 = (entries:any) => {
    const [ entry ] = entries;
    setIsDaisyVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction1, options);
    if (hyacinthDiv) observer.observe(hyacinthDiv)

    return () => {
      if (hyacinthDiv) observer.unobserve(hyacinthDiv)
    }
  }, [hyacinthDiv, options])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction2, options);
    if (cherryBlossomDiv) observer.observe(cherryBlossomDiv)

    return () => {
      if (cherryBlossomDiv) observer.unobserve(cherryBlossomDiv)
    }
  }, [cherryBlossomDiv, options])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction3, options);
    if (hibiscusDiv) observer.observe(hibiscusDiv)

    return () => {
      if (hibiscusDiv) observer.unobserve(hibiscusDiv)
    }
  }, [hibiscusDiv, options])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction4, options);
    if (tulipDiv) observer.observe(tulipDiv)

    return () => {
      if (tulipDiv) observer.unobserve(tulipDiv)
    }
  }, [tulipDiv, options])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction5, options);
    if (daisyDiv) observer.observe(daisyDiv)

    return () => {
      if (daisyDiv) observer.unobserve(daisyDiv)
    }
  }, [daisyDiv, options])

  return (
    <div id='💐'>
      <div id='navigation'>
        <ul id='nav-list'>
          <li><button onClick={seedClick} name='🪻' className={`${isHyacinthVisible ? '':'non-selected-button'}`}>🪻</button></li>
          <li><button onClick={seedClick} name='🌸' className={`${isCherryBlossomVisible ? '':'non-selected-button'}`}>🌸</button></li>
          <li><button onClick={seedClick} name='🌺' className={`${isHibiscusVisible ? '':'non-selected-button'}`}>🌺</button></li>
          <li><button onClick={seedClick} name='🌷' className={`${isTulipVisible ? '':'non-selected-button'}`}>🌷</button></li>
          <li><button onClick={seedClick} name='🌼' className={`${isDaisyVisible ? '':'non-selected-button'}`}>🌼</button></li>
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

export default App
