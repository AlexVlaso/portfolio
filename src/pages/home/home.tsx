import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { MainBlock } from './components/main-skills/main-block';
import { SkillsBlock } from './components/skills-block/skills-block';
import styles from './styles.module.scss';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <MainBlock />
        <SkillsBlock />
      </div>
      <Footer />
    </div>
  );
};

export { Home };
