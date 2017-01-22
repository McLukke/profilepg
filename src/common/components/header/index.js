import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'constants';

import styles from './styles.scss';

const Header = () =>
  <nav className={styles.base}>
    {sections.map((section, index) =>
      <Scroll.Link
        key={index}
        activeClass="active"
        className={styles.link}
        to={section.name}
        spy
        smooth
        duration={500}
      >
        {section.title}
      </Scroll.Link>,
    )}
  </nav>;

export default Header;
