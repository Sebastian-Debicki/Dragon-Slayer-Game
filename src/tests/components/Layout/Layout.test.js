import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../../components/Layout/Layout';
import { storeFactory } from '../../utilities';
import Spinner from '../../../components/UI/Spinner/Spinner';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Layout store={store} />).dive().dive();
  return wrapper;
}

describe('<Layout/>', () => {
  it('render correctly', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1)
  })

  it('render main container when loading is false(default)', () => {
    const wrapper = setup();
    expect(wrapper.find('main').length).toBe(1)
  })

  it('render Spinner component when loading is true', () => {
    const initialState = { auth: { loading: true } }
    const wrapper = setup(initialState);
    expect(wrapper.find(Spinner).length).toBe(1)
  })
})