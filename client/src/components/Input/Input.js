import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.css';

const Input = (props) => {
  const {
    maxLength,
    placeholder,
    value,
    onKeyPress,
    onChange,
  } = props;

  return (
    <input
      className={classes.input}
      type="text"
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onKeyPress={onKeyPress}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  maxLength: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
