import React from 'react';
import { heroes } from '../../data/heroes';
import { NavLink } from 'react-router-dom';
import Hero from './Hero/Hero';

const ChooseHero = ({ data, gameId, saveChangedGameStatistics, changeNewGameStatusHandler }) => {

  const chooseHeroHandler = (hero) => {
    data.games[gameId].hero = hero;
    saveChangedGameStatistics(data);
    changeNewGameStatusHandler()
  }

  const chooseHero = heroes.map(hero => <Hero key={hero.name} hero={hero} chooseHeroHandler={chooseHeroHandler} />)

  return (
    <section className="choose-hero">
      <NavLink className="btn btn__exit" to='/game/choose-save'>Back</NavLink>
      <div className="heading-box ">
        <h2 className="heading-secondary u-margin-bottom-small">Choose Hero!</h2>
      </div>
      <div className="choose-hero__box">
        {chooseHero}
      </div>
    </section>
  );
}

export default ChooseHero;