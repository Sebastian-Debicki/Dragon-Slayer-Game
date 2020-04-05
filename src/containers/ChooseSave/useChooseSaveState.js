import React from 'react';

export const useChooseSaveState = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [choosedGame, setChoosedGame] = React.useState(null);

  const openModalHandler = (game) => {
    setModalOpen(true);
    setChoosedGame(game)
  }
  const closeModalHandler = () => {
    setModalOpen(false)
    setChoosedGame(null);
  }

  return {
    modalOpen,
    choosedGame,
    openModalHandler,
    closeModalHandler
  }
}