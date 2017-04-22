import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const TextBlock = ({
  classNames,
  justify,
  red,
  ...restProps
}) =>
  <div
    {...restProps}
    className={cx(
      classNames,
      styles.justify,
      styles['text-block'],
      { [styles['red-text']]: red },
    )}
  />;

TextBlock.propTypes = {
  classNames: PropTypes.string,
  justify: PropTypes.bool,
  red: PropTypes.bool,
};

export default TextBlock;
