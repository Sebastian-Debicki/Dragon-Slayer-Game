import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utilities';
import Auth from '../../../containers/Auth/Auth';
import { Redirect } from 'react-router-dom';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Auth store={store} />).dive().dive();
  return wrapper;
}

describe('<Auth/>', () => {
  it('render correctly', () => {
    const wrapper = setup()
    expect(wrapper.length).toBe(1)
  })

  it('render Redirect component when user is authentication', () => {
    const wrapper = setup({ auth: { isAuth: true } })
    expect(wrapper.find(Redirect).length).toBe(1);
  })

  it('render one form', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  })
}) 