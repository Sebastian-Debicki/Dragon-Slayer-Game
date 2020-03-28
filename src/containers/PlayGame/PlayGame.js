import React from 'react';
import ChooseHero from '../ChooseHero/ChooseHero';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Menu from '../../components/Menu/Menu';

const PlayGame = ({ data, match, saveChangedGameStatistics }) => {

  const gameId = match.params.id;
  const currentGame = data.games[gameId]

  const [isNewGameStatus, setIsNewGameStatus] = React.useState(currentGame.newGame);

  const changeNewGameStatusHandler = () => {
    setIsNewGameStatus(false);
    data.games[gameId].newGame = false;
    saveChangedGameStatistics(data)
  }

  return (
    <section>
      {!isNewGameStatus
        ? <Menu
          gameId={gameId}
          currentGame={currentGame}
        />
        : <ChooseHero
          data={data}
          gameId={gameId}
          saveChangedGameStatistics={saveChangedGameStatistics}
          changeNewGameStatusHandler={changeNewGameStatusHandler}
        />}

    </section>
  );
}

const mapStateToProps = state => {
  return {
    data: state.game.data,
    loading: state.game.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveChangedGameStatistics: (games) => dispatch(actions.saveChangedGameStatistics(games)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayGame);