import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Scroll from 'react-scroll';
import { sections, portfolioImages } from 'content';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

import styles from './styles.scss';


class Portfolio extends Component {
  static propTypes = {
    portfolio: PropTypes.shape({}),
  }

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedPortfolio: null,
    };
  }

  toggleModal = (portfolio) => {
    this.setState({
      ...this.state,
      showModal: !this.state.showModal,
      selectedPortfolio: portfolio,
    });
  }

  render() {
    const { showModal, selectedPortfolio } = this.state;

    return (
      <Scroll.Element name={sections[4].name} className={styles.base}>
        {selectedPortfolio && <Modal
          show={showModal}
          bsSize="large"
          onHide={() => this.toggleModal(null)}
        >
          <Modal.Header>
            {selectedPortfolio.title}
          </Modal.Header>

          <Modal.Body className={styles['job-detail']}>
            <img
              className={cx({ [styles.revalue]: selectedPortfolio.alt === 'Revalue' })}
              src={selectedPortfolio.backdrop}
              alt={selectedPortfolio.alt}
            />

            <div className={styles['description-text']}>
              <div>Highlights:</div>
              <br />
              <div>{selectedPortfolio.description}</div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={() => this.toggleModal(null)}
            >Close</Button>
            <Button
              bsStyle="danger"
              onClick={() => window.open(selectedPortfolio.url)}
            >Visit Site</Button>
          </Modal.Footer>
        </Modal>
        }

        <Row>
          <Col
            xs={12}
            lg={8}
            lgOffset={2}
          >
            <Row className={styles['content-wrapper']}>
              {portfolioImages.map((portfolio, index) =>
                <Col key={index} xs={6} lg={4} className={styles['portfolio-image-base']}>
                  <div className={styles['portfolio-image-wrapper']}>
                    <a
                      href=""
                      className={styles['portfolio-link']}
                      onClick={(e) => {
                        e.preventDefault();
                        this.toggleModal(portfolio);
                      }}
                    >
                      <img
                        className={styles['portfolio-logos']}
                        src={portfolio.source}
                        role={portfolio.alt}
                      />
                    </a>
                  </div>
                </Col>,
              )}
            </Row>
          </Col>
        </Row>
      </Scroll.Element>
    );
  }
}

export default Portfolio;
