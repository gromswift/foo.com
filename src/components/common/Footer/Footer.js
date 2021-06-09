import styles from './Footer.module.scss';

import Nav from 'components/common/Nav/Nav';
import Social from 'components/common/Social/Social';

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <b>DOOB</b>
      <h2 className={styles.title}>Creativity above</h2>
      <div className={styles.navWrap}>
        <Nav scrollTo={props.scrollTo} />
      </div>
      <div className={styles.copyright}>&#169;  2019 - Doob, All Rights Reserved</div>
      <Social />
    </footer>
  );
}

export default Footer;
