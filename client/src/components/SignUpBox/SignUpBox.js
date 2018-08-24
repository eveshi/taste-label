import React from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import classes from './SignUpBox.css';

const SignUpBox = (props) => {
  const {
    email,
    isEmailValid,
    emailChangeHandler,
    password,
    isPasswordValid,
    passwordChangeHandler,
    username,
    isUsernameValid,
    usernameChangeHandler,
    repeatPassword,
    isRepeatPasswordValid,
    repeatPasswordChangeHandler,
    submitTrigger,
    submitDisabled,
  } = props;

  let emailValidationClass = classes.signUpBox__input;
  let passwordValidationClass = classes.signUpBox__input;
  let repeatPasswordValidationClass = classes.signUpBox__input;
  let usernameValidationClass = classes.signUpBox__input;

  if (isEmailValid === false) {
    emailValidationClass = classes.signUpBox__emailNotValid;
  }

  if (isPasswordValid === false) {
    passwordValidationClass = classes.signUpBox__passwordNotValid;
  }

  if (isRepeatPasswordValid === false) {
    repeatPasswordValidationClass = classes.signUpBox__repeatPasswordNotValid;
  }

  if (isUsernameValid === false) {
    usernameValidationClass = classes.signUpBox__usernameNotValid;
  }

  return (
    <div className={classes.signUpBox}>
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
      <div className={usernameValidationClass}>
        <p>
          username:
        </p>
        <Input
          maxLength="30"
          value={username}
          placeholder="..."
          onChange={usernameChangeHandler}
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
      <div className={repeatPasswordValidationClass}>
        <p>
          repeat password:
        </p>
        <Input
          maxLength="30"
          type="password"
          value={repeatPassword}
          placeholder="..."
          onChange={repeatPasswordChangeHandler}
        />
      </div>
      <div className={classes.signUpBox__button}>
        <Button
          onClick={submitTrigger}
          disabled={submitDisabled}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

SignUpBox.propTypes = {
  email: PropTypes.string.isRequired,
  isEmailValid: PropTypes.bool.isRequired,
  emailChangeHandler: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  isPasswordValid: PropTypes.bool.isRequired,
  passwordChangeHandler: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  isUsernameValid: PropTypes.bool.isRequired,
  usernameChangeHandler: PropTypes.func.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  isRepeatPasswordValid: PropTypes.bool.isRequired,
  repeatPasswordChangeHandler: PropTypes.func.isRequired,
  submitTrigger: PropTypes.func.isRequired,
  submitDisabled: PropTypes.string.isRequired,
};

export default SignUpBox;
