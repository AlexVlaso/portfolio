import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project } from '../../libs/types/project.type';
import { SkillIcon } from '../skill-icon/skill-icon';
import styles from './styles.module.scss';
import { faChrome, faGithub } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Properties = {
  project: Project;
};

const ProjectItemMiddle: React.FC<Properties> = ({ project }: Properties) => {
  const { title, desc, img, github, site, techStack } = project;
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
        {img.map((src, i) => (
          <LazyLoadImage
            src={src}
            alt={title}
            key={i}
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: '0.3s' },
            }}
          />
        ))}
      </Slider>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.techWrapper}>
        <div className={styles.techDesc}>Tech Stack:</div>{' '}
        {techStack && (
          <div className={styles.techItems}>
            {techStack.map(({ path, desc }, i) => (
              <SkillIcon path={path} alt={desc} desc={desc} key={i} />
            ))}
          </div>
        )}
      </div>
      <div className={styles.btnWrapper}>
        {site && (
          <a href={site} target="_blank" rel="noreferrer" className={styles.btn}>
            <FontAwesomeIcon icon={faChrome} />
            View Site
          </a>
        )}
        <a href={github} target="_blank" rel="noreferrer" className={styles.btn}>
          <FontAwesomeIcon icon={faGithub} />
          View Code
        </a>
      </div>
    </div>
  );
};

export { ProjectItemMiddle };
