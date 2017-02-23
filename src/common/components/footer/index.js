import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { footerContent } from 'content';

import styles from './styles.scss';

class SocialMediaIcon extends Component {
  static propTypes = {
    media: PropTypes.shape({}),
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
    const { media } = this.props;

    return (
      <div
        key={media.id}
        className={cx(
          styles['social-media'],
          { [styles['is-hovering']]: this.state.hovering },
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
        <div>{footerContent.title}</div>
        <div>{footerContent.finalThought}</div>
        <Row>
          <Col
            xs={12}
            sm={10}
            smOffset={1}
            lg={8}
            lgOffset={2}
            className={styles['social-media-wrapper']}
          >
            {footerContent.socialMedia.map(media =>
              <SocialMediaIcon key={media.id} media={media} />,
            )}
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
