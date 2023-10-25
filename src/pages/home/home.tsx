import { MainBlock } from './components/main-skills/main-block';
import { SkillsBlock } from './components/skills-block/skills-block';

const Home: React.FC = () => {
  return (
    <main>
      <MainBlock />
      <SkillsBlock />
    </main>
  );
};

export default Home;
