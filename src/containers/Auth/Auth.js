import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';

const Auth = (props) => {
  const [emailInputValue, setEmailValueState] = React.useState('');
  const [passwordInputValue, setPasswordValueState] = React.useState('');
  const [authType, setAuthTypeState] = React.useState(false);

  const changeEmailInputValue = (e) => setEmailValueState(e.target.value);
  const changePasswordInputValue = (e) => setPasswordValueState(e.target.value);
  const changeAuthTypeHandler = () => setAuthTypeState(!authType);

  const authenticationSubmitHandler = (e) => {
    e.preventDefault();

    props.authentication(emailInputValue, passwordInputValue, authType)

    setEmailValueState('');
    setPasswordValueState('');
  }

  return (
    <section className="auth">
      <div className="heading-box">
        <h1 className="heading-primary">Dragon Slayer</h1>
      </div>
      <div className="form-container">
        <div className="heading-box">
          <h2 className="heading-secondary">{authType ? 'Sign Up' : 'Sign In'}</h2>
        </div>
        <form className="auth__form" onSubmit={authenticationSubmitHandler}>
          <input type="email" required value={emailInputValue} onChange={changeEmailInputValue} />
          <input type="password" required value={passwordInputValue} onChange={changePasswordInputValue} />
          <Button classEl="btn">Submit</Button>
        </form>
        {authType
          ? <p>Do you have an account already? <Button classEl="btn" clicked={changeAuthTypeHandler}>Sign in</Button></p>
          : <p>Don't have an account? <Button classEl="btn" clicked={changeAuthTypeHandler}>Sign up</Button></p>}
      </div>
    </section>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    authentication: (email, password, authType) => { dispatch(actions.auth(email, password, authType)) }
  }
}

export default connect(null, mapDispatchToProps)(Auth);