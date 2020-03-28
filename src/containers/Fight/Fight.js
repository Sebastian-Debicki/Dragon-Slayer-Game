import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { monsters } from '../../data/monsters';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import Winner from './Winner/Winner';
import ChooseMonsterLvl from './ChooseMonsterLvl/ChooseMonsterLvl';

const Fight = ({ data, dungeonStarted, loading, saveChangedGameStatistics, ...props }) => {
  const gameId = props.match.params.id;
  const { hero, shop } = data.games[gameId];

  const [monster, setMonster] = React.useState(monsters[0].monsters[0])
  const [monsterLife, setMonsterLife] = React.useState(0);
  const [playerLife, setPlayerLife] = React.useState(hero.statistics.hp);
  const [playerMana, setPlayerMana] = React.useState(hero.statistics.mana);
  const [playerAttackPower, setPlayerAttackPower] = React.useState(0);
  const [monsterAttackPower, setMonsterAttackPower] = React.useState(0);
  const [chooseLvlMonsterOpen, setChooselvlMonsterOpen] = React.useState(true);

  const chooseLvlMonsterHandler = (monsters) => {
    setChooselvlMonsterOpen(false);
    const drawNumber = Math.floor(Math.random() * monsters.length);
    setMonster(monsters[drawNumber])
    setMonsterLife(monsters[drawNumber].statistics.hp)
  }

  const drawPowerAttack = (power) => Math.floor(Math.random() * (power - (power / 2))) + (power / 2);

  const monsterAttack = () => drawPowerAttack(monster.statistics.attack) - (hero.statistics.def / 10);
  const playerAttack = () => drawPowerAttack(hero.statistics.attack) - (monster.statistics.def / 10);
  const playerStrongAttack = () => drawPowerAttack(hero.statistics.strongAttack - (monster.statistics.def / 10));
  const playerSkill1Attack = () => {
    setPlayerMana(playerMana - hero.skills.skill1.manaCost);
    return drawPowerAttack(hero.skills.skill1.attack - (monster.statistics.def / 10));
  }
  const playerSkill2Attack = () => {
    setPlayerMana(playerMana - hero.skills.skill2.manaCost);
    return drawPowerAttack(hero.skills.skill2.attack - (monster.statistics.def / 10))
  }
  const playerUsePotion = () => {
    if (data.games[gameId].shop.items[0].number > 0 && playerLife < hero.statistics.hp) {
      if (playerLife > hero.statistics.hp - shop.items[0].increase.number) setPlayerLife(hero.statistics.hp);
      else setPlayerLife(playerLife + shop.items[0].increase.number);
      data.games[gameId].shop.items[0].number -= 1;
      saveChangedGameStatistics(data);
    }
  };

  const fightOptionsHandler = (option) => {
    switch (option) {
      case 'ATTACK':
        setMonsterLife(monsterLife - playerAttack())
        setPlayerAttackPower(playerAttack());
        break;
      case 'STRONG_ATTACK':
        setMonsterLife(monsterLife - playerStrongAttack())
        setPlayerAttackPower(playerStrongAttack());
        break;
      case 'SKILL_1':
        if (playerMana < hero.skills.skill1.manaCost) return
        setMonsterLife(monsterLife - playerSkill1Attack())
        setPlayerAttackPower(playerSkill1Attack());
        break;
      case 'SKILL_2':
        if (playerMana < hero.skills.skill2.manaCost) return
        setMonsterLife(monsterLife - playerSkill2Attack())
        setPlayerAttackPower(playerSkill2Attack());
        break;
      default: playerAttack();
    }
    setPlayerLife(playerLife - monsterAttack())
    setMonsterAttackPower(monsterAttack())
  }

  let playerWon = null;
  if (playerLife <= 0) {
    playerWon = false;
    hero.exp += monster.expLoose
    data.games[gameId].gold += monster.goldLoose
    saveChangedGameStatistics(data)
  }
  if (monsterLife <= 0) {
    playerWon = true;
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
      {playerWon !== null &&
        <Modal>
          <Winner playerWon={playerWon} monster={monster} backToMenuHandler={backToMenuHandler} />
        </Modal>}
      {chooseLvlMonsterOpen &&
        <Modal>
          <ChooseMonsterLvl chooseLvlMonsterHandler={chooseLvlMonsterHandler} />
        </Modal>}
      <div className="fight__box">
        <div className="fight__monster">
          <p className="fight__name">{monster.name}(lvl {monster.lvl})</p>
          <p>{monsterLife.toFixed(2)} / {monster.statistics.hp.toFixed(2)} {playerAttackPower !== 0 && <span>(-{playerAttackPower.toFixed(2)}}</span>}</p>
          <progress className="fight__progress fight__progress-life" value={monsterLife} max={monster.statistics.hp}>alternatywa</progress>
        </div>

        <div className="fight__hero">
          <p className="fight__name">{hero.name}(lvl {hero.lvl})</p>
          <p>{playerLife.toFixed(2)} / {hero.statistics.hp.toFixed(2)} {monsterAttackPower !== 0 && <span>(-{monsterAttackPower.toFixed(2)}}</span>}</p>
          <progress className="fight__progress fight__progress-life" value={playerLife} max={hero.statistics.hp}>life</progress>
          <p>{playerMana.toFixed(0)} / {hero.statistics.mana.toFixed(0)}</p>
          <progress className="fight__progress fight__progress-mana" value={playerMana} max={hero.statistics.mana}>mana</progress>
          <div className="fight__options">
            <Button className="btn btn__tertiary" clicked={() => fightOptionsHandler('ATTACK')}>Attack</Button>
            <Button className="btn btn__tertiary" clicked={() => fightOptionsHandler('STRONG_ATTACK')}>Strong Attack</Button>
            <p>Specials Attacks</p>
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