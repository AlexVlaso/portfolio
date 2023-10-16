import styles from './styles.module.scss';

type Property = {
  fill: number;
};

const SkillRating: React.FC<Property> = ({ fill }: Property) => {
  return (
    <div className={styles.skillRating}>
      <div className={styles.skillRatingFill} style={{ width: `${fill}%` }}></div>
    </div>
  );
};

export { SkillRating };
