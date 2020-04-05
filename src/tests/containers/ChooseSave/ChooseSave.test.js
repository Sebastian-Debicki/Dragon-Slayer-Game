import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utilities';
import ChooseSave from '../../../containers/ChooseSave/ChooseSave';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { data } from '../../dummyData/data';
import { NavLink } from 'react-router-dom';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<ChooseSave store={store} />).dive().dive();
  return wrapper;
}

describe('<ChooseSave/>', () => {
  it('render correctly', () => {
    const wrapper = setup()
    expect(wrapper.length).toBe(1)
  })

  it('Spinner when loading is true', () => {
    const wrapper = setup({ game: { data, loading: true } })
    expect(wrapper.find(Spinner).length).toBe(1);
  })

  it('is no Spinner when loading is change to false', () => {
    const wrapper = setup({ game: { data, loading: false } })
    expect(wrapper.find(Spinner).length).toBe(0);
  })

  it('render one NavLink', () => {
    const wrapper = setup()
    expect(wrapper.find(NavLink).length).toBe(1)
  })

  it('NavLink has a correct path', () => {
    const wrapper = setup()
    expect(wrapper.find(NavLink).prop('to')).toEqual('/logout')
  })


})