import * as actionTypes from '../actions/actionTypes';

const initialState = {
  data: [],
  loading: true,
  error: null
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case actionTypes.FETCH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.NEW_USER_START_LOADING:
      return {
        ...state,
        data: action.data,
        loading: true
      }
    default: return state
  }
}

export default gameReducer;