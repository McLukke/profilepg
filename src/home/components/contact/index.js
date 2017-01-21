import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'constants';

import styles from '../content/styles.scss';

const Contact = () =>
  <Scroll.Element name={sections[4].name} className={styles.base}>
    {sections[4].title} Goes Here
  </Scroll.Element>;

export default Contact;
