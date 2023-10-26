import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={onClick}>
        {isOpen ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
      {isOpen && (
        <ul className={styles.menu}>
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
      )}
    </div>
  );
};

export { Burger };
