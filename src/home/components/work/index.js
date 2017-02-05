import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'constants';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SectionHeader from 'components/typography/section-header';
import TextBlockSubheader from 'components/typography/text-block-subheader';
import TextBlockHeader from 'components/typography/text-block-header';

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
                <TextBlockHeader red>Advanced Javascript, ReactJS, Redux</TextBlockHeader>
                <TextBlockSubheader>Functional Programming, Udemy</TextBlockSubheader>
              </Col>

              <Col xs={3}>
                <TextBlockHeader>2016 - 2016</TextBlockHeader>
                <p>Online Courses</p>
              </Col>
            </Row>

            <Row className={styles['section-entry']}>
              <Col xs={9}>
                <TextBlockHeader red>HTML5, CSS, JS, PHP</TextBlockHeader>
                <TextBlockSubheader>Computer Programming, Codecademy</TextBlockSubheader>
              </Col>

              <Col xs={3}>
                <TextBlockHeader>2015 - 2015</TextBlockHeader>
                <p>Online Courses</p>
              </Col>
            </Row>

            <Row className={styles['section-entry']}>
              <Col xs={9}>
                <TextBlockHeader red>Bachelor of Science</TextBlockHeader>
                <TextBlockSubheader>University of Toronto</TextBlockSubheader>
              </Col>

              <Col xs={3}>
                <TextBlockHeader>2007 - 2012</TextBlockHeader>
                <p>Toronto, Canada</p>
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
