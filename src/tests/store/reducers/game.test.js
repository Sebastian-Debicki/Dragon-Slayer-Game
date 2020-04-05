import * as actionTypes from '../../../store/actions/actionTypes';
import gameReducer from '../../../store/reducers/game';
import { data } from '../../dummyData/data';

const initialState = {
  data: [],
  loading: true,
  error: null
}

describe('game reducer', () => {
  it('should return initial state', () => {
    expect(gameReducer(undefined, {})).toEqual(initialState)
  })


  it('FETCH_START - return correct state values after action', () => {
    expect(gameReducer({ data: [], loading: true, error: null }, {
      type: actionTypes.FETCH_RECEPIES_START,
      loading: true
    })).toEqual({
      data: [],
      loading: true,
      error: null
    })
  })

  it('FETCH_SUCCESS - return correct state values after action', () => {
    expect(gameReducer({ data: [], loading: true, error: null }, {
      type: actionTypes.FETCH_SUCCESS,
      data,
      loading: false
    })).toEqual({
      data,
      loading: false,
      error: null
    })
  })

  it('FETCH_FAIL - return correct state values after action', () => {
    expect(gameReducer({ data: [], loading: true, error: null }, {
      type: actionTypes.FETCH_FAIL,
      error: 'some-error',
      loading: false
    })).toEqual({
      data: [],
      loading: false,
      error: 'some-error'
    })
  })

  it('NEW_USER_START_LOADING - return correct state values after action', () => {
    expect(gameReducer({ data: [], loading: false, error: null }, {
      type: actionTypes.NEW_USER_START_LOADING,
      data,
      loading: true
    })).toEqual({
      data,
      loading: true,
      error: null
    })
  })
})

