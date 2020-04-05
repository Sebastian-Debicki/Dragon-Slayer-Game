import React from 'react';
import Button from '../../../components/UI/Button/Button';

const Winner = ({ winner, monster, backToMenuHandler }) => {
  let price, exp, congratsText;
  switch (winner) {
    case 'player':
      price = monster.goldWin;
      exp = monster.expWin;
      congratsText = 'Congratulations! You won!';
      break;
    case 'monster':
      price = monster.goldLoose;
      exp = monster.expLoose;
      congratsText = 'Unfortunately, You lost';
      break;
    case 'draw':
      price = monster.goldDraw;
      exp = monster.expDraw;
      congratsText = 'Draw!';
      break;
    default:
      price = monster.goldDraw;
      exp = monster.expDraw;
      congratsText = 'Draw!';
  }

  return (
    <div className="winner">
      <h3 className="heading-tertiary">{congratsText}</h3>
      <p className="winner__price">Exp: +{exp}</p>
      <p className="winner__price">Gold: +{price}</p>
      <Button className="btn btn__tertiary" clicked={backToMenuHandler}>Back to menu</Button>
    </div>
  );
}

export default Winner;