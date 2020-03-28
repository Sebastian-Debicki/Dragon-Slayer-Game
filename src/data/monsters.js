import easyMonstersImg from '../assets/monsters/easy.svg';
import mediumMonstersImg from '../assets/monsters/medium.svg';
import hardMonstersImg from '../assets/monsters/hard.svg';

export const monsters = [
  {
    type: 'Easy',
    img: easyMonstersImg,
    minLvl: 1,
    maxLvl: 5,
    monsters: [
      {
        name: 'Demon',
        lvl: 1,
        goldWin: 8,
        goldLoose: 1,
        expWin: 10,
        expLoose: 2,
        statistics: {
          hp: 60,
          attack: 15,
          def: 15
        }
      },
      {
        name: 'Wolf',
        lvl: 2,
        goldWin: 9,
        goldLoose: 2,
        expWin: 12,
        expLoose: 3,
        statistics: {
          hp: 80,
          attack: 15,
          def: 15
        }
      },
      {
        name: 'Baby dragon',
        lvl: 3,
        goldWin: 10,
        goldLoose: 3,
        expWin: 14,
        expLoose: 4,
        statistics: {
          hp: 100,
          attack: 20,
          def: 20
        }
      },
      {
        name: 'Boar',
        lvl: 4,
        goldWin: 10,
        goldLoose: 4,
        expWin: 16,
        expLoose: 6,
        statistics: {
          hp: 120,
          attack: 22,
          def: 20
        }
      },
      {
        name: 'Bear',
        lvl: 5,
        goldWin: 13,
        goldLoose: 6,
        expWin: 18,
        expLoose: 5,
        statistics: {
          hp: 140,
          attack: 24,
          def: 25
        }
      }
    ],
  },
  {
    type: 'Medium',
    img: mediumMonstersImg,
    minLvl: 6,
    maxLvl: 15,
    monsters: [
      {
        name: 'Centaur',
        lvl: 6,
        goldWin: 20,
        goldLoose: 5,
        expWin: 20,
        expLoose: 4,
        statistics: {
          hp: 160,
          attack: 27,
          def: 20
        }
      },
      {
        name: 'Gargoyle',
        lvl: 7,
        goldWin: 25,
        goldLoose: 6,
        expWin: 25,
        expLoose: 4,
        statistics: {
          hp: 180,
          attack: 27,
          def: 25
        }
      },
      {
        name: 'Minotaur',
        lvl: 8,
        goldWin: 30,
        goldLoose: 7,
        expWin: 30,
        expLoose: 4,
        statistics: {
          hp: 200,
          attack: 30,
          def: 20
        }
      },
      {
        name: 'Small Dragon',
        lvl: 9,
        goldWin: 40,
        goldLoose: 7,
        expWin: 35,
        expLoose: 5,
        statistics: {
          hp: 220,
          attack: 32,
          def: 22
        }
      },
      {
        name: 'Basilisk',
        lvl: 10,
        goldWin: 50,
        goldLoose: 7,
        expWin: 40,
        expLoose: 5,
        statistics: {
          hp: 240,
          attack: 32,
          def: 25
        }
      }
    ]
  },
  {
    type: 'Hard',
    img: hardMonstersImg,
    minLvl: 16,
    maxLvl: 25,
    monsters: [
      {
        name: 'Green Dragon',
        lvl: 10,
        goldWin: 100,
        goldLoose: 10,
        expWin: 50,
        expLoose: 5,
        statistics: {
          hp: 800,
          attack: 50,
          def: 50
        }
      }
    ]
  }
]