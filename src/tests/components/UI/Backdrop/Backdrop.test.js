import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from '../../../../components/UI/Backdrop/Backdrop';

let wrapper, clickedMock;
beforeEach(() => {
  clickedMock = jest.fn();
  wrapper = shallow(<Backdrop clicked={clickedMock} />)
})

describe('<Backdrop />', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render one div', () => {
    expect(wrapper.find('div').length).toBe(1);
  })

  it('call clicked fn when backdrop was clicked', () => {
    wrapper.find('div').simulate('click');
    expect(clickedMock).toHaveBeenCalled();
  })
})