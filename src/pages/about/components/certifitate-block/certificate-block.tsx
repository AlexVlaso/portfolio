import { SectionHeader } from '../../../../components/section-header/section-header';
import bsa from '../../../../assets/img/bsa.png';
import eng from '../../../../assets/img/eng.png';
import styles from './styles.module.scss';

const CertificateBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title="Certificates" subtitle="Certificates and Diplomas" />
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={bsa} alt="bsa" className={styles.itemImg} />
          <div className={styles.itemDesc}>Binary Studio Academy Certificate</div>
        </div>
        <div className={styles.item}>
          <img src={eng} alt="eng" className={styles.itemImg} />
          <div className={styles.itemDesc}>Green Forest Certificate</div>
        </div>
      </div>
    </div>
  );
};

export { CertificateBlock };
