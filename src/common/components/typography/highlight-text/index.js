import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const HighlightText = ({
  classNames,
  ...restProps
}) =>
  <div
    {...restProps}
    className={cx(
      classNames,
      styles['highlight-text'],
    )}
  />;

HighlightText.propTypes = {
  classNames: PropTypes.string,
};

export default HighlightText;
