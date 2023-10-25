import { AboutBlock } from './components/about-block/about-block';
import { CertificateBlock } from './components/certifitate-block/certificate-block';
import { ExperienceBlock } from './components/experience-block/experience-block';

const About = () => {
  return (
    <main>
      <AboutBlock />
      <ExperienceBlock />
      <CertificateBlock />
    </main>
  );
};

export default About;
