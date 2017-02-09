import React from 'react';
import Scroll from 'react-scroll';
import { sections, portfolioImages } from 'constants';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from './styles.scss';

const Portfolio = () =>
  <Scroll.Element name={sections[3].name} className={styles.base}>
    <Row>
      <Col
        xs={12}
        md={10}
        mdOffset={1}
        lg={8}
        lgOffset={2}
        style={{ border: '1px solid red' }}
      >
        <Row>
          {portfolioImages.map((portfolio, index) =>
            <Col key={index} xs={4}>
              <a href={portfolio.url}>
                <img
                  className={styles['portfolio-images']}
                  src={portfolio.source}
                  role={portfolio.alt}
                />
              </a>
            </Col>,
          )}
        </Row>
      </Col>
    </Row>
  </Scroll.Element>;

export default Portfolio;
