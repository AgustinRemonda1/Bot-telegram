import { act, renderHook } from '@testing-library/react-hooks';
import useAppBar from './useAppBar';

const onSignOut = jest.fn();
const onCloseMenu = jest.fn();
const setOpenState = jest.fn((open: boolean) => {});

jest.mock('components/HOC/ModalController', () => ({
  useModalControllerContext: () => ({
    isOpenDrawer: false,
    setOpenState
  })
}));

jest.mock('LogicServices/Auth/Auth/useAuth', () => () => ({
  action: { onSignOut }
}));

describe('useAppBar', () => {
  it('show open in false when useAppBar is initied', async () => {
    const { result } = renderHook(() => useAppBar({ onCloseMenu }));

    expect(result.current.state.open).toBeFalsy();
  });

  it('show setOpenState is called when onOpenDrawer is used', async () => {
    const { result } = renderHook(() => useAppBar({ onCloseMenu }));

    act(() => result.current.actions.onOpenDrawer());

    expect(setOpenState).toBeCalled();
    expect(setOpenState).toBeCalledWith(true);
  });

  it('show onSignOut and onCloseMenu is called when onSignOut is used', async () => {
    const { result } = renderHook(() => useAppBar({ onCloseMenu }));

    act(() => result.current.actions.onSignOut());

    expect(onSignOut).toBeCalled();
    expect(onCloseMenu).toBeCalled();
  });
});
