import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

import LandingImage from '../landing-image';
import Education from '../education';
import Work from '../work';
import Skills from '../skills';
import Portfolio from '../portfolio';

import styles from './styles.scss';

const HomePageContent = () =>
  <section className={styles.main}>
    <Header />
    <LandingImage />
    <Education />
    <Work />
    <Skills />
    <Portfolio />
    <Footer />
  </section>;

export default HomePageContent;
