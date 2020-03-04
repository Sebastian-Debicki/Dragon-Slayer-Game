import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import swordIcon from '../../assets/icons/sword.png';
import { Redirect } from 'react-router-dom';

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

  console.log(props.isAuth)

  return (
    <section className="auth">
      {props.isAuth && <Redirect to="/game" />}
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
          ? <p className="auth__ask-paragraph">Do you have account already? <Button className="btn btn--link" clicked={changeAuthTypeHandler}>Sign in</Button></p>
          : <p className="auth__ask-paragraph">Don't have an account? <Button className="btn btn--link" clicked={changeAuthTypeHandler}>Sign up</Button></p>}
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