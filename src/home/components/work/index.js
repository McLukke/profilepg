import React from 'react';
import Scroll from 'react-scroll';
import { sections, myWorkExp } from 'content';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import TextBlockHeader from 'components/typography/text-block-header';
import TextBlock from 'components/typography/text-block';

import styles from './styles.scss';

const Work = () =>
  <Scroll.Element name={sections[2].name} className={styles.base}>
    <Row>
      <Col
        xs={12}
        lg={8}
        lgOffset={2}
      >
        <Row className={styles['section-wrapper']}>
          {myWorkExp.map(exp =>
            <Col xs={12} lg={4} key={exp.id}>
              <div className={styles.content}>
                <img src={exp.svg} alt={exp.title} />
                <TextBlockHeader>{exp.title}</TextBlockHeader>
                <TextBlock>{exp.description}</TextBlock>
              </div>
            </Col>,
          )}
        </Row>
      </Col>
    </Row>
  </Scroll.Element>;

export default Work;
