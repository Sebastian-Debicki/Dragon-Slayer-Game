import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utilities';
import Fight from '../../../containers/Fight/Fight';
import { data } from '../../dummyData/data';
import Button from '../../../components/UI/Button/Button';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Fight store={store} match={{ params: { id: 'game1' } }} />).dive().dive();
  return wrapper;
}

describe('<Fight/>', () => {
  it('render correctly', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.length).toBe(1)
  })

  it('render three progress tags', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find('progress').length).toBe(3);
  })

  it('render six Button components', () => {
    const wrapper = setup({ game: { data } });
    expect(wrapper.find(Button).length).toBe(6);
  })
})