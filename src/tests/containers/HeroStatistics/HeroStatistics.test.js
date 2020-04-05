import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utilities';
import HeroStatistics from '../../../containers/HeroStatistics/HeroStatistics';
import { data } from '../../dummyData/data';
import { NavLink } from 'react-router-dom';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<HeroStatistics store={store} match={{ params: { id: 'game1' } }} />).dive().dive();
  return wrapper;
}

describe('<HeroStatistics/>', () => {
  it('render correctly', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.length).toBe(1)
  })

  it('render one NavLink', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find(NavLink).length).toBe(1);
  })

  it('NavLink has a correct path', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find(NavLink).prop('to')).toEqual('/game/game1');
  })

  it('render three tables', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find('table').length).toBe(3)
  })
})