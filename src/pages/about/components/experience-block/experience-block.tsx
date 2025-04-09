import styles from './styles.module.scss';
import courses from '../../../../assets/icon/courses.svg';
import university from '../../../../assets/icon/university.svg';
import designer from '../../../../assets/icon/designer.svg';
import developer from '../../../../assets/icon/developer.svg';
import certificate from '../../../../assets/icon/certificate.svg';
import pc from '../../../../assets/icon/pc.svg';
import { SectionHeader } from '../../../../components/section-header/section-header';

const ExperienceBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title="Experience" subtitle="Education and Experience" />
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Education</h2>
          <ul>
            <li className={styles.li}>
              <div className={styles.item}>
                <div className={styles.itemHeader}>
                  <div className={styles.round}>
                    <img src={certificate} alt="certificate" className={styles.itemImg} />
                  </div>
                  <div className={styles.itemTitle}>Binary Studio Academy</div>
                  <div className={styles.itemSubtitle}>IT Academy</div>
                </div>
                <div className={styles.itemDesc}>
                  Graduated from a competitive full-stack development program, ranking in the top 84 out of 9,000+
                  applicants. Gained hands-on experience with React, Express, Socket.IO, Node.js, and PostgreSQL,
                  building production-ready applications. Focused on clean architecture, Agile methodologies, and modern
                  development practices, while improving problem-solving and collaboration skills.
                </div>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.item}>
                <div className={styles.itemHeader}>
                  <div className={styles.round}>
                    <img src={courses} alt="courses" className={styles.itemImg} />
                  </div>
                  <div className={styles.itemTitle}>Udemy</div>
                  <div className={styles.itemSubtitle}>Web development courses</div>
                </div>
                <div className={styles.itemDesc}>
                  Completed over 30 web development courses, covering Java, SQL, JavaScript frameworks, and React. Built
                  several full-stack projects, including an e-commerce site, while gaining in-depth knowledge of
                  front-end technologies, responsive design, and modern development practices. These courses provided
                  the foundation for my career in full-stack development.
                </div>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.item}>
                <div className={styles.itemHeader}>
                  <div className={styles.round}>
                    <img src={university} alt="university" className={styles.itemImg} />
                  </div>
                  <div className={styles.itemTitle}>State Biotechnological University</div>
                  <div className={styles.itemSubtitle}>Master&apos;s degree | Kharkiv</div>
                </div>
                <div className={styles.itemDesc}>
                  Earned an honors diploma in agricultural engineering, where I developed strong analytical, research,
                  and problem-solving skills. While I ultimately transitioned to software development, my academic
                  background has provided a solid foundation in critical thinking, data analysis, and project
                  management—skills that have been invaluable in my development career.
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Experience</h2>
          <ul>
            <li className={styles.li}>
              <div className={styles.item}>
                <div className={styles.itemHeader}>
                  <div className={styles.round}>
                    <img src={pc} alt="pc" className={styles.itemImg} />
                  </div>
                  <div className={styles.itemTitle}>Full-Stack Developer</div>
                  <div className={styles.itemSubtitle}>Lumitech | Remote</div>
                </div>
                <div className={styles.itemDesc}>
                  Currently optimizing web applications, focusing on performance, scalability, and maintainability.
                  Contributed to AI-driven automation and a banking analytics platform, integrating complex data
                  processing and visualization features. Collaborating with product and design teams to ensure seamless
                  user experiences, while adhering to clean code practices and architecture principles.
                </div>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.item}>
                <div className={styles.itemHeader}>
                  <div className={styles.round}>
                    <img src={designer} alt="designer" className={styles.itemImg} />
                  </div>
                  <div className={styles.itemTitle}>Full-Stack Developer</div>
                  <div className={styles.itemSubtitle}>Technorely | Remote</div>
                </div>
                <div className={styles.itemDesc}>
                  Worked on developing scalable and secure applications in the crypto and healthcare sectors. Led
                  front-end development, implementing responsive UI components, optimizing performance, and integrating
                  APIs using modern frameworks. Delivered high-quality features, collaborated across teams, and
                  maintained coding standards in fast-paced development environments.
                </div>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.item}>
                <div className={styles.itemHeader}>
                  <div className={styles.round}>
                    <img src={developer} alt="developer" className={styles.itemImg} />
                  </div>
                  <div className={styles.itemTitle}>Junior Full-Stack Developer</div>
                  <div className={styles.itemSubtitle}>Binary Studio Academy | Remote</div>
                </div>
                <div className={styles.itemDesc}>
                  Developed a production-ready application using TypeScript, React, Node.js, and PostgreSQL during an
                  intensive full-stack program. Gained hands-on experience in CI/CD, API design, and Git workflows.
                  Emphasized problem-solving, collaboration, and code quality, building a strong foundation in both
                  frontend and backend development.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ExperienceBlock };
