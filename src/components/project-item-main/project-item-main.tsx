import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkillIcon } from '../skill-icon/skill-icon';
import styles from './styles.module.scss';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import main1 from '../../assets/img/projects/main_1.png';
import main2 from '../../assets/img/projects/main_2.png';
import main3 from '../../assets/img/projects/main_3.png';
import main4 from '../../assets/img/projects/main_4.png';
import main5 from '../../assets/img/projects/main_5.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconPathMap } from '../../libs/maps/icon-path.map';

const ProjectItemMain: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <img src={main1} alt="main1" />
        <img src={main2} alt="main2" />
        <img src={main3} alt="main3" />
        <img src={main4} alt="main4" />
        <img src={main5} alt="main5" />
      </Slider>
      <h3 className={styles.title}>TowHub</h3>
      <div className={styles.desc}>
        TowHub is a platform that helps you quickly and easily find and order a tow truck nearby in case of car problems
        and pay for it. Businesses that have tow trucks can create accounts for drivers, assign them to a tow truck, and
        track the location of tow trucks and orders. Tow truck drivers will be able to see and accept orders. The
        frontend of this project was made in React, the backend in Fastify, and PostgreSQL was used to work with the
        database. This was a Binary Studio Academy training project that was worked on by a team of 10 developers, 2
        testers, and 3 mentors (who controlled the quality of the code). For two months, we developed this project in
        accordance with the wishes of the product owner. Accordingly, the development process was as close as possible
        to the real one with calls for each team member and demos for the product owner every week. As a result, we got
        a fairly large application that uses a lot of modern technologies, starting with the payment system and ending
        with email notifications
      </div>
      <div className={styles.additional}>
        <div className={styles.infoWrapper}>
          <div className={styles.infoTitle}>Project Information:</div>
          <div className={styles.infoItem}> Team: 10 dev, 2 QA and 3 coaches</div>
          <div className={styles.infoItem}> Development time: 2 month</div>
          <div className={styles.infoItem}> Commits: 339</div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.infoTitle}>Project features:</div>
          <div className={styles.infoItem}> Flows for user, driver and business</div>
          <div className={styles.infoItem}> Stripe payment system</div>
          <div className={styles.infoItem}> High quality code</div>
        </div>
      </div>
      <div className={styles.techWrapper}>
        <div className={styles.techDesc}>Tech Stack:</div>
        <div className={styles.techItems}>
          <SkillIcon path={IconPathMap.react} desc="React" alt="React" />
          <SkillIcon path={IconPathMap.redux} alt="redux" desc="Redux" />
          <SkillIcon path={IconPathMap.ts} desc="Typescript" alt="Typescript" />
          <SkillIcon path={IconPathMap.node} alt="node" desc="Node.js" />
          <SkillIcon path={IconPathMap.express} alt="express" desc="Express" />
          <SkillIcon path={IconPathMap.postgresql} alt="postgresql" desc="PostgreSQL" />
          <SkillIcon path={IconPathMap.aws} alt="aws" desc="AWS" />
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <a href="https://github.com/AlexVlaso/bsa-2023-towhub" target="_blank" rel="noreferrer" className={styles.btn}>
          <FontAwesomeIcon icon={faGithub} />
          View Code
        </a>
      </div>
    </div>
  );
};

export { ProjectItemMain };
