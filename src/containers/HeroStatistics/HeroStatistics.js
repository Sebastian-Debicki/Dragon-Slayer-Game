import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const HeroStatistics = ({ data, ...props }) => {
  const gameId = props.match.params.id;
  const { shop, hero } = data.games[gameId];

  return (
    <section className="statistics">
      <NavLink className="btn btn__exit" to={`/game/${gameId}`}>Back</NavLink>
      <h2 className="heading-secondary">Hero Statistics</h2>
      <div className="statistics__hero-box">
        <img className="statistics__img" src={hero.img} alt={hero.name} />
        <h3 className="heading-tertiary">{hero.name} - lvl {hero.lvl}</h3>
        <ul className="statistics__list">
          <li>Exp: {hero.exp.toFixed(0)} / {hero.needExp.toFixed(0)}</li>
          <li>Hp: {hero.statistics.hp.toFixed(0)}</li>
          <li>Mana: {hero.statistics.mana.toFixed(0)}</li>
          <li>Attack: {hero.statistics.attack.toFixed(1)}</li>
          <li>Strong Attack: {hero.statistics.strongAttack.toFixed(1)}</li>
          <li>Defense: {hero.statistics.def.toFixed(1)}</li>
        </ul>
        <h4>Skills</h4>
        <ul className="statistics__list">
          <li>
            <p>{hero.skills.skill1.name}</p>
            <p>Attack: {hero.skills.skill1.attack.toFixed(1)}</p>
            <p>Mana Cost: {hero.skills.skill1.manaCost}</p>
          </li>
          <li>
            <p>{hero.skills.skill2.name}</p>
            <p>Attack: {hero.skills.skill2.attack.toFixed(1)}</p>
            <p>Mana Cost: {hero.skills.skill2.manaCost}</p>
          </li>
        </ul>
        <h4>Eqipment</h4>
        <ul className="statistics__list">
          {shop.equipment.map(item =>
            <li key={item.name}>
              <p>{item.name} - lvl {item.lvl} / {item.maxLvl}</p>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    data: state.game.data
  }
}

export default connect(mapStateToProps)(HeroStatistics);