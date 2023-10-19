import { SectionHeader } from '../../../../components/section-header/section-header';
import styles from './styles.module.scss';
import { ProjectItem } from '../../../../components/project-item/project-item';

const LayoutBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title="Portfolio" subtitle="Projects" />
      <div className={styles.wrapper}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export { LayoutBlock };
