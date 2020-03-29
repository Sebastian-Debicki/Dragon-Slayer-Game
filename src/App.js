import React from 'react';
import Auth from './containers/Auth/Auth';
import firebase from 'firebase';
import { Route, Redirect } from 'react-router-dom';
import Game from './Game';
import Layout from './components/Layout/Layout';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Logout from './containers/Auth/Logout/Logout';

var firebaseConfig = {
  apiKey: "AIzaSyCWbzWIaiSV6KwZHRmlBkDR7sdlN-AgDC4",
  authDomain: "game-4af87.firebaseapp.com",
  databaseURL: "https://game-4af87.firebaseio.com",
  projectId: "game-4af87",
  storageBucket: "game-4af87.appspot.com",
  messagingSenderId: "257918894155",
  appId: "1:257918894155:web:b6426884299fff38364dce",
  measurementId: "G-T3QSHXMGLJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignIn();
  }

  render() {
    return (
      <>
        {!this.props.isAuth && <Redirect to='/' />}
        <Layout>
          <Route path="/" component={Auth} exact />
          <Route path="/game" component={Game} />
          <Route path="/logout" component={Logout} />
        </Layout>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
