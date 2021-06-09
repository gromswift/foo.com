import { useState } from 'react';

import styles from './Slider.module.scss';
import SLIDES from './dummySlides';
import { ReactComponent as ArrowRight } from 'assets/img/icons/arrow_right.svg';


function Slider() {
  const [activeSlide, setActiveSlide ] = useState(0);

  const nextSlide = (activeSlide, slides) => {
    if (activeSlide === slides.length - 1) return 0;

    return activeSlide + 1;
  }

  const prevSlide = (activeSlide, slides) => {
    if (!activeSlide) return slides.length - 1;

    return activeSlide - 1;
  }

  const checkElemPos = (activeElem, currElem, arr) => {
    const aE = activeElem;
    const cE = currElem;
    const nextElem = activeElem + 1;
    const prevElem = activeElem - 1;
    const lastElem = arr.length - 1;

    if (cE === aE) return {display: "flex", transform: "translateX(0)"};

    if ((aE === lastElem && !cE ) || (cE === nextElem)) {
      return {display: "flex", transform: "translateX(100%)"};
    }

    if ((!aE && cE === lastElem ) || (cE === prevElem)) {
      return {display: "flex", transform: "translateX(-100%)"};
    }

    return null;
  }

  const renderSlides = (slides) => {
    return slides.map((currSlide, index, arr) => (
      <div
        key={index}
        className={styles.slide}
        style={checkElemPos(activeSlide, index, arr)}
      >
        <img src={currSlide} alt=""/>
      </div>
    ));
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.slider}>
        {renderSlides(SLIDES)}
        <div className={styles.blur} />
      </div>
      <button
        type="button"
        className={styles.changeSlideBtn}
        onClick={() => setActiveSlide(activeSlide => prevSlide(activeSlide, SLIDES))}
      >
        <ArrowRight />
      </button>
      <button
        type="button"
        className={styles.changeSlideBtn}
        onClick={() => setActiveSlide(activeSlide => nextSlide(activeSlide, SLIDES))}
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default Slider;
