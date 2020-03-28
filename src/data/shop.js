import potionImg from '../assets/shop/potion.svg';
import swordImg from '../assets/shop/sword.svg';
import armorImg from '../assets/shop/armor.svg';

export const shop = {
  items: [
    {
      img: potionImg,
      name: 'Potion',
      gold: 100,
      number: 0,
      maxNumber: 10,
      increase: {
        name: 'Hp',
        number: 30
      }
    }
  ],
  equipment: [
    {
      img: swordImg,
      name: 'Weapon',
      gold: 300,
      lvl: 1,
      maxLvl: 5,
      increase: {
        name: 'Attack',
        number: 5
      }
    },
    {
      img: armorImg,
      name: 'Armor',
      gold: 300,
      lvl: 1,
      maxLvl: 5,
      increase: {
        name: 'Defense',
        number: 5
      }
    }
  ]
}