import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'content';

const Contact = () =>
  <Scroll.Element name={sections[4].name}>
    {sections[4].title} Goes Here
  </Scroll.Element>;

export default Contact;
