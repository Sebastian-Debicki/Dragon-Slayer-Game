import React from 'react';
import { shallow } from 'enzyme';
import ChooseMonsterLvl from '../../../../containers/Fight/ChooseMonsterLvl/ChooseMonsterLvl';
import { monsters } from '../../../../data/monsters';

let wrapper, chooseLvlMonsterHandlerMock;
beforeEach(() => {
  chooseLvlMonsterHandlerMock = jest.fn();
  wrapper = shallow(<ChooseMonsterLvl chooseLvlMonsterHandler={chooseLvlMonsterHandlerMock} />);
})

describe('<ChooseMonsterLvl/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render correct number of monsters type', () => {
    expect(wrapper.find('.choose-monsterLvl__item').length).toBe(monsters.length)
  })

  it('chooseLvlMonsterHandler fn is called when user choosed monster type', () => {
    wrapper.find('.choose-monsterLvl__item').at(0).simulate('click');
    expect(chooseLvlMonsterHandlerMock).toHaveBeenCalled();
  })

  it('has a correct values of monster img', () => {
    expect(wrapper.find('.choose-monsterLvl__img').at(0).prop('src')).toBe(monsters[0].img)
    expect(wrapper.find('.choose-monsterLvl__img').at(1).prop('src')).toBe(monsters[1].img)
    expect(wrapper.find('.choose-monsterLvl__img').at(2).prop('src')).toBe(monsters[2].img)
  })

  it('has a correct values of monster type', () => {
    expect(wrapper.find('.choose-monsterLvl__type').at(0).text()).toBe(monsters[0].type)
    expect(wrapper.find('.choose-monsterLvl__type').at(1).text()).toBe(monsters[1].type)
    expect(wrapper.find('.choose-monsterLvl__type').at(2).text()).toBe(monsters[2].type)
  })

  it('has a correct values of monster lvls', () => {
    expect(wrapper.find('.choose-monsterLvl__lvls').at(0).text()).toBe('lvls ' + monsters[0].minLvl + ' / ' + monsters[0].maxLvl)
    expect(wrapper.find('.choose-monsterLvl__lvls').at(1).text()).toBe('lvls ' + monsters[1].minLvl + ' / ' + monsters[1].maxLvl)
    expect(wrapper.find('.choose-monsterLvl__lvls').at(2).text()).toBe('lvls ' + monsters[2].minLvl + ' / ' + monsters[2].maxLvl)
  })
})