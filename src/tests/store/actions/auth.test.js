import * as actionTypes from '../../../store/actions/actionTypes';
import * as actions from '../../../store/actions/auth';

describe('authStart()', () => {
  it('has a correct type', () => {
    const action = actions.authStart();
    expect(action.type).toEqual(actionTypes.AUTH_START);
  })
})

describe('authFail()', () => {
  const action = actions.authFail('some-error');
  it('has a correct type', () => {
    expect(action.type).toEqual(actionTypes.AUTH_FAIL);
  })

  it('has a correct error value', () => {
    expect(action.error).toEqual('some-error');
  })
})

describe('authSuccess()', () => {
  const action = actions.authSuccess('token', 'userId', true)

  it('has a correct token', () => {
    expect(action.token).toEqual('token')
  })

  it('has a correct userId', () => {
    expect(action.userId).toEqual('userId')
  })

  it('has a correct isNewUser value', () => {
    expect(action.isNewUser).toEqual(true)
  })
})

describe('logout()', () => {
  it('has a correct type', () => {
    const action = actions.logout();
    expect(action.type).toEqual(actionTypes.AUTH_LOGOUT);
  })
})