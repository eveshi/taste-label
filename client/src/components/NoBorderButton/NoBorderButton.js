import React from 'react';
import PropTypes from 'prop-types';
import classes from './NoBorderButton.css';

const NoBorderButton = (props) => {
  const {
    children,
    onClick,
  } = props;

  return (
    <button
      className={classes.noBorderButton}
      type="button"
      onClick={onClick}
    >
      { children }
    </button>
  );
};

NoBorderButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NoBorderButton;
