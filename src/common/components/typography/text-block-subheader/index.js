import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const TextBlockSubheader = ({
  className,
  bottomMargin,
  ...restProps
}) =>
  <div
    {...restProps}
    className={cx(
      className,
      styles.base,
      styles['text-block-subheader'],
      { [styles['bottom-margin']]: bottomMargin },
    )}
  />;

TextBlockSubheader.propTypes = {
  className: PropTypes.string,
  bottomMargin: PropTypes.bool,
};

export default TextBlockSubheader;
