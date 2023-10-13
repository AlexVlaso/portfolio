import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';

const Social: React.FC = () => {
  return (
    <div className={styles.container}>
      <a href="/" className={styles.socialItem}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="/" className={styles.socialItem}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="/" className={styles.socialItem}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="/" className={styles.socialItem}>
        <FontAwesomeIcon icon={faTelegram} />
      </a>
    </div>
  );
};

export { Social };
