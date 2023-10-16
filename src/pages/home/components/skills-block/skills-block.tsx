import { SectionHeader } from '../../../../components/section-header/section-header';
import { SkillIcon } from '../../../../components/skill-icon/skill-icon';
import { IconPathMap } from '../../../../libs/maps/maps';
import styles from './styles.module.scss';

const SkillsBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title="Skills" subtitle="Languages and Tools" />
      <div className={styles.skillsWrapper}>
        <div className={styles.skillsColumn}>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>Layout and Preprocessors:</div>
            <SkillIcon path={IconPathMap.html} alt="html" desc="Html" />
            <SkillIcon path={IconPathMap.css} alt="css" desc="Css" />
            <SkillIcon path={IconPathMap.sass} alt="sass" desc="Sass" />
          </div>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>Languages:</div>
            <SkillIcon path={IconPathMap.js} alt="js" desc="Javascript" />
            <SkillIcon path={IconPathMap.ts} alt="ts" desc="Typescript" />
            <SkillIcon path={IconPathMap.node} alt="node" desc="Node.js" />
            <SkillIcon path={IconPathMap.java} alt="java" desc="Java" />
          </div>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>DataBases:</div>
            <SkillIcon path={IconPathMap.mysql} alt="mysql" desc="MySql" />
            <SkillIcon path={IconPathMap.postgresql} alt="postgresql" desc="PostgreSql" />
          </div>
        </div>
        <div className={styles.skillsColumn}>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>Frameworks:</div>
            <SkillIcon path={IconPathMap.react} alt="react" desc="React" />
            <SkillIcon path={IconPathMap.redux} alt="redux" desc="Redux" />
            <SkillIcon path={IconPathMap.express} alt="express" desc="Express" />
            <SkillIcon path={IconPathMap.spring} alt="spring" desc="Spring" />
            <SkillIcon path={IconPathMap.angular} alt="angular" desc="Angular" />
          </div>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>Additional:</div>
            <SkillIcon path={IconPathMap.git} alt="git" desc="Git" />
            <SkillIcon path={IconPathMap.docker} alt="docker" desc="Docker" />
            <SkillIcon path={IconPathMap.bootstrap} alt="bootstrap" desc="Bootstrap" />
            <SkillIcon path={IconPathMap.aws} alt="aws" desc="AWS" />
          </div>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>Tools:</div>
            <SkillIcon path={IconPathMap.figma} alt="figma" desc="Figma" />
            <SkillIcon path={IconPathMap.postman} alt="postman" desc="Postman" />
            <SkillIcon path={IconPathMap.photoshop} alt="photoshop" desc="Photoshop" />
            <SkillIcon path={IconPathMap.vscode} alt="vscode" desc="VsCode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { SkillsBlock };
