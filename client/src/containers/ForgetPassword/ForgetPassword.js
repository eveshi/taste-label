import React, { PureComponent } from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import classes from './ForgetPassword.css';

class ForgetPassword extends PureComponent {
  state = {
    emailValue: '',
    codeValue: '',
    inputEmailClass: classes.displayShow,
    inputCodeClass: classes.displayNone,
    emailValidClass: null,
    codeValidClass: null,
    emailSubmitDisabled: 'disabled',
    codeSubmitDisabeld: 'disabled',
  }

  emailChangeHnadler = (event) => {
    const { value } = event.target;
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!value.match(pattern)) {
      console.log('here');
      this.setState({
        emailValue: value,
        emailValidClass: classes.notValidEmail,
        emailSubmitDisabled: 'disabled',
      });
    }

    if (value.match(pattern)) {
      this.setState({
        emailValue: value,
        emailValidClass: null,
        emailSubmitDisabled: null,
      });
    }
  }

  codeChangeHnadler = (event) => {
    const { value } = event.target;
    if (value === '') {
      this.setState({
        codeValue: value,
        codeValidClass: classes.notValidCode,
        codeSubmitDisabeld: 'disabled',
      });
    }

    if (value !== '') {
      this.setState({
        codeValue: value,
        codeValidClass: null,
        codeSubmitDisabeld: null,
      });
    }
  }

  submitEmail = () => {
    console.log('email');
    this.setState({
      inputEmailClass: classes.displayNone,
      inputCodeClass: classes.displayShow,
    });
  }

  submitCode = () => {
    console.log('code');
  }

  render() {
    const {
      emailValue,
      codeValue,
      inputEmailClass,
      inputCodeClass,
      codeSubmitDisabeld,
      emailSubmitDisabled,
      emailValidClass,
      codeValidClass,
    } = this.state;

    const {
      emailChangeHnadler,
      submitEmail,
      codeChangeHnadler,
      submitCode,
    } = this;

    return (
      <div className={classes.forgetPassword}>
        <div className={inputEmailClass}>
          <p>
            please input your sign in email:
          </p>
          <div className={emailValidClass}>
            <Input
              maxLength="30"
              placeholder="your email"
              value={emailValue}
              onChange={event => emailChangeHnadler(event)}
            />
          </div>
          <Button
            onClick={submitEmail}
            disabled={emailSubmitDisabled}
          >
            submit
          </Button>
        </div>
        <div className={inputCodeClass}>
          <p>
            please input your verify code:
          </p>
          <div className={codeValidClass}>
            <Input
              maxLength="6"
              placeholder="verify code"
              value={codeValue}
              onChange={event => codeChangeHnadler(event)}
            />
          </div>
          <Button
            onClick={submitCode}
            disabled={codeSubmitDisabeld}
          >
            submit
          </Button>
        </div>
      </div>
    );
  }
}

export default ForgetPassword;
