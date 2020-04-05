import React from 'react';

const Hero = ({ hero, chooseHeroHandler }) => {
  return (
    <div className="choose-hero__hero" onClick={() => chooseHeroHandler(hero)}>
      <h3 className="choose-hero__hero-name">{hero.name}</h3>
      <img className="choose-hero__hero-img" src={hero.img} alt={hero.name} />
      <div className="choose-hero__hero-statistics">
        <h4>Statistics:</h4>
        <p>Health: {hero.statistics.hp}</p>
        <p>Mana: {hero.statistics.mana}</p>
        <p>Attack: {hero.statistics.attack}</p>
        <p>Defence: {hero.statistics.def}</p>
      </div>
      <div className="choose-hero__hero-statistics">
        <h4>Special Skills:</h4>
        <p>{hero.skills.skill1.name}</p>
        <p>{hero.skills.skill2.name}</p>
      </div>
    </div>
  );
}

export default Hero;