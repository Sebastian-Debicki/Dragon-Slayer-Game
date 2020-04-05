import { shop } from '../../data/shop';
import { heroes } from '../../data/heroes';

export const data = {
  userId: 123,
  games: {
    game1: {
      newGame: true,
      gold: 255,
      shop,
      hero: heroes[0]
    },
    game2: {
      newGame: false,
      gold: 700,
      shop,
      hero: heroes[1]
    },
    game3: {
      newGame: true,
      gold: 0,
      shop,
      hero: heroes[2]
    }
  }
}