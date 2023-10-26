import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { SectionHeader } from '../../../../components/section-header/section-header';
import styles from './styles.module.scss';

const ContactsBlock = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title="Contacts" subtitle="Phone, email and profiles" />

      <div className={styles.infoWrapper}>
        <div className={styles.infoItem}>
          <div className={styles.infoItemTitle}>
            <FontAwesomeIcon icon={faPhone} /> Phone:
          </div>
          <div className={styles.infoItemValue}>+380999478944</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoItemTitle}>
            <FontAwesomeIcon icon={faEnvelope} /> Email:
          </div>
          <div className={styles.infoItemValue}>alexvlas.javaprog@gmail.com</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoItemTitle}>
            <FontAwesomeIcon icon={faLocationDot} /> Location:
          </div>
          <div className={styles.infoItemValue}>Ukraine, Kharkiv (Ready to relocate)</div>
        </div>
      </div>

      <div className={styles.links}>
        <a href="https://github.com/AlexVlaso" target="_blank" rel="noreferrer" className={styles.contactLink}>
          <FontAwesomeIcon icon={faGithub} />
          <div className={styles.btnText}> GitHub</div>
        </a>
        <a href="https://t.me/AlexVlas00" target="_blank" rel="noreferrer" className={styles.contactLink}>
          <FontAwesomeIcon icon={faTelegram} />
          <div className={styles.btnText}>Telegram</div>
        </a>
        <a
          href="https://www.linkedin.com/in/alex-vlasov-js"
          target="_blank"
          rel="noreferrer"
          className={styles.contactLink}
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <div className={styles.btnText}>Linkedin</div>
        </a>
      </div>
    </div>
  );
};

export { ContactsBlock };
