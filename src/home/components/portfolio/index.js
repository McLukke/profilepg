import React from 'react';
import Scroll from 'react-scroll';
import { sections, portfolioImages } from 'constants';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SectionHeader from 'components/typography/section-header';
import TextBlockHeader from 'components/typography/text-block-header';
import TextBlockSubheader from 'components/typography/text-block-subheader';

import styles from './styles.scss';

const Portfolio = () =>
  <Scroll.Element name={sections[3].name} className={styles.base}>
    <Row>
      <Col
        xs={12}
        lg={10}
        lgOffset={1}
      >
        <Row>
          <Col xs={12}>
            <SectionHeader>Portfolio</SectionHeader>
          </Col>
        </Row>
        <Row className={styles['content-wrapper']}>
          {portfolioImages.map((portfolio, index) =>
            <Col key={index} xs={6} lg={4}>
              <a className={styles['portfolio-link']} href={portfolio.url}>
                <img
                  className={styles['portfolio-images']}
                  src={portfolio.source}
                  role={portfolio.alt}
                />
              </a>
              <div className={styles['text-wrapper']}>
                <TextBlockHeader>{portfolio.title}</TextBlockHeader>
                <TextBlockSubheader>
                  {portfolio.description}
                </TextBlockSubheader>
              </div>
            </Col>,
          )}
        </Row>
      </Col>
    </Row>
  </Scroll.Element>;

export default Portfolio;
