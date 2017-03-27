import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Scroll from 'react-scroll';
import { sections, myEducation } from 'content';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SectionHeader from 'components/typography/section-header';
import TextBlockSubheader from 'components/typography/text-block-subheader';
import TextBlockHeader from 'components/typography/text-block-header';

import styles from './styles.scss';

class IndividualEduBlock extends Component {
  static propTypes = {
    edu: PropTypes.shape({}),
  };

  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
  }

  handleMouseEnter = () => this.setState({ hovering: true });
  handleMouseExit = () => this.setState({ hovering: false });

  render() {
    const { edu } = this.props;
    const { hovering } = this.state;

    return (
      <Col
        xs={6}
        lg={3}
        className={styles['no-gutters']}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseExit}
      >
        <div className={styles['edu-block']}>
          <img src={edu.source} alt={edu.name} />
          <span
            className={cx(
              styles['text-overlay'],
              { [styles['is-hovering']]: hovering },
            )}
          >
            {edu.name}
          </span>
        </div>
      </Col>
    );
  }
}

const Education = () =>
  <Scroll.Element name={sections[1].name} className={styles.base}>
    <Row className={styles['no-margins']}>
      {myEducation.map(edu =>
        <IndividualEduBlock key={edu.id} edu={edu} />,
      )}
    </Row>
  </Scroll.Element>;

export default Education;
