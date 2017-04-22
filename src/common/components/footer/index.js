import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { footerContent } from 'content';
import HighlightText from 'components/typography/highlight-text';

import styles from './styles.scss';


const Footer = () =>
  <section className={styles.base}>
    <Row>
      <Col
        xs={10}
        xsOffset={1}
        sm={8}
        smOffset={2}
        md={6}
        mdOffset={3}
      >
        <HighlightText>
          {footerContent.contact}
        </HighlightText>

        <Row>
          <Col
            xs={12}
            sm={10}
            smOffset={1}
            lg={8}
            lgOffset={2}
          >
            <div className={styles['social-media-wrapper']}>
              {footerContent.socialMedia.map(media =>
                <img // eslint-disable-line
                  key={media.id}
                  className={styles['social-media']}
                  src={media.src}
                  alt={media.title}
                  onClick={() => window.open(media.goTo)}
                />,
              )}
            </div>
          </Col>
        </Row>

        <hr />

        <HighlightText>{footerContent.copyright.reserved}</HighlightText>
        <HighlightText>
          {footerContent.copyright.text}
        </HighlightText>
      </Col>
    </Row>
  </section>;

export default Footer;
