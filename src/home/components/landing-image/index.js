import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'constants';
import kennyBg from 'images/kenny_bg.jpg';

import styles from './styles.scss';

const LandingImage = () =>
  <Scroll.Element name={sections[0].name} className={styles.base}>
    <div className={styles['image-container']}>
      <img
        src={kennyBg}
        role="presentation"
        className={styles['background-image']}
      />
    </div>
  </Scroll.Element>;

export default LandingImage;
