import * as actionTypes from './actionTypes';
import firebase from 'firebase';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId
  }
}

export const authFail = (err) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: err
  }
}

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    let authType = firebase.auth().signInWithEmailAndPassword(email, password);
    if (isSignUp) {
      authType = firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    authType
      .then(res => {
        dispatch(authSuccess(res.user._lat, res.user.uid))
      })
      .catch(err => dispatch(authFail(err)))
  }
}