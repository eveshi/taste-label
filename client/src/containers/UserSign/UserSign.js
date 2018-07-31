import React, { PureComponent } from 'react';
import SignInBox from '../../components/SignInBox/SignInBox';
import SignUpBox from '../../components/SignUpBox/SignUpBox';
import classes from './UserSign.css';
import Button from '../../components/Button/Button';

class UserSign extends PureComponent {
  state = {
    signInEmail: '',
    isSignInEmailValid: true,
    signInPassword: '',
    isSignInPasswordValid: true,
    signUpEmail: '',
    isSignUpEmailValid: true,
    signUpPassword: '',
    isSignUpPasswordValid: true,
    signUpUsername: '',
    isSignUpUsernameValid: true,
    signUpRepeatPassword: '',
    isSignUpRepeatPasswordValid: true,
    signInButtonStatus: classes.button_active,
    signUpButtonStatus: classes.button_notActive,
    showSignIn: null,
    showSignUp: classes.notShow,
  };

  signInEmailChangeHandler = (event) => {
    const { value } = event.target;
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!value.match(pattern)) {
      this.setState({
        signInEmail: value,
        isSignInEmailValid: false,
      });
    }

    if (value.match(pattern)) {
      this.setState({
        signInEmail: value,
        isSignInEmailValid: true,
      });
    }
  }

  signInPasswordChangeHandler = (event) => {
    const { value } = event.target;
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (!value.match(pattern)) {
      this.setState({
        signInPassword: value,
        isSignInPasswordValid: false,
      });
    }

    if (value.match(pattern)) {
      this.setState({
        signInPassword: value,
        isSignInPasswordValid: true,
      });
    }
  }

  signUpEmailChangeHandler = (event) => {
    const { value } = event.target;
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!value.match(pattern)) {
      this.setState({
        signUpEmail: value,
        isSignUpEmailValid: false,
      });
    }

    if (value.match(pattern)) {
      this.setState({
        signUpEmail: value,
        isSignUpEmailValid: true,
      });
    }
  }

  signUpPasswordChangeHandler = (event) => {
    const { value } = event.target;
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (!value.match(pattern)) {
      this.setState({
        signUpPassword: value,
        isSignUpPasswordValid: false,
      });
    }

    if (value.match(pattern)) {
      this.setState({
        signUpPassword: value,
        isSignUpPasswordValid: true,
      });
    }
  }

  signUpRepeatPasswordChangeHandler = (event) => {
    const { value } = event.target;
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (!value.match(pattern)) {
      this.setState({
        signUpRepeatPassword: value,
        isSignUpRepeatPasswordValid: false,
      });
    }

    if (value.match(pattern)) {
      this.setState({
        signUpRepeatPassword: value,
        isSignUpRepeatPasswordValid: true,
      });
    }
  }

  signUpUsernameChangeHandler = (event) => {
    const { value } = event.target;
    const pattern = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{2,29}$/igm;
    if (!value.match(pattern)) {
      this.setState({
        signUpUsername: value,
        isSignUpUsernameValid: false,
      });
    }

    if (value.match(pattern)) {
      this.setState({
        signUpUsername: value,
        isSignUpUsernameValid: true,
      });
    }
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
      isSignInEmailValid,
      signInPassword,
      isSignInPasswordValid,
      signUpEmail,
      isSignUpEmailValid,
      signUpPassword,
      isSignUpPasswordValid,
      signUpUsername,
      isSignUpUsernameValid,
      signUpRepeatPassword,
      isSignUpRepeatPasswordValid,
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
              isEmailValid={isSignInEmailValid}
              emailChangeHandler={event => signInEmailChangeHandler(event)}
              password={signInPassword}
              isPasswordValid={isSignInPasswordValid}
              passwordChangeHandler={event => signInPasswordChangeHandler(event)}
            />
          </div>
          <div className={showSignUp}>
            <SignUpBox
              email={signUpEmail}
              isEmailValid={isSignUpEmailValid}
              emailChangeHandler={event => signUpEmailChangeHandler(event)}
              username={signUpUsername}
              isUsernameValid={isSignUpUsernameValid}
              usernameChangeHandler={event => signUpUsernameChangeHandler(event)}
              password={signUpPassword}
              isPasswordValid={isSignUpPasswordValid}
              passwordChangeHandler={event => signUpPasswordChangeHandler(event)}
              repeatPassword={signUpRepeatPassword}
              isRepeatPasswordValid={isSignUpRepeatPasswordValid}
              repeatPasswordChangeHandler={event => signUpRepeatPasswordChangeHandler(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserSign;
