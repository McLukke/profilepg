import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { sections, homeContent } from 'content';
import kennyBg from 'images/backgrounds/kenny_bg.jpg';
// import kennyPortrait from 'images/backgrounds/kenny_bg2.jpg';
import SectionHeader from 'components/typography/section-header';
import HighlightText from 'components/typography/highlight-text';

import styles from './styles.scss';

export default class LandingImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

    this.setState({ width });
  }

  render() {
    const { width } = this.state;

    return (
      <Scroll.Element name={sections[0].name} className={styles.base}>
        <div className={styles['image-container']}>
          <img
            src={width >= 768 ? kennyBg : kennyBg}
            role="presentation"
            className={styles['background-image']}
          />
          <div className={styles['text-wrapper']}>
            <SectionHeader upsize red>{homeContent.title}</SectionHeader>

            <HighlightText italic>{homeContent.aboutMe}</HighlightText>
          </div>
        </div>
      </Scroll.Element>
    );
  }
}
