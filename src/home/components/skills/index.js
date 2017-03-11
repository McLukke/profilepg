import React from 'react';
import Scroll from 'react-scroll';
import { mySkills, sections } from 'content';
import { Circle } from 'rc-progress';
import carBg from 'images/backgrounds/car_bg.jpg';

import styles from './styles.scss';

const Skills = () =>
  <Scroll.Element name={sections[2].name} className={styles.base}>
    <div className={styles['image-container']}>
      <img src={carBg} alt="" className={styles['car-bg']} />
    </div>
    <div className={styles['content-wrapper']}>
      {mySkills.map((skill, index) =>
        <div key={index} className={styles['progress-bar-wrapper']}>
          <Circle
            strokeWidth="12"
            trailWidth="12"
            percent={skill.percentage}
            strokeLinecap="square"
            trailColor="#373737"
            strokeColor="#ff4646"
          />
          <span className={styles['skill-title']}>
            {skill.name}
          </span>
        </div>,
      )}
    </div>
  </Scroll.Element>;

export default Skills;
