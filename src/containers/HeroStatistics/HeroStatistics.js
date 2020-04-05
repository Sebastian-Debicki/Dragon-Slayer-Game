import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const HeroStatistics = ({ data, ...props }) => {
  const gameId = props.match.params.id;
  const { shop, hero } = data.games[gameId];

  const statisticsArr = [];
  for (const stat in hero.statistics) {
    statisticsArr.push({
      name: stat,
      value: hero.statistics[stat]
    })
  }

  const statistics = statisticsArr.map(stat =>
    <tr className="table__body__row" key={stat.name}>
      <td>{stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}</td>
      <td>{stat.value.toFixed(1)}</td>
    </tr>
  )

  const skillsArr = [];
  for (const skill in hero.skills) {
    skillsArr.push({
      name: hero.skills[skill].name,
      attack: hero.skills[skill].attack,
      manaConst: hero.skills[skill].manaCost,
    })
  }

  const skills = skillsArr.map(skill =>
    <tr className="table__body__row" key={skill.name}>
      <td>{skill.name}</td>
      <td>{skill.attack.toFixed(1)}</td>
      <td>{skill.manaConst.toFixed(1)}</td>
    </tr>
  )

  const equipment = shop.equipment.map(eq =>
    <tr className="table__body__row" key={eq.name}>
      <td>{eq.name}</td>
      <td>{eq.lvl}</td>
      <td>{eq.maxLvl}</td>
    </tr>
  )

  return (
    <section className="statistics">
      <NavLink className="btn btn__exit" to={`/game/${gameId}`}>Back</NavLink>
      <h2 className="heading-secondary">Hero Statistics</h2>
      <img className="statistics__img" src={hero.img} alt={hero.name} />
      <h3 className="heading-tertiary">{hero.name} - lvl {hero.lvl}</h3>
      <div className="statistics__tables-box">
        <div className="statistics__table-box">
          <h4>Statistics</h4>
          <table className="table">
            <thead className="table__head">
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody className="table__body">
              <tr className="table__body__row">
                <td>Exp</td>
                <td>{hero.exp.toFixed(0)} / {hero.needExp.toFixed(0)}</td>
              </tr>
              {statistics}
            </tbody>
          </table>
        </div>
        <div className="statistics__table-box">
          <h4>Skills</h4>
          <table className="table">
            <thead className="table__head">
              <tr>
                <th>Name</th>
                <th>Attack</th>
                <th>Mana Const</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {skills}
            </tbody>
          </table>
        </div>
        <div className="statistics__table-box">
          <h4>Equipment</h4>
          <table className="table">
            <thead className="table__head">
              <tr>
                <th>Name</th>
                <th>Lvl</th>
                <th>Max lvl</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {equipment}
            </tbody>
          </table>
        </div>
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