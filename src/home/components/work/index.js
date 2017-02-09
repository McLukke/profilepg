import React from 'react';
import Scroll from 'react-scroll';
import { sections, myEducation, myWorkExp } from 'constants';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SectionHeader from 'components/typography/section-header';
import TextBlockSubheader from 'components/typography/text-block-subheader';
import TextBlockHeader from 'components/typography/text-block-header';

import styles from './styles.scss';

const Work = () =>
  <Scroll.Element name={sections[1].name} className={styles.base}>
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
            {myEducation.map(eduEntry =>
              <Row key={eduEntry.id} className={styles['section-entry']}>
                <Col xs={9}>
                  <TextBlockHeader red>{eduEntry.header}</TextBlockHeader>
                  <TextBlockSubheader>{eduEntry.subheader}</TextBlockSubheader>
                </Col>

                <Col xs={3}>
                  <TextBlockHeader>{eduEntry.yearFrom} - {eduEntry.yearTo}</TextBlockHeader>
                  <p>{eduEntry.location}</p>
                </Col>
              </Row>,
            )}
          </Col>
        </Row>

        <Row className={styles['section-wrapper']}>
          <Col xs={2}>
            <SectionHeader>Work Experience</SectionHeader>
          </Col>

          <Col xs={10}>
            {myWorkExp.map(workExp =>
              <Row key={workExp.id} className={styles['section-entry']}>
                <Col xs={9}>
                  <TextBlockHeader red>{workExp.header}</TextBlockHeader>
                  <TextBlockSubheader bottomMargin>{workExp.subheader}</TextBlockSubheader>
                  <div>
                    {workExp.description.constructor === Array ?
                      workExp.description.map((descript, index) =>
                        <div key={`${descript.title}-${index}`}>
                          <div>{descript.title}</div>
                          {descript.content.map((workContent, i) =>
                            <div key={`${workExp.subheader}-${i}`}>-{workContent}</div>,
                          )}
                          <br />
                        </div>,
                      )
                    : workExp.description}
                  </div>
                </Col>

                <Col xs={3}>
                  <TextBlockHeader>{workExp.yearFrom} - {workExp.yearTo}</TextBlockHeader>
                  <p>{workExp.location}</p>
                </Col>
              </Row>,
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  </Scroll.Element>;

export default Work;
