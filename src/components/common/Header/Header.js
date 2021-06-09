import cx from 'classnames';

import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { ReactComponent as ArrowDown } from 'assets/img/icons/arrow_down.svg';
import { ReactComponent as ArrowRight } from 'assets/img/icons/arrow_right.svg';

import Nav from 'components/common/Nav/Nav';

function Header(props) {
  return (
    <header className={cx(styles.header, {[styles.headerMobile]: props.mobMenuState})}>
      <div className={styles.ridgepole}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.desktopMenu}>
        <Nav scrollTo={props.scrollTo} />
        <div className={styles.rightSide}>
          <div className={styles.lang}>
            {'EN'}
            <ArrowDown />
          </div>
          <button type="button" className={styles.contactBtn}>
            Contact Us
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className={styles.ridgepole}>
        <div
          onClick={() => props.toggleMobMenu()}
          className={cx(
            styles.mobileMenu,
            {[styles.mobileMenuActive]: props.mobMenuState}
          )}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
    </header>
  );
}

export default Header;
