import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../../../components/UI/Spinner/Spinner';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Spinner />)
})

describe('<Spinner />', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render one div', () => {
    expect(wrapper.find('div').length).toBe(1);
  })

  it('render one img tag', () => {
    expect(wrapper.find('img').length).toBe(1);
  })

})