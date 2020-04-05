import * as actionTypes from '../../../store/actions/actionTypes';
import * as actions from '../../../store/actions/game';
import { data } from '../../dummyData/data';

describe('newUserStartGameLoading()', () => {
  it('has a correct type', () => {
    const action = actions.newUserStartGameLoading(data);
    expect(action.type).toEqual(actionTypes.NEW_USER_START_LOADING);
  })
})


describe('fetchGamesStart()', () => {
  it('has a correct type', () => {
    const action = actions.fetchGamesStart();
    expect(action.type).toEqual(actionTypes.FETCH_START);
  })
})

describe('fetchGamesSuccess()', () => {
  it('has a correct type', () => {
    const action = actions.fetchGamesSuccess(data);
    expect(action.type).toEqual(actionTypes.FETCH_SUCCESS);
  })

  it('has a correct data', () => {
    const action = actions.fetchGamesSuccess(data);
    expect(action.data).toEqual(data);
  })
})


describe('fetchGamesFail()', () => {
  it('has a correct type', () => {
    const action = actions.fetchGamesFail('some-error');
    expect(action.type).toEqual(actionTypes.FETCH_FAIL);
  })

  it('has a correct data', () => {
    const action = actions.fetchGamesFail('some-error');
    expect(action.error).toEqual('some-error');
  })
})