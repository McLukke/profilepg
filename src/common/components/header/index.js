import React, { Component } from 'react';
import Scroll from 'react-scroll';

import styles from './styles.scss';

const Header = () =>
  <nav className={styles.base}>
    <Scroll.Link
      activeClass="active"
      className="test1"
      to="test1"
      spy
      smooth
      duration={500}
    >
      Landing Image
    </Scroll.Link>
  </nav>;

export default Header;
