import React from 'react';
import { heroes } from '../../data/heroes';

const ChooseHero = (props) => {

  const chooseHeroHandler = (hero) => {
    props.data.games[props.gameId].hero = hero;
    props.saveChangedGameStatistics(props.data);
    props.changeNewGameStatusHandler()
  }

  const chooseHero = heroes.map(hero =>
    <div className="choose-hero__hero" key={hero.name} onClick={() => chooseHeroHandler(hero)}>
      <h3 className="choose-hero__hero-name">{hero.name}</h3>
      <img className="choose-hero__hero-img" src={hero.img} alt={hero.name} />
      <div className="choose-hero__hero-statistics">
        <h4>Statistics:</h4>
        <p>Health: {hero.statistics.hp}</p>
        <p>Mana: {hero.statistics.mana}</p>
        <p>Attack: {hero.statistics.attack}</p>
        <p>Defence: {hero.statistics.def}</p>
        <p>Speed: {hero.statistics.speed}</p>
      </div>
      <div className="choose-hero__hero-statistics">
        <h4>Special Skills:</h4>
        <p>{hero.skills.skill1.name}</p>
        <p>{hero.skills.skill2.name}</p>
      </div>
    </div>
  )

  return (
    <section className="choose-hero">
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