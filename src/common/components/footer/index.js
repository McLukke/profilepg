import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { footerContent } from 'content';

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
        <div>{footerContent.title}</div>
        <div>{footerContent.finalThought}</div>
        {footerContent.socialMedia.map(media =>
          <div
            key={media.id}
            className={styles['social-media']}
            onClick={() => console.log('hello')}
          >
            <img src={media.src} alt={media.title} />
          </div>
        )}
        <div>FB / Google / Linkedin / Twitter / Youtube</div>

        <hr />

        <div>{footerContent.copyright.reserved}</div>
        <div>
          {footerContent.copyright.text} <a href={footerContent.copyright.url}>{footerContent.copyright.urlText}</a>
        </div>
      </Col>
    </Row>
  </section>;

export default Footer;
