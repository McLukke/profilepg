import React from 'react';
import Scroll from 'react-scroll';
import { sections } from 'content';

const Contact = () =>
  <Scroll.Element name={sections[5].name}>
    {sections[5].title} Goes Here
  </Scroll.Element>;

export default Contact;
