import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { AboutBlock } from './components/about-block/about-block';
import { CertificateBlock } from './components/certifitate-block/certificate-block';
import { ExperienceBlock } from './components/experience-block/experience-block';

const About = () => {
  return (
    <div>
      <Header />
      <AboutBlock />
      <ExperienceBlock />
      <CertificateBlock />
      <Footer />
    </div>
  );
};

export { About };
