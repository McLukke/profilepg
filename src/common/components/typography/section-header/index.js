import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const SectionHeader = ({
  className,
  ...restProps
}) =>
  <div {...restProps} className={cx(className, styles.base, styles['section-header'])} />;

SectionHeader.propTypes = {
  className: PropTypes.string,
};

export default SectionHeader;
