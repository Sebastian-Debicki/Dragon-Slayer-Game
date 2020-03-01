import * as actionTypes from './actionTypes';
import firebase from 'firebase';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = () => {
  return {
    type: actionTypes.AUTH_SUCCESS
  }
}

export const authFail = () => {
  return {
    type: actionTypes.AUTH_FAIL
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
      .then(res => console.log(res))
  }
}