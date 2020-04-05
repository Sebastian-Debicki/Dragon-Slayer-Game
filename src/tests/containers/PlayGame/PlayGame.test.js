import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utilities';
import { data } from '../../dummyData/data';
import PlayGame from '../../../containers/PlayGame/PlayGame';
import ChooseHero from '../../../containers/ChooseHero/ChooseHero';
import Menu from '../../../components/Menu/Menu';

describe('<PlayGame /> new game', () => {
  const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<PlayGame store={store} match={{ params: { id: 'game1' } }} />).dive().dive();
    return wrapper;
  }

  it('render correctly', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.length).toBe(1)
  })

  it('render ChooseHero component when user start new game', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find(ChooseHero).length).toBe(1)
  })
})

describe('<PlayGame /> continue game', () => {
  const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<PlayGame store={store} match={{ params: { id: 'game2' } }} />).dive().dive();
    return wrapper;
  }

  it('render Menu component when user continue game', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find(Menu).length).toBe(1)
    expect(wrapper.find(ChooseHero).length).toBe(0)
  })
})