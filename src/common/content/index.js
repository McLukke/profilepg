/* eslint-disable */
// social media
import githubLogo from 'images/social-media/github.png';
import linkedinLogo from 'images/social-media/linkedin.png';
import meetupLogo from 'images/social-media/meetup.png';

// logos
import voilah from 'images/portfolio/voilah.jpg';
import uniteAsia from 'images/portfolio/unite_asia.jpg';
import willeyPrinting from 'images/portfolio/willey_printing.jpg';
import aveConcept from 'images/portfolio/ave_concept.jpg';
import wrangler from 'images/portfolio/wrangler.jpg';
import pahk from 'images/portfolio/public_art_hk.jpg';
import yesMaster from 'images/portfolio/yes_master.jpg';
import realMatters from 'images/portfolio/real_matters.jpg';
import revalue from 'images/portfolio/revalue.jpg';

// backdrops
import voilahBg from 'images/portfolio/1000x800voilah.jpg';
import uniteAsiaBg from 'images/portfolio/1000x800unite_asia.jpg';
import willeyPrintingBg from 'images/portfolio/1000x800willey_printing.jpg';
import aveConceptBg from 'images/portfolio/1000x800ave_concept.jpg';
import wranglerBg from 'images/portfolio/1000x800wrangler.jpg';
import pahkBg from 'images/portfolio/1000x800public_art_hk.jpg';
import yesMasterBg from 'images/portfolio/1000x800yes_master.jpg';
import realMattersBg from 'images/portfolio/1000x800real_matters.jpg';
import revalueBg from 'images/portfolio/revalue.png';

// My Daily Tools
import myGithub from 'images/education/github.jpg';
import myNodejs from 'images/education/node.jpg';
import myReact from 'images/education/reactjs.jpg';
import myPhp from 'images/education/php.jpg';
import myBabel from 'images/education/babel.jpg';
import myGraphQL from 'images/education/graphql.jpg';
import mySass from 'images/education/sass.jpg';
import myRedux from 'images/education/redux.jpg';
import myWP from 'images/education/wp.jpg';
import myDocker from 'images/education/docker.jpg';
import myApple from 'images/education/apple.jpg';
import myAndroid from 'images/education/android.jpg';

// My Character
import lightbulb from 'images/work/lightbulb.svg';
import clipboard from 'images/work/clipboard.svg';
import stand from 'images/work/stand.svg';

export const homeContent = {
  title: 'Kenny Lu',
  aboutMe: 'Front-end Focused Web Developer based in Toronto ON',
};

export const footerContent = {
  contact: 'Reach out',
  socialMedia: [
    {
      id: 701,
      title: 'Github',
      src: githubLogo,
      goTo: 'https://github.com/mclukke',
    },
    {
      id: 702,
      title: 'LinkedIn',
      src: linkedinLogo,
      goTo: 'https://www.linkedin.com/in/kenshengjialu/',
    },
    {
      id: 703,
      title: 'Meetup',
      src: meetupLogo,
      goTo: 'https://www.meetup.com/members/131868792/',
    },
  ],
  copyright: {
    reserved: 'All Rights Reserved!',
    text: 'Copyright © 2017',
    url: 'http://whynotkenny.com',
    urlText: 'WhyNotKenny',
  },
};

export const portfolioImages = [
  {
    title: 'Voilah!',
    description: 'A fashion eshop from Singapore',
    source: voilah,
    backdrop: voilahBg,
    alt: 'Voilah!',
    url: 'https://www.voilah.com/',
  },
  {
    title: 'United Asia',
    description: 'Rappers across Asia unite!',
    source: uniteAsia,
    backdrop: uniteAsiaBg,
    alt: 'United Asia',
    url: 'https://uniteasia.org/',
  },
  {
    title: 'Willey Printing',
    description: 'Traditional printing house in Hong Kong',
    source: willeyPrinting,
    backdrop: willeyPrintingBg,
    alt: 'Willey Printing',
    url: 'http://www.willey.com.hk/',
  },
  {
    title: 'Ave Concept',
    description: 'High-end female intimate lifestyle products from Copenhagen',
    source: aveConcept,
    backdrop: aveConceptBg,
    alt: 'Ave Concept',
    url: 'https://www.aveconcept.com/',
  },
  {
    title: 'Wrangler - True Wanderer',
    description: 'International motorbike contest, online registration website',
    source: wrangler,
    backdrop: wranglerBg,
    alt: 'Wrangler True Wanderer',
    url: 'https://www.wrangler-ap.com/in/truewanderer',
  },
  {
    title: 'Public Art Hong Kong (PAHK)',
    description: 'NGO website for HK art gallery',
    source: pahk,
    backdrop: pahkBg,
    alt: 'Public Art Hong Kong',
    url: 'http://publicart.org.hk/',
  },
  {
    title: 'YesMaster!',
    description: 'A web and mobile Ecommerce shop with payment',
    source: yesMaster,
    backdrop: yesMasterBg,
    alt: 'YesMaster!',
    url: 'https://www.yesmaster.com.hk',
  },
  {
    title: 'Real Matters',
    description: 'Corporate real estate website in ReactJS',
    source: realMatters,
    backdrop: realMattersBg,
    alt: 'Real Matters',
    url: 'http://www.realmatters.com/',
  },
  {
    title: 'Revalue',
    description: 'React Native real estate mobile app',
    source: revalue,
    backdrop: revalueBg,
    alt: 'Revalue',
    url: 'https://play.google.com',
  },
];

export const myCharacter = [
  {
    id: 301,
    title: 'Responsible',
    description: 'I believe the world of software development is naturally chaotic and it is our duty to transform chaos into clarity and confidence. There are many things that I know I cannot fix but I do understand the value of trade-offs. Each mission I embark on has a fine balance between its business value, quality and future options that I always plan effectively and strive for continual progress.',
    svg: lightbulb,
  },
  {
    id: 302,
    title: 'Adventurous',
    description: 'I fearlessly jump into code. I own my code and I’m passionate about producing working systems. Im also a strong believer of helping and sharing my work and knowledge with others. Im never shy of asking for help and understanding complex systems. By being openly passionate I create positivity and optimism with team members and gain trust and respect.',
    svg: stand,
  },
  {
    id: 303,
    title: 'Agile',
    description: 'I strive to deliver strong working code. My personal philosophy is to be fast and responsive towards making decisions, be knowledgeable for credibility and unblocking stucks, try new technologies early on, focus on driving business value and visibility of progress for everyone.',
    svg: clipboard,
  },
];

export const myDailyTools = [
  {
    id: 203,
    source: myNodejs,
    name: 'NodeJS',
  },
  {
    id: 201,
    source: myGithub,
    name: 'GitHub',
  },
  {
    id: 206,
    source: myReact,
    name: 'React',
  },
  {
    id: 202,
    source: myGraphQL,
    name: 'GraphQL',
  },
  {
    id: 208,
    source: myBabel,
    name: 'Babel',
  },
  {
    id: 204,
    source: mySass,
    name: 'SASS',
  },
  {
    id: 207,
    source: myPhp,
    name: 'PHP',
  },
  {
    id: 205,
    source: myRedux,
    name: 'Redux',
  },
  {
    id: 209,
    source: myWP,
    name: 'Wordpress',
  },
  {
    id: 210,
    source: myDocker,
    name: 'Docker',
  },
  {
    id: 211,
    source: myAndroid,
    name: 'Android',
  },
  {
    id: 212,
    source: myApple,
    name: 'Apple',
  },
];

export const myStats = [
  {
    name: 'HTML5',
    percentage: 74,
  },
  {
    name: 'CSS3',
    percentage: 81,
  },
  {
    name: 'Javascript',
    percentage: 91,
  },
  {
    name: 'PHP',
    percentage: 66,
  },
];

export const sections = [
  {
    name: 'home',
    title: 'Home',
  },
  {
    name: 'dailyTools',
    title: 'Daily Tools',
  },
  {
    name: 'character',
    title: 'Character',
  },
  {
    name: 'stats',
    title: 'Stats',
  },
  {
    name: 'portfolio',
    title: 'Portfolio',
  },
];
