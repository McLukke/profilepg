import React from 'react';
import Scroll from 'react-scroll';
import { sections, homeContent } from 'content';
import kennyBg from 'images/backgrounds/kenny_bg.jpg';
import SectionHeader from 'components/typography/section-header';
import HighlightText from 'components/typography/highlight-text';

import styles from './styles.scss';

const LandingImage = () =>
  <Scroll.Element name={sections[0].name} className={styles.base}>
    <div className={styles['image-container']}>
      <img
        src={kennyBg}
        role="presentation"
        className={styles['background-image']}
      />
      <div className={styles['text-wrapper']}>
        <SectionHeader upsize red>{homeContent.title}</SectionHeader>

        <HighlightText italic>{homeContent.aboutMe}</HighlightText>
      </div>
    </div>
  </Scroll.Element>;

export default LandingImage;
