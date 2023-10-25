import { IconPathMap } from '../../libs/maps/icon-path.map';
import { ValueOf } from '../../libs/types/value-of.type';
import styles from './styles.module.scss';

type Properties = {
  path: ValueOf<typeof IconPathMap>;
  alt: string;
  desc: string;
};

const SkillIcon: React.FC<Properties> = ({ path, alt, desc }: Properties) => {
  return (
    <div className={styles.container}>
      <img src={path} alt={alt} className={styles.icon} />
      <div className={styles.imgDesc}>{desc}</div>
    </div>
  );
};

export { SkillIcon };
