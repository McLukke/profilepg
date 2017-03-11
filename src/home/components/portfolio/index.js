import React, { Component, PropTypes } from 'react';
import Scroll from 'react-scroll';
import cx from 'classnames';
import { sections, portfolioImages } from 'content';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SectionHeader from 'components/typography/section-header';
import TextBlockHeader from 'components/typography/text-block-header';
import TextBlockSubheader from 'components/typography/text-block-subheader';

import styles from './styles.scss';

class PortfolioImage extends Component {
  static propTypes = {
    portfolio: PropTypes.shape({}),
  }

  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
  }

  handleMouseEnter = () => this.setState({ hovering: true });

  handleMouseExit = () => this.setState({ hovering: false });

  render() {
    const { portfolio } = this.props;
    const { hovering } = this.state;

    return (
      <Col xs={6} lg={4} className={styles['margin-bottom']}>
        <a
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseExit}
          className={styles['portfolio-link']}
          href={portfolio.url}
        >
          <img
            className={styles['portfolio-logos']}
            src={portfolio.source}
            role={portfolio.alt}
          />
          <div
            className={cx(
              styles['text-wrapper'],
              { [styles['hide-text-wrapper']]: hovering },
            )}
          >
            <TextBlockHeader>{portfolio.title}</TextBlockHeader>
            <TextBlockSubheader>
              {portfolio.description}
            </TextBlockSubheader>
          </div>
        </a>
      </Col>
    );
  }
}

const Portfolio = () =>
  <Scroll.Element name={sections[3].name} className={styles.base}>
    <Row>
      <Col
        xs={12}
        lg={8}
        lgOffset={2}
      >
        <Row className={styles['content-wrapper']}>
          {portfolioImages.map((portfolio, index) =>
            <PortfolioImage portfolio={portfolio} key={index} />,
          )}
        </Row>
      </Col>
    </Row>
  </Scroll.Element>;

export default Portfolio;
