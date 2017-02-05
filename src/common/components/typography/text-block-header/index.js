import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const TextBlockHeader = ({
  className,
  red,
  ...restProps
}) =>
  <div
    {...restProps}
    className={cx(
      className,
      styles.base,
      styles['text-block-header'],
      { [styles['red-text']]: red },
    )}
  />;

TextBlockHeader.propTypes = {
  className: PropTypes.string,
  red: PropTypes.bool,
};

export default TextBlockHeader;
