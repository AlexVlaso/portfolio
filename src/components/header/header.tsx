import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';
import { Navigation } from '../navigation/navigation';
import styles from './styles.module.scss';
import { Burger } from '../burger/burger';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles.logoImg} />
          <div className={styles.logoText}>Alexandr Vlasov</div>
        </div>
      </Link>
      <div className={styles.burger}>
        <Burger />
      </div>
      <div className={styles.navigation}>
        <Navigation isColored />
      </div>
    </div>
  );
};

export { Header };
