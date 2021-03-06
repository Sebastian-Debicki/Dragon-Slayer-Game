import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  isNewUser: null,
  error: null,
  loading: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        isNewUser: action.isNewUser,
        loading: false
      }
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      }
    default: return state;
  }
}

export default authReducer;