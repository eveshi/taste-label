import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import NoBorderButton from '../NoBorderButton/NoBorderButton';
import classes from './SignInBox.css';

const SignInBox = (props) => {
  const {
    email,
    emailChangeHandler,
    isEmailValid,
    password,
    passwordChangeHandler,
    isPasswordValid,
    submitTrigger,
    submitDisabled,
    onClick,
  } = props;

  let emailValidationClass = classes.signInBox__input;
  let passwordValidationClass = classes.signInBox__input;

  if (isEmailValid === false) {
    emailValidationClass = classes.signInBox__emailNotValid;
  }

  if (isPasswordValid === false) {
    passwordValidationClass = classes.signInBox__passwordNotValid;
  }

  return (
    <div className={classes.signInBox}>
      <div className={emailValidationClass}>
        <p>
          email:
        </p>
        <Input
          maxLength="30"
          value={email}
          placeholder="..."
          onChange={emailChangeHandler}
        />
      </div>
      <div className={passwordValidationClass}>
        <p>
          password:
        </p>
        <Input
          maxLength="30"
          type="password"
          value={password}
          placeholder="..."
          onChange={passwordChangeHandler}
        />
      </div>
      <div className={classes.signInBox__button}>
        <Button
          disabled={submitDisabled}
          onClick={onClick}
        >
          Sign In
        </Button>
        <div className={classes.signInBox__button_forgetPassword}>
          <NoBorderButton onClick={submitTrigger}>
            forget password
          </NoBorderButton>
        </div>
      </div>
    </div>
  );
};

SignInBox.propTypes = {
  email: PropTypes.string.isRequired,
  isEmailValid: PropTypes.bool.isRequired,
  emailChangeHandler: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  isPasswordValid: PropTypes.bool.isRequired,
  passwordChangeHandler: PropTypes.func.isRequired,
  submitTrigger: PropTypes.func.isRequired,
  submitDisabled: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SignInBox;
