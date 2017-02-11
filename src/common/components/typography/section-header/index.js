import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const SectionHeader = ({
  className,
  bottomMargin,
  ...restProps
}) =>
  <div
    {...restProps}
    className={cx(
      className,
      styles.base,
      styles['section-header'],
      { [styles['bottom-margin']]: bottomMargin },
    )}
  />;

SectionHeader.propTypes = {
  className: PropTypes.string,
  bottomMargin: PropTypes.bool,
};

export default SectionHeader;
