import React, { PropTypes } from 'react';
import Loading from 'react-loading';

const Loader = ({
  colour,
}) =>
  <Loading type="bubbles" color={colour || 'blue'} />;

Loader.propTypes = {
  colour: PropTypes.string,
};

export default Loader;
