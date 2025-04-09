import main from '../../../../assets/img/main.png';
import { Social } from '../../../../components/social/social';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './styles.module.scss';

const MainBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <LazyLoadImage
          src={main}
          alt="main"
          className={styles.photo}
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: '0.5s' },
          }}
        />
      </div>
      <div className={styles.side}>
        <h1 className={styles.title}>Hi, I&apos;m Alexandr Vlasov </h1>
        <h2 className={styles.subtitle}>Full-Stack Developer</h2>
        <div className={styles.desc}>
          I’m a results-driven Full-Stack Developer passionate about building scalable, high-performance web
          applications. I specialize in AI-powered automation, fintech platforms, and blockchain-based solutions,
          solving complex challenges with clean architecture and seamless user experiences.
          <br />
          <br />
          With hands-on experience across both frontend and backend, I’ve contributed to intelligent decision-making
          systems, banking analytics platforms, and secure crypto applications. My toolkit includes TypeScript, React,
          Node.js, PostgreSQL, and modern CI/CD pipelines. I focus on writing clean, maintainable code and thrive in
          collaborative, fast-moving environments.
          <br />
          <br />
          Always learning and pushing boundaries, I’m driven by innovation and engineering excellence. Let’s connect and
          build something amazing together.
        </div>
        <Social />
        <a
          href="https://drive.google.com/uc?export=download&id=1nIQVDq8Fy3SiYMVIC4pyeeILjBbYb1hR"
          target="_blank"
          download="Olekandr_Vlasov"
          className={styles.button}
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export { MainBlock };
