import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

type Properties = {
  isColored?: boolean;
};

const Navigation: React.FC<Properties> = ({ isColored }: Properties) => {
  const navigationClassName = clsx(styles.container, isColored && styles.coloredBg);

  return (
    <ul className={navigationClassName}>
      <li className={styles.navLink}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navLink}>
        <Link to="/about">About Me</Link>
      </li>
      <li className={styles.navLink}>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className={styles.navLink}>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
  );
};

export { Navigation };
