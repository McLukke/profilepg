import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const HighlightText = ({
  classNames,
  italic,
  ...restProps
}) =>
  <div
    {...restProps}
    className={cx(
      classNames,
      styles['highlight-text'],
      { [styles['italic-text']]: italic },
    )}
  />;

HighlightText.propTypes = {
  classNames: PropTypes.string,
  italic: PropTypes.bool,
};

export default HighlightText;
