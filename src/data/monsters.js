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
        goldDraw: 3,
        expDraw: 4,
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
        goldDraw: 4,
        expDraw: 5,
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
        goldDraw: 5,
        expDraw: 6,
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
        goldDraw: 6,
        expDraw: 7,
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
        goldDraw: 8,
        expDraw: 7,
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
        goldDraw: 8,
        expDraw: 8,
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
        goldDraw: 9,
        expDraw: 9,
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
        goldDraw: 11,
        expDraw: 11,
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
        goldDraw: 12,
        expDraw: 12,
        expWin: 35,
        expLoose: 5,
        statistics: {
          hp: 240,
          attack: 35,
          def: 22
        }
      },
      {
        name: 'Basilisk',
        lvl: 10,
        goldWin: 50,
        goldLoose: 7,
        goldDraw: 15,
        expDraw: 15,
        expWin: 40,
        expLoose: 5,
        statistics: {
          hp: 280,
          attack: 36,
          def: 26
        }
      },
      {
        name: 'Harpy',
        lvl: 11,
        goldWin: 52,
        goldLoose: 7,
        goldDraw: 16,
        expDraw: 16,
        expWin: 43,
        expLoose: 5,
        statistics: {
          hp: 300,
          attack: 36,
          def: 28
        }
      },
      {
        name: 'Cyclops',
        lvl: 12,
        goldWin: 54,
        goldLoose: 8,
        goldDraw: 19,
        expDraw: 19,
        expWin: 46,
        expLoose: 7,
        statistics: {
          hp: 300,
          attack: 40,
          def: 33
        }
      },
      {
        name: 'Guardian',
        lvl: 13,
        goldWin: 56,
        goldLoose: 8,
        goldDraw: 21,
        expDraw: 23,
        expWin: 48,
        expLoose: 7,
        statistics: {
          hp: 350,
          attack: 50,
          def: 30
        }
      },
      {
        name: 'Griffin',
        lvl: 14,
        goldWin: 60,
        goldLoose: 10,
        goldDraw: 22,
        expDraw: 24,
        expWin: 60,
        expLoose: 12,
        statistics: {
          hp: 430,
          attack: 48,
          def: 40
        }
      },
      {
        name: 'Hydra',
        lvl: 15,
        goldWin: 70,
        goldLoose: 15,
        goldDraw: 26,
        expDraw: 28,
        expWin: 70,
        expLoose: 18,
        statistics: {
          hp: 490,
          attack: 50,
          def: 45
        }
      }
    ]
  },
  {
    type: 'Hard',
    img: hardMonstersImg,
    minLvl: 16,
    maxLvl: 20,
    monsters: [
      {
        name: 'Green Dragon',
        lvl: 16,
        goldWin: 140,
        goldLoose: 16,
        goldDraw: 40,
        expDraw: 40,
        expWin: 120,
        expLoose: 10,
        statistics: {
          hp: 650,
          attack: 70,
          def: 50
        }
      },
      {
        name: 'Red Dragon',
        lvl: 17,
        goldWin: 180,
        goldLoose: 10,
        goldDraw: 45,
        expDraw: 45,
        expWin: 160,
        expLoose: 10,
        statistics: {
          hp: 850,
          attack: 75,
          def: 53
        }
      },
      {
        name: 'White Dragon',
        lvl: 18,
        goldWin: 250,
        goldLoose: 10,
        goldDraw: 100,
        expDraw: 100,
        expWin: 200,
        expLoose: 10,
        statistics: {
          hp: 950,
          attack: 75,
          def: 55
        }
      },
      {
        name: 'Black Dragon',
        lvl: 19,
        goldWin: 300,
        goldLoose: 10,
        goldDraw: 150,
        expDraw: 150,
        expWin: 250,
        expLoose: 10,
        statistics: {
          hp: 1000,
          attack: 80,
          def: 60
        }
      },
      {
        name: 'Gold Dragon',
        lvl: 20,
        goldWin: 400,
        goldLoose: 10,
        goldDraw: 200,
        expDraw: 200,
        expWin: 350,
        expLoose: 10,
        statistics: {
          hp: 1100,
          attack: 90,
          def: 65
        }
      }

    ]
  }
]