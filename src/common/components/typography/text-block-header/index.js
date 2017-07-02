import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const TextBlockHeader = ({
  className,
  noMargin,
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
      { [styles['no-margin']]: noMargin },
    )}
  />;

TextBlockHeader.propTypes = {
  className: PropTypes.string,
  red: PropTypes.bool,
  noMargin: PropTypes.bool,
};

export default TextBlockHeader;
