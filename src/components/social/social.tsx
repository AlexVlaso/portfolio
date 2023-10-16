import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';

const Social: React.FC = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://www.linkedin.com/in/alex-vlasov-js"
        target="_blank"
        className={styles.socialItem}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/AlexVlaso" target="_blank" className={styles.socialItem} rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.instagram.com/mr.alexvlas/" target="_blank" className={styles.socialItem} rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://t.me/AlexVlas00" target="_blank" className={styles.socialItem} rel="noreferrer">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
    </div>
  );
};

export { Social };
