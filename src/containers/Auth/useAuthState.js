import React from 'react';

export const useAuthState = (authentication) => {
  const [emailInputValue, setEmailValue] = React.useState('');
  const [passwordInputValue, setPasswordValue] = React.useState('');
  const [authType, setAuthTypeState] = React.useState(false);

  const changeEmailInputValue = (e) => setEmailValue(e.target.value);
  const changePasswordInputValue = (e) => setPasswordValue(e.target.value);
  const changeAuthTypeHandler = () => setAuthTypeState(!authType);

  const authenticationSubmitHandler = (e) => {
    e.preventDefault();

    authentication(emailInputValue, passwordInputValue, authType)

    setEmailValue('');
    setPasswordValue('');
  }

  return {
    emailInputValue,
    passwordInputValue,
    authType,
    changeEmailInputValue,
    changePasswordInputValue,
    changeAuthTypeHandler,
    authenticationSubmitHandler
  }
}