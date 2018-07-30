import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import classes from './SignUpBox.css';

const SignUpBox = (props) => {
  const {
    email,
    emailChangeHandler,
    password,
    passwordChangeHandler,
    username,
    usernameChangeHandler,
    repeatPassword,
    repeatPasswordChangeHandler,
  } = props;

  return (
    <div className={classes.signUpBox}>
      <div className={classes.signUpBox__input}>
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
      <div className={classes.signUpBox__input}>
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
      <div className={classes.signUpBox__input}>
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
      <div className={classes.signUpBox__input}>
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
        <Button>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

SignUpBox.propTypes = {
  email: PropTypes.string.isRequired,
  emailChangeHandler: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordChangeHandler: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  usernameChangeHandler: PropTypes.func.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  repeatPasswordChangeHandler: PropTypes.func.isRequired,
};

export default SignUpBox;
