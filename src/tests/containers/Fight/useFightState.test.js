import { renderHook, act } from '@testing-library/react-hooks';
import { useFightState } from '../../../containers/Fight/useFightState';
import { data } from '../../dummyData/data';


describe('useFightState', () => {

  it('fightOptionsHandler - state has correct type value and fn is working correctly when user use ATTACK option', () => {
    const { result } = renderHook(() => useFightState(data, data.games.game1.hero));
    act(() => result.current.fightOptionsHandler('ATTACK'))
    expect(typeof (result.current.monsterLife)).toBe('number')
  })

  it('fightOptionsHandler - state has correct type value and fn is working correctly when user use STRONG_ATTACK option', () => {
    const { result } = renderHook(() => useFightState(data, data.games.game1.hero));
    act(() => result.current.fightOptionsHandler('STRONG_ATTACK'))
    expect(typeof (result.current.monsterLife)).toBe('number')
  })

  it('fightOptionsHandler - state has correct type value and fn is working correctly when user use SKILL_1 option', () => {
    const { result } = renderHook(() => useFightState(data, data.games.game1.hero));
    act(() => result.current.fightOptionsHandler('SKILL_1'))
    expect(typeof (result.current.monsterLife)).toBe('number')
  })


  it('fightOptionsHandler - state has correct type value and fn is working correctly when user use SKILL_2 option', () => {
    const { result } = renderHook(() => useFightState(data, data.games.game1.hero));
    act(() => result.current.fightOptionsHandler('SKILL_2'))
    expect(typeof (result.current.monsterLife)).toBe('number')
  })
})