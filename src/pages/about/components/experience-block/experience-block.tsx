import styles from './styles.module.scss';
import courses from '../../../../assets/icon/courses.svg';
import university from '../../../../assets/icon/university.svg';
import designer from '../../../../assets/icon/designer.svg';
import developer from '../../../../assets/icon/developer.svg';
import certificate from '../../../../assets/icon/certificate.svg';
import pc from '../../../../assets/icon/pc.svg';

const ExperienceBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <h3 className={styles.subtitle}>Education and Experience</h3>
      <div className={styles.divider}></div>

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
                  I have finished Binary Studio Academy. It was the complex full-stack course with many selection steps.
                  I have learned information about React, Express, socket IO and many another topics by practice with
                  home projects.
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
                  During two last two years, I have finished around thirty courses. I started my education with Java
                  courses, then SQL and frameworks, and after that, I built a full-stack shop website and started dipped
                  learn front end part
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
                  I was a student at State Biotechnological University from 2017 to 2022. The agricultural sphere
                  wasn&apos;t my cup of tea. By the way, I finished my education at this university and got an honors
                  diploma.
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
                  <div className={styles.itemTitle}>Junior Full-Stack Engineer</div>
                  <div className={styles.itemSubtitle}>Binary Studio Academy | Remote</div>
                </div>
                <div className={styles.itemDesc}>
                  Over the course of several months, our team of developers and testers was working on TowHub project
                  (witch you can view on portfolio section). We developed app witch can help a customer find a truck sp
                  simple like taxi.
                </div>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.item}>
                <div className={styles.itemHeader}>
                  <div className={styles.round}>
                    <img src={designer} alt="designer" className={styles.itemImg} />
                  </div>
                  <div className={styles.itemTitle}>Agronomist</div>
                  <div className={styles.itemSubtitle}>Berries farm | Kharkiv</div>
                </div>
                <div className={styles.itemDesc}>
                  It was a typical job for an agronomist. I had a small team whose work I had to supervise. It was my
                  job to draw up a work plan for my team and to do seasonal field work.
                </div>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.item}>
                <div className={styles.itemHeader}>
                  <div className={styles.round}>
                    <img src={developer} alt="developer" className={styles.itemImg} />
                  </div>
                  <div className={styles.itemTitle}>Plant protection specialist</div>
                  <div className={styles.itemSubtitle}>Saterplant | Scharrel, Germany (02.2020-07.2020)</div>
                </div>
                <div className={styles.itemDesc}>
                  It was an internship in Europe from my university. I had to help with plant protection and other types
                  of work for this company. For me personally it was great practice for my spoken English.
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
