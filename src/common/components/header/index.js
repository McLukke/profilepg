import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'constants';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from './styles.scss';

const Header = () =>
  <nav className={styles.base}>
    <Row>
      <Col
        xs={12}
        md={8}
        mdOffset={2}
        lg={6}
        lgOffset={3}
      >
        <div className={styles['link-wrapper']}>
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
        </div>
      </Col>
    </Row>
  </nav>;

export default Header;
