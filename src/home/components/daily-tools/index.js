import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Scroll from 'react-scroll';
import { sections, myDailyTools } from 'content';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from './styles.scss';

class IndividualEduBlock extends Component {
  static propTypes = {
    edu: PropTypes.shape({}),
    index: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
  }

  findSmOffsets = (index) => {
    let pushAmount = 0;
    let pullAmount = 0;

    switch (index) {
      case 2:
        pushAmount = 6;
        break;
      case 6:
        pushAmount = 6;
        break;
      case 10:
        pushAmount = 6;
        break;

      case 3:
        pullAmount = 6;
        break;
      case 7:
        pullAmount = 6;
        break;
      case 11:
        pullAmount = 6;
        break;
      default:
        break;
    }

    return [pullAmount, pushAmount];
  }

  findLgOffsets = (index) => {
    let pushAmount = 0;
    let pullAmount = 0;

    switch (index) {
      case 4:
        pushAmount = 3;
        break;
      case 6:
        pushAmount = 3;
        break;

      case 5:
        pullAmount = 3;
        break;
      case 7:
        pullAmount = 3;
        break;
      default:
        break;
    }

    return [pullAmount, pushAmount];
  }

  handleMouseEnter = () => this.setState({ hovering: true });
  handleMouseExit = () => this.setState({ hovering: false });

  render() {
    const { edu, index } = this.props;
    const { hovering } = this.state;

    const [smPull, smPush] = this.findSmOffsets(index);
    const [lgPull, lgPush] = this.findLgOffsets(index);

    return (
      <Col
        xs={12}
        sm={6}
        lg={3}
        smPull={smPull}
        smPush={smPush}
        lgPull={lgPull}
        lgPush={lgPush}
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
          />
        </div>
      </Col>
    );
  }
}

const DailyTools = () =>
  <Scroll.Element name={sections[1].name} className={styles.base}>
    <Row className={styles['no-margins']}>
      {myDailyTools.map((edu, index) =>
        <IndividualEduBlock key={edu.id} edu={edu} index={index} />,
      )}
    </Row>
  </Scroll.Element>;

export default DailyTools;
