import { SectionHeader } from '../../../../components/section-header/section-header';
import styles from './styles.module.scss';
import { ProjectItemSmall } from '../../../../components/project-item-small/project-item-small';
import { data } from '../../../../data/data';
import { ProjectItemMiddle } from '../../../../components/project-item-middle/project-item-middle';
import { ProjectItemMain } from '../../../../components/project-item-main/project-item-main';

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title="Portfolio" subtitle="Academy project" />
      <div className={styles.wrapperBig}>
        <ProjectItemMain />
      </div>
      <SectionHeader title="Frameworks" subtitle="Angular / React Projects" />
      <div className={styles.wrapperMiddle}>
        {data.middle.map((project) => (
          <ProjectItemMiddle project={project} key={project.id} />
        ))}
      </div>
      <SectionHeader title="Layouts" subtitle="Website Layouts" />
      <div className={styles.wrapperSmall}>
        {data.small.map((project) => (
          <ProjectItemSmall project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export { Projects };
