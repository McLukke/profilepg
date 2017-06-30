import React from 'react';
import Scroll from 'react-scroll';
import { sections, myCharacter } from 'content';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import TextBlockHeader from 'components/typography/text-block-header';
import TextBlock from 'components/typography/text-block';

import styles from './styles.scss';

const Character = () =>
  <Scroll.Element name={sections[2].name} className={styles.base}>
    <Row>
      <Col
        xs={12}
        lg={10}
        lgOffset={1}
      >
        <Row className={styles['section-wrapper']}>
          {myCharacter.map(trait =>
            <Col xs={12} lg={4} key={trait.id}>
              <div className={styles['column-wrapper']}>
                <div className={styles['icon-wrapper']}>
                  <img src={trait.svg} alt={trait.title} />
                  <TextBlockHeader>{trait.title}</TextBlockHeader>
                </div>
                <TextBlock justify>{trait.description}</TextBlock>
              </div>
            </Col>,
          )}
        </Row>
      </Col>
    </Row>
  </Scroll.Element>;

export default Character;
