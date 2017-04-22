import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const SectionHeader = ({
  className,
  bottomMargin,
  red,
  ...restProps
}) =>
  <div
    {...restProps}
    className={cx(
      className,
      styles.base,
      styles['section-header'],
      { [styles['bottom-margin']]: bottomMargin },
      { [styles['red-text']]: red },
    )}
  />;

SectionHeader.propTypes = {
  className: PropTypes.string,
  bottomMargin: PropTypes.bool,
  red: PropTypes.bool,
};

export default SectionHeader;
