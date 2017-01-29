import React from 'react';
import Scroll from 'react-scroll';
import { mySkills, sections } from 'constants';
import variables from 'variables';
import { Circle } from 'rc-progress';

import styles from './styles.scss';

const Skills = () =>
  <Scroll.Element name={sections[1].name} className={styles.base}>
    {mySkills.map((skill, index) =>
      <div key={index} className={styles['progress-bar-wrapper']}>
        <Circle
          className={styles['progress-bar']}
          strokeWidth="12"
          trailWidth="12"
          percent={skill.percentage}
          strokeLinecap="square"
          strokeColor={variables.aqua}
        />
        <span className={styles['skill-title']}>
          {skill.name}
        </span>
      </div>,
    )}
  </Scroll.Element>;

export default Skills;
