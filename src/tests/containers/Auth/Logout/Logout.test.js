import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../../utilities';
import Logout from '../../../../containers/Auth/Logout/Logout';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Logout store={store} />).dive().dive();
  return wrapper;
}

describe('<Logout/>', () => {
  it('render correctly', () => {
    const wrapper = setup()
    expect(wrapper.length).toBe(1)
  })
})