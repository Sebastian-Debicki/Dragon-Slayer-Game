import React from 'react';
import ChooseSave from './containers/ChooseSave/ChooseSave';
import { Route } from 'react-router-dom';

const Game = () => {
  return (
    <div className="game">
      <Route path="/game" component={ChooseSave} />
    </div>
  );
}

export default Game;