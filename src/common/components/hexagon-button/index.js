import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles.scss';

const Hexagon = ({
  children,
  classname,
  ...restProps
}) =>
  <a {...restProps} className={cx(styles.base, classname)}>
    <div className={styles.hexagon} />
    <div className={styles.content}>
      {children}
    </div>
  </a>;

Hexagon.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.node,
};

export default Hexagon;
