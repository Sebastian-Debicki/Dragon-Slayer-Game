import { renderHook, act } from '@testing-library/react-hooks';
import { useAuthState } from '../../../containers/Auth/useAuthState';

describe('useAuthState', () => {
  it('changeEmailInputValue - state has correct value when user typing in email input', () => {
    const { result } = renderHook(useAuthState);
    act(() => result.current.changeEmailInputValue({ target: { value: 'some-email-value' } }))
    expect(result.current.emailInputValue).toEqual('some-email-value');
  })

  it('changePasswordInputValue - state has correct value when user typing in password input', () => {
    const { result } = renderHook(useAuthState);
    act(() => result.current.changePasswordInputValue({ target: { value: 'some-password-value' } }))
    expect(result.current.passwordInputValue).toEqual('some-password-value');
  })

  it('changeAuthTypeHandler - state has correct value when user change from singIn to singUp form', () => {
    const { result } = renderHook(useAuthState);
    act(() => result.current.changeAuthTypeHandler())
    expect(result.current.authType).toEqual(true);
  })

  it('changeAuthTypeHandler - state has correct value when user change back from singUp to singIn form', () => {
    const { result } = renderHook(useAuthState);
    act(() => result.current.changeAuthTypeHandler())
    act(() => result.current.changeAuthTypeHandler())
    expect(result.current.authType).toEqual(false);
  })


  it('authenticationSubmitHandler - clean email and password inputs when user clicked submit button', () => {
    const authentication = jest.fn()
    const { result } = renderHook(() => useAuthState(authentication));
    act(() => result.current.changeEmailInputValue({ target: { value: 'some-email-value' } }))
    act(() => result.current.changePasswordInputValue({ target: { value: 'some-password-value' } }))
    act(() => result.current.authenticationSubmitHandler({ preventDefault: () => { } }))
    expect(result.current.emailInputValue).toEqual('');
    expect(result.current.passwordInputValue).toEqual('');
  })
})