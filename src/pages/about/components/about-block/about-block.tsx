import styles from './styles.module.scss';
import main from '../../../../assets/img/main_2.png';

import { SectionHeader } from '../../../../components/section-header/section-header';
import { SkillRating } from '../../../../components/skill-rating/skill-rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AboutBlock = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title="About me" subtitle="Additional information" />
      <div className={styles.wrapper}>
        <div className={styles.desc}>
          <h2 className={styles.title}>Who am I?</h2>
          <div className={styles.text}>
            I’m a Full-Stack Developer with a knack for building sophisticated, performance-driven web applications that
            stand out. My work revolves around solving intricate technical challenges while ensuring that systems are
            not only scalable but also intuitive and easy to maintain. From AI-powered automation to secure crypto
            platforms, I’ve worked on projects that push the envelope of what technology can do for businesses and users
            alike.
            <br />
            <br />
            At Lumitech and Technorely, I’ve sharpened my expertise in frontend and backend technologies, diving into
            complex systems like banking analytics and blockchain-based solutions. Tools like TypeScript, React,
            Node.js, and PostgreSQL are my daily companions, and I thrive on refining code through best practices and
            cutting-edge CI/CD workflows.
            <br />
            <br />
            What drives me is a relentless pursuit of engineering excellence — constantly challenging myself, exploring
            new technologies, and collaborating with innovative teams. I believe the best solutions come from
            continuously evolving and adapting to new insights and challenges. Let’s build something that makes a
            difference.
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
        <LazyLoadImage
          src={main}
          alt="main"
          className={styles.photo}
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: '0.5s' },
            className: styles.photoWrapper,
          }}
        />
      </div>
    </div>
  );
};

export { AboutBlock };
