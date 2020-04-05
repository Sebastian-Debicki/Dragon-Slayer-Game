import React from 'react';
import { shallow } from 'enzyme';
import ChooseHero from '../../../containers/ChooseHero/ChooseHero';
import { heroes } from '../../../data/heroes';
import Hero from '../../../containers/ChooseHero/Hero/Hero';
import { NavLink } from 'react-router-dom';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<ChooseHero />)
})

describe('<ChooseHero/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render correct number of heroes', () => {
    expect(wrapper.find(Hero).length).toBe(heroes.length)
  })

  it('has a one NavLink', () => {
    expect(wrapper.find(NavLink).length).toBe(1);
  })

  it('NavLink has a correct path', () => {
    expect(wrapper.find(NavLink).prop('to')).toEqual('/game/choose-save');
  })
})