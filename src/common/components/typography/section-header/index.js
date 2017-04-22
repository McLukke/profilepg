import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const SectionHeader = ({
  className,
  bottomMargin,
  rightMargin,
  red,
  upsize,
  ...restProps
}) =>
  <span
    {...restProps}
    className={cx(
      className,
      styles.base,
      styles['section-header'],
      { [styles['bottom-margin']]: bottomMargin },
      { [styles['right-margin']]: rightMargin },
      { [styles['red-text']]: red },
      { [styles.upsize]: upsize },
    )}
  />;

SectionHeader.propTypes = {
  className: PropTypes.string,
  bottomMargin: PropTypes.bool,
  rightMargin: PropTypes.bool,
  red: PropTypes.bool,
  upsize: PropTypes.bool,
};

export default SectionHeader;
