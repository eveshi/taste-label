import React from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
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
