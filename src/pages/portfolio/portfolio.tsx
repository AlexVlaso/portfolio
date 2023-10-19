import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { LayoutBlock } from './components/layout-block/layout-block';

const Portfolio: React.FC = () => {
  return (
    <div>
      <Header />
      <LayoutBlock />
      <Footer />
    </div>
  );
};

export { Portfolio };
