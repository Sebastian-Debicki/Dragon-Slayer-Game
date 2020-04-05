import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import swordIcon from '../../assets/icons/sword.png';
import { Redirect } from 'react-router-dom';
import { useAuthState } from './useAuthState';

const Auth = ({ authentication, isAuth }) => {
  const {
    emailInputValue,
    passwordInputValue,
    authType,
    changeEmailInputValue,
    changePasswordInputValue,
    changeAuthTypeHandler,
    authenticationSubmitHandler
  } = useAuthState(authentication)

  return (
    <section className="auth">
      {isAuth && <Redirect to="/game/choose-save" />}
      <div className="heading-box">
        <h1 className="heading-primary">Dragon Slayer</h1>
      </div>
      <div className="auth__form-container">
        <div className="heading-box u-center u-margin-bottom-small">
          <h2 className="heading-secondary">{authType ? 'Sign Up' : 'Sign In'}</h2>
        </div>
        <form className="auth__form" onSubmit={authenticationSubmitHandler}>
          <input type="email" placeholder="Email" required className="input" value={emailInputValue} onChange={changeEmailInputValue} />
          <input type="password" placeholder="Password" required className="input" value={passwordInputValue} onChange={changePasswordInputValue} />
          <Button className="btn btn__primary">
            <img className="btn__primary--icon" src={swordIcon} alt="sword" />
            <span className="btn__primary--text" src={swordIcon} alt="sword">Submit</span>
            Submit
          </Button>
        </form>
        {authType
          ? <p className="auth__ask-paragraph">Do you have an account? <Button className="btn btn__confirm" clicked={changeAuthTypeHandler}>Sign in <span className="btn__confirm__item">!</span></Button></p>
          : <p className="auth__ask-paragraph">Don't have an account? <Button className="btn btn__confirm" clicked={changeAuthTypeHandler}>Sign up <span className="btn__confirm__item">!</span></Button></p>}
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authentication: (email, password, authType) => { dispatch(actions.auth(email, password, authType)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);