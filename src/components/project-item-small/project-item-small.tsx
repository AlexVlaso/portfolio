import { IconPathMap } from '../../libs/maps/maps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import { SkillIcon } from '../skill-icon/skill-icon';
import { Project } from '../../libs/types/types';

type Properties = {
  project: Project;
};

const ProjectItemSmall: React.FC<Properties> = ({ project }: Properties) => {
  const { title, desc, img, github, site } = project;
  return (
    <div className={styles.container}>
      <img src={img[0]} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.techWrapper}>
        <div className={styles.techDesc}>Tech Stack:</div>{' '}
        <div className={styles.techItems}>
          <SkillIcon path={IconPathMap.html} alt="html" desc="Html" />
          <SkillIcon path={IconPathMap.sass} alt="sass" desc="Sass" />
          <SkillIcon path={IconPathMap.js} alt="js" desc="Javascript" />
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <a href={site} target="_blank" rel="noreferrer" className={styles.btn}>
          <FontAwesomeIcon icon={faChrome} />
          View Site
        </a>
        <a href={github} target="_blank" rel="noreferrer" className={styles.btn}>
          <FontAwesomeIcon icon={faGithub} />
          View Code
        </a>
      </div>
    </div>
  );
};

export { ProjectItemSmall };
