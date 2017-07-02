import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from '../styles.scss';

const TextBlock = ({
  classNames,
  justify,
  ...restProps
}) =>
  <div
    {...restProps}
    className={cx(
      classNames,
      { [styles.justify]: justify },
      styles['text-block'],
    )}
  />;

TextBlock.propTypes = {
  classNames: PropTypes.string,
  justify: PropTypes.bool,
};

export default TextBlock;
