import { clsx } from 'clsx';
import styles from './styles.module.scss';

type Properties = {
  isColored?: boolean;
};

const Navigation: React.FC<Properties> = ({ isColored }: Properties) => {
  const navigationClassName = clsx(styles.container, isColored && styles.coloredBg);

  return (
    <ul className={navigationClassName}>
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
  );
};

export { Navigation };
