import React from 'react';
import cx from 'classnames';
import Scroll from 'react-scroll';
import { sections } from 'constants';
import kennyBg from 'images/kenny_bg.jpg';

import styles from '../content/styles.scss';

const LandingImage = () =>
  <Scroll.Element
    name={sections[0].name}
    className={cx(
      styles.base,
      styles['first-slide'],
    )}
  >
    <img src={kennyBg} role="presentation" />
  </Scroll.Element>;

export default LandingImage;
