import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

import LandingImage from '../landing-image';
import Work from '../work';
import Skills from '../skills';
import Portfolio from '../portfolio';
import Contact from '../contact';

const HomePageContent = () =>
  <div style={{ border: '1px solid blue' }}>
    <Header />
    <LandingImage />
    <Work />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </div>;

export default HomePageContent;
