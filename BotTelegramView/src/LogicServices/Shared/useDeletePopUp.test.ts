import { renderHook, act } from '@testing-library/react-hooks';
import useDeletePopUp from './useDeletePopUp';

describe('useDeletePopUp', () => {
  const INITIAL_PROPS = {
    onRefresh: jest.fn(),
    deleteById: jest.fn()
  };

  it('show delete pop up closed when hook its initied', () => {
    const { result } = renderHook(() => useDeletePopUp(INITIAL_PROPS));

    expect(result.current.state.open).toBeFalsy();
  });

  it('show delete pop up opened when use onOpen', () => {
    const { result } = renderHook(() => useDeletePopUp(INITIAL_PROPS));

    act(() => result.current.actions.onOpen(1));

    expect(result.current.state.open).toBeTruthy();
  });

  it('show delete pop up closed when use onClose', () => {
    const { result } = renderHook(() => useDeletePopUp(INITIAL_PROPS));

    act(() => result.current.actions.onOpen(1));

    expect(result.current.state.open).toBeTruthy();

    act(() => result.current.actions.onClose());

    expect(result.current.state.open).toBeFalsy();
  });

  it('delete item when use onDelete', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useDeletePopUp(INITIAL_PROPS)
    );

    act(() => result.current.actions.onOpen(1));

    expect(result.current.state.open).toBeTruthy();

    act(() => result.current.actions.onDelete());

    await waitForNextUpdate();

    expect(INITIAL_PROPS.deleteById).toBeCalled();
    expect(INITIAL_PROPS.onRefresh).toBeCalled();
    expect(result.current.state.open).toBeFalsy();
  });
});
