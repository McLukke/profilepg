import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const TextBlockSubheader = ({
  className,
  ...restProps
}) =>
  <div {...restProps} className={cx(className, styles.base, styles['text-block-subheader'])} />;

TextBlockSubheader.propTypes = {
  className: PropTypes.string,
};

export default TextBlockSubheader;
