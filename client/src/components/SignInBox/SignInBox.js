import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import classes from './SignInBox.css';

const SignInBox = (props) => {
  const {
    email,
    emailChangeHandler,
    password,
    passwordChangeHandler,
  } = props;

  return (
    <div className={classes.signInBox}>
      <div className={classes.signInBox__input}>
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
      <div className={classes.signInBox__input}>
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
        <Button>
          Sign In
        </Button>
        <div className={classes.signInBox__button_forgetPassword}>
          <Button>
            forget password
          </Button>
        </div>
      </div>
    </div>
  );
};

SignInBox.propTypes = {
  email: PropTypes.string.isRequired,
  emailChangeHandler: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordChangeHandler: PropTypes.func.isRequired,
};

export default SignInBox;
