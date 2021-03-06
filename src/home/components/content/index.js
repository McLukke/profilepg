import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

import LandingImage from '../landing-image';
import DailyTools from '../daily-tools';
import Character from '../character';
import Stats from '../stats';
import Portfolio from '../portfolio';

import styles from './styles.scss';

const HomePageContent = () =>
  <section className={styles.main}>
    <Header />
    <LandingImage />
    <DailyTools />
    <Character />
    <Stats />
    <Portfolio />
    <Footer />
  </section>;

export default HomePageContent;
