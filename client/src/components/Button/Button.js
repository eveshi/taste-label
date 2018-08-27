import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.css';

const Button = (props) => {
  const {
    children,
    onClick,
    disabled,
  } = props;

  return (
    <button
      className={classes.button}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.string,
};

Button.defaultProps = {
  disabled: null,
};

export default Button;
