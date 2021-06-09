import styles from './Portfolio.module.scss';
import PROJECTS from './dummyProjects';

function Portfolio() {
  const renderProjects = (projects) => {
    return projects.map((currProject, index) => (
      <div key={index} className={styles.project}>
        {currProject}
      </div>
    ));
  }

  return (
    <div className={styles.contentContainer}>
      <h2 className={styles.title}>
        See some of our
        <br />
        Creative work.
      </h2>
      <div className={styles.projects}>
        <div className={styles.projectsList}>
          {renderProjects(PROJECTS)}
        </div>
        <a href="/" className={styles.seeMore}>
          See More of These.
          <div className={styles.seeMoreUnderline} />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
