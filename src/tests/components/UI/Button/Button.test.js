import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../../components/UI/Button/Button';

let wrapper, clickedMock;
beforeEach(() => {
  clickedMock = jest.fn();
  wrapper = shallow(<Button clicked={clickedMock} className='some-class'>button name</Button>)
})

describe('<Button />', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render one button', () => {
    expect(wrapper.find('button').length).toBe(1);
  })

  it('call clicked fn when button was clicked', () => {
    wrapper.find('button').simulate('click');
    expect(clickedMock).toHaveBeenCalled();
  })

  it('has a correct class name from props', () => {
    expect(wrapper.find('button').prop('className')).toEqual('some-class')
  })

  it('has a correct children props(button name)', () => {
    expect(wrapper.find('button').text()).toEqual('button name')
  })
})