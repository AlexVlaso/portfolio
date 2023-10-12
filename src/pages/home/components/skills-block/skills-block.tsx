import styles from './styles.module.scss';
import js from '../../../../assets/icon/js.svg';
import ts from '../../../../assets/icon/ts.svg';
import java from '../../../../assets/icon/java.svg';
import html from '../../../../assets/icon/html.svg';
import css from '../../../../assets/icon/css.svg';
import sass from '../../../../assets/icon/sass.svg';
import node from '../../../../assets/icon/node.svg';
import react from '../../../../assets/icon/react.svg';
import redux from '../../../../assets/icon/redux.svg';
import spring from '../../../../assets/icon/spring.svg';
import angular from '../../../../assets/icon/angular.svg';
import mysql from '../../../../assets/icon/mysql.svg';
import figma from '../../../../assets/icon/figma.svg';
import postman from '../../../../assets/icon/postman.svg';
import photoshop from '../../../../assets/icon/photoshop.svg';
import vscode from '../../../../assets/icon/vscode.svg';
import git from '../../../../assets/icon/git.svg';
import bootstrap from '../../../../assets/icon/bootstrap.svg';
import aws from '../../../../assets/icon/aws.svg';
import express from '../../../../assets/icon/express.svg';
import docker from '../../../../assets/icon/docker.svg';
import postgresql from '../../../../assets/icon/postgresql.svg';

const SkillsBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <h3 className={styles.subtitle}>Languages and Tools</h3>
      <div className={styles.divider}></div>
      <div className={styles.skillsWrapper}>
        <div className={styles.skillsColumn}>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>Layout and Preprocessors:</div>
            <div>
              <img src={html} alt="html" className={styles.icon} />
              <div className={styles.imgDesc}>Html</div>
            </div>
            <div>
              <img src={css} alt="css" className={styles.icon} />
              <div className={styles.imgDesc}>Css</div>
            </div>
            <div>
              <img src={sass} alt="sass" className={styles.icon} />
              <div className={styles.imgDesc}>Sass</div>
            </div>
          </div>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>Languages:</div>
            <div>
              <img src={js} alt="js" className={styles.icon} />
              <div className={styles.imgDesc}>Javascript</div>
            </div>
            <div>
              <img src={ts} alt="ts" className={styles.icon} />
              <div className={styles.imgDesc}>Typescript</div>
            </div>
            <div>
              <img src={node} alt="node" className={styles.icon} />
              <div className={styles.imgDesc}>Node.js</div>
            </div>
            <div>
              <img src={java} alt="java" className={styles.icon} />
              <div className={styles.imgDesc}>Java</div>
            </div>
          </div>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>DataBases:</div>
            <div>
              <img src={mysql} alt="mysql" className={styles.icon} />
              <div className={styles.imgDesc}>MySql</div>
            </div>
            <div>
              <img src={postgresql} alt="postgresql" className={styles.icon} />
              <div className={styles.imgDesc}>PostgreSql</div>
            </div>
          </div>
        </div>
        <div className={styles.skillsColumn}>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>Frameworks:</div>
            <div>
              <img src={react} alt="react" className={styles.icon} />
              <div className={styles.imgDesc}>React</div>
            </div>
            <div>
              <img src={redux} alt="redux" className={styles.icon} />
              <div className={styles.imgDesc}>Redux</div>
            </div>
            <div>
              <img src={express} alt="express" className={styles.icon} />
              <div className={styles.imgDesc}>Express</div>
            </div>
            <div>
              <img src={spring} alt="spring" className={styles.icon} />
              <div className={styles.imgDesc}>Spring</div>
            </div>
            <div>
              <img src={angular} alt="angular" className={styles.icon} />
              <div className={styles.imgDesc}>Angular</div>
            </div>
          </div>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>Additional:</div>
            <div>
              <img src={git} alt="git" className={styles.icon} />
              <div className={styles.imgDesc}>Git</div>
            </div>
            <div>
              <img src={docker} alt="docker" className={styles.icon} />
              <div className={styles.imgDesc}>Docker</div>
            </div>
            <div>
              <img src={bootstrap} alt="bootstrap" className={styles.icon} />
              <div className={styles.imgDesc}>Bootstrap</div>
            </div>
            <div>
              <img src={aws} alt="aws" className={styles.icon} />
              <div className={styles.imgDesc}>AWS</div>
            </div>
          </div>
          <div className={styles.skillItem}>
            <div className={styles.skillDesc}>Tools:</div>
            <div>
              <img src={figma} alt="figma" className={styles.icon} />
              <div className={styles.imgDesc}>Figma</div>
            </div>
            <div>
              <img src={postman} alt="postman" className={styles.icon} />
              <div className={styles.imgDesc}>Postman</div>
            </div>
            <div>
              <img src={photoshop} alt="photoshop" className={styles.icon} />
              <div className={styles.imgDesc}>Photoshop</div>
            </div>
            <div>
              <img src={vscode} alt="vscode" className={styles.icon} />
              <div className={styles.imgDesc}>VsCode</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SkillsBlock };
