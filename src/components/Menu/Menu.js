import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({ startFightHandler, gameId, currentGame }) => {

  return (
    <section className='menu'>
      <p className="menu__gold">Gold: {currentGame.gold.toFixed(0)}</p>
      <div className="menu__hero">
        <img className="menu__hero-img" src={currentGame.hero.img} alt={currentGame.hero.name} />
        <div className="menu__hero-description">
          <p className="menu__hero-name">{currentGame.hero.name} - lvl {currentGame.hero.lvl}</p>
          <span>Exp</span>
          <progress value={currentGame.hero.exp} max={currentGame.hero.needExp}>{currentGame.hero.exp} / {currentGame.hero.needExp}</progress>
        </div>
      </div>

      <nav className='menu__nav'>
        <ul className="menu__list">
          <li className="menu__list__el">
            <NavLink className="menu__list-link" to={`/game/${gameId}/fight`} onClick={startFightHandler}>Fight!</NavLink>
          </li>
          <li className="menu__list__el">
            <NavLink className="menu__list-link" to={`/game/${gameId}/shop`}>Shop</NavLink>
          </li>
          <li className="menu__list__el">
            <NavLink className="menu__list-link" to={`/game/${gameId}/statistics`}>Hero statistics</NavLink>
          </li>

          <li className="menu__list__el">
            <NavLink className="menu__list-link" to={`/game/choose-save`}> Change game</NavLink>
          </li>
          <li className="menu__list__el">
            <NavLink className="menu__list-link" to='/logout'>Exit</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Menu;