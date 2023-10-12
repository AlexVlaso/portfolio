import main from '../../../../assets/img/main_4.png';
import styles from './styles.module.scss';

const MainBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={main} alt="main" className={styles.photo} />
      <div className={styles.side}>
        <h1>Hi, I&apos;m Alexandr Vlasov </h1>
        <h2 className={styles.subtitle}>Frontend Developer</h2>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate, fuga vel dignissimos facere
          neque quos rem dolore unde officia nemo doloribus aspernatur odit, consequatur ducimus placeat, mollitia
          officiis deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum a aut laudantium
          dignissimos. Quod eos veritatis animi inventore. Fugiat natus nesciunt minima exercitationem architecto
          blanditiis excepturi earum iure voluptates.
        </div>
      </div>
    </div>
  );
};

export { MainBlock };
