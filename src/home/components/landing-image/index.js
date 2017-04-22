import React from 'react';
import Scroll from 'react-scroll';
import { sections, homeContent } from 'content';
import kennyBg from 'images/backgrounds/kenny_bg.jpg';
import SectionHeader from 'components/typography/section-header';
import TextBlock from 'components/typography/text-block';

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
        <SectionHeader red>{homeContent.title}</SectionHeader>
        <TextBlock red>{homeContent.aboutMe}</TextBlock>
      </div>
    </div>
  </Scroll.Element>;

export default LandingImage;
