import styles from './Nav.module.scss';
import SECTIONS from 'constants/siteSections';

function Nav(props) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a
            href="/"
            className={styles.link}
            onClick={ev => props.scrollTo(ev, SECTIONS.home)}
          >
            Home.
            <div className={styles.linkUnderline} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            href="/"
            className={styles.link}
            onClick={ev => props.scrollTo(ev, SECTIONS.aboutUs)}
          >
            About us.
            <div className={styles.linkUnderline} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            href="/"
            className={styles.link}
            onClick={ev => props.scrollTo(ev, SECTIONS.portfolio)}
          >
            Portfolio.
            <div className={styles.linkUnderline} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            href="/"
            className={styles.link}
            onClick={ev => props.scrollTo(ev, SECTIONS.portfolio)}
          >
            Blog.
            <div className={styles.linkUnderline} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            href="/"
            className={styles.link}
            onClick={ev => props.scrollTo(ev, SECTIONS.contactUs)}
          >
            Contact us.
            <div className={styles.linkUnderline} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
