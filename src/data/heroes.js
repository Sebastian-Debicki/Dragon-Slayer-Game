import warriorImg from '../assets/heroes/warrior.svg';
import wizardImg from '../assets/heroes/wizard.svg';
import ninjaImg from '../assets/heroes/ninja.svg';

const needExp = 50;

export const heroes = [
  {
    name: 'Warrior',
    img: warriorImg,
    lvl: 1,
    exp: 0,
    needExp,
    statistics: {
      hp: 100,
      mana: 20,
      attack: 12,
      strongAttack: 16,
      def: 15,
    },
    skills: {
      skill1: {
        name: 'Fury',
        attack: 22,
        manaCost: 10
      },
      skill2: {
        name: 'Power Attack',
        attack: 19,
        manaCost: 10
      }
    }
  },
  {
    name: 'Wizard',
    lvl: 1,
    exp: 0,
    needExp,
    img: wizardImg,
    statistics: {
      hp: 80,
      mana: 50,
      attack: 8,
      strongAttack: 11,
      def: 12,
    },
    skills: {
      skill1: {
        name: 'Fire Ball',
        attack: 26,
        manaCost: 15
      },
      skill2: {
        name: 'Fire Attack',
        attack: 20,
        manaCost: 10
      }
    }
  },
  {
    name: 'Ninja',
    lvl: 1,
    exp: 0,
    needExp,
    img: ninjaImg,
    statistics: {
      hp: 100,
      mana: 20,
      attack: 10,
      strongAttack: 13,
      def: 10,
    },
    skills: {
      skill1: {
        name: 'Attack from behind',
        attack: 24,
        manaCost: 10
      },
      skill2: {
        name: 'Shiruken',
        attack: 20,
        manaCost: 10
      }
    }
  }
]