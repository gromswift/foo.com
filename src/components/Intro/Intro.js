import styles from './Intro.module.scss';

import Slider from 'components/common/Slider/Slider';

function Intro() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.rightSide}>
        <h1 className={styles.title}>
          The Spirit of
          <br />
          Digital Agency.
        </h1>
        <p className={styles.description}>
          Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.
        </p>
        <button type="button" className={styles.aboutBtn}>More About us</button>
        <a href="/" className={styles.contactLink}>Get in Touch.</a>
      </div>
      <div className={styles.sliderWrap}>
        <Slider />
      </div>
    </div>
  );
}

export default Intro;
