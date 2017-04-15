import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const TextBlock = ({ classNames, ...restProps }) =>
  <div {...restProps} className={cx(classNames, styles['text-block'])} />;

TextBlock.propTypes = {
  classNames: PropTypes.string,
};

export default TextBlock;
