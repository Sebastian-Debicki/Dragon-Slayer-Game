import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import ChooseSave from './containers/ChooseSave/ChooseSave';
import PlayGame from './containers/PlayGame/PlayGame';
import Fight from './containers/Fight/Fight';
import Shop from './containers/Shop/Shop';
import HeroStatistics from './containers/HeroStatistics/HeroStatistics';

class Game extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (this.props.isNewUser) {
      this.props.newUserStartGame(this.props.token, this.props.userId)
      setTimeout(() => {
        this.props.fetchGames(this.props.token, this.props.userId)
      }, 1000)
    } else {
      this.props.fetchGames(token, userId)
    }
  }

  render() {
    return (
      <div className="game">
        <Switch>
          <Route path="/game/choose-save" component={ChooseSave} />
          {!this.props.loading && <Route path="/game/:id" component={PlayGame} exact />}
          {!this.props.loading && <Route path="/game/:id/fight" component={Fight} />}
          {!this.props.loading && <Route path="/game/:id/shop" component={Shop} />}
          {!this.props.loading && <Route path="/game/:id/statistics" component={HeroStatistics} />}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    isNewUser: state.auth.isNewUser,
    data: state.game.data,
    loading: state.game.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newUserStartGame: (token, userId) => dispatch(actions.newUserStartGame(token, userId)),
    fetchGames: (token, userId) => dispatch(actions.fetchGames(token, userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);