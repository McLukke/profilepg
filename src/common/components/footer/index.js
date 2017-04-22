import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { footerContent } from 'content';
import FooterTitle from 'components/typography/footer-title';

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
        <FooterTitle>
          {footerContent.contact}
        </FooterTitle>

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
                  onClick={media.goTo}
                />,
              )}
            </div>
          </Col>
        </Row>

        <hr />

        <div>{footerContent.copyright.reserved}</div>
        <div>
          {footerContent.copyright.text} <a href={footerContent.copyright.url}>
            {footerContent.copyright.urlText}
          </a>
        </div>
      </Col>
    </Row>
  </section>;

export default Footer;
