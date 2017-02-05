import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'constants';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SectionHeader from 'components/typography/section-header';

import styles from './styles.scss';

const Work = () =>
  <Scroll.Element name={sections[1].name}>
    <Row>
      <Col
        xs={12}
        md={10}
        mdOffset={1}
        lg={8}
        lgOffset={2}
      >
        <Row className={styles['section-wrapper']}>
          <Col xs={2}>
            <SectionHeader>Education</SectionHeader>
          </Col>

          <Col xs={10}>
            <Row className={styles['section-entry']}>
              <Col xs={9}>
                <span style={{ color: 'red' }}>HTML5, CSS, JS, PHP</span>
                <br />
                <em>Computer Programming, Codecademy</em>
              </Col>

              <Col xs={3}>
                2015 - 2015
                <br />
                Online
              </Col>
            </Row>

            <Row className={styles['section-entry']}>
              <Col xs={9}>
                <span style={{ color: 'red' }}>Bachelor of Science</span>
                <br />
                <em>University of Toronto</em>
              </Col>

              <Col xs={3}>
                2007 - 2012
                <br />
                Toronto, Canada
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className={styles['section-wrapper']}>
          <Col xs={2}>
            <SectionHeader>Work Experience</SectionHeader>
          </Col>

          <Col xs={10}>
            <Row className={styles['section-entry']}>
              <Col xs={9}>
                Junior Developer / Data Analyst
              </Col>

              <Col xs={3}>
                Test
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </Scroll.Element>;

export default Work;
