import axios from 'axios';
import * as actionTypes from './actionTypes';

const POST_COMMENT_REQUEST = () => ({
  type: actionTypes.POST_COMMENT,
});

const POST_COMMENT_FAILURE = error => ({
  type: actionTypes.POST_COMMENT,
  error,
});

const POST_COMMENT_SUCCESS = comments => ({
  tyoe: actionTypes.POST_COMMENT,
  comments,
});

export const POST_COMMENT = (comment, user) => (dispatch) => {
  dispatch(POST_COMMENT_REQUEST);
  try {
    axios.post('/comment', {
      comment,
      user,
    }).then(comments => comments.json())
      .then(comments => dispatch(POST_COMMENT_SUCCESS(comments)));
  } catch (error) {
    dispatch(POST_COMMENT_FAILURE(error));
  }
};

const PUT_COMMENT_REQUEST = () => ({
  type: actionTypes.PUT_COMMENT,
});

const PUT_COMMENT_FAILURE = error => ({
  type: actionTypes.PUT_COMMENT,
  error,
});

const PUT_COMMENT_SUCCESS = comments => ({
  tyoe: actionTypes.PUT_COMMENT,
  comments,
});

export const PUT_COMMENT = (comment, user) => (dispatch) => {
  dispatch(PUT_COMMENT_REQUEST);
  try {
    axios.put('/comment', {
      comment,
      user,
    }).then(comments => comments.json())
      .then(comments => dispatch(PUT_COMMENT_SUCCESS(comments)));
  } catch (error) {
    dispatch(PUT_COMMENT_FAILURE(error));
  }
};

const GET_COMMENT_REQUEST = () => ({
  type: actionTypes.GET_COMMENT,
});

const GET_COMMENT_FAILURE = error => ({
  type: actionTypes.GET_COMMENT,
  error,
});

const GET_COMMENT_SUCCESS = comments => ({
  tyoe: actionTypes.GET_COMMENT,
  comments,
});

export const GET_COMMENT = user => (dispatch) => {
  dispatch(GET_COMMENT_REQUEST);
  try {
    axios.get('/comment', {
      user,
    }).then(comments => comments.json())
      .then(comments => dispatch(GET_COMMENT_SUCCESS(comments)));
  } catch (error) {
    dispatch(GET_COMMENT_FAILURE(error));
  }
};

const DELETE_COMMENT_REQUEST = () => ({
  type: actionTypes.DELETE_COMMENT,
});

const DELETE_COMMENT_FAILURE = error => ({
  type: actionTypes.DELETE_COMMENT,
  error,
});

const DELETE_COMMENT_SUCCESS = comments => ({
  tyoe: actionTypes.DELETE_COMMENT,
  comments,
});

export const DELETE_COMMENT = (comment, user) => (dispatch) => {
  dispatch(DELETE_COMMENT_REQUEST);
  try {
    axios.delete('/comment', {
      comment,
      user,
    }).then(comments => comments.json())
      .then(comments => dispatch(DELETE_COMMENT_SUCCESS(comments)));
  } catch (error) {
    dispatch(DELETE_COMMENT_FAILURE(error));
  }
};
