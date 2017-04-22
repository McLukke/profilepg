/* eslint-disable */
// social media
import githubLogo from 'images/social-media/github.png';
import linkedinLogo from 'images/social-media/linkedin.png';
import meetupLogo from 'images/social-media/meetup.png';

// logos
import voilah from 'images/portfolio/voilah.svg';
import unitedAsia from 'images/portfolio/united_asia.svg';
import willeyPrinting from 'images/portfolio/willey_printing.svg';
import aveConcept from 'images/portfolio/ave_concept.svg';
import wrangler from 'images/portfolio/wrangler.jpg';
import pahk from 'images/portfolio/public_art_hk.svg';
import yesMaster from 'images/portfolio/yes_master.png';
import realMatters from 'images/portfolio/real_matters.svg';
import revalue from 'images/portfolio/revalue.svg';

// Education
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

// Work
import lightbulb from 'images/work/lightbulb.svg';
import clipboard from 'images/work/clipboard.svg';
import stand from 'images/work/stand.svg';

export const homeContent = {
  title: 'Kenny Lu',
  aboutMe: 'Front-end Focused Web Developer based in Toronto ON',
};

export const footerContent = {
  contact: 'Reach out to me',
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
    alt: 'Voilah!',
    url: '#',
  },
  {
    title: 'United Asia',
    description: 'Rappers across Asia unite!',
    source: unitedAsia,
    alt: 'United Asia',
    url: '#',
  },
  {
    title: 'Willey Printing',
    description: 'Traditional printing house in Hong Kong',
    source: willeyPrinting,
    alt: 'Willey Printing',
    url: '#',
  },
  {
    title: 'Ave Concept',
    description: 'High-end female intimate lifestyle products from Copenhagen',
    source: aveConcept,
    alt: 'Ave Concept',
    url: '#',
  },
  {
    title: 'Wrangler - True Wanderer',
    description: 'International motorbike contest, online registration website',
    source: wrangler,
    alt: 'Wrangler True Wanderer',
    url: '#',
  },
  {
    title: 'Public Art Hong Kong (PAHK)',
    description: 'NGO website for HK art gallery',
    source: pahk,
    alt: 'Public Art Hong Kong',
    url: '#',
  },
  {
    title: 'YesMaster!',
    description: 'A web and mobile Ecommerce shop with payment',
    source: yesMaster,
    alt: 'YesMaster!',
    url: '#',
  },
  {
    title: 'Real Matters',
    description: 'Corporate real estate website in ReactJS',
    source: realMatters,
    alt: 'Solidifi',
    url: '#',
  },
  {
    title: 'Revalue',
    description: 'React Native real estate mobile app',
    source: revalue,
    alt: 'Revalue',
    url: '#',
  },
];

export const myWorkExp = [
  {
    id: 301,
    title: 'Team Lead',
    description: 'I believe the world of software development is naturally chaotic and it is our duty to transform chaos into clarity and confidence. There are many things that I know I cannot fix but I do understand the value of trade-offs. Each mission I embark on has a fine balance between its business value, quality and future options that I always plan effectively and strive for continual progress.',
    svg: lightbulb,
  },
  {
    id: 302,
    title: 'Fearless',
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

export const myEducation = [
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
    id: 204,
    source: mySass,
    name: 'SASS',
  },
  {
    id: 208,
    source: myBabel,
    name: 'Babel',
  },
  {
    id: 205,
    source: myRedux,
    name: 'Redux',
  },
  {
    id: 207,
    source: myPhp,
    name: 'PHP',
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

export const mySkills = [
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
    name: 'education',
    title: 'Education',
  },
  {
    name: 'work',
    title: 'Work',
  },
  {
    name: 'skills',
    title: 'Skills',
  },
  {
    name: 'portfolio',
    title: 'Portfolio',
  },
];
