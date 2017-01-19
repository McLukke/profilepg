import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles.scss';

const Hexagon = ({
  children,
  classname,
  ...restProps
}) =>
  <a {...restProps} className={cx(styles.base, classname)}>
    <div className={styles.top} />
    <div className={styles.center}>
      {children}
    </div>
    <div className={styles.bottom} />
  </a>;

Hexagon.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.node,
};

export default Hexagon;
