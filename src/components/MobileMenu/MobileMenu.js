import styles from './MobileMenu.module.scss';
import { ReactComponent as ArrowDown } from 'assets/img/icons/arrow_down.svg';
import { ReactComponent as ArrowRight } from 'assets/img/icons/arrow_right.svg';

import Nav from 'components/common/Nav/Nav';
import Social from 'components/common/Social/Social';

function MobileMenu(props) {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.menuContent}>
        <div />
        <Nav scrollTo={props.scrollTo} />
        <div>
          <button className={styles.contactBtn} type="button">
            Contact Us
            <ArrowRight />
          </button>
          <div className={styles.lang}>
            {'EN'}
            <ArrowDown />
          </div>
        </div>
        <div>
          <Social />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
