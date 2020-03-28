import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import { NavLink } from 'react-router-dom';

const Shop = ({ data, saveChangedGameStatistics, ...props }) => {
  const gameId = props.match.params.id;
  const { shop, hero } = data.games[gameId];

  const [gold, setGold] = React.useState(data.games[gameId].gold);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

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
    if (item.lvl === item.maxLvl) setModalContent("This item has a max lvl!")
    else if (data.games[gameId].gold < item.gold) setModalContent("You don't have enaught gold!")
  }

  const buyItemHandler = (item) => {
    if (data.games[gameId].gold >= item.gold && item.number < item.maxNumber) {
      goldSubtractionHandler(item)
      item.number += 1;
      saveChangedGameStatistics(data)
    } else {
      setModalOpen(true)
    }
    if (item.number === item.maxNumber) setModalContent("Maximum number of potions");
    else if (data.games[gameId].gold < item.gold) setModalContent("You don't have enaught gold!");
  }

  const closeModalHandler = () => setModalOpen(false);

  const items = shop.items.map(item =>
    <li key={item.name} className="shop__item" onClick={() => buyItemHandler(item)}>
      <img className="shop__item__img" src={item.img} alt={item.name} />
      <p>{item.name}</p>
      <p>Price: {item.gold}</p>
      <p>{item.number} / {item.maxNumber}</p>
    </li>
  )

  const equipment = shop.equipment.map(item =>
    <li key={item.name} className="shop__item" onClick={() => buyEquipmentHandler(item)}>
      <img className="shop__item__img" src={item.img} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.increase.name} +{item.increase.number}</p>
      <p>{item.lvl === item.maxLvl ? "Max lvl" : `Price: ${item.gold.toFixed(0)}`}</p>
      <p>lvl {item.lvl} / {item.maxLvl}</p>
    </li>
  )


  return (
    <section className="shop">
      {modalOpen
        && <Modal closeModalHandler={closeModalHandler}>
          <div className="shop__modal-content">
            <p className="shop__modal-content__paragraph">{modalContent}</p>
            <Button className="btn btn__confirm" clicked={closeModalHandler}>Ok <span className="btn__confirm__item">!</span></Button>
          </div>
        </Modal>}
      <NavLink className="btn btn__exit" to={`/game/${gameId}`}>Back</NavLink>
      <h2 className="heading-secondary">Shop</h2>
      <p>Gold: {gold.toFixed(0)}</p>
      <div className="equipment">
        <h3 className="heading-tertiary">Equipment</h3>
        <ul className="shop__list">
          {equipment}
        </ul>
      </div>
      <div className="items">
        <h3 className="heading-tertiary">Items</h3>
        <ul className="shop__list">
          {items}
        </ul>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    data: state.game.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveChangedGameStatistics: (data) => dispatch(actions.saveChangedGameStatistics(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);