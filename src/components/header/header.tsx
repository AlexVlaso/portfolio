import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';
import { Navigation } from '../navigation/navigation';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles.logoImg} />
          <div className={styles.logoText}>Alexandr Vlasov</div>
        </div>
      </Link>
      <Navigation isColored />
    </div>
  );
};

export { Header };
