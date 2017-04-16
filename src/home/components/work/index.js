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
        lg={10}
        lgOffset={1}
      >
        <Row className={styles['section-wrapper']}>
          {myWorkExp.map(exp =>
            <Col xs={12} lg={4} key={exp.id}>
              <div className={styles['column-wrapper']}>
                <div className={styles['icon-wrapper']}>
                  <img src={exp.svg} alt={exp.title} />
                  <TextBlockHeader>{exp.title}</TextBlockHeader>
                </div>
                <TextBlock justify>{exp.description}</TextBlock>
              </div>
            </Col>,
          )}
        </Row>
      </Col>
    </Row>
  </Scroll.Element>;

export default Work;
