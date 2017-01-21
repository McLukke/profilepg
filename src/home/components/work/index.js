import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'constants';

import styles from '../content/styles.scss';

const Work = () =>
  <Scroll.Element name={sections[1].name} className={styles.base}>
    {sections[1].title} Goes Here
  </Scroll.Element>;

export default Work;
