import { renderHook, act } from '@testing-library/react-hooks';
import usePopUp from './usePopUp';

describe('usePopUp', () => {
  it('show open state in false when its initied', () => {
    const { result } = renderHook(() => usePopUp());

    expect(result.current.state.open).toBeFalsy();
  });

  it('open state changed to true when use onOpen', () => {
    const { result } = renderHook(() => usePopUp());

    expect(result.current.state.open).toBeFalsy();

    act(() => result.current.actions.onOpen());

    expect(result.current.state.open).toBeTruthy();
  });

  it('open state changed to false when use onClose', () => {
    const { result } = renderHook(() => usePopUp());

    act(() => result.current.actions.onOpen());

    expect(result.current.state.open).toBeTruthy();

    act(() => result.current.actions.onClose());

    expect(result.current.state.open).toBeFalsy();
  });
});
