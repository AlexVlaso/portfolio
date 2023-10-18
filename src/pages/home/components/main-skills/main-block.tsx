import main from '../../../../assets/img/main.png';
import { Social } from '../../../../components/social/social';
import styles from './styles.module.scss';

const MainBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={main} alt="main" className={styles.photo} />
      <div className={styles.side}>
        <h1>Hi, I&apos;m Alexandr Vlasov </h1>
        <h2 className={styles.subtitle}>Frontend Developer</h2>
        <div>
          I am a goal-oriented Junior Frontend Developer with knowledge of HTML, CSS, JavaScript, TypeScript, React, and
          Node.js seeking to use technical proficiency and creativity to develop engaging user experiences and advance
          in a professional career. Looking to leverage effective debugging, code optimization and project collaboration
          capabilities to produce applications that exceed user expectations.
        </div>
        <Social />
        <a
          href="https://drive.google.com/u/0/uc?id=1C_3yGZTvueE0C8ma-6bvEDZmZVYdc443&export=download"
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
