import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const HighlightText = ({
  classNames,
  italic,
  menu,
  ...restProps
}) =>
  <div
    {...restProps}
    className={cx(
      classNames,
      styles['highlight-text'],
      { [styles['highlight-menu-text']]: menu },
      { [styles['italic-text']]: italic },
    )}
  />;

HighlightText.propTypes = {
  classNames: PropTypes.string,
  italic: PropTypes.bool,
  menu: PropTypes.bool,
};

export default HighlightText;
