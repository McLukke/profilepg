import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { footerContent } from 'content';

import styles from './styles.scss';

class SocialMediaIcon extends Component {
  static propTypes = {
    media: PropTypes.shape({}),
    bigger: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    };
  }

  turnHoverOn = () => this.setState({ hovering: true });

  turnHoverOff = () => this.setState({ hovering: false });

  render() {
    const { media, bigger } = this.props;

    return (
      <div
        key={media.id}
        className={cx(
          styles['social-media'],
          { [styles['is-hovering']]: this.state.hovering },
          { [styles.bigger]: bigger },
        )}
        onMouseEnter={this.turnHoverOn}
        onMouseLeave={this.turnHoverOff}
      >
        <img src={media.src} alt={media.title} />
      </div>
    );
  }
}

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
                <SocialMediaIcon bigger key={media.id} media={media} />,
              )}
            </div>

            <div className={styles.development}>
              {footerContent.development.map(dev =>
                <SocialMediaIcon key={dev.id} media={dev} />,
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
