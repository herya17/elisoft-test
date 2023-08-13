import React from 'react';
import PropTypes from 'prop-types';

function ActionButton({ text }) {
  return (
    <button type='submit'>{text}</button>
  );
}

export default ActionButton;

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
}
