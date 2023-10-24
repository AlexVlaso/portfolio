import { SectionHeader } from '../../../../components/section-header/section-header';
import styles from './styles.module.scss';
import { ProjectItemSmall } from '../../../../components/project-item/project-item';
import { data } from '../../../../data/data';

const LayoutBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title="Portfolio" subtitle="Projects" />
      <div className={styles.wrapper}>
        {data.map((project) => (
          <ProjectItemSmall project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export { LayoutBlock };
