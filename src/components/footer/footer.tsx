import logo from '../../../public/logo.png';
import { Navigation } from '../navigation/navigation';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logoImg} />
      <Navigation />
    </div>
  );
};

export { Footer };
