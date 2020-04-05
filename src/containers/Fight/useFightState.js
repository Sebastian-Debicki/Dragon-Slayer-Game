import React from 'react';
import { monsters } from '../../data/monsters';

export const useFightState = (data, hero, shop, saveChangedGameStatistics) => {
  const [monster, setMonster] = React.useState(monsters[0].monsters[0])
  const [monsterLife, setMonsterLife] = React.useState(1);
  const [playerLife, setPlayerLife] = React.useState(hero.statistics.hp);
  const [playerMana, setPlayerMana] = React.useState(hero.statistics.mana);
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
    const { number, increase } = shop.items[0];
    if (number > 0 && playerLife < hero.statistics.hp) {
      if (playerLife > hero.statistics.hp - increase.number) setPlayerLife(hero.statistics.hp);
      else setPlayerLife(playerLife + increase.number);
      shop.items[0].number -= 1;
      saveChangedGameStatistics(data);
    }
  };

  const fightOptionsHandler = (option) => {
    switch (option) {
      case 'ATTACK':
        setMonsterLife(monsterLife - playerAttack())
        break;
      case 'STRONG_ATTACK':
        setMonsterLife(monsterLife - playerStrongAttack())
        break;
      case 'SKILL_1':
        if (playerMana < hero.skills.skill1.manaCost) return
        setMonsterLife(monsterLife - playerSkill1Attack())
        break;
      case 'SKILL_2':
        if (playerMana < hero.skills.skill2.manaCost) return
        setMonsterLife(monsterLife - playerSkill2Attack())
        break;
      default:
        setMonsterLife(monsterLife - playerAttack())
    }

    setPlayerLife(playerLife - monsterAttack())
  }

  return {
    monster,
    monsterLife,
    playerLife,
    playerMana,
    chooseLvlMonsterOpen,
    chooseLvlMonsterHandler,
    playerUsePotion,
    fightOptionsHandler
  }
}