import React from 'react';

export const useShopState = (hero, data, gameId, saveChangedGameStatistics) => {
  const [gold, setGold] = React.useState(data.games[gameId].gold);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalText, setModalText] = React.useState('');

  const goldSubtractionHandler = (item) => {
    setGold(gold - item.gold)
    data.games[gameId].gold -= item.gold;
  }

  const increaseHeroStatistics = (item) => {
    switch (item.increase.name) {
      case 'Attack':
        hero.statistics.attack += item.increase.number
        hero.statistics.strongAttack += item.increase.number
        break;
      case 'Defense': hero.statistics.def += item.increase.number;
        break;
      default: return item;
    }
  }

  const buyEquipmentHandler = (item) => {
    if (data.games[gameId].gold >= item.gold && item.lvl < item.maxLvl) {
      goldSubtractionHandler(item);
      increaseHeroStatistics(item)
      item.lvl += 1;
      item.gold *= 2;
      saveChangedGameStatistics(data)
    } else {
      setModalOpen(true)
    }
    if (item.lvl === item.maxLvl) setModalText("This item has a max lvl!")
    else if (data.games[gameId].gold < item.gold) setModalText("You don't have enough gold!")
  }

  const buyItemHandler = (item) => {
    if (data.games[gameId].gold >= item.gold && item.number < item.maxNumber) {
      goldSubtractionHandler(item)
      item.number += 1;
      saveChangedGameStatistics(data)
    } else {
      setModalOpen(true)
    }
    if (item.number === item.maxNumber) setModalText("Maximum number of potions");
    else if (data.games[gameId].gold < item.gold) setModalText("You don't have enough gold!");
  }

  const closeModalHandler = () => setModalOpen(false);

  return {
    gold,
    modalOpen,
    modalText,
    buyEquipmentHandler,
    buyItemHandler,
    closeModalHandler,
    goldSubtractionHandler
  }
}