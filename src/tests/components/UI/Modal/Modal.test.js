import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from '../../../../components/UI/Backdrop/Backdrop';
import Modal from '../../../../components/UI/Modal/Modal';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Modal>modal content</Modal>)
})

describe('<Modal />', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render one div', () => {
    expect(wrapper.find('div').length).toBe(1);
  })

  it('render Backdrop component', () => {
    expect(wrapper.find(Backdrop).length).toBe(1);
  })

  it('has a correct content from children props', () => {
    expect(wrapper.find('div').text()).toEqual('modal content')
  })
})