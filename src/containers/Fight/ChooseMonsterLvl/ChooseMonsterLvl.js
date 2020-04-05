import React from 'react';
import { monsters } from '../../../data/monsters';

const ChooseMonsterLvl = ({ chooseLvlMonsterHandler }) => {

  const monstersDisplay = monsters.map(monsterType =>
    <li key={monsterType.type} className="choose-monsterLvl__item" onClick={() => chooseLvlMonsterHandler(monsterType.monsters)}>
      <img className="choose-monsterLvl__img" src={monsterType.img} alt={monsterType.type} />
      <p className="choose-monsterLvl__type" >{monsterType.type}</p>
      <p className="choose-monsterLvl__lvls" >lvls {monsterType.minLvl} / {monsterType.maxLvl}</p>
    </li>)

  return (
    <div className="choose-monsterLvl">
      <h2 className="heading-tertiary">Difficulty</h2>
      <ul className="choose-monsterLvl__list">
        {monstersDisplay}
      </ul>
    </div>
  );
}

export default ChooseMonsterLvl;