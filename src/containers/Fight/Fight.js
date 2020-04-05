import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import Winner from './Winner/Winner';
import ChooseMonsterLvl from './ChooseMonsterLvl/ChooseMonsterLvl';
import { useFightState } from './useFightState';

const Fight = ({ data, loading, saveChangedGameStatistics, ...props }) => {
  const gameId = props.match.params.id;
  const { hero, shop } = data.games[gameId];

  const {
    monster,
    monsterLife,
    playerLife,
    playerMana,
    chooseLvlMonsterOpen,
    chooseLvlMonsterHandler,
    playerUsePotion,
    fightOptionsHandler
  } = useFightState(data, hero, shop, saveChangedGameStatistics)

  let winner = null;
  if (playerLife <= 0.5 && monsterLife <= 0.5) {
    winner = 'draw'
  } else if (playerLife <= 0.5) {
    winner = "monster"
    hero.exp += monster.expLoose
    data.games[gameId].gold += monster.goldLoose
    saveChangedGameStatistics(data)
  } else if (monsterLife <= 0.5) {
    winner = 'player'
    hero.exp += monster.expWin
    data.games[gameId].gold += monster.goldWin
    saveChangedGameStatistics(data)
  }

  if (hero.exp >= hero.needExp) {
    hero.exp = 0;
    hero.needExp = hero.needExp * 1.5;
    hero.lvl += 1;
    for (let stat in hero.statistics) hero.statistics[stat] *= 1.1;
    hero.skills.skill1.attack *= 1.1;
    hero.skills.skill2.attack *= 1.1;
    saveChangedGameStatistics(data)
  }

  const backToMenuHandler = () => {
    props.history.push(`/game/${gameId}`);
  }

  return (
    <section className="fight">
      {winner &&
        <Modal>
          <Winner winner={winner} monster={monster} backToMenuHandler={backToMenuHandler} />
        </Modal>}
      {chooseLvlMonsterOpen &&
        <Modal>
          <ChooseMonsterLvl chooseLvlMonsterHandler={chooseLvlMonsterHandler} />
        </Modal>}
      <div className="fight__box">
        <div className="fight__monster">
          <p className="fight__name">{monster.name}(lvl {monster.lvl})</p>
          <p>{monsterLife > 0 ? monsterLife.toFixed(0) : 0} / {monster.statistics.hp.toFixed(0)}</p>
          <progress className="fight__progress fight__progress-life" value={monsterLife} max={monster.statistics.hp}>{monsterLife} / {monster.statistics.hp}</progress>
        </div>

        <div className="fight__hero">
          <p className="fight__name">{hero.name}(lvl {hero.lvl})</p>
          <p>{playerLife > 0 ? playerLife.toFixed(0) : 0} / {hero.statistics.hp.toFixed(0)}</p>
          <progress className="fight__progress fight__progress-life" value={playerLife} max={hero.statistics.hp}>{playerLife} / {hero.statistics.hp}</progress>
          <p>{playerMana.toFixed(0)} / {hero.statistics.mana.toFixed(0)}</p>
          <progress className="fight__progress fight__progress-mana" value={playerMana} max={hero.statistics.mana}>{playerMana} / {hero.statistics.mana}</progress>
          <div className="fight__options">
            <Button className="btn btn__tertiary" clicked={() => fightOptionsHandler('ATTACK')}>Attack</Button>
            <Button className="btn btn__tertiary" clicked={() => fightOptionsHandler('STRONG_ATTACK')}>Strong Attack</Button>
            <p>Special Attacks</p>
            <Button className="btn btn__tertiary" clicked={() => fightOptionsHandler('SKILL_1')}><span className="fight__skill-name">{hero.skills.skill1.name}</span> | Mana cost: {hero.skills.skill1.manaCost}</Button>
            <Button className="btn btn__tertiary" clicked={() => fightOptionsHandler('SKILL_2')}><span className="fight__skill-name">{hero.skills.skill2.name}</span> | Mana cost: {hero.skills.skill2.manaCost}</Button>
            <p>More</p>
            <Button className="btn btn__tertiary" clicked={playerUsePotion}>Use potion x {data.games[gameId].shop.items[0].number}</Button>
            <Button className="btn btn__tertiary" clicked={backToMenuHandler}>Run</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    data: state.game.data,
    loading: state.game.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveChangedGameStatistics: (data) => dispatch(actions.saveChangedGameStatistics(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fight);