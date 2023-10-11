import styles from './styles.module.scss';

type Properties = {
  color: string;
};

const Testing: React.FC<Properties> = ({ color }: Properties) => {
  return <div className={styles.container} style={{ backgroundColor: color }}></div>;
};

export { Testing };
