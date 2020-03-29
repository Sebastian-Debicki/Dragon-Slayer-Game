import * as actionTypes from './actionTypes';
import axios from 'axios';

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
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return {
    type: 'AUTH_LOGOUT'
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, expirationTime * 1000)
  }
}

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    let url;
    if (isSignUp) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWbzWIaiSV6KwZHRmlBkDR7sdlN-AgDC4'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWbzWIaiSV6KwZHRmlBkDR7sdlN-AgDC4'
    }

    axios.post(url, authData)
      .then(response => {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken)
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId))
        dispatch(checkAuthTimeout(response.data.expiresIn))
      })
      .catch(err => {
        dispatch(authFail(err))
      })
  }
}


export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(logout())
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logout())
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId))
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
      }
    }
  }
}