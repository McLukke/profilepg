import React from 'react';

import styles from '../styles.scss';

const FooterTitle = ({
  ...restProps
}) =>
  <div
    {...restProps}
    className={styles['footer-title']}
  />;

export default FooterTitle;
