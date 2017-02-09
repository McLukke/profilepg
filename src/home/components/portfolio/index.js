import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'constants';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from '../content/styles.scss';

const Portfolio = () =>
  <Scroll.Element name={sections[3].name} className={styles.base}>
    <Row>
      <Col
        xs={12}
        md={10}
        mdOffset={1}
        lg={8}
        lgOffset={2}
      >
        <Row>
          <Col xs={4}>
          </Col>
        </Row>


        <Row>
          <Col xs={4}>
          </Col>
        </Row>


        <Row>
          <Col xs={4}>
          </Col>
        </Row>
      </Col>
    </Row>
  </Scroll.Element>;

export default Portfolio;
