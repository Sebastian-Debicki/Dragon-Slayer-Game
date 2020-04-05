import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../../../../containers/ChooseHero/Hero/Hero';
import { data } from '../../../dummyData/data';

let wrapper, chooseHeroHandlerMock;
beforeEach(() => {
  chooseHeroHandlerMock = jest.fn();
  wrapper = shallow(<Hero hero={data.games.game1.hero} chooseHeroHandler={chooseHeroHandlerMock} />);
})

describe('Hero', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('has a correct hero values', () => {
    expect(wrapper.find('p').at(0).text()).toEqual('Health: ' + data.games.game1.hero.statistics.hp)
    expect(wrapper.find('p').at(1).text()).toEqual('Mana: ' + data.games.game1.hero.statistics.mana)
    expect(wrapper.find('p').at(2).text()).toEqual('Attack: ' + data.games.game1.hero.statistics.attack)
    expect(wrapper.find('p').at(3).text()).toEqual('Defence: ' + data.games.game1.hero.statistics.def)
    expect(wrapper.find('p').at(4).text()).toEqual(data.games.game1.hero.skills.skill1.name)
    expect(wrapper.find('p').at(5).text()).toEqual(data.games.game1.hero.skills.skill2.name)
  })

  it('chooseHeroHandler fn is called when user choose hero', () => {
    wrapper.find('.choose-hero__hero').simulate('click');
    expect(chooseHeroHandlerMock).toHaveBeenCalled();
  })
})