import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'constants';

import styles from '../content/styles.scss';

const Portfolio = () =>
  <Scroll.Element name={sections[3].name} className={styles.base}>
    {sections[3].title} Goes Here
  </Scroll.Element>;

export default Portfolio;
