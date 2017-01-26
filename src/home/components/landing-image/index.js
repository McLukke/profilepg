import React from 'react';
import cx from 'classnames';
import Scroll from 'react-scroll';
import { sections } from 'constants';

import styles from '../content/styles.scss';

const LandingImage = () =>
  <Scroll.Element
    name={sections[0].name}
    className={cx(
      styles.base,
      styles['first-slide'],
    )}
  >
    {sections[0].title} Goes Here
  </Scroll.Element>;

export default LandingImage;
