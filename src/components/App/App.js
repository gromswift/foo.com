import { useRef, useState } from 'react';

import styles from './App.module.scss';
import SECTIONS from 'constants/siteSections';

import Header from 'components/common/Header/Header';
import Intro from 'components/Intro/Intro';
import Portfolio from 'components/Portfolio/Portfolio';
import ContactUs from 'components/ContactUs/ContactUs';
import Footer from 'components/common/Footer/Footer';
import MobileMenu from 'components/MobileMenu/MobileMenu';

function App() {
  const [isMobMenuShown, setMobMenuState] = useState(false);

  const toggleMobMenu = () => {
    setMobMenuState(prevState => (!prevState));
  }

  const refs = {
    [SECTIONS.home]: useRef(),
    [SECTIONS.aboutUs]: useRef(),
    [SECTIONS.portfolio]: useRef(),
    [SECTIONS.contactUs]: useRef(),
  };

  const handleMobileScrollTo = (ev, elementKey) => {
    setMobMenuState(prevState => (!prevState));
    scrollTo(ev, elementKey);
  }

  const scrollTo = (ev, elementKey) => {
    ev.preventDefault();
    const sectionTop = refs[elementKey].current.getBoundingClientRect().top;

    window.scrollBy({
      top: sectionTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className={styles.container}>
      <div ref={refs[SECTIONS.home]}>
        <Header
          scrollTo={scrollTo}
          mobMenuState={isMobMenuShown}
          toggleMobMenu={toggleMobMenu}
        />
      </div>
      <div ref={refs[SECTIONS.aboutUs]}>
        <Intro />
      </div>
      <div ref={refs[SECTIONS.portfolio]}>
        <Portfolio />
      </div>
      <div ref={refs[SECTIONS.contactUs]}>
        <ContactUs />
      </div>
      <Footer scrollTo={scrollTo} />
      { isMobMenuShown
        ? <MobileMenu scrollTo={handleMobileScrollTo} />
        : null
      }
    </div>
  );
}

export default App;
