import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'constants';

import styles from '../content/styles.scss';

const Skills = () =>
  <Scroll.Element name={sections[2].name} className={styles.base}>
    {sections[2].title} Goes Here
  </Scroll.Element>;

export default Skills;
