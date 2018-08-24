import axios from 'axios';
import * as actionTypes from './actionTypes';

const LOG_IN_REQUEST = () => ({ type: actionTypes.LOG_IN });

const LOG_IN_FAILURE = error => ({
  type: actionTypes.LOG_IN,
  error,
});

const LOG_IN_SUCCESS = user => ({
  type: actionTypes.LOG_IN,
  loginStatus: true,
  user,
});

export const LOG_IN = userInfo => (dispatch) => {
  dispatch(LOG_IN_REQUEST);
  try {
    axios.get('/login', {
      userInfo,
    }).then(user => user.json())
      .then(user => dispatch(LOG_IN_SUCCESS(user)));
  } catch (error) {
    dispatch(LOG_IN_FAILURE(error));
  }
};

export const LOG_OUT = () => ({
  type: actionTypes.LOG_OUT,
  loginStatus: false,
  user: null,
});
