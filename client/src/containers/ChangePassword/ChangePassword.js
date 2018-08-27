import React, { PureComponent } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import classes from './ChangePassword.css';

class ChangePassword extends PureComponent {
  state = {
    newPasswordValue: '',
    repeatNewPasswordValue: '',
    newPasswordValidClass: null,
    repeatNewPasswordValidClass: null,
    newPasswordSubmitDisabeld: 'disabled',
  }

  newPasswordChangeHnadler = (event) => {
    const { value } = event.target;
    const { repeatNewPasswordValue } = this.state;
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    let submitDisabled = 'disabled';
    if (value.match(pattern) && value === repeatNewPasswordValue) {
      submitDisabled = null;
    }

    if (!value.match(pattern)) {
      this.setState({
        newPasswordValue: value,
        newPasswordValidClass: classes.notValidNewPassword,
        newPasswordSubmitDisabeld: submitDisabled,
      });
    }

    if (value.match(pattern)) {
      this.setState({
        newPasswordValue: value,
        newPasswordValidClass: null,
        newPasswordSubmitDisabeld: submitDisabled,
      });
    }
  }

  repeatNewPasswordChangeHnadler = (event) => {
    const { value } = event.target;
    const { newPasswordValue } = this.target;
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    let submitDisabled = 'disabled';
    if (value === newPasswordValue && newPasswordValue.match(pattern)) {
      submitDisabled = null;
    }

    if (value !== newPasswordValue) {
      this.setState({
        repeatNewPasswordValue: value,
        repeatNewPasswordValidClass: classes.notValidRepeatNewPassword,
        newPasswordSubmitDisabeld: submitDisabled,
      });
    }

    if (value === newPasswordValue) {
      this.setState({
        repeatNewPasswordValue: value,
        repeatNewPasswordValidClass: null,
        newPasswordSubmitDisabeld: submitDisabled,
      });
    }
  }

  submitNewPassword = () => {
    console.log('NewPassword');
  }

  render() {
    const {
      newPasswordValue,
      repeatNewPasswordValue,
      newPasswordValidClass,
      repeatNewPasswordValidClass,
      newPasswordSubmitDisabeld,
    } = this.state;

    const {
      newPasswordChangeHnadler,
      repeatNewPasswordChangeHnadler,
      submitNewPassword,
    } = this;

    return (
      <div className={classes.changePassword}>
        <p>
          please input your new password:
        </p>
        <div className={newPasswordValidClass}>
          <Input
            maxLength="30"
            type="password"
            placeholder="new password"
            value={newPasswordValue}
            onChange={event => newPasswordChangeHnadler(event)}
          />
        </div>
        <p>
          please repeat your new password:
        </p>
        <div className={repeatNewPasswordValidClass}>
          <Input
            maxLength="30"
            type="password"
            placeholder="repeat new password"
            value={repeatNewPasswordValue}
            onChange={event => repeatNewPasswordChangeHnadler(event)}
          />
        </div>
        <Button
          onClick={submitNewPassword}
          disabled={newPasswordSubmitDisabeld}
        >
          submit
        </Button>
      </div>
    );
  }
}

export default ChangePassword;
