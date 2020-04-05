import React from 'react';
import { shallow } from 'enzyme';
import Winner from '../../../../containers/Fight/Winner/Winner';
import { monsters } from '../../../../data/monsters';

let wrapper, backToMenuHandlerMock;
beforeEach(() => {
  backToMenuHandlerMock = jest.fn();
  wrapper = shallow(<Winner winner='player' monster={monsters[0].monsters[0]} backToMenuHandler={backToMenuHandlerMock} />)
})

describe('<Winner/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('has a correct values when player won', () => {
    expect(wrapper.find('h3').text()).toEqual('Congratulations! You won!');
    expect(wrapper.find('p').at(0).text()).toEqual(`Exp: +${monsters[0].monsters[0].expWin}`);
    expect(wrapper.find('p').at(1).text()).toEqual(`Gold: +${monsters[0].monsters[0].goldWin}`);
  })

  it('has a correct values when monster won', () => {
    wrapper.setProps({ winner: 'monster' })
    expect(wrapper.find('h3').text()).toEqual('Unfortunately, You lost');
    expect(wrapper.find('p').at(0).text()).toEqual(`Exp: +${monsters[0].monsters[0].expLoose}`);
    expect(wrapper.find('p').at(1).text()).toEqual(`Gold: +${monsters[0].monsters[0].goldLoose}`);
  })

  it('has a correct values when is draw', () => {
    wrapper.setProps({ winner: 'draw' })
    expect(wrapper.find('h3').text()).toEqual('Draw!');
    expect(wrapper.find('p').at(0).text()).toEqual(`Exp: +${monsters[0].monsters[0].expDraw}`);
    expect(wrapper.find('p').at(1).text()).toEqual(`Gold: +${monsters[0].monsters[0].goldDraw}`);
  })

  it('has a correct values when option has wrong value', () => {
    wrapper.setProps({ winner: 'some-option' })
    expect(wrapper.find('h3').text()).toEqual('Draw!');
    expect(wrapper.find('p').at(0).text()).toEqual(`Exp: +${monsters[0].monsters[0].expDraw}`);
    expect(wrapper.find('p').at(1).text()).toEqual(`Gold: +${monsters[0].monsters[0].goldDraw}`);
  })
})