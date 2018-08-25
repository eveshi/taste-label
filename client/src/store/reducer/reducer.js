import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
  loginStatus: false,
  user: null,
  comments: null,
};

const updateUser = (state, action) => {
  const valueToChange = {
    loginStatus: action.loginStatus,
    user: action.user,
  };

  return updateObject(state, valueToChange);
};

const updateComment = (state, action) => {
  const valueToChange = {
    comments: action.comments,
  };

  return updateObject(state, valueToChange);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
    case actionTypes.LOG_OUT:
      return updateUser(state, action);
    case actionTypes.POST_COMMENT:
    case actionTypes.PUT_COMMENT:
    case actionTypes.GET_COMMENT:
    case actionTypes.DELETE_COMMENT:
      return updateComment(state, action);
    default:
      break;
  }
};

export default reducer;
