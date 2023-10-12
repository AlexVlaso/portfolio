import logo from '../../../public/logo.png';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logoImg} />
      <ul className={styles.navContainer}>
        <li className={styles.navLink}>
          <a href="/">Home</a>
        </li>
        <li className={styles.navLink}>
          <a href="/">About Me</a>
        </li>
        <li className={styles.navLink}>
          <a href="/">Portfolio</a>
        </li>
        <li className={styles.navLink}>
          <a href="/">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export { Footer };
