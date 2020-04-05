import { renderHook, act } from '@testing-library/react-hooks';
import { useShopState } from '../../../containers/Shop/useShopState';
import { data } from '../../dummyData/data';
const gameId = 'game2'
const saveChangedGameStatistics = jest.fn()

describe('useShopState', () => {

  it('buyEquipmentHandler - state has correct value when user bought equipment', () => {
    const { result } = renderHook(() => useShopState(data.games.game2.hero, data, gameId, saveChangedGameStatistics));
    act(() => result.current.buyEquipmentHandler(data.games.game2.shop.equipment[0]));
    expect(result.current.gold).toEqual(400)
  })

  it('buyEquipmentHandler - state has correct value when user want to buy equipment but dont have enaught money', () => {
    const { result } = renderHook(() => useShopState(data.games.game2.hero, data, gameId, saveChangedGameStatistics));
    act(() => result.current.buyEquipmentHandler(data.games.game2.shop.equipment[0]));
    act(() => result.current.buyEquipmentHandler(data.games.game2.shop.equipment[1]));
    act(() => result.current.buyEquipmentHandler(data.games.game2.shop.equipment[1]));
    expect(result.current.gold).toEqual(100)
    expect(result.current.modalText).toEqual("You don't have enough gold!")
    expect(result.current.modalOpen).toEqual(true)
  })

  it('buyItemHandler - state has correct value when user bought item', () => {
    const { result } = renderHook(() => useShopState(data.games.game2.hero, data, gameId, saveChangedGameStatistics));
    act(() => result.current.buyItemHandler(data.games.game2.shop.items[0]));
    expect(result.current.gold).toEqual(0)
  })

  it('buyItemHandler - state has correct value when user want to buy item but dont have enaught money', () => {
    const { result } = renderHook(() => useShopState(data.games.game2.hero, data, gameId, saveChangedGameStatistics));
    act(() => result.current.buyItemHandler(data.games.game2.shop.items[0]));
    act(() => result.current.buyItemHandler(data.games.game2.shop.items[0]));
    expect(result.current.gold).toEqual(0)
    expect(result.current.modalText).toEqual("You don't have enough gold!")
    expect(result.current.modalOpen).toEqual(true)
  })


  it('closeModalHandler - state has correct value when user closed modal', () => {
    const { result } = renderHook(() => useShopState(data.games.game2.hero, data, gameId, saveChangedGameStatistics));
    act(() => result.current.closeModalHandler());
    expect(result.current.modalOpen).toEqual(false)
  })
})