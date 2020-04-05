import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../../../components/Menu/Menu';
import { data } from '../../dummyData/data';
import { NavLink } from 'react-router-dom';

let wrapper, startFightHandlerMock;
beforeEach(() => {
  startFightHandlerMock = jest.fn()
  wrapper = shallow(<Menu startFightHandler={startFightHandlerMock} gameId='game1' currentGame={data.games.game1} />)
})

describe('<Menu/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render five NavLinks', () => {
    expect(wrapper.find(NavLink).length).toBe(5)
  })

  it('NavLinks have a correct routes', () => {
    expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/game/game1/fight');
    expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/game/game1/shop');
    expect(wrapper.find(NavLink).at(2).prop('to')).toEqual('/game/game1/statistics');
    expect(wrapper.find(NavLink).at(3).prop('to')).toEqual('/game/choose-save');
    expect(wrapper.find(NavLink).at(4).prop('to')).toEqual('/logout');
  })

  it('NavLink change current route when prop gameId was changed', () => {
    wrapper.setProps({ gameId: 'game3' });
    expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/game/game3/fight');
    expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/game/game3/shop');
    expect(wrapper.find(NavLink).at(2).prop('to')).toEqual('/game/game3/statistics');
  })

  it('call startFightHandler fn when NavLink(Fight) was clicked', () => {
    wrapper.find(NavLink).at(0).simulate('click');
    expect(startFightHandlerMock).toHaveBeenCalled();
  })

})