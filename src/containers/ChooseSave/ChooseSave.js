import React from 'react';
import * as actions from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { shop } from '../../data/shop';
import { NavLink } from 'react-router-dom';


const ChooseSave = ({ data, loading, saveChangedGameStatistics, ...props }) => {

  const chooseSaveGameHandler = (gameNumber) => props.history.push(`/game/${gameNumber}`);
  const resetGameSaveHandler = (game) => {
    data.games[game.id].newGame = true;
    data.games[game.id].hero = {};
    data.games[game.id].gold = 0;
    data.games[game.id].shop = shop;
    saveChangedGameStatistics(data);
  }

  let gamesArr = [];
  for (const game in data.games) {
    gamesArr.push({
      id: game,
      newGame: data.games[game].newGame,
      dangeon: data.games[game].dangeon,
      hero: data.games[game].hero
    })
  }

  const buttons = gamesArr.map(game =>
    game.newGame
      ?
      <div key={game.id} className="choose-save__save">
        <Button className="btn btn__secondary" clicked={() => chooseSaveGameHandler(game.id)}>New Game</Button>
      </div>
      :
      <div key={game.id} className="choose-save__save">
        <div className="choose-save__save__description">
          <p>{game.hero.name}</p>
          <p>lvl - {game.hero.lvl}</p>
        </div>
        <div className="choose-save__save__buttons">
          <Button className="btn btn__secondary" clicked={() => chooseSaveGameHandler(game.id)}>Continue</Button>
          <Button className="btn btn__secondary" clicked={() => resetGameSaveHandler(game)}>Delete</Button>
        </div>
      </div>
  )

  let content = <Spinner />
  if (!loading) {
    content = (
      <>
        <div className="heading-box">
          <h2 className="heading-secondary">Choose Game</h2>
        </div>
        {buttons}
      </>
    )
  }

  return (
    <section className="choose-save">
      <NavLink className="btn btn__exit" to='/logout'>Exit</NavLink>
      <div className="choose-save__box">
        {content}
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    data: state.game.data,
    loading: state.game.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveChangedGameStatistics: (data) => dispatch(actions.saveChangedGameStatistics(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseSave);