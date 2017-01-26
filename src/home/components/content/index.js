import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

import LandingImage from '../landing-image';
import Work from '../work';
import Skills from '../skills';
import Portfolio from '../portfolio';
import Contact from '../contact';

import styles from './styles.scss';

const HomePageContent = () =>
  <section className={styles.main}>
    <Header />
    <LandingImage />
    <Work />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </section>;

export default HomePageContent;
