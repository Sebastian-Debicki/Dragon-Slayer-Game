import * as actionTypes from './actionTypes';
import firebase from 'firebase';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, userId, isNewUser = null) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId,
    isNewUser
  }
}

export const authFail = (err) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: err
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return {
    type: 'AUTH_LOGOUT'
  }
}

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    let auth;
    if (isSignUp) {
      auth = firebase.auth().createUserWithEmailAndPassword(email, password)
    } else {
      auth = firebase.auth().signInWithEmailAndPassword(email, password);
    }

    auth
      .then(res => {
        localStorage.setItem('token', res.user._lat)
        localStorage.setItem('userId', res.user.uid)
        dispatch(authSuccess(res.user._lat, res.user.uid, res.additionalUserInfo.isNewUser))
      })
      .catch(err => dispatch(authFail(err)))
  }
}

export const onTryAutoSignIn = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout())
    } else {
      const userId = localStorage.getItem('userId')
      dispatch(authSuccess(token, userId))
    }
  }
}