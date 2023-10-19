import { IconPathMap } from '../../libs/maps/maps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGithub } from '@fortawesome/free-brands-svg-icons';
import slide1 from '../../assets/img/projects/window/3.png';

import styles from './styles.module.scss';
import { SkillIcon } from '../skill-icon/skill-icon';

const ProjectItem: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={slide1} alt="slide1" />
      <h3 className={styles.title}>Forkify</h3>
      <div className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reiciendis nisi, maxime aut corporis deserunt
        deleniti doloribus exercitationem accusantium possimus sint distinctio laborum minima officiis commodi iusto
        nulla, nostrum
      </div>
      <div className={styles.techWrapper}>
        <div className={styles.techDesc}>Tech Stack:</div>{' '}
        <div className={styles.techItems}>
          <SkillIcon path={IconPathMap.html} alt="html" desc="Html" />
          <SkillIcon path={IconPathMap.sass} alt="sass" desc="Sass" />
          <SkillIcon path={IconPathMap.js} alt="js" desc="Javascript" />
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <a href="https://forkify-vlas.netlify.app" target="_blank" rel="noreferrer" className={styles.btn}>
          <FontAwesomeIcon icon={faChrome} />
          View Site
        </a>
        <a href="https://github.com/AlexVlaso/forkify-app" target="_blank" rel="noreferrer" className={styles.btn}>
          <FontAwesomeIcon icon={faGithub} />
          View Code
        </a>
      </div>
    </div>
  );
};

export { ProjectItem };
