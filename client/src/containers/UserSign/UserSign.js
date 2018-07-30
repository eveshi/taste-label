import React, { PureComponent } from 'react';
import SignInBox from '../../components/SignInBox/SignInBox';
import SignUpBox from '../../components/SignUpBox/SignUpBox';
import classes from './UserSign.css';
import Button from '../../components/Button/Button';

class UserSign extends PureComponent {
  state = {
    signInEmail: '',
    signInPassword: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpUsername: '',
    signUpRepeatPassword: '',
    signInButtonStatus: classes.button_active,
    signUpButtonStatus: classes.button_notActive,
    showSignIn: null,
    showSignUp: classes.notShow,
  };

  signInEmailChangeHandler = () => {
    console.log('1');
  }

  signInPasswordChangeHandler = () => {
    console.log('2');
  }

  signUpEmailChangeHandler = () => {
    console.log('2');
  }

  signUpPasswordChangeHandler = () => {
    console.log('2');
  }

  signUpRepeatPasswordChangeHandler = () => {
    console.log('2');
  }

  signUpUsernameChangeHandler = () => {
    console.log('2');
  }

  showSignInHandler = () => {
    this.setState({
      signInButtonStatus: classes.button_active,
      signUpButtonStatus: classes.button_notActive,
      showSignIn: null,
      showSignUp: classes.notShow,
    });
  }

  showSignUpHandler = () => {
    this.setState({
      signInButtonStatus: classes.button_notActive,
      signUpButtonStatus: classes.button_active,
      showSignIn: classes.notShow,
      showSignUp: null,
    });
  }

  render() {
    const {
      signInEmail,
      signInPassword,
      signUpEmail,
      signUpPassword,
      signUpUsername,
      signUpRepeatPassword,
      signInButtonStatus,
      signUpButtonStatus,
      showSignIn,
      showSignUp,
    } = this.state;

    const {
      signInEmailChangeHandler,
      signInPasswordChangeHandler,
      signUpEmailChangeHandler,
      signUpPasswordChangeHandler,
      signUpUsernameChangeHandler,
      signUpRepeatPasswordChangeHandler,
      showSignInHandler,
      showSignUpHandler,
    } = this;

    return (
      <div className={classes.userSign}>
        <div className={classes.box}>
          <div className={classes.box__title}>
            <div className={signUpButtonStatus}>
              <Button onClick={showSignUpHandler}>
                Sign Up
              </Button>
            </div>
            <div className={signInButtonStatus}>
              <Button onClick={showSignInHandler}>
                Sign In
              </Button>
            </div>
          </div>
          <div className={showSignIn}>
            <SignInBox
              email={signInEmail}
              emailChangeHandler={signInEmailChangeHandler}
              password={signInPassword}
              passwordChangeHandler={signInPasswordChangeHandler}
            />
          </div>
          <div className={showSignUp}>
            <SignUpBox
              email={signUpEmail}
              emailChangeHandler={signUpEmailChangeHandler}
              username={signUpUsername}
              usernameChangeHandler={signUpUsernameChangeHandler}
              password={signUpPassword}
              passwordChangeHandler={signUpPasswordChangeHandler}
              repeatPassword={signUpRepeatPassword}
              repeatPasswordChangeHandler={signUpRepeatPasswordChangeHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserSign;
