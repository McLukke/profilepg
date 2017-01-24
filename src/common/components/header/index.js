import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'constants';
import { Container as Grid, Row, Col } from 'react-grid-system';

import styles from './styles.scss';

const Header = () =>
  <nav className={styles.base}>
    <Grid>
      <Row end="xs" center="lg">
        {sections.map((section, index) =>
          <Col xs={12} md={2}>
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
            </Scroll.Link>
          </Col>,
        )}
      </Row>
    </Grid>
  </nav>;

export default Header;
