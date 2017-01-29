import React from 'react';
import cx from 'classnames';
import Scroll from 'react-scroll';
import { sections } from 'constants';
import coding from 'images/coding.jpg';

import styles from '../content/styles.scss';

const LandingImage = () =>
  <Scroll.Element
    name={sections[0].name}
    className={cx(
      styles.base,
      styles['first-slide'],
    )}
  >
    <div>
      <img src={coding} role="presentation" />
    </div>
  </Scroll.Element>;

export default LandingImage;
