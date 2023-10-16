import styles from './styles.module.scss';
import main from '../../../../assets/img/main_2.png';

import { SectionHeader } from '../../../../components/section-header/section-header';
import { SkillRating } from '../../../../components/skill-rating/skill-rating';

const AboutBlock = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title="About me" subtitle="Additional information" />
      <div className={styles.wrapper}>
        <div className={styles.desc}>
          <h2 className={styles.title}>Who am I?</h2>
          <div className={styles.text}>
            I am a self-driven front-end developer and have been in the industry for more than 2 years. I have a keen
            eye for detail, and most of my working life has been dedicated to self-study, so learning a new technology
            or framework on my own is not a problem for me. In addition, in 2023, I also graduated from the Binary
            Studio Academy (more than 9 thousand students were selected at the first stage of the academy). At the last
            stage of the academy, I worked as a Full-Stack Developer, where, together with a team of developers and
            testers, I was actively developing the TowHub project, which you can see in the portfolio section. Always
            ready for cooperation and new achievements.
          </div>
          <div className={styles.skills}>
            <div className={styles.skill}>
              <div className={styles.skillHeader}>
                <h3 className={styles.skillTitle}>Teamwork</h3>
                <div>92%</div>
              </div>
              <SkillRating fill={92} />
            </div>
            <div className={styles.skill}>
              <div className={styles.skillHeader}>
                <h3 className={styles.skillTitle}>Leadership</h3>
                <div>80%</div>
              </div>
              <SkillRating fill={80} />
            </div>
            <div className={styles.skill}>
              <div className={styles.skillHeader}>
                <h3 className={styles.skillTitle}>Motivation </h3> <div>100%</div>
              </div>
              <SkillRating fill={100} />
            </div>
            <div className={styles.skill}>
              <div className={styles.skillHeader}>
                <h3 className={styles.skillTitle}>Communication </h3> <div>90%</div>
              </div>
              <SkillRating fill={90} />
            </div>
            <div className={styles.skill}>
              <div className={styles.skillHeader}>
                <h3 className={styles.skillTitle}>Problem-solving </h3> <div>90%</div>
              </div>
              <SkillRating fill={90} />
            </div>
            <div className={styles.skill}>
              <div className={styles.skillHeader}>
                <h3 className={styles.skillTitle}>Creativity </h3> <div>85%</div>
              </div>
              <SkillRating fill={85} />
            </div>
          </div>
        </div>
        <img src={main} alt="main" className={styles.photo} />
      </div>
    </div>
  );
};

export { AboutBlock };
