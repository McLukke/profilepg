import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import Scroll from 'react-scroll';
import { sections } from 'content';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import HighlightText from 'components/typography/highlight-text';

import styles from './styles.scss';

const Header = ({ showBg }) => (
  <nav className={cx(styles.base, { [styles['show-bg']]: showBg })}>
    <div className={styles['fixed-base']}>
      <Row>
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
          <div className={styles['link-wrapper']}>
            {sections.map((section, index) => (
              <Scroll.Link
                key={index}
                activeClass={styles.active}
                className={styles.link}
                to={section.name}
                spy
                smooth
                duration={500}
              >
                <HighlightText menu>{section.title}</HighlightText>
              </Scroll.Link>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  </nav>
);

Header.propTypes = {
  showBg: PropTypes.bool,
};

export default connect(({ homePage }) => ({
  showBg: homePage.showBg,
}))(Header);
