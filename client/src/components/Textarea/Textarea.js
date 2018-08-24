import React from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import classes from './Textarea.css';

const Textarea = (props) => {
  const {
    maxLength,
    value,
    placeholder,
    onChange,
    inputLength,
  } = props;

  return (
    <div className={classes.textarea}>
      <textarea
        className={classes.textarea_area}
        maxLength={maxLength}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className={classes.textarea_length}>
        {inputLength}
        /
        {maxLength}
      </p>
    </div>
  );
};

Textarea.propTypes = {
  maxLength: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputLength: PropTypes.number.isRequired,
};

export default Textarea;
