import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  loading: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
      }
    default: return state;
  }
}

export default authReducer;