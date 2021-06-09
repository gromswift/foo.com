import styles from './Social.module.scss';
import { ReactComponent as Facebook } from './img/facebook.svg';
import { ReactComponent as Twitter } from './img/twitter.svg';
import { ReactComponent as Dribble } from './img/dribble.svg';

function Social() {
  return (
    <div className={styles.social}>
      <a href="https://www.facebook.com/">
        <div className={styles.iconWrap}>
          <Facebook />
          <div className={styles.socialUnderline} />
        </div>
      </a>
      <a href="https://twitter.com/">
        <div className={styles.iconWrap}>
          <Twitter />
          <div className={styles.socialUnderline} />
        </div>
      </a>
      <a href="https://dribbble.com/">
        <div className={styles.iconWrap}>
          <Dribble />
          <div className={styles.socialUnderline} />
        </div>
      </a>
    </div>
  );
}

export default Social;
