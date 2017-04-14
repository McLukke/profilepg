import React from 'react';
import Scroll from 'react-scroll';
import { sections, myWorkExp } from 'content';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SectionHeader from 'components/typography/section-header';
import TextBlockHeader from 'components/typography/text-block-header';

import styles from './styles.scss';

const Work = () =>
  <Scroll.Element name={sections[2].name} className={styles.base}>
    <Row>
      <Col
        xs={12}
        md={10}
        mdOffset={1}
        lg={8}
        lgOffset={2}
      >
        <Row className={styles['section-wrapper']}>
          {myWorkExp.map(exp =>
            <Col xs={12} lg={4} key={exp.id}>
              <SectionHeader>{exp.title}</SectionHeader>
              <TextBlockHeader>{exp.description}</TextBlockHeader>
            </Col>,
          )}
        </Row>
      </Col>
    </Row>
  </Scroll.Element>;

export default Work;
