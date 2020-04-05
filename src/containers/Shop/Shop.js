import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import { NavLink } from 'react-router-dom';
import { useShopState } from './useShopState';

const Shop = ({ data, saveChangedGameStatistics, ...props }) => {
  const gameId = props.match.params.id;
  const { shop, hero } = data.games[gameId];

  const {
    gold,
    modalOpen,
    modalText,
    buyEquipmentHandler,
    buyItemHandler,
    closeModalHandler
  } = useShopState(hero, data, gameId, saveChangedGameStatistics)


  const items = shop.items.map(item =>
    <li key={item.name} className="shop__item shop__item-test" onClick={() => buyItemHandler(item)}>
      <img className="shop__item__img" src={item.img} alt={item.name} />
      <p>{item.name}</p>
      <p>Price: {item.gold}</p>
      <p>{item.number} / {item.maxNumber}</p>
    </li>
  )

  const equipment = shop.equipment.map(item =>
    <li key={item.name} className="shop__item shop__equipment-test" onClick={() => buyEquipmentHandler(item)}>
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
            <p className="shop__modal-content__paragraph">{modalText}</p>
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