import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utilities';
import { data } from '../../dummyData/data';
import Shop from '../../../containers/Shop/Shop';
import { NavLink } from 'react-router-dom';
import Modal from '../../../components/UI/Modal/Modal';


const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Shop store={store} match={{ params: { id: 'game1' } }} />).dive().dive();
  return wrapper;
}

describe('<Shop />', () => {

  it('render correctly', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.length).toBe(1)
  })

  it('render correct number of items', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find('.shop__item-test').length).toBe(data.games.game1.shop.items.length)
  })

  it('render correct number of equipment', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find('.shop__equipment-test').length).toBe(data.games.game1.shop.equipment.length)
  })

  it('render one NavLink', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find(NavLink).length).toBe(1);
  })

  it('NavLink has a correct path', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find(NavLink).prop('to')).toEqual('/game/game1');
  })

  it('render correct number of gold', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find('p').at(0).text()).toEqual(`Gold: ${data.games.game1.gold}`)
  })

  it('open Modal when user want to buy item and dont have enaught gold', () => {
    const wrapper = setup({ game: { data } });
    wrapper.find('.shop__equipment-test').at(0).simulate('click');
    expect(wrapper.find(Modal).length).toBe(1);
  })

  it('has correct values of rendered items', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find('.shop__item-test img').prop('src')).toEqual(data.games.game1.shop.items[0].img)
    expect(wrapper.find('.shop__item-test p').at(0).text()).toEqual(data.games.game1.shop.items[0].name)
    expect(wrapper.find('.shop__item-test p').at(1).text()).toEqual(`Price: ${data.games.game1.shop.items[0].gold}`)
    expect(wrapper.find('.shop__item-test p').at(2).text()).toEqual(`${data.games.game1.shop.items[0].number} / ${data.games.game1.shop.items[0].maxNumber}`)
  })

  it('has correct values of rendered equipments', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find('.shop__equipment-test img').at(0).prop('src')).toEqual(data.games.game1.shop.equipment[0].img)
    expect(wrapper.find('.shop__equipment-test p').at(0).text()).toEqual(data.games.game1.shop.equipment[0].name)
    expect(wrapper.find('.shop__equipment-test p').at(1).text()).toEqual(`${data.games.game1.shop.equipment[0].increase.name} +${data.games.game1.shop.equipment[0].increase.number}`)
    expect(wrapper.find('.shop__equipment-test p').at(2).text()).toEqual(`Price: ${data.games.game1.shop.equipment[0].gold}`)
    expect(wrapper.find('.shop__equipment-test p').at(3).text()).toEqual(`lvl ${data.games.game1.shop.equipment[0].lvl} / ${data.games.game1.shop.equipment[0].maxLvl}`)
  })

})