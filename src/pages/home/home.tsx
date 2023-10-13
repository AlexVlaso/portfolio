import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { MainBlock } from './components/main-skills/main-block';
import { SkillsBlock } from './components/skills-block/skills-block';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <MainBlock />
      <SkillsBlock />
      <Footer />
    </div>
  );
};

export { Home };
