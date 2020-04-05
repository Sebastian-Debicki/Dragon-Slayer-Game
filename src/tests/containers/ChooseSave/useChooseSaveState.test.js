import { renderHook, act } from '@testing-library/react-hooks';
import { useChooseSaveState } from '../../../containers/ChooseSave/useChooseSaveState';
import { data } from '../../dummyData/data';


describe('useChooseState', () => {
  it('changeEmailInputValue - state has correct value when user want to delete game', () => {
    const { result } = renderHook(() => useChooseSaveState(data));
    act(() => result.current.openModalHandler(data.games.game1))
    expect(result.current.modalOpen).toEqual(true);
    expect(result.current.choosedGame).toEqual(data.games.game1);
  })

  it('closeModalHandler - state has correct value when user close modal', () => {
    const { result } = renderHook(() => useChooseSaveState(data));
    act(() => result.current.openModalHandler(data.games.game1))
    act(() => result.current.closeModalHandler())
    expect(result.current.modalOpen).toEqual(false);
    expect(result.current.choosedGame).toEqual(null);
  })
})