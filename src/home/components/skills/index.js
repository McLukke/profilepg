import React from 'react';
import Scroll from 'react-scroll';
import { mySkills, sections } from 'content';
import { Circle } from 'rc-progress';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import carBg from 'images/backgrounds/car_bg.jpg';

import styles from './styles.scss';

const Skills = () =>
  <Scroll.Element name={sections[2].name} className={styles.base}>
    <div className={styles['image-container']}>
      <img src={carBg} alt="" className={styles['car-bg']} />
    </div>
    <div className={styles['content-wrapper']}>
      <Row style={{ flex: 1 }}>
        <Col
          xs={10}
          xsOffset={1}
          md={8}
          mdOffset={2}
        >
          <Row>
            {mySkills.map((skill, index) =>
              <Col
                key={index}
                className={styles['progress-bar-wrapper']}
                xs={6}
                lg={3}
              >
                <Circle
                  strokeWidth="12"
                  trailWidth="12"
                  percent={skill.percentage}
                  strokeLinecap="square"
                  trailColor="#373737"
                  strokeColor="#ff4646"
                />
                <span className={styles['skill-title']}>
                  {skill.name}
                </span>
              </Col>,
            )}
          </Row>
        </Col>
      </Row>
    </div>
  </Scroll.Element>;

export default Skills;
