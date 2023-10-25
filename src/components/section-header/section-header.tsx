import styles from './styles.module.scss';

type Properties = {
  title?: string;
  subtitle?: string;
};

const SectionHeader: React.FC<Properties> = ({ title, subtitle }: Properties) => {
  return (
    <div>
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && (
        <>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <div className={styles.divider}></div>
        </>
      )}
    </div>
  );
};

export { SectionHeader };
