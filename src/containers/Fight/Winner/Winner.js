import React from 'react';
import Button from '../../../components/UI/Button/Button';

const Winner = ({ playerWon, monster, backToMenuHandler }) => {
  return (
    <div className="winner">
      <h3 className="heading-tertiary">{playerWon ? 'Congratulations! You won!' : 'Unfortunately, You lost'}</h3>
      <p className="winner__price">Exp: +{playerWon ? monster.expWin : monster.expLoose}</p>
      <p className="winner__price">Gold: +{playerWon ? monster.goldWin : monster.goldLoose}</p>
      <Button className="btn btn__tertiary" clicked={backToMenuHandler}>Back to menu</Button>
    </div>
  );
}

export default Winner;